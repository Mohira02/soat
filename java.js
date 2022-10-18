function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClock").innerText = time;
    document.getElementById("MyClock").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();
// let clock = document.querySelector(".clock");
// let romka = document.querySelector(".romka");
// romka.addEventListener('click', () =>{
//   clock.classList.remove('clock_active');
// })

let content = document.getElementsByTagName('body')[0];
let darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})




// document.addEventListener("mousemove", animateCircle);
// function animateCircle() {
//     let circle = document.createElement("div");
//     circle.setAttribute("class", " circle ");
//     document.body.appendChild(circle);
//     circle.style.left = event.clientX + "px";
//     circle.style.top = event.clientY + "px";


//     let randomColor, randomSize, randomShapes;


//     randomColor =
//         "rgb(" +
//         Math.random() * 255 +
//         "," +
//         Math.random() * 255 +
//         "," +
//         Math.random() * 255 +
//         ")";
//      randomSize = Math.random() * 100;
//       randomShapes = Math.random()  * 180;



//     circle.style.transition = "all 1.5s linear 0s";
//     circle.style.left = circle.offsetLeft - 40 + "px";
//     circle.style.top = circle.offsetTop - 40 + "px";
//     circle.style.borderWidth = "40px";
//     circle.style.borderColor = randomColor;
//     circle.style.width = randomSize;
//     circle.style.height = randomSize;
//     circle.style.borderRadius = randomShapes + "px";

//     circle.style.opacity = 0;
//     // }
// }