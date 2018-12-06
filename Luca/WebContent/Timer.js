

const year = (new Date().getFullYear());
const fourthOfJuly = new Date(year, 11, 7).getTime();


let timer = setInterval(function(a) {

	// get today's date
	const today = new Date().getTime();

	// get the difference
	const diff = fourthOfJuly - today;

	// math
	let days = Math.floor(diff / (1000 * 60 * 60 * 24));
	let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((diff % (1000 * 60)) / 1000);
		if (diff>=0){
	// display
        document.getElementById("timer").innerHTML =
            "<div class=\"days\"> \
            <div class=\"numbers\">" + days + "</div>days</div> \
		<div class=\"hours\"> \
		<div class=\"numbers\">" + hours + "</div>hours</div> \
		<div class=\"minutes\"> \
		<div class=\"numbers\">" + minutes + "</div>minutes</div> \
		<div class=\"seconds\"> \
		<div class=\"numbers\">" + seconds + "</div>seconds</div> \
		</div>";}
		else {
			document.getElementById("timer").innerHTML =
				"<div class='video'>" +
				"<iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/V10EBvSti2A\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>" +
                "</div>"
			document.getElementById("buoncomp").innerHTML =
				"<div class='container'>" +
				"<p>Buon <br> Compleanno <br> Luca!</p>" +
				"</div>"
			clearInterval(timer);
		}

}, 1000);


