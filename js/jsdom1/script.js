// 1. Sadə kalkulyator

// function Add() {
// 	let num1 = Number(document.getElementById("input1").value)
// 	let num2 = Number(document.getElementById("input2").value)

// 	document.getElementById("result").innerHTML = "Result: " + (num1 + num2)
// }

// function Subtract() {
// 	let num1 = Number(document.getElementById("input1").value)
// 	let num2 = Number(document.getElementById("input2").value)

// 	document.getElementById("result").innerHTML = "Result: " + (num1 - num2)
// }

// function Multiply() {
// 	let num1 = Number(document.getElementById("input1").value)
// 	let num2 = Number(document.getElementById("input2").value)

// 	document.getElementById("result").innerHTML = "Result: " + (num1 * num2)
// }

// function Divide() {
// 	let num1 = Number(document.getElementById("input1").value)
// 	let num2 = Number(document.getElementById("input2").value)

// 	document.getElementById("result").innerHTML = "Result: " + (num1 / num2)
// }


// 2. Inputa daxil edilmiş sözü tərsinə çevirən proqram

// function Reverse() {
// 	let text = document.getElementById("text").value

// 	document.getElementById("result").innerHTML = "Result: " + (text.split("").reverse().join(""))
// }


// 3. Divin dizaynını dəyişin

// function setStyle() {
// 	let width = document.getElementById("width").value
// 	let height = document.getElementById("height").value
// 	let borderWidth = document.getElementById("borderWidth").value

// 	let borderStyle = document.getElementById("borderStyle").value
// 	let borderColor = document.getElementById("borderColor").value
// 	let color = document.getElementById("color").value
// 	let backgroundColor = document.getElementById("backgroundColor").value

// 	document.getElementById("result").style.width = width + "px"
// 	document.getElementById("result").style.height = height + "px"
// 	document.getElementById("result").style.borderWidth = borderWidth + "px"

// 	document.getElementById("result").style.borderStyle = borderStyle
// 	document.getElementById("result").style.borderColor = borderColor
// 	document.getElementById("result").style.color = color
// 	document.getElementById("result").style.backgroundColor = backgroundColor
// }


// 4. Div-in width-i 200 px-dir. Width üçün təyin olunan inputa daxil olunan qiymət qədər divi-in width-ni artırın. Məs: inputa 50 daxil olunarsa divin width-i 250px olmalıdır

// function Change() {
// 	let oldWidth = document.getElementById("result").offsetWidth
// 	let width = Number(document.getElementById("width").value) + oldWidth
// 	let height = document.getElementById("height").value
// 	let borderWidth = document.getElementById("borderWidth").value

// 	document.getElementById("result").style.width = width + "px"
// 	document.getElementById("result").style.height = height + "px"
// 	document.getElementById("result").style.borderWidth = borderWidth + "px"
// 	document.getElementById("result").style.borderColor = "black"
// 	document.getElementById("result").style.borderStyle = "dashed"
// }


// 11. MilliSoft

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
	let header = item.querySelector("header");
	header.addEventListener("click", () => {
		item.classList.toggle("is-open");

		let description = item.querySelector(".accordion-content-description");
		if (item.classList.contains("is-open")) {
			description.style.height = `${description.scrollHeight}px`;
			item.querySelector("i").classList.replace("fa-chevron-right", "fa-chevron-down");
		} else {
			description.style.height = "0px";
			item.querySelector("i").classList.replace("fa-chevron-down", "fa-chevron-right");
		}
		removeOpenedContent(index);
	})
})

function removeOpenedContent(index) {
	accordionContent.forEach((item2, index2) => {
		if (index != index2) {
			item2.classList.remove("is-open");
			let descrip = item2.querySelector(".accordion-content-description");
			descrip.style.height = "0px";

			item2.querySelector("i").classList.replace("fa-chevron-down", "fa-chevron-right");
		}
	})
}

