let rect = document.querySelector(".center");

rect.addEventListener("mousemove", function(details){
    let rectLocation = rect.getBoundingClientRect();
    let insideRectVal = details.clientX - rectLocation.left;

    if (insideRectVal < rectLocation.width/2){
        var redColor = gsap.util.mapRange(
            0,rectLocation.width/2,255,0,insideRectVal
        );
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: power4,
        });
    } else{
        var blueColor = gsap.util.mapRange(
            rectLocation.width/2,rectLocation.width,0,255,insideRectVal
        );
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: power4,
        });
    }
})