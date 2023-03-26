// nav logic
document.querySelector(".nav-btn button").onclick = function () {

    if(document.querySelector(".nav ul").classList.contains("show")){

        document.querySelector(".nav ul").classList.remove("show");

    }else{

        document.querySelector(".nav ul").classList.add("show");

    }

}
// video logic
document.querySelector(".video i").onclick = () => {

    document.querySelector(".video i").remove("i");

    document.querySelector("video").play();

    document.querySelector("video").setAttribute("controls","");

}
//scroller 
window.onscroll = _ => {

    if(window.scrollY >= 600){

        document.querySelector(".scroller").classList.add("scroller-show");

    }else {

        document.querySelector(".scroller").classList.remove("scroller-show");

    }

};

document.querySelector(".scroller").onclick = _ => {

    scrollTo({

        top:0 ,

        behavior:"smooth"

    });

};
