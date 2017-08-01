 (function() {
     function playSong() {
        currentBuzzObject.play();
        song.playing = true;
     };
     function SongPlayer() {
         var SongPlayer = {};
         var currentSong = null;
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
		        currentSong.playing = null;
		    }
		    currentBuzzObject = new buzz.sound(song.audioUrl, {
		        formats: ['mp3'],
		        preload: true
		    });
		    currentSong = song;
		 };
/*@method play plays song
@ desc if the current song is not the selected song, set song to the selected song, play the song, register it as playing. 
if that isnt the case and the song is paused, play it after*/
         SongPlayer.play = function(song) {
             if (currentSong !== song) {
         		 setSong(song);
                 playSong();
             } else if (currentSong === song) {
                 if (currentBuzzObject.isPaused()) {
                     currentBuzzObject.play();
                 }
             }
         };
          SongPlayer.pause = function(song) {
		     currentBuzzObject.pause();
		     song.playing = false;
		  };

         return SongPlayer;
     }

     angular
       .module('blocJams')
       .factory('SongPlayer', SongPlayer);
 })();

