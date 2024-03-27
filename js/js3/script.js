//  1.⁠ ⁠Array daxilində tək yerdə duran elementləri ekrana verin

// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function oddItems(array) {
// 	var result = []
// 	for (let i = 0; i < array.length; i++) {
// 		if (i % 2 == 0) {
// 			result.push(array[i])
// 		}
// 	}
// 	return result
// }

// console.log(oddItems(a));


//  2.⁠ ⁠Array elementləri daxilində 5-ə bölünən ədədlərin sayını ekrana verin

// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function Division(array) {
// 	var count = 0
// 	for (let i = 0; i < array.length; i++) {
// 		const el = array[i]
// 		if (el % 5 == 0) {
// 			count++
// 		}
// 	}
// 	return count
// }

// console.log(Division(a));


//  3.⁠ ⁠Daxil olunan ədədin sadə və ya mürəkkəb olduğunu tapan proqram tərtib edin.

// var a = Number(prompt("Eded daxil edin"))

// function Func(num) {
// 	var count = 0
// 	var result = ""
// 	for (i = 1; i <= num; i++) {
// 		if (num % i == 0) {
// 			count++
// 		}
// 	}

// 	if (count == 2) {
// 		return result = num + " ededi sadedir"
// 	} else {
// 		return result = num + " ededi murekkebdir"
// 	}
// }

// console.log(Func(a));


//  4.⁠ ⁠Array elementləri daxilində 7-ə bölünən sonuncu ədədi ekrana çıxarın.

// var a = [1, 21, 3, 14, 5, 6, 7, 8, 9, 10]

// function Division(array) {
// 	var result = []

// 	for (let i = 0; i < array.length; i++) {
// 		const el = array[i];
// 		if (el % 7 == 0) {
// 			result.push(el)
// 		}
// 	}
// 	return result[result.length - 1]
// }

// console.log(Division(a));


//  5.⁠ ⁠Array elementləri daxilində ən böyük və ən kiçik elementləri ekrana çıxaran proqram tamin edin

// var a = [1, 21, 3, 14, 5, 6, 7, 8, 9, 10]

// function Func(array) {
// 	var min = Math.min(...array);
// 	var max = Math.max(...array);

// 	return "En kicik " + min + " En boyuk " + max
// }

// console.log(Func(a));


//  6.⁠ ⁠Array elementləri daxilində ən böyük və ən kiçik elementlərin yerini dəyişən  proqram tərtib edin

// var a = [1, 6, 3, 14, 5, 21, 7, 8, 9, 10]

// function Func(array) {
//  var min = Math.min(...array);
// 	var max = Math.max(...array);
// 	console.log("En kicik " + min + " En boyuk " + max);

// 	var minIndex = array.indexOf(Math.min(...array));
// 	var maxIndex = array.indexOf(Math.max(...array));
// 	console.log("before " + array);

// 	const temp = array[minIndex];
// 	array[minIndex] = array[maxIndex];
// 	array[maxIndex] = temp;
// 	console.log("after " + array);
// }

// Func(a)


//  7.⁠ ⁠Daxil edilən ədədin bütün mümkün bölənlərini ekrana çıxaran proqram tərtib edin

// var a = Number(prompt("Eded daxil edin"))

// function Func(num) {
// 	var result = []

// 	for (let i = 1; i <= num; i++) {
// 		if (num % i == 0) {
// 			result.push(i)
// 		}
// 	}

// 	return result
// }

// console.log(Func(a));


//  8.⁠ ⁠Verilmiş array daxilində ixtiyari ədədi ekrana çıxaran proqram tərtib edin

// var a = [1, 6, 3, 14, 5, 21, 7, 8, 9, 10]

// function Random(array) {
// 	var result = array[Math.floor(Math.random() * array.length)];
// 	return result
// }
// console.log(Random(a));


//  9.⁠ ⁠1-dən 100-ə qədər ədədlər daxilində təkliyi 1 olan ədədləri ekrana verin

// function Func() {
// 	var result = []

// 	for (let i = 1; i <= 100; i++) {
// 		var num = i.toString().split("")
// 		// console.log(num);
// 		if (num[num.length - 1] == 1) {
// 			result.push(Number(num.join("")))
// 		}
// 	}

// 	return result
// }

// console.log(Func());


// 10.⁠ ⁠Daxil olunmuş ifadənin polindrom olduğunu yoxlayın.   (polindrom dedikdə tərsi və düzü eyni olan ifadə başa düşülür məsələn ütü, 121,1331,4554 və s.)

// var a = prompt("Eded ve ya soz daxil edin")

// function Polindrome(item) {
// 	var reversed = item.split("").reverse().join("")

// 	if (item == reversed) {
// 		return "Polindromdur"
// 	} else {
// 		return "Polindrom deyil"
// 	}
// }

// console.log(Polindrome(a));


// 11.⁠ ⁠Daxil olunmuş iki sözün anaqram olduğunu yoxlayın ( anaqram dedikdə sözlərinin tərkibinin eyni olması başa düşülür, məsələn oslo solo və   s.)

// var a = prompt("Birinci sozu daxil edin")
// var b = prompt("Ikinci sozu daxil edin")

// function Anaqram(text1, text2) {
// 	var split1 = text1.split("").sort().join("")
// 	var split2 = text2.split("").sort().join("")

// 	if (split1 == split2) {
// 		return "Soz anaqramdir"
// 	} else {
// 		return "Soz anaqram deyil"
// 	}
// }

// console.log(Anaqram(a, b));


// 12.⁠ ⁠Daxil olunmuş iki eyni uzunluqlu arrayin eyni yerdə duran elementlərinin hasilindən ibarət yeni array yaradın. Məsələn [2,5] [3,6] yeni array [6,30]

// var a = [1, 2, 3, 4, 5]
// var b = [6, 7, 8, 9, 10]

// function Func(array1, array2) {
// 	var newArr = []
// 	for (let i = 0; i < array1.length; i++) {
// 		newArr.push(array1[i] * array2[i]);
// 	}
// 	return newArr
// }

// console.log(Func(a, b));


// 13.⁠ ⁠Daxil olunmuş mətndə saitləri silən proqram yaradın 

// var a = prompt("Metn daxil edin")

// function Delete(text) {
// 	var sait = ["a", "o", "u", "e", "i"]
// 	var split = text.split("")

// 	for (let i = 0; i < split.length; i++) {
// 		const el1 = split[i]
// 		for (let j = 0; j < sait.length; j++) {
// 			const el2 = sait[j]
// 			if (el1 === el2) {
// 				split.splice(i, 1)
// 			}
// 		}
// 	}

// 	return split.join("")
// }

// console.log(Delete(a));


// 14.⁠ ⁠İstifadəçi daxil edən ədəd sayda ixtiyarı simvoldan ibarət string ifadə yaradın (məsələn input:5   output: qeg8d)

// var a = Number(prompt("Eded daxil edin"))

// function RandomString(num) {
// 	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// 	var result = ' ';
// 	const charactersLength = characters.length;

// 	for (let i = 0; i < num; i++) {
// 		result += characters.charAt(Math.floor(Math.random() * charactersLength));
// 	}

// 	return result;
// }

// console.log(RandomString(a));


// 15.⁠ ⁠Ədədlərdən ibarət arrayin elementlərinin ədədi ortasını tapın

// var a = [1, 2, 3, 4, 5]

// function Func(array) {
// 	var sum = 0

// 	for (let i = 0; i < array.length; i++) {
// 		const el = array[i];
// 		sum += el
// 	}

// 	return sum / array.length
// }

// console.log(Func(a));


// 16.⁠ ⁠Daxil olunmuş sözdə neçə sait və samit olduğunu tapın

// var a = prompt("Soz daxil edin")

// function Func(text) {
// 	var sait = ["a", "o", "u", "e", "i"]
// 	var samit = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
// 	var split = text.toLowerCase().split("")
// 	var saitCount = 0
// 	var samitCount = 0

// 	for (let i = 0; i < split.length; i++) {
// 		const elSplit = split[i];
// 		for (let j = 0; j < sait.length; j++) {
// 			const elSait = sait[j];
// 			if (elSplit === elSait) {
// 				saitCount++
// 			}
// 		}
// 		for (let g = 0; g < samit.length; g++) {
// 			const elSamit = samit[g];
// 			if (elSplit === elSamit) {
// 				samitCount++
// 			}
// 		}
// 	}

// 	return "Sait sayi " + saitCount + " Samit sayi " + samitCount
// }

// console.log(Func(a));


// 17.⁠ ⁠Daxil olunmuş ədədin mükəmməl ədəd olub olmadığını yoxlayan metod yaradın (Mükəmməl ədəd ədədin özündən başqa qalan bütün tam bölənlərinin cəmi özünə bərabər olan ədədə deyilir - məs: 6=1+2+3;  28=1+2+4+7+14)

// var a = Number(prompt("Eded daxil edin"))

// function MukEded(num) {
// 	var sum = 0
// 	for (i = 1; i < num; i++) {
// 		if (num % i == 0) {
// 			sum += i
// 		}
// 	}
// 	if (sum == num) {
// 		return "Bu eded mukemmeldir"
// 	} else {
// 		return "Bu eded mukemmel deyil"
// 	}
// }

// console.log(MukEded(a));


// 18.⁠ ⁠Daxil olunan ixtiyari ədədin rəqəmləri cəmini tapan funksiya yaradın

// var a = Number(prompt("Eded daxil edin"))

// function Func(num) {
// 	var result = 0
// 	var split = num.toString().split("")

// 	for (let i = 0; i < split.length; i++) {
// 		const el = split[i];
// 		result += Number(el)
// 	}
// 	return result
// }

// console.log(Func(a));


// 19.⁠ ⁠Substring metodunun işini yerinə yetirən funksiya yaradın

// var a = "Lorem Ipsum"

// function Substring(text) {
// 	return text.substring(2,4)
// }

// console.log(Substring(a));


// 20.⁠ ⁠indexOf metodunun işini yerinə yetirən funksiya yaradın

// var a = [1, 2, 3, 4, 5]
// console.log(a.indexOf(4));