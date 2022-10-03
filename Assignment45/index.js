function car(manufac, mName, ...spec) {
  let carSpec = {};
  carSpec['manufacturer'] = manufac;
  carSpec['modelName'] = mName;

  if (typeof spec[0] === 'object') {
    for (let i = 0; i < Object.entries(spec[0]).length; i++) {
      carSpec[Object.entries(spec[0])[i][0]] = Object.entries(spec[0])[i][1];
    }
  }
  return carSpec;
}

var car1 = car('Toyota', 'camry');

var car2 = car('Honda', 'Civic', {
  color: 'Red'
});

var car3 = car('KIA', 'Sportage', {
  color: 'White'
});

console.log('Car1 : ', car1);
console.log('Car2 : ', car2);
console.log('Car3 : ', car3);

