// LAST DECREE SECRET BOOT SYSTEM

let progress = 0;

let loading = setInterval(()=>{

    progress += 5;

    document.getElementById("progress").style.width = progress + "%";


    if(progress >= 100){

        clearInterval(loading);

        document.getElementById("loading-text").innerHTML =
        "ACCESS GRANTED ✓";

        setTimeout(()=>{

            document.getElementById("loader").style.display="none";

        },1000);

    }


},150);



function login(){

let password = document.getElementById("password").value;

let result = document.getElementById("result");


if(password === "LASTDECREE"){

result.style.color="#00ff88";
result.innerHTML="ACCESS ACCEPTED ✓<br>WELCOME COMMANDER";


}else{

result.style.color="red";
result.innerHTML="ACCESS DENIED ✖";

}

}


console.log(
"%c⚜ LAST DECREE ONLINE ⚜",
"color:#00ff88;font-size:20px;"
);
