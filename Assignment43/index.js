let magicians = ['arsalan', 'ali', 'samra', 'aftab'];
let copyMagicians = ['arsalan', 'ali', 'samra', 'aftab'];
function show_magicians() {
  magicians.forEach(element => {
    console.log(element);
  });
}
function make_great() {
  copyMagicians.forEach(element => {
    var name = element;
    var newName = 'Great ' + name;
    let index = copyMagicians.indexOf(name);
    copyMagicians.splice(index, 1, newName);
  });
}

function show_copyMagicians() {
  copyMagicians.forEach(element => {
    console.log(element);
  });
}
show_magicians();
make_great();
show_copyMagicians();


