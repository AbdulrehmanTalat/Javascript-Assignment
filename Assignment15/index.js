let friends = ['ALi','Hassan','Zubair'];
let len = friends.length;
console.log('I just found out' + friends[len] + 'could not make it');
friends[len -1] = 'Aaqib';
friends.forEach((element) => {
    console.log('Hey friend '+element+' i would like to invite you to dinner');
});