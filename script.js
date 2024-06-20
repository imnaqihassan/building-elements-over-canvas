var tl=gsap.timeline()

var main=document.querySelector("#main")
var heading=document.querySelector("#heading")

var imageURLs = [
    "https://plus.unsplash.com/premium_photo-1682130336901-10452a5dd5f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW9zfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1685086785223-485f800ce410?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwYWdlbmN5fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYiUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D" ,
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGVzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1680700015824-b2b7c7ca41ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYnNpdGVzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWl1eHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWl1eHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1552238979-402eb7a9258c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dWl1eHxlbnwwfHwwfHx8MA%3D%3D"

];

function getRandomImage() {
    var index = Math.floor(Math.random() * imageURLs.length);
    return imageURLs[index];
}

function throttle(callback, limit) {
    var wait = false;
    return function () {
        if (!wait) {
            callback.apply(this, arguments);
            wait = true;
            setTimeout(function () {
                wait = false;
            }, limit);
        }
    };
}
    
    main.addEventListener("mousemove",
    throttle(
        (dets)=>{
            var div=document.createElement("div")
            div.classList.add("bck")
             div.style.width="18vw"
             div.style.height="23vw"
             
             div.style.position="absolute"
             div.style.backgroundImage = `url('${getRandomImage()}')`;
             div.style.left="0"
             div.style.top="30%"
             
             div.style.zIndex="-1"
    
            var data=heading.getBoundingClientRect()
            var left=dets.clientX-data.left
            var top=dets.clientY-data.top
    
            div.style.transform=`translate(${left}px,${top}px)`
            main.appendChild(div)
    
            gsap.from(div,{
                y:200,
                opacity:0,
                duration:1,
            
    
                onComplete: function () {
                    gsap.to(div,{
                       y:200,
                       duration:1,
                       opacity:0 
                    })
                    
                     // Optionally remove the div after animation if it's no longer needed
                }
    
    
    
            })
            
    
            
    
         },100)
    
    
    
    );
    
    

    
    
    
    
    
    
    




