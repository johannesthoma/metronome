// var timer = window.setInterval(function() { beep(); }, 1000);

var started = false;
var visual = document.getElementById("visual");
var last_played = 0;

function beep() {
	visual.innerHTML = (visual.innerHTML == "X") ? "K" : "X";
	var beeper = new Audio("beep.wav");
	beeper.play();
}

function toggle() {
	if (started) {
		document.getElementById("toggle").innerHTML = "Start";
		started = false;
		last_played = 0;
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
			while (1) {
			 	var next_tick_ms = 60000 / next_tick_bpm;
				var now = (new Date()).getTime();
//			alert("Now is "+now);
				if (last_played == 0 || (now >= last_played+next_tick_ms)) {
					beep();
					last_played = now;
				}
			}
//			setTimeout(tick, 1);
		} else {
			toggle();
		}
	}
}

