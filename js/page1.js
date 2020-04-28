function ReadMore(){
    var rdDots=document.getElementById("dots");
    var moreText=document.getElementById("more");
    var readMore=document.getElementById("read");

    if(rdDots.style.display === "none"){
        rdDots.style.display="inline";
        moreText.style.display="none";
        readMore.innerHTML="Read more";
    }else{
        rdDots.style.display="none";
        moreText.style.display="inline";
        readMore.innerHTML="Read less";
    }
}