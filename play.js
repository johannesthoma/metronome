// var timer = window.setInterval(function() { beep(); }, 1000);

var started = false;

function beep() {
	document.getElementById("beep").play();
}

function tick() {
	var next_tick_bpm = parseInt(document.getElementById("bpm").value);
	if (started && next_tick_bpm > 0) {
	 	var next_tick_ms = 60000 / next_tick_bpm;
		beep();
		setTimeout(tick, next_tick_ms);
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
