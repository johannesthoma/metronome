// var timer = window.setInterval(function() { beep(); }, 1000);

var started = false;
var visual = document.getElementById("visual");
var beeper = document.getElementById("beep");

function beep() {
	visual.innerHTML = (visual.innerHTML == "X") ? "O" : "X";
/*	alert(beeper.seekable);
	beeper.pause();
	beeper.currentTime = 0.0;
	beeper.play(); */
}

function tick() {
//	alert("tick");
	var next_tick_bpm = parseInt(document.getElementById("bpm").value);
	if (started && next_tick_bpm > 0) {
//		if (next_tick_bpm > 0) {
	 	var next_tick_ms = 60000 / next_tick_bpm;
		beep();
//	alert("setting timeout "+next_tick_ms);
		setTimeout(tick, next_tick_ms);
/*		} else {
			toggle();
		} */
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
