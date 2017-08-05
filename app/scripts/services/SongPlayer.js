 (function() {
     function SongPlayer() {
         var SongPlayer = {};
         SongPlayer.currentSong = null;
         /**
          * @desc Buzz object audio file
          * @type {Object}
          */
         var currentBuzzObject = null;
         /**
          * @function setSong
          * @desc Stops currently playing song and loads new audio file as currentBuzzObject
          * @param {Object} song
          */
         var setSong = function(song) {
             if (currentBuzzObject) {
                 currentBuzzObject.stop();
                 SongPlayer.currentSong.playing = null;
             }
             currentBuzzObject = new buzz.sound(song.audioUrl, {
                 formats: ['mp3'],
                 preload: true
             });
             SongPlayer.currentSong = song;
         };
         var playSong = function(song) {
             song = SongPlayer.currentSong;
             currentBuzzObject.play();
             song.playing = true;
         };
         /*@method play plays song
         @ desc if the current song is not the selected song, set song to the selected song, play the song, register it as playing. 
         if that isnt the case and the song is paused, play it after*/
         SongPlayer.play = function(song) {
             song = song || SongPlayer.currentSong;
             if (SongPlayer.currentSong !== song) {
                 setSong(song);
                 playSong(song);
             } else if (SongPlayer.currentSong === song) {
                 if (currentBuzzObject) {   
                     if (currentBuzzObject.isPaused()) {
                         currentBuzzObject.play();
                     }
                 }    
             }
         };
         SongPlayer.pause = function(song) {
             song = song || SongPlayer.currentSong;

             currentBuzzObject.pause();
             song.playing = false;
         };
         return SongPlayer;
     }
     angular.module('blocJams').factory('SongPlayer', SongPlayer);
 })();