let friends = ['ALi','Hassan','Zubair'];
let len = friends.length;
friends.forEach((element,index) => {
    console.log('Hey friend '+element+' i would like to invite you to dinner');
    if(index == len-1)
    console.log('Hey i just found we got a bigger table at Rosevelt Hotel');
});
friends.concat('saad');
friends.splice(1, 0, 'Ayesha');
friends.splice(len+1,0,'Zunaira');
friends.forEach((element) => {
    console.log('Hey friend '+element+' i would like to invite you to dinner');
});