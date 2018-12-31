const year = (new Date().getFullYear());
const fourthOfJuly = new Date(2019, 0, 1).getTime();


let timer = setInterval(function (a) {

    // get today's date
    const today = new Date().getTime();

    // get the difference
    const diff = fourthOfJuly - today;

    // math
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    if (diff >= 0) {
        // display
        document.getElementById("timer").innerHTML =
            "<div class=\"days\"> \
            <div class=\"numbers\">" + days + "</div>days</div> \
		<div class=\"hours\"> \
		<div class=\"numbers0\">" + hours + "</div>hours</div> \
		<div class=\"minutes\"> \
		<div class=\"numbers\">" + minutes + "</div>minutes</div> \
		<div class=\"seconds\"> \
		<div class=\"numbers0\">" + seconds + "</div>seconds</div> \
		</div>"
        document.getElementById("frase").innerHTML =
            "<div class='frase'>" +
            "<p>Tra</p>" +
            "</div>"
        document.getElementById("frase1").innerHTML =
            "<div class='frase1'>" +
            "<p>Inizierà il nuovo Anno!</p>" +
            "</div>";
    } else {
        // document.getElementById("timer").innerHTML =
        //     "<div class='video'>" +
        //     "<iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/V10EBvSti2A\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"  allowfullscreen></iframe>" +
        //     "</div>"
        document.getElementById("buoncomp").innerHTML =
            "<div class='container'>" +
            "<p>Buon <br> Anno <br> 2019 !</p>" +
            "</div>"
        document.getElementById("frase").style.display= "none";
        document.getElementById("frase1").style.display = "none";

        clearInterval(timer);
    }

}, 1000);


