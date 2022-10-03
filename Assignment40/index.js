function make_album(artistName,albumName,tracks=''){
  if(tracks != ''){
  var obj = {
    artistName:  artistName,
    albumName: albumName,
    tracks:tracks
  };
  console.log(obj);
}else{
  var obj = {
    artistName:  artistName,
    albumName: albumName
  };
  console.log(obj);
}
}
make_album('Inna','No Help');
make_album('Enrique Iglesias','Ring my Bells');
make_album('Sia','Cheap Thrills',3);

