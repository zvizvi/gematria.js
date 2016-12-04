gematria = function(txt){

	var letterWeight = [
		'',
		'א',
		'ב',
		'ג',
		'ד',
		'ה',
		'ו',
		'ז',
		'ח',
		'ט',
		'י'
	];
	letterWeight[20] = 'כ';
	letterWeight[30] = 'ל';
	letterWeight[40] = 'מ';
	letterWeight[50] = 'נ';
	letterWeight[60] = 'ס';
	letterWeight[70] = 'ע';
	letterWeight[80] = 'פ';
	letterWeight[90] = 'צ';
	letterWeight[100] = 'ק';
	letterWeight[200] = 'ר';
	letterWeight[300] = 'ש';
	letterWeight[400] = 'ת';
	
	letterWeight[420] = 'ך';
	letterWeight[440] = 'ם';
	letterWeight[450] = 'ן';
	letterWeight[480] = 'ף';
	letterWeight[490] = 'ץ';


	var getLetterWeight = function(letter){
		var weight = letterWeight.indexOf(letter);
		if (weight < 1) {
			weight = 0;
		}else if(weight > 400){
			weight = weight - 400;
		}
		return weight;
	}

	this.toNumbers = function(txt){
		var letter = txt.replace(/\s/g, '').split('');
		var totalWeight = 0;
		for(l in letter){
			totalWeight += getLetterWeight(letter[l]);
		}
		return totalWeight;
	}

	return this.toNumbers(txt);
}