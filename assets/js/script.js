
    window.addEventListener("load", initEvents);
    var trans=0;

function initEvents() {
   charr = document.querySelector("body");
   charr.addEventListener("keydown", checkKey);
   image=document.querySelector("img");
}

function checkKey() {
    var key = event.keyCode;
    if(key==39){
        // document.querySelector("#game").classList.toggle('translate');
        trans +=40;
       
        image.style.transform ="translateX( "+ trans +"px)";
        
    }
   else if(key==37){
        // document.querySelector("#game").classList.toggle('translate');
        trans -=40;
        
        // documet.querySelector("#game").className="rotate";
        image.style.transform ="translateX( "+ trans +"px)";
       

        
    }
    else if(key==38){
       
       
       document.querySelector("img").src="assets/images/hulk-bigpunch.gif";
       
    
            
           

        
    }
    else if(key==40){
       
       
        document.querySelector("img").src="assets/images/2.gif";
             
            
 
         
     }
     else if(key==32){
        document.querySelector("img").src="assets/images/hulk09.gif";

       }
       
    console.log(key);
    
}