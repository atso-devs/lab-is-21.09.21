function labThree() {
	const alphabet = [
		'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я',
		'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'
	];
	const inputKey = document.querySelector('#inputKey'),
		inputText = document.querySelector('#inputText'),
		outputText = document.querySelector('#outputText'),
		encrypt = document.querySelector('#encrypt');
	let pos = 0;

	function shiftLetter(pos, key) {
		if ((pos + key) < alphabet.length) {
			console.log('Не туда');
			console.log(pos);
			console.log(key);
			return alphabet[pos+key];
		} else {
			let newPos = ((pos + key) - alphabet.length);
			console.log(pos);
			console.log(key);
			console.log(newPos);
			return alphabet[newPos];
		}
	}

	function contains(symb, arr) {
		for (let i = 0; i < arr.length; i++) {
			if (symb === arr[i]) {
				pos = i;
				return true;
			}
		}
	}	

	encrypt.addEventListener('click', () => {
		let inputStr = inputText.value,
			key = +inputKey.value;

		let rezult = '';

		for (let i = 0; i < inputStr.length; i++) {
			if (!(contains(inputStr[i], alphabet))) {
				rezult = rezult + inputStr[i];
			} else {
				rezult = rezult + shiftLetter(pos, key);
			}
		}

		outputText.value = rezult;
	});
}

export default labThree();
