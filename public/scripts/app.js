/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

 var allAlbums = [];

$(document).ready(function() {
  console.log('app.js loaded!');

  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: getAlbumsSuccess,
    error: getAlbumsError
  });

  $.ajax({
    method: 'GET',
    url: '/api/albums',
    data: $(this).serialize(),
    success: newFormSuccess,
    error: newFormError
  });

  $.ajax({
    method: 'POST',
    url: '/api/albums',
    data: $(this).serialize(),
    success: newAlbumSuccess,
    error: newAlbumError
  });

// End of document ready
});

// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);
  var albumHtml = $('#album-template').html();
  var albumsTemplate = Handlebars.compile(albumHtml);
  var html = albumsTemplate(album);
  $('#albums').prepend(html);
}

  function getAlbumsSuccess(json){
    json.forEach(function(album){
    renderAlbum(album);
    });
  }

  function getAlbumsError(json){
    console.log('uh ohhhhhhh');
    $('#album-template').append('Failed to load albums, is the server working?');
  }

  function newFormSuccess(json){
    $('#album-form').val('');
  }

  function newFormError(json){
    console.log('uh ohhhh-Form still exists!!');
  }

  function newAlbumSuccess(json){
    $('#album-form').val('');
    allAlbums.push(json);
    renderAlbum();
  }

  function newAlbumError(json){
    console.log('awww-mann something went wrong!');
  }
