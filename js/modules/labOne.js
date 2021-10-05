function labOne() {
	function myLog(num, base) {
		return Math.log(num) / Math.log(base);
	}

	function taskOne() {
		//константа, хранящая в себе значения переменных из таблицы
		const tableOne = [
			{ id: 1, n: 33, k: 10, s: 100, m: 0, v: 0 },
			{ id: 2, n: 26, k: 12, s: 13, m: 3, v: 2 },
			{ id: 3, n: 52, k: 6, s: 30, m: 5, v: 10 },
		];

		//подсчет результата
		function countRezult(
			countLetters,
			lengthPass,
			second,
			countIncorrectPass,
			pause
		) {
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

			return rezult;
		}

		//заполнение таблицы
		function fillingTable() {
			const tableElement = document.querySelector('#table-1-1');

			function createStr(item) {
				let tr = document.createElement('tr');

				tr.innerHTML = `
				<th scope="row">${item.id}</th>
				<td>${item.n}</td>
				<td>${item.k}</td>
				<td>${item.s}</td>
				<td>${item.m}</td>
				<td>${item.v}</td>
				<td>${countRezult(item.n, item.k, item.s, item.m, item.v)}</td>
			`;

				tableElement.querySelector('tbody').append(tr);
			}

			tableOne.forEach(function (item, index) {
				createStr(item);
			});
		}

		fillingTable();
	}

	function taskTwo() {
		//константа, хранящая в себе значения переменных из таблицы
		const tableTwo = [
			{ id: 1, n: 33, t: 100, s: 100 },
			{ id: 2, n: 26, t: 120, s: 13 },
			{ id: 3, n: 52, t: 60, s: 30 },
		];

		//подсчет результатов
		function countRezult(countLetters, time, second) {
			const countVariant = time * second;
			const rezult = myLog(countVariant, countLetters);

			return rezult.toFixed(4);
		}

		//заполнение таблицы
		function fillingTable() {
			const tableElement = document.querySelector('#table-1-2');

			function createStr(item) {
				let tr = document.createElement('tr');

				tr.innerHTML = `
				<th scope="row">${item.id}</th>
				<td>${item.n}</td>
				<td>${item.t}</td>
				<td>${item.s}</td>
				<td>${countRezult(item.n, item.t, item.s)}</td>
			`;

				tableElement.querySelector('tbody').append(tr);
			}

			tableTwo.forEach(function (item, index) {
				createStr(item);
			});
		}

		fillingTable();
	}

	taskOne();
	taskTwo();
}

export default labOne;
