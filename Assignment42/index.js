let magicians = ['arsalan', 'ali', 'samra', 'aftab'];
function show_magicians() {
  magicians.forEach(element => {
    console.log(element);
  });
}
show_magicians();
function make_great() {
  magicians.forEach(element => {
    var name = element;
    var newName = 'Great ' + name;
    let index = magicians.indexOf(name);
    magicians.splice(index, 1, newName);
  });
}
make_great();
show_magicians();
