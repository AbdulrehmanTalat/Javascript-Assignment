let userNames = ['Admin', 'Ali', 'Aslam', 'Fatima', 'Arsal', 'Rija'];
if (userNames.length == 0) {
    console.log('No users found, We need to find some users!')
} else {
    userNames.forEach(element => {
        if (element == 'Admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log('Hello ' + element + ',thank you for logging in again.');
        }
    });
}   
userNames = [];
if (userNames.length == 0) {
    console.log('No users found, We need to find some users!')
} else {
    userNames.forEach(element => {
        if (element == 'Admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log('Hello ' + element + ',thank you for logging in again.');
        }
    });
}  