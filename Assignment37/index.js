function make_shirt(size,text){
  if(size == 'Large' || size == 'Medium'){
    text = 'I love JavaScript';
  }
  console.log('the size of t shirt is '+size+ ' and the message printed on it is '+text);
}
make_shirt('Large','I love Pakistan');
make_shirt('Medium','I love Pakistan');
make_shirt('Shirt','I love Pakistan');
