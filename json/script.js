function getData() {
	const content = document.querySelector('#main .page:last-child');
	const categories = content.querySelectorAll('article');
	var rgaa = {
		"topics": []
	};
	
	function rewrite(el) {
		let result = "";
		let elChildren = el.childNodes;
		let base = "https://rgaa.tanaguru.com/";
	
		elChildren.forEach(item => {
			if(item.nodeType === 3) {
				result += ' '+item.data.trim();
			}
	
			if(item.nodeType === 1) {
				if(item.tagName.toLowerCase() === 'a') {
					let url = item.getAttribute('href');
					if(url.match(/glossaire\.html#glossaire/)) {
						result += ' '+'['+item.textContent+']('+base+url+')';
					}
	
					else if(!url.startsWith('#')) {
						result += ' '+'['+item.textContent+']('+url+')';
					}
				}
	
				if(item.tagName.toLowerCase() === 'code') {
					result += '`'+item.textContent+'`';
				}
			}
		});
	
		result = result.replace(/\n/g,' ');
		result = result.replace(/\s{2,}/g, ' ');
		result;
	
		return result.trim();
	}
	
	categories.forEach(cat => {
		let h2 = cat.querySelector('header h2').textContent;
		let topic = h2.match(/[^\d.]+/)[0].trim();
		let nb = h2.match(/\d+/)[0];
		let criteria = cat.querySelectorAll('section');
		var topicObject = {
			"topic": topic,
			"number": nb,
			"criteria": []
		};
	
		criteria.forEach(crit => {
			var title = crit.querySelector('h3');
			var critere = rewrite(title);
			var critNB = title.id.split('-')[2];
	
			var list = {};
	
			var tests = crit.querySelectorAll('h3+ul>li');
			tests.forEach(test => {
				var testNB = test.id.split('-')[3];
				var testName = rewrite(test).replace(/\:/, '').trim();
				var steps = [];
				var details = test.querySelectorAll('ul>li');
				details.forEach(e => {
					steps.push(rewrite(e));
				});
	
				var resultTest = [];
				resultTest.push(testName);
	
				steps.forEach(step => {
					resultTest.push(step);
				});
				
				list[testNB] = resultTest;
			});
	
			var critObject = {
				"number": critNB,
				"title": critere,
				"tests": list
			};
	
			var complementary = crit.querySelector('.criterion-complementary');
			var notReferences = crit.querySelectorAll('.criterion-complementary>h4');
			if(complementary) {
				var references = complementary.querySelector('.criterion-mapping');
				if(references) {
					var ref = [];
					var tech = [];
					var wcag = [];
	
					references.querySelectorAll('a[href*="Techniques"]').forEach(ref => {
						tech.push(ref.textContent);
					});
					
					let correspondances = references.querySelectorAll('h4');
					correspondances.forEach(cpd => {
						if(!cpd.textContent.match(/WCAG/)) {
							let listEN = cpd.nextElementSibling;
							listEN.querySelectorAll('li').forEach(w => {
								wcag.push(w.textContent);
							});
						}
					});
	
					if(tech.length > 0 || wcag.length > 0) {
						if(tech.length > 0) ref.push({"techniques":tech});
						if(wcag.length > 0) ref.push({"wcag":wcag});
	
						critObject["references"] = ref;
					}
					
				}
	
				if(notReferences.length > 0) {
					var technicalNote = [];
					var particularCases = [];
	
					notReferences.forEach(e => {
						if(e.textContent.match(/particuliers/)) {
							let nextEl = e.nextElementSibling;
							while(nextEl && !nextEl.hasAttribute('class')) {
								if(nextEl.tagName.toLowerCase() === 'p') particularCases.push(rewrite(nextEl));
	
								else if(nextEl.tagName.toLowerCase() === 'ul') {
									let plist = [];
									nextEl.querySelectorAll('li').forEach(i => {
										plist.push(rewrite(i));
									});
									particularCases.push({"ul":plist});
								}
	
								nextEl = nextEl.nextElementSibling;
							}
						} else {
							let nextEl = e.nextElementSibling;
							while(nextEl && !nextEl.hasAttribute('class')) {
								if(nextEl.tagName.toLowerCase() === 'p') technicalNote.push(rewrite(nextEl));
	
								else if(nextEl.tagName.toLowerCase() === 'ul') {
									let plist = [];
									nextEl.querySelectorAll('li').forEach(i => {
										plist.push(rewrite(i));
									});
									technicalNote.push({"ul":plist});
								}
	
								nextEl = nextEl.nextElementSibling;
							}
						}
					});
	
					if(technicalNote.length > 0) critObject["technicalNote"] = technicalNote;
					if(particularCases.length > 0) critObject["particularCases"] = particularCases;
				}
			}
	
			topicObject.criteria.push({"criterium": critObject});
		});
		rgaa.topics.push(topicObject);
	});
	
	var json = JSON.stringify(rgaa);
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'index.php', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('json='+json);
}

document.addEventListener('DOMContentLoaded', getData);

