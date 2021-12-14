function init(){
    var images = document.querySelectorAll(".subImg img")
    for (var i = 0; i < images.length ; i++)
        images[i].onclick = function(){
            var path = this.src
            var img = document.querySelector(".mainImg img")
            img.setAttribute("src", path)
        }

    var clock = document.getElementById("clock")
    setInterval(function() {
        var d = new Date()  
        clock.innerText = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    }, 1000)

    var ball = document.getElementById("ball")
    var area = document.getElementsByClassName("header1-content")[0]

    var timer = null
    var left = 0, t=0, incX=5, incY=5
    timer = setInterval(function() {
        if (t < 0 || t + ball.offsetHeight >= area.offsetHeight)
            incY = -incY;
        if (left < 0 || left + ball.offsetWidth >= area.offsetWidth)
            incX = -incX;

        left += incX
        t += incY
        ball.style.top = t + "px"
        ball.style.left = left + "px"
    }, 15)
}