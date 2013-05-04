// var timer = window.setInterval(function() { beep(); }, 1000);

var started = false;
var visual = document.getElementById("visual");
var beeper = document.getElementById("beep");

function beep() {
	visual.innerHTML = (visual.innerHTML == "X") ? "O" : "X";
	beeper.pause();
	beeper.currentTime = 0;
	beeper.play();
}

function toggle() {
	if (started) {
		document.getElementById("toggle").innerHTML = "Start";
		started = false;
	} else {
		document.getElementById("toggle").innerHTML = "Stop";
		started = true;
		tick();
	}
}

function tick() {
	var next_tick_bpm = parseInt(document.getElementById("bpm").value);
	if (started) {
		if (next_tick_bpm > 0) {
		 	var next_tick_ms = 60000 / next_tick_bpm;
			beep();
			setTimeout(tick, next_tick_ms);
		} else {
			toggle();
		}
	}
}

