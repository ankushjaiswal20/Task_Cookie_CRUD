
function setCookie(){
    let p = document.getElementById("key").value;
    let q = document.getElementById("value").value;
    document.cookie = p + "=" + q;
    let r = document.cookie;
    console.log(r);
    alert("Cookie added!");
    listCookie();
}

function getCookie(){ 
    let name = document.getElementById("getkey").value;
      var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      if (match) {
        console.log(match[2]);
        document.getElementById("getdis").value = match[2]
      }
      else{
           console.log('--something went wrong---');
           alert("No match found!");
      }
   }
function deleteCookie(){
    let del = document.getElementById("delkey").value;
    let key = del + '=';
    console.log(key)
    console.log(del)
    document.cookie = del + "=;max-age=0";
    alert("Cookie deleted!");
    listCookie();
}


function listCookie(){
    let arr = document.cookie.split(';');
    let len = arr.length;
    console.log(arr)
    for(let i=0;i<len;i++){
        document.write(arr[i]+"<br>")
    }
}
