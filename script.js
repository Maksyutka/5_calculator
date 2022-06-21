const numBtn = document.querySelectorAll(".num");
const operatorBtn = document.querySelectorAll(".operator");
const displaySelector = document.getElementById("display");
const clearBtnSelector = document.getElementById("clear");
const equalBtnSelector = document.getElementById("equal");

let equalIndex = false;
let displayValueArray;
let displayLastValue;
let displayLastNumber;
let displayResult;

function contains(arr, elem) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === elem) {
			return true;
		}
	}
	return false;
}

numBtn.forEach(function (btn) {
	btn.onclick = () => {
		displayValueArray = displaySelector.innerHTML.split("");
		displayLastValue = displayValueArray[displayValueArray.length - 1];
		displayLastNumber = displaySelector.innerHTML.split(" ")[displaySelector.innerHTML.split(" ").length - 1];

		if (equalIndex == false && btn.id == "dot" && isNaN(parseInt(displayLastValue))) {
			displaySelector.innerHTML = displaySelector.innerHTML;
		} else if (equalIndex == true && btn.id == "dot") {
			displaySelector.innerHTML = displaySelector.innerHTML;
		} else if (contains(displayLastNumber, ".") && btn.id == "dot") {
			displaySelector.innerHTML = displaySelector.innerHTML;
		} else if (!contains(displayLastNumber, ".") && displayLastNumber.split("")[0] == 0 && displayLastNumber.split("")[1] == undefined && btn.innerHTML == "0") {
			displaySelector.innerHTML = displaySelector.innerHTML;
		} else if (equalIndex == false) {
			displaySelector.innerHTML += btn.innerHTML;
		} else if (equalIndex == true) {
			displaySelector.innerHTML += " + " + btn.innerHTML;
			equalIndex = false;
		}
	};
});

operatorBtn.forEach(function (btn) {
	btn.onclick = () => {
		displayValueArray = displaySelector.innerHTML.split("");
		displayLastValue = displayValueArray[displayValueArray.length - 1];
		displayLastNumber = displaySelector.innerHTML.split(" ")[displaySelector.innerHTML.split(" ").length - 1];

		if (isNaN(parseInt(displayLastValue))) {
			console.log("its not a num");
		} else {
			displaySelector.innerHTML += " " + btn.innerHTML + " ";
			equalIndex = false;
		}
	};
});

equalBtnSelector.onclick = () => {
	if (displaySelector.innerHTML.trim() !== "") {
		displayResult = eval(displaySelector.innerHTML);
		equalIndex = true;
		displaySelector.innerHTML = displayResult;
	}
};

clearBtnSelector.onclick = () => {
	displaySelector.innerHTML = "";
	equalIndex = false;
};
