/* Task 1 */
var i = Number(process.argv[2]);
var a = Number(process.argv[3]);
var b = Number(process.argv[4]);

if (a < 2){
	console.log("Значение исходной системы счисления должно быть не менее чем 2. Пропробуйте снова.");
} else if ((b > 36) || (b < 2)) {
	console.log("Значение требуемой системы счисления должно быть не менее чем 2 и не более 36. Пропробуйте снова.");
} else if ((i < 0) && (i > 10000)) {
	console.log("Есть ограничение по исходного числа от 0 до 10000");
} else if ((i >= 0) && (i <= 10000) && (a >= 2) && (b <=36)) {
	var num = parseInt(i,a);
	console.log(num.toString(b))
}
/* Put your code here */
