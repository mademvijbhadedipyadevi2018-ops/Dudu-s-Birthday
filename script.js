function checkPassword(){


let password=document.getElementById("password").value;


if(password==="1223"){


document.getElementById("loginPage").style.display="none";

document.getElementById("mainPage").style.display="block";


}

else{


document.getElementById("wrongPassword").innerHTML="❌ Wrong Password";


}


}





window.onload=function(){



// LETTER

document.getElementById("letterGift").onclick=function(){

document.getElementById("letterPopup").style.display="flex";

};



document.getElementById("closeLetter").onclick=function(){

document.getElementById("letterPopup").style.display="none";

};





// CAKE

document.getElementById("cakeGift").onclick=function(){

document.getElementById("cakePopup").style.display="flex";

};



document.getElementById("closeCake").onclick=function(){

document.getElementById("cakePopup").style.display="none";

};





document.getElementById("blowCandles").onclick=function(){


document.querySelector(".candles").style.display="none";


this.style.display="none";


document.getElementById("birthdayMessage").innerHTML=

"🎉 Happy Birthday Dudulu ❤️🎂";


};






// CHOCOLATE


document.getElementById("chocoGift").onclick=function(){

document.getElementById("chocoPopup").style.display="flex";

};



document.getElementById("closeChoco").onclick=function(){

document.getElementById("chocoPopup").style.display="none";

};



};