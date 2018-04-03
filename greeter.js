(function(window) {
	var Greeter = function(firstName, lastName, language) {
		return new Greeter.init(firstName, lastName, language);
	};

	var greet = {
		en: 'Hello',
		vi: 'Xin chao'
	};

	var formalGreet = {
		en: 'How are you doing?',
		vi: 'Kinh chao ban'
	};

	Greeter.prototype = {
		getFullName: function() {
			return this.firstName + ' ' + this.lastName;
		},
		setLanguage(language) {
			this.language = language;
			return this;
		},
		greet: function() {
			if (this.language) {
				return greet[this.language] + ' ' + this.getFullName();
			}
			return this;
		},
		formalGreet: function() {
			if (this.language) {
				return formalGreet[this.language] + ' ' + this.getFullName();
			}
			return this;
		},
		log: function(formal) {
			if (formal) {
				console.log(this.formalGreet());
			} else {
				console.log(this.greet());
			}
			return this;
		},
		setGreetHTML: function(DOMElement) {
			if (!DOMElement) {
				throw 'Not found element to set greeting';
			}
			DOMElement.innerHTML = this.formalGreet();
		}
	};

	Greeter.init = function(firstName, lastName, language) {
		this.firstName = firstName || '';
		this.lastName = lastName || '';
		this.language = language || 'en';
	};

	Greeter.init.prototype = Greeter.prototype;

	window.Greeter = window.G$ = Greeter;
})(window);
