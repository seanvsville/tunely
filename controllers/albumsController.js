/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/albums
function index(req, res) {
  db.Album.find({}, function (err, allAlbums) {
      if (err) { return console.log('does not compute' + err); }
      res.json(allAlbums);
  });
}

function create(req, res) {
    var newAlbum = new db.Album({
      artistName: req.body.artistName,
      name: req.body.name,
      releaseDate: req.body.releaseDate,
      genre: req.body.genre,
    });

  // save newAlbum to database
  newAlbum.save(function(err, album) {
    if (err) {return console.log('save error: ' + err);}
    console.log('saved ', album.name);

  // send back the album
  res.json(album);
  });
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
