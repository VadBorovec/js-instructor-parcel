//  Методи обєкту і THIS при зверненні до властивочтей в методах

// http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg

// - changeName
// - addTrack
// - updateRating
// - getTrackCount

// const playlist = {
//     name: 'My super playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     changeName(newName) {
//         console.log('this inside changeName: ', this);
//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     }
// };

// console.log(playlist.getTrackCount());

// playlist.changeName('New name');
// console.log(playlist);

// playlist.addTrack('New track');
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// console.log(playlist);