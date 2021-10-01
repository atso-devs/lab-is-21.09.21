function labOne(countLetters, lengthPass, second, countIncorrectPass, pause) {
	const countVariant = Math.pow(countLetters, lengthPass);
	const speed = countVariant / second;
	let rezult;

	if (countIncorrectPass !== 0 && pause !== 0) {
		rezult = (speed * pause) / countIncorrectPass;
	} else {
		rezult = speed;
	}

	rezult = rezult / 60; //в минуты
	rezult = rezult / 60; //в часы
	rezult = rezult / 24; //в дни

	console.log(
		`${speed} дней требуется для подбора пароля с параметрами: n = ${countLetters}, k = ${lengthPass}, s = ${second}, m = ${countIncorrectPass}, v = ${pause}`
	);
}

console.log('Лабораторная работа #1');
console.log(
	'Задание: Определить время перебора пароля с параметрами. Далее результаты вычислений:'
);

labOne(33, 10, 100, 0, 0);
