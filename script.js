const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  object onClick(event) {
    let target = getEventTarget(event);
    let li = target.closest("li");
    li.classList.toggle("checked");
  }
}

var arrlist = JSON.parse(localStorage.getItem("myCalculation"));
if (arrlist == null) {
	arrlist = [];
}

for (let i = 0; i < arrlist.length; i++) {
	var list = document.createElement("Li");
	var text = document.createTextNode(arrlist[i]);
	list.appendChild(text);

	var Author = document.getElementById("Author");
	myList.insertBefore(list, myList.childNodes[0]);


	var doneButton = document.createElement("BUTTON");
	doneButton.textContent = "Dispaly Calculation";
	doneButton.className = "calcubutton";


	var deleteButton = document.createElement("BUTTON");
	deleteButton.textContent = "Display Authors";
	deleteButton.className = "authorbutton";

	doneButton.onclick = function (event) {
		onClickDoneButton();
	};

	deleteButton.onclick = function (event) {
		onClickDeleteButton();
	};
	list.appendChild(doneButton);
	doneButton.style.visibility = "hidden";
	list.appendChild(deleteButton);
	deleteButton.style.visibility = "hidden";
	list.onmouseenter = function (event) {
		var list0 = event.target;
		var children = list0.childNodes;
		for (var i = 0, len = children.length; i < len; i++) {
			if (i > 0) {
				children[i].style.visibility = "visible";
			}
		}
	};
	list.onmouseleave = function (event) {
		var list0 = event.target;
		var children = list0.childNodes;
		for (var i = 0, len = children.length; i < len; i++) {
			if (i > 0) {
				children[i].style.visibility = "hidden";
			}
		}
	};
}
var input = document.getElementById("myreset");
input.addEventListener("keyup", function (event) {

	if (event.keyCode === 13) {
		
		event.preventDefault();
		myOnClick();
	}
});

// more codes for Search and Reset buttons here
