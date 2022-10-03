let userNames = ['Admin','Ali','Aslam','Fatima','Arsal','Rija'];
userNames.forEach(element => {
    if(element == 'Admin'){
        console.log('Hello admin, would you like to see a status report?');
    }else{
        console.log('Hello '+element +',thank you for logging in again.');
    }
});