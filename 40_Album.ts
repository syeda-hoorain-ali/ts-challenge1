// Define a TypeScript interface for an album
type Albums = {
    artist: string;
    title: string;
    tracks?: number; 
}

// Function to create an album object
function make_album1(artist: string, title: string, tracks?: number): Albums {
    let album: Albums = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Creating objects representing different albums
let album4: Albums = make_album1("Artist1", "Album1", 43);
let album5: Albums = make_album1("Artist2", "Album2");
let album6: Albums = make_album1("Artist3", "Album3", 12);

console.log(album4);
console.log(album5);
console.log(album6);