let current = Math.ceil(Math.random() * 5);
let locked_index = 0
point = 0 
let flag=true

function startgame() {

        display = document.querySelector('#time');
        startTimer(15, display);
        // setInterval(imageshow(), 20000)
        imageshow()

        all_circles = document.getElementsByClassName("blackcircle")

        Array.from(all_circles).forEach(element => {
            element.addEventListener("click" , (e) => {
                if(e.target.style.visibility=="visible"){
                    point +=5;
                    document.getElementById("points").innerHTML = point;
                    e.target.src="guacamole.png"
                    locked_index = e.target.id

                    setTimeout( () => { 
                        e.target.style.visibility=="hidden";
                        e.target.src ="guac.png";
                        locked_index = 0
                    }, 3000)
                }
            })
        });
        
}

function imageshow(){
    // if(locked_index != 0){
        if(flag==true){
    setTimeout( () => {

        let number;
        
        do{
            number = Math.ceil(Math.random() * 5);
        }while( number == current || locked_index == number )
            if(current!=locked_index)
            document.getElementById(current).style.visibility = "hidden";
            current = number;
            document.getElementById(current).style.visibility = "visible";
            // if(document.getElementById(current).style.visibility = "visible"){
            //     flag=true
            // }
            // if(document.getElementById(current).onclick === true)
            
            imageshow()


    }, 600)}
// }
// else{
//     setTimeout( () => {
//         document.getElementById(temp).src="guac.png"
//         document.getElementById.style.visibility = "hidden"
//     }, 2000)
// }
}