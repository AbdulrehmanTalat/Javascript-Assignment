let current_users = ['Admin', 'Ali', 'Aslam', 'Fatima', 'Arsal', 'Rija'];
let new_users = ['Jhon','Rija','Mehwish','Anum','Annie'];
current_users = current_users.map(x => x.toLowerCase());
new_users = new_users.map(x => x.toLowerCase());

new_users.forEach(element => {
    if(current_users.indexOf(element) != -1){
        console.log(element+' will need to enter a new username');
    }else{
        console.log('username '+element+' is available');
    }
});
