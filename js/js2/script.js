//  1.⁠ ⁠Array elementlərinin cəmini / hasilini tapın

// var a = [1, 2, 3, 4, 5]
// var cem = 0
// var hasil = 1

// for (let i = 0; i < a.length; i++) {
// 	const el = a[i];
// 	cem += el
// 	hasil *= el
// }

// console.log("Cem = " + cem + " Hasil = " + hasil);


//  2.⁠ ⁠Array elementlərinin içində təkrarlanan elementləri silin

// Method1
// var a = ["a", 7, "g", 5, "r", "g", 5, "y", "k", "r", 7]

// function dublicatedItems(items) {
// 	var result = [];
// 	for (let i = 0; i < items.length; i++) {
// 		const el = items[i];
// 		if (!result.includes(el)) {
// 			result.push(el);
// 		}
// 	}

// 	return result
// }

// console.log(dublicatedItems(a));

// Method2
// var a = ["a", 7, "g", 5, "r", "g", 5, "y", "k", "r", 7]

// var result = a.filter((c, index) => {
// 	return a.indexOf(c) === index;
// });

// console.log(result);


//  3.⁠ ⁠Array elementlərində ədəd olmayan elementləri silin.

// var a = ["a", 7, "g", 5, "r", "g", 5, "y", "k", "r", 7]
// var result = []

// for (let i = 0; i < a.length; i++) {
// 	const el = a[i]

// 	if (typeof el == 'number') {
// 		result.push(el)
// 	}
// }
// console.log(result);

//  4.⁠ ⁠Sözü tərsinə çevirən funksiya yaradın.

// var a = "JavaScript"
// var result = a.split("").reverse().join("")
// console.log(result);

//  5.⁠ ⁠Cümləni tərsinə çevirən funksiya. 

// var a = "JavaScript is a programming language"
// var result = a.split(" ").reverse().join("")
// console.log(result);


//  6.⁠ ⁠Daxil edilmiş ədədi sözlə yazan funskiya (Məs→ input :1, output : Bir )

var a = Number(prompt("Eded daxil edin"))

function test(n) {
	if (n < 0)
		return false;
	single_digit = ['', 'Bir', 'Iki', 'Uc', 'Dord', 'Bes', 'Alti', 'Yeddi', 'Sekkiz', 'Doqquz']
	double_digit = ['On', 'On bir', 'On iki', 'On uc', 'On dord', 'On bes', 'On alti', 'On yeddi', 'On sekkiz', 'On doqquz']
	below_hundred = ['Iyirmi', 'Otuz', 'Qirx', 'Elli', 'Altmis', 'Yetmis', 'Seksen', 'Doxsan']

	if (n === 0) return 'Zero'
	function translate(n) {
		word = ""
		if (n < 10) {
			word = single_digit[n] + ' '
		} else if (n < 20) {
			word = double_digit[n - 10] + ' '
		} else if (n < 100) {
			rem = translate(n % 10)
			word = below_hundred[(n - n % 10) / 10 - 2] + ' ' + rem
		} else if (n < 1000) {
			word = single_digit[Math.trunc(n / 100)] + ' Yuz ' + translate(n % 100)
		} else if (n < 1000000) {
			word = translate(parseInt(n / 1000)).trim() + ' Min ' + translate(n % 1000)
		} else if (n < 1000000000) {
			word = translate(parseInt(n / 1000000)).trim() + ' Milyon ' + translate(n % 1000000)
		} else {
			word = translate(parseInt(n / 1000000000)).trim() + ' Milyard ' + translate(n % 1000000000)
		}
		return word
	}
	result = translate(n)
	return result.trim() + '.'
}

console.log("Eded = " + a)
console.log("Soz ile: " + test(a));


//  7.⁠ ⁠Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın

// var eded = Number(prompt("Ededi daxil edin"))

// function Check(num) {
// 	if (Math.floor(num) == num) {
// 		console.log("Eded tam ededdir");
// 	} else {
// 		console.log("Eded tam eded deyil");
// 	}
// }

// Check(eded)


//  8.⁠ ⁠Verilmiş cümlədə sözlərin sayını tapın

// var cumle = prompt("Cumle daxil edin")
// var soz = cumle.split(" ")
// console.log(a.length);


//  9.⁠ ⁠Verilmiş cümlədə artıq boşluq simvollarını silin

// var cumle = prompt("Cumle daxil edin")
// console.log((cumle.trim()));


// 10.⁠ ⁠Verilmiş mətndə cümlənin ilk sözündə olan baş hərfin böyük yazılmasını təmin edən proqram yazın

// var cumle = prompt("Cumle daxil edin")
// var result = cumle.charAt(0).toUpperCase() + cumle.slice(1);
// console.log(result);


// 11.⁠ ⁠2 arrayın eyniliyini yoxlayın

// var a = [1, 2, 3, 4, 5]
// var b = [3, 4, 5, 6, 7]
// var c = []
// for (let i = 0; i < a.length; i++) {
// 	const ela = a[i];
// 	for (let j = 0; j < b.length; j++) {
// 		const elb = b[j];
// 		if (ela == elb) {
// 			c.push(ela)
// 		}
// 	}
// }
// console.log("Eyni elementler: " + c);


// 12.⁠ ⁠Array elementlərini sort metodundan istifadə etmədən artma / azalma istiqamətinə görə sıralayın

// var a = [64, 34, 25, 12, 22, 11, 90];

// function sort(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log("Sorted array:", sort(a));


// 13.⁠ ⁠Verilmiş mətndə «ADNA» sözlərini «ADNSU» sözü ilə əvəz edin

// var a = "Lorem Ipsum ADNA is simply dummy text of the printing and typesetting industry. Lorem ADNA Ipsum has been the industry's standard ADNA dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
// function Func(text) {
// 	var result = text.replace(/ADNA/ig, "ADNSU")
// 	console.log(result);
// }
// Func(a)


// 14.⁠ ⁠İşçilərin 1 saatlıq əmək haqqı və həftəlik iş saatları verildikdə, aylıq əmək haqqınn hesablanması üçün proqram yazın. Həftəlik 40 saatdan artıq olan iş saatları üçün əmək haqqı 2 qat hesablansın

// var emekHaqqi = Number(prompt("Emek haqqini daxil edin"))
// var ishSaati = Number(prompt("Ish saatini daxil edin"))

// function monthSalary(salary, hours) {
// 	var monthSalary = 1

// 	if (hours > 40) {
// 		monthSalary = ((salary * hours) * 4) * 2
// 	} else {
// 		monthSalary = (salary * hours) * 4
// 	}

// 	return monthSalary
// }

// console.log(monthSalary(emekHaqqi, ishSaati));


// 15.⁠ ⁠3 rəqəmli ədədin rəqəmləri cəmini tapın

// var eded = 345

// function Sum(num) {
// 	var split = num.toString().split("")
// 	var result = 0

// 	for (let i = 0; i < split.length; i++) {
// 		var el = Number(split[i])
// 		result = result + el
// 	}
// 	return result
// }

// console.log(Sum(eded));


// 16.⁠ ⁠Verilmiş 2 mətnin oxşarlıq əmsalını hesablayın. ( 3 ardıcıl sözün eyniliyinə əsasən)

// var a = prompt("Birinci metni daxil edin")
// var b = prompt("Ikinci netni daxil eidn")

// function similarityScore(s1, s2) {
// 	let longer = s1;
// 	let shorter = s2;
// 	if (s1.length < s2.length) {
// 		longer = s2;
// 		shorter = s1;
// 	}
// 	let longerLength = longer.length;
// 	if (longerLength === 0) {
// 		return 1.0;
// 	}
// 	let matchCount = 0;
// 	for (let i = 0; i < longerLength; i++) {
// 		if (longer[i] === shorter[i]) {
// 			matchCount++;
// 		}
// 	}
// 	return Math.floor((matchCount / longerLength) * 100) + " %";
// }

// console.log(similarityScore(a, b));


// 17.⁠ ⁠Verilmiş mətndə təkrarlana sözlərin sayını tapın

// var a = "Lorem Ipsum ADNA is simply dummy text of the printing and typesetting industry. Lorem ADNA Ipsum has been the industry's standard ADNA dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "

// function countRepeatedWords(text) {
// 	var words = text.split(" ")
// 	var wordMap = {};
// 	for (let i = 0; i < words.length; i++) {
// 		const word = words[i];

// 		wordMap[word] = (wordMap[word] || 0) + 1;
// 	}

// 	var repeatedWords = {};
// 	for (let word in wordMap) {
// 		if (wordMap[word] > 1) {
// 			repeatedWords[word] = wordMap[word];
// 		}
// 	}

// 	return repeatedWords;
// }

// console.log(countRepeatedWords(a));