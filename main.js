const track = document.getElementById("image-track");
window.onmousedown = e =>{
    track.dataset.mouseDownAt = e.clientX;
    track.dataset.prevPercentage = track.dataset.percentage;
}
window.onmousemove = e =>{
    if (track.dataset.mouseDownAt === "0") return;
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, 
    maxDelta = window.innerwidth/2;
    const percentage = (mouseDelta/maxDelta) * -100;
    track.dataset.percentage = nextPercentage;
    track.style.transform = 'translate(${percentage}%, -50%)'
    track.animate({transform: 'translate(${nextPercentage}%, -50%)' }, {duration:1200, fill:"forwards"});
    image.style.objectPosition = '${nextPercentage + 100}% 50%';
    image.animate({objectPosition: '${100 + nextPercentage} % center'}, {duration: 1200, fill: "forwards"});
}
window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}