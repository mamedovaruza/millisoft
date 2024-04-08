// 1.⁠ ⁠2 tarix arasındakı intervalı tapın (iki tarix arasındakı intervalı il ay gün olaraq çıxarmaq, məsələn 27.03.2024 və 01.03.2027 tarixləri üçün aralarındakı interval 2 il 11 ay 2 gün)

// let dt1 = new Date(2014, 10, 11);
// let dt2 = new Date(2013, 9, 10);

// function diffDate(dt2, dt1) {
// 	let miliseconds = dt2.getTime() - dt1.getTime()
// 	let total_seconds = Math.floor(Math.abs(miliseconds / 1000))
// 	let total_minutes = Math.floor(Math.abs(total_seconds / 60))
// 	let total_hours = Math.floor(Math.abs(total_minutes / 60))
// 	let days = Math.floor(Math.abs(total_hours / 24))
// 	let months = Math.floor(Math.abs(days / 30))
// 	let years = Math.floor(Math.abs(months / 12))

// 	let diff = days - (years * 365)
// 	let diff_month = Math.floor(diff / 30)
// 	let diff_days = diff - (diff_month * 30)

// 	return years + " il " + diff_month + " ay " + diff_days + " gun"
// }

// console.log(diffDate(dt2, dt1));

// 2. 2 tarix arasındakı gün sayını tapın 

// let dt1 = new Date(2014, 10, 2);
// let dt2 = new Date(2014, 10, 11);

// function diff_month(dt2, dt1) {
// 	let miliseconds = dt2.getTime() - dt1.getTime()
// 	let total_seconds = parseInt(Math.floor(miliseconds / 1000));
// 	let total_minutes = parseInt(Math.floor(total_seconds / 60));
// 	let total_hours = parseInt(Math.floor(total_minutes / 60));
// 	let days = parseInt(Math.floor(total_hours / 24));

// 	return days
// }

// console.log(diff_month(dt2, dt1));


// 3.⁠ ⁠Tələbələrin məlumatlarını özündə saxlayan array yaradın. İmtahandan keçməyən tələbələri  silin.(tələbələrin adı, soyadı, imtahana giriş balı, çıxış balı kimi məlumatları saxlayan obyektlər array-in elementləridir. Əgər tələbənin çıxış balı 17-dən kiçik və giriş və  çıxış ballarının cəmi 51-dən kiçikdirsə, həmin tələbəni arraydən silin)

// let infos = [
// 	{
// 		firstName: "Aruza",
// 		lastName: "Mammadova",
// 		examEntanceScore: 40,
// 		examPassScore: 50
// 	},
// 	{
// 		firstName: "Vidadi",
// 		lastName: "Asgarov",
// 		examEntanceScore: 45,
// 		examPassScore: 15
// 	},
// 	{
// 		firstName: "Qazanfar",
// 		lastName: "Ahmadov",
// 		examEntanceScore: 30,
// 		examPassScore: 20
// 	}
// ]

// function examResults(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		const el = array[i];
// 		let scoreSum = el.examEntanceScore + el.examPassScore

// 		if (scoreSum > 50 && el.examPassScore >= 17) {
// 			console.log(el.firstName + " " + el.lastName + " imtahandan kecdi, Umumi bali: " + (el.examEntanceScore + el.examPassScore) + " Imtahandan cixis bali: " + el.examPassScore);
// 		} else {
// 			console.log(el.firstName + " " + el.lastName + " imtahandan kesildi, Umumi bali: " + (el.examEntanceScore + el.examPassScore) + " Imtahandan cixis bali: " + el.examPassScore);
// 		}
// 	}
// }

// examResults(infos)