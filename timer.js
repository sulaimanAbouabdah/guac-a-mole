function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        
        if (--timer < 10) {
            document.getElementById('time').style.color="red"
            $(function() {
                var p = $("#time");
                for(var i=0; i<3; i++) {
                  p.animate({opacity: 0.2}, 1000, 'linear')
                   .animate({opacity: 1}, 1000, 'linear');
                }
              });
            if(timer <0){
                timer = 0
                document.cookie = "score=" + point + ";"
                localStorage.setItem("points",point);
                var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)point\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                window.location.replace("./gameover.html");
                document.getElementById("finalscore").innerHTML = document.cookie

            }
                
            
        }
            
    }, 1000);
 
}

