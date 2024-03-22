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

// 	if (typeof el === 'number') {
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
// 13.⁠ ⁠Verilmiş mətndə «ADNA» sözlərini «ADNSU» sözü ilə əvəz edin

// var a = "Lorem Ipsum ADNA is simply dummy text of the printing and typesetting industry. Lorem ADNA Ipsum has been the industry's standard ADNA dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
// function Func(text) {
// 	var result = text.replace(/ADNA/ig, "ADNSU")
// 	console.log(result);
// }
// Func(a)


// 14.⁠ ⁠İşçilərin 1 saatlıq əmək haqqı və həftəlik iş saatları verildikdə, aylıq əmək haqqınn hesablanması üçün proqram yazın. Həftəlik 40 saatdan artıq olan iş saatları üçün əmək haqqı 2 qat hesablansın
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

// 6,12,14,16