
var popup1 = "popup1";
function createCookie() {
    var date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    var cookie = document.cookie = "popup1=sub; path=/; expires=" + date.toUTCString;
}

function getCookie() {
    var arr = document.cookie.split("; ");

    for(var i = 0; i < arr.length; i++) {
        if(arr[i].indexOf(popup1)) {
            return true;
        }
    }
}