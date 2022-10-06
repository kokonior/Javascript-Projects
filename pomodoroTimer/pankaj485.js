let workTimeStarted = new Audio("./audio/work time started.m4a");
let workTimeEnded = new Audio("./audio/work time ended .m4a");
let restTimeStarted = new Audio("./audio/rest time started.m4a");
let restTimeEnded = new Audio("./audio/rest time ended .m4a");
let pomodoroStartButton = document.getElementById("pomodoroStartButton");

pomodoroStartButton.addEventListener("click", (event) => {
	event.preventDefault();
	workTimeStarted.play();
	let pomodoroInputWork = document.getElementById(
		"pomodoroInputWorkMinutes"
	).value;
	let pomodoroInputRest = document.getElementById(
		"pomodoroInputRestMinutes"
	).value;

	pomodoroInputWork = pomodoroInputWork ? parseInt(pomodoroInputWork) : 0;
	pomodoroInputRest = pomodoroInputRest ? parseInt(pomodoroInputRest) : 0;

	let workTimeInSecs = pomodoroInputWork * 60;
	let restTimeInSecs = pomodoroInputRest * 60;

	let workTime = setInterval(() => {
		if (workTimeInSecs >= 0) {
			let hours = Math.floor(workTimeInSecs / 3600);
			let mins = Math.floor((workTimeInSecs % 3600) / 60);
			let secs = Math.floor((workTimeInSecs % 3600) % 60);

			mins = mins < 10 ? "0" + mins : mins;
			secs = secs < 10 ? "0" + secs : secs;

			document.getElementById("worktype").innerHTML = "WORK TIME";
			document.getElementById(
				"pomodoroTimer"
			).innerHTML = `${hours}:${mins}:${secs}`;
			workTimeInSecs--;
		} else if (!workTimeInSecs) {
			console.log("something wrong ");
		} else {
			restTimeStarted.play();
			document.getElementById("pomodoroTimer").innerHTML = `TIME UP !!`;

			setTimeout(() => {
				clearInterval(workTime);
				let restTime = setInterval(() => {
					if (restTimeInSecs >= 0) {
						let hours = Math.floor(restTimeInSecs / 3600);
						let mins = Math.floor((restTimeInSecs % 3600) / 60);
						let secs = Math.floor((restTimeInSecs % 3600) % 60);

						mins = mins < 10 ? "0" + mins : mins;
						secs = secs < 10 ? "0" + secs : secs;
						document.getElementById("worktype").innerHTML = "REST TIME";
						document.getElementById(
							"pomodoroTimer"
						).innerHTML = `${hours}:${mins}:${secs}`;
						restTimeInSecs--;
					} else if (!restTimeInSecs) {
						console.log("something wrong ");
					} else {
						restTimeEnded.play();
						document.getElementById("pomodoroTimer").innerHTML = `TIME UP !!`;
						clearPomodoroFields();
						clearInterval(restTime);
					}
				}, 1000);
			}, 1000);
		}
	}, 1000);

	const clearPomodoroFields = () => {
		workTimeInSecs = 0;
		restTimeInSecs = 0;
		document.getElementById("worktype").innerHTML = "SESSION ENDED";
		document.getElementById("pomodoroTimer").innerHTML = "HH : MM : SS";
		document.getElementById("pomodoroInputWorkMinutes").value = "";
		document.getElementById("pomodoroInputRestMinutes").value = "";
	};

	document
		.getElementById("pomodoroResetButton")
		.addEventListener("click", () => {
			clearInterval(workTime);
			clearPomodoroFields();
		});
});
