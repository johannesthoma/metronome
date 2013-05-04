// var timer = window.setInterval(function() { beep(); }, 1000);

var started = false;
var debug = document.getElementById("debug");

function beep() {
debug.innerHTML = "A";
	document.getElementById("beep").play();
debug.innerHTML = "B";
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
