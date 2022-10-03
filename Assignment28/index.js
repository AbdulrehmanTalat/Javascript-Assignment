let age = 1;
if (age < 2) {
    console.log('Person is a baby');
}
age = 2;
if (age < 2) {
    console.log('Person is a baby');
} else if (age == 2 && age < 4) {
    console.log('Person is a toodler');
}
age = 4;
if (age < 2) {
    console.log('Person is a baby');
} else if (age == 2 && age < 4) {
    console.log('Person is a toodler');
}
else if(age == 4 && age < 13){
    console.log('Person is a kid');
}
age = 13;
if (age < 2) {
    console.log('Person is a baby');
} else if (age == 2 && age < 4) {
    console.log('Person is a toodler');
}
else if(age == 4 && age < 13){
    console.log('Person is a kid');
}
else if(age == 13 && age < 20){
    console.log('Person is a teenager');
}
age = 20;
if (age < 2) {
    console.log('Person is a baby');
} else if (age == 2 && age < 4) {
    console.log('Person is a toodler');
}
else if(age == 4 && age < 13){
    console.log('Person is a kid');
}
else if(age == 13 && age < 20){
    console.log('Person is a teenager');
}
else if(age == 20 && age < 65){
    console.log('Person is a Adult');
}
age = 65;
if (age < 2) {
    console.log('Person is a baby');
} else if (age == 2 && age < 4) {
    console.log('Person is a toodler');
}
else if(age == 4 && age < 13){
    console.log('Person is a kid');
}
else if(age == 13 && age < 20){
    console.log('Person is a teenager');
}
else if(age == 20 && age < 65){
    console.log('Person is a Adult');
}
age = 20;
if (age < 2) {
    console.log('Person is a baby');
} else if (age == 2 && age < 4) {
    console.log('Person is a toodler');
}
else if(age == 4 && age < 13){
    console.log('Person is a kid');
}
else if(age == 13 && age < 20){
    console.log('Person is a teenager');
}
else if(age == 65 || age > 65){
    console.log('Person is a Older');
}