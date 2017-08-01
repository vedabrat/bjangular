 (function() {
     function Fixtures() {
         var Fixtures = {};

         var albumPicasso = {
             title: 'The Colors',
             artist: 'Pablo Picasso',
             label: 'Cubism',
             year: '1881',
             albumArtUrl: '/assets/images/album_covers/01.png',
             songs: [
         { title: 'Blue', duration: '399', audioUrl: 'assets/music/blue' , durationtime: '6:65'},
         { title: 'Green', duration: '257', audioUrl: 'assets/music/green', durationtime: '4:28' },
         { title: 'Red', duration:  '204', audioUrl: 'assets/music/red' , durationtime: '3:40' },
         { title: 'Pink', duration: '226', audioUrl: 'assets/music/pink', durationtime: '3:76'  },
         { title: 'Magenta', duration: '190', audioUrl: 'assets/music/magenta', durationtime: '3:16' }               ]
         };
     
         var albumMarconi = {
             title: 'The Telephone',
             artist: 'Guglielmo Marconi',
             label: 'EM',
             year: '1909',
             albumArtUrl: '/assets/images/album_covers/20.png',
             songs: [
                 { title: 'Hello, Operator?', duration: '1:01' },
                 { title: 'Ring, ring, ring', duration: '5:01' },
                 { title: 'Fits in your pocket', duration: '3:21' },
                 { title: 'Can you hear me now?', duration: '3:14' },
                 { title: 'Wrong phone number', duration: '2:15' }
             ]
         };

         Fixtures.getAlbum = function() {
            return albumPicasso;
         };


         return Fixtures;
     }
 
     angular
         .module('blocJams')
         .factory('Fixtures', Fixtures);
 })();