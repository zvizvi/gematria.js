gematria = function(txt) {

	var letterWeight = {
		' ': 0,
		'א': 1,
		'ב': 2,
		'ג': 3,
		'ד': 4,
		'ה': 5,
		'ו': 6,
		'ז': 7,
		'ח': 8,
		'ט': 9,
		'י': 10,
		'כ': 20,
		'ל': 30,
		'מ': 40,
		'נ': 50,
		'ס': 60,
		'ע': 70,
		'פ': 80,
		'צ': 90,
		'ק': 100,
		'ר': 200,
		'ש': 300,
		'ת': 400,
		'ך': 420,
		'ם': 440,
		'ן': 450,
		'ף': 480,
		'ץ': 490,
	}


	var getLetterWeight = function(letter) {
		var weight = letterWeight[letter];
		if (weight < 1) {
			weight = 0;
		} else if (weight > 400) {
			weight = weight - 400;
		}
		return weight;
	}

	this.toNumbers = function(txt) {
		var letter = txt.replace(/\s/g, '').split('');
		var totalWeight = 0;
		for (l in letter) {
			totalWeight += getLetterWeight(letter[l]);
		}
		return totalWeight;
	}

	return this.toNumbers(txt);
}
