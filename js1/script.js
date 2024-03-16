// Task1
// ⁠İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.
// (Məsələn istifadəçi 12 daxil etdiyi zaman ekrana cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)

// var num = Number(prompt("Eded daxil edin"))

// if (num % 2 == 0) {
// 	console.log(num + " ededi cütdür.");
// } else {
// 	console.log(num + " eded tekdir.");
// }

// Task2
// Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın.

// var num1 = 5, num2 = 7, num3 = 9

// if (num1 > num2 && num1 > num3) {
// 	console.log(num1+" en boyukdur");
// } else if (num2 > num1 && num2 > num3) {
// 	console.log(num2+" en boyukdur");
// } else {
// 	console.log(num3+" en boyukdur");
// }

// if (num1 < num2 && num1 < num3) {
// 	console.log(num1+" en kicikdir");
// } else if (num2 < num1 && num2 < num3) {
// 	console.log(num2+" en kicikdir");
// } else {
// 	console.log(num3+" en kicikdir");
// }

// Task3
// 1-dən 10-a qədər ədədlərin cəmini və hasilini tapın.

// var cem = 0, hasil = 1

// for (i = 1; i <= 10; i++) {
// 	cem = cem + i
// 	hasil = hasil * i

// }

// console.log("cem " + cem + " hasili " + hasil);

// Task4
// 1-dən 100-ə qədər cüt ədədləri, onların cəmini və hasilini tapın.

// var cem = 0, hasil = 1

// for (i = 1; i <= 100; i++) {
// 	if (i % 2 == 0) {
// 		cem = cem + i
// 		hasil = hasil * i
// 	}
// }

// console.log("cem " + cem + " hasili " + hasil);

// Task5
// 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın.

// for (i = 100; i < 1000; i++) {
// 	if (i % 7 == 0 && i % 8 == 0) {
// 		console.log(i);
// 	}
// }

// Task6
// ⁠3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın.

// var cem = 0

// for (i = 100; i < 1000; i++) {
// 	if (i % 7 == 0 && i % 8 == 0) {
// 		cem = cem + i
// 	}
// }

// console.log(cem);

// Task7
// 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın.

// for (i = 100; i < 1000; i++) {
// 	if (i % 7 == 0 && i % 8 == 0) {
// 		console.log(i);
// 		break;
// 	}
// }

// Task8
// 3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.

// for (i = 999; i >=100; i++) {
// 	if (i % 7 == 0 && i % 8 == 0) {
// 		console.log(i);
// 		break;
// 	}
// }

// Task9
// 3 rəqəmli ədədlərin ədədi ortasını tapın.

// var result = 0, count = 0, sum = 0

// for (i = 100; i < 1000; i++) {
// 	sum += i
// 	count++
// }
// result = sum / count

// console.log(result);

// Task10
// ⁠İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin 
// və həmin ədədlər üzərində daxil olunmuş riyazi əməli tətbiq edib nəticəni ekrana çıxarın. 

// var num1 = Number(prompt("Birinci ededi daxil edin"))
// var num2 = Number(prompt("Ikinci ededi daxil edin"))
// var operator = prompt("Riyazi emellerden birini daxil edin: + - * /")

// var result = 0
// if (operator == "+") {
// 	result = num1 + num2
// }else if (operator == "-") {
// 	result = num1 - num2
// }else if (operator == "*") {
// 	result = num1 * num2
// }else if (operator == "/") {
// 	result = num1 / num2
// } else {
// 	result = "Secilmis riyazi emel dogru deyil"
// }

// console.log(result);

// Task11
// Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın.

// var num = Number(prompt("Eded daxil edin"))

// for (i = 100; i < 1000; i++) {
// 	if (i % num == 0) {
// 		console.log(i);
// 	}
// }

// Task12
// Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.

// var num = Number(prompt("Eded daxil edin"))

// for (i = 0; i <= num; i++) {
// 	if (num % i == 0) {
// 		console.log(i);
// 	}
// }

// Task13
// ⁠1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın.

// for (i = 2; i <= 100; i++) {
// 	var count = 0

// 	for (j = 1; j <= i; j++) {
// 		if (i % j == 0) {
// 			count++
// 		}
// 	}

// 	if (count == 2) {
// 		console.log(i + " ededi sadedir");
// 	} else {
// 		console.log(i + " ededi mürekkebdir");
// 	}
// }

// Task14
// ⁠12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)

// for (i = 0; i <= 12; i++) {
// 	for (j = 0; j < i; j++) {
// 		if (i + j == 12) {
// 			console.log(i + " ve " + j);
// 		}
// 	}
// }

// Task15
// ⁠İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, => x=6, y=5)

// var x = 5, y = 6

// console.log("before: x=" + x + " y=" + y);

// var a = x
// x = y
// y = a

// console.log("after: x=" + x + " y=" + y);
