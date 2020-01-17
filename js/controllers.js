'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


//Source: http://mcgivery.com/htmlelement-pseudostyle-settingmodifying-before-and-after-in-javascript/
var UID = {
	_current: 0,
	getNew: function(){
		this._current++;
		return this._current;
	}
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
	var _this = this;
	var _sheetId = "pseudoStyles";
	var _head = document.head || document.getElementsByTagName('head')[0];
	var _sheet = document.getElementById(_sheetId) || document.createElement('style');
	_sheet.id = _sheetId;
	var className = "pseudoStyle" + UID.getNew();

	_this.className +=  " "+className;

	_sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
	_head.appendChild(_sheet);
	return this;
};

Vue.component('app', {
	props: ['props', 'order', 'options'],
	created: function created() {
		var createdApp = this;
		window.onhashchange = function () {
			if (location.hash !== '') {
				console.log('hashChange');
				var hashModule = location.hash.replace('#', '').split('/')[0],
				    hashSection = location.hash.split('/')[1],
				    hashPage = location.hash.split('/')[2];

				document.querySelector('.nav-menu__shade').click();
				createdApp.module = createdApp.props[hashModule];
				createdApp.section = createdApp.props[hashModule].sections[hashSection];
				// console.log(createdApp.props[hashModule]);
				createdApp.page = createdApp.props[hashModule].sections[hashSection][hashPage];
			} else {
				createdApp.module = createdApp.props["home"];
				createdApp.section = createdApp.props["home"].sections["home"];
				createdApp.page = createdApp.props["home"].sections["home"]["home"];
			}
		};
	},
	data: function data() {
		var result = {};
		if (location.hash !== '') {
			var hashModule = location.hash.replace('#', '').split('/')[0],
			    hashSection = location.hash.split('/')[1],
			    hashPage = location.hash.split('/')[2];
			result = {
				module: this.props[hashModule],
				section: this.props[hashModule].sections[hashSection],
				page: this.props[hashModule].sections[hashSection][hashPage]
			};
		} else {
			result = {
				module: this.props["home"],
				section: this.props["home"].sections["home"],
				page: this.props["home"].sections["home"]["home"]
			};
		};
		result.xDown = null;
		return result;
	},
	template: appTemplate,
	methods: {
		handleTouchStart: function handleTouchStart(e) {
			this.xDown = e.touches[0].clientX;
		},
		handleTouchMove: function handleTouchMove(e) {
			if (!this.xDown) {
				return;
			};

			var xUp = e.touches[0].clientX;
			var xDiff = this.xDown - xUp;

			if (Math.abs(xDiff) > 80 && document.querySelector('.section-transition')) {
				/* sensitivity */
				if (xDiff > 0) {
					/* left swipe */
					document.querySelector('.section-transition--forward').click();
					this.xDown = null;
				} else {
					/* right swipe */
					document.querySelector('.section-transition--back').click();
					this.xDown = null;
				}
			}
		},
		handleTouchEnd: function handleTouchEnd(e) {
			this.xDown = null;
		},
		change: function change(a) {
			if (a) {
				var array = JSON.parse(a),
				    focusString = '/' + (array[3] || '0') + '/' + (array[4] || '0') + '/' + (array[5] || '0');
			} else {
				var array = ["home", "home", "home"],
				    focusString = '';
			}
			window.location = location.pathname + ('#' + array[0] + '/' + array[1] + '/' + array[2] + focusString);
			array[0] === "moduleThree" && array[1] !== "intro" ? setTimeout(notHome, 1000) : '';
		},
		open: function open() {
			this.active = true;
		},
		close: function close() {
			this.active = false;
		}
	}

});

Vue.component('nav-menu', {
	props: ['props', 'module', 'order'],
	template: navMenuTemplate,
	methods: {
		slideRight: function slideRight(e) {
			this.$el.querySelector('.nav-menu__shade').classList.remove('nav-menu--hidden');
			this.$el.querySelector('.nav-menu__menu').classList.remove('nav-menu--left');
		},
		slideLeft: function slideLeft(e) {
			this.$el.querySelector('.nav-menu__shade').classList.add('nav-menu--hidden');
			this.$el.querySelector('.nav-menu__menu').classList.add('nav-menu--left');
		},
		changePass: function changePass(msg, arg) {
			console.log(msg);
			this.slideLeft();
			this.$emit('change', this.order[msg]);
		}
	},
	components: {
		'nav-menu__list-item': {
			props: ['module', 'active'],
			template: navMenuListItemTemplate,
			methods: {
				clickHandler: function clickHandler(e) {
					if (!e.currentTarget.classList.contains('nav-menu__list-title--active')) {
						this.dropDown(e);
					} else {
						this.$emit('change', this.module.sections.intro.one.position);
					}
				},

				dropDown: function dropDown(e) {
					e.preventDefault();
					// var sections = this.$el.querySelectorAll('.nav-menu__list-section'),
					var modules = this.$parent.$children;

					for (var i = 0; i < modules.length; i++) {
						modules[i].pullUp();
					}

					// for (var i = 0; i < sections.length; i++) {
					// 	sections[i].classList.remove('nav-menu--hidden');
					// }
					this.$el.classList.remove('nav-menu--hidden');
					e.currentTarget.classList.add('nav-menu__list-title--active');
				},

				pullUp: function pullUp(e) {
					var sections = this.$el.querySelectorAll('.nav-menu__list-section');

					this.$el.firstElementChild.classList.remove('nav-menu__list-title--active');

					this.$el.classList.add('nav-menu--hidden');
					// for (var i = 0; i < sections.length; i++) {
					// 	sections[i].classList.add('nav-menu--hidden');
					// }
				}
			}
		}
	}
});

Vue.component('search-section', {
	props: ['props', 'order'],
	template: searchSectionTemplate,
	data: function data() {
		return {
			searchResults: [],
			moduleFocus: "moduleOne",
			searchActive: false,
			searching: false
		};
	},
	computed: {
		siteContent: function siteContent() {
			var result = [];
			for (var module in this.props) {
				// sift through each module
				if (module !== this.props.home) {
					for (var section in this.props[module].sections) {
						// sift through each section
						var pages = [this.props[module].sections[section].one, this.props[module].sections[section].two, this.props[module].sections[section].three, this.props[module].sections[section].four];
						// console.log('pages');
						// console.log(pages);

						for (var i = 0; i < pages.length; i++) {
							// sift through pages, up to four
							var object = {};
							if (pages[i]) {
								var text = "||" + this.props[module].sections[section].title + "||" + this.props[module].sections[section].footer;
								switch (pages[i].format) {
									case 'intro':
										text += "||" + this.props[module].sections[section].introTitle + "||" + this.props[module].sections[section].introFooter;
										text += "||" + 0 + "$%$";
										break;
									case 0:
										text += "||" + pages[i].wordArtAlt + "||" + pages[i].content;
										text += "||" + 0 + "$%$";
										break;
									case 1:
										for (var j = 0; j < pages[i].tabs.length; j++) {
											text += "||" + pages[i].tabs[j].name + "||" + pages[i].tabs[j].text + "||" + pages[i].tabs[j].imagesAlt;
											text += "||" + j + "$%$";
										}
										break;
									case 2:
										for (var j = 0; j < pages[i].tabs.length; j++) {
											text += "||" + pages[i].tabs[j].name;
											for (var k = 0; k < pages[i].tabs[j].content.segments.length; k++) {
												text += "||" + pages[i].tabs[j].content.segments[k].title + "||" + pages[i].tabs[j].content.segments[k].content;
												text += "||" + j + "," + k + "$%$";
											}
											if (pages[i].tabs[j].examples) {
												for (var l = 0; l < pages[i].tabs[j].examples.length; l++) {
													text += "||" + pages[i].tabs[j].examples[l].title + "||" + pages[i].tabs[j].examples[l].imgAlt;
													text += "||" + 0 + "," + 0 + "," + (l + 1) + "$%$";
												}
											}
										}
										break;
									case 3:
										text += "||" + pages[i].content.text + "||" + pages[i].content.wordArtAlt;
										for (var j = 0; j < pages[i].content.segments.length; j++) {
											text += "||" + pages[i].content.segments[j].title;
											text += "||" + pages[i].content.segments[j].content;
											text += "||" + j + "$%$";
										}
										break;

									case 'subjectAreas':
										for (var j = 0; j < pages[i].arcs.length; j++) {
											text += "||" + pages[i].arcs[j].text;

											for (var k = 0; k < pages[i].arcs[j].list.length; k++) {
												text += "||" + pages[i].arcs[j].list[k].title + "||" + pages[i].arcs[j].list[k].text;
												text += "||" + (j + 1) + "," + k + "$%$";
											}
										}
										break;
									case 'proposalProcess':
										for (var j = 0; j < pages[i].images.length; j++) {
											text += "||" + pages[i].images[j].imgAlt;
											text += "||" + 0 + "$%$";
										}
										for (var k = 0; k < pages[i].gears.length; k++) {
											text += "||" + pages[i].gears[k].text + "||" + pages[i].gears[k].modal.title + "||" + pages[i].gears[k].modal.body;
											text += "||" + (k + 1) + "$%$";
										}
										break;
									case 'outro':
										text += "||" + this.props[module].sections[section].title;
										text += "||" + 0 + "$%$";
										break;
								}
								text = text.replace(/\|\|undefined/g, ''); //remove empty results
								text = text.replace(/<.*?>/g, ' '); // remove html from results

								object.location = pages[i].position;
								object.content = text;
								result.push(object);
							}
						}
					}
				}
			}
			return result;
		}
	},
	methods: {
		search: function search(e) {
			var searchTerm = e.currentTarget.value.toLowerCase(),
			    result = {
				moduleOne: [],
				moduleTwo: [],
				moduleThree: [],
				moduleFour: []
			};

			if (searchTerm === "") {
				this.searchResults = [];
				this.searching = false; //hides results
				return;
			}

			this.searching = true; //shows results

			for (var i = 0; i < this.siteContent.length; i++) {
				if (this.siteContent[i].content.toLowerCase().includes(searchTerm)) {
					var sectionArray = this.siteContent[i].content.split('$%$'),
					    textReturn = [];
					for (var k = 0; k < sectionArray.length; k++) {
						var stringArray = sectionArray[k].split('||');
						for (var j = 0; j < stringArray.length - 1; j++) {
							if (stringArray[j].toLowerCase().includes(searchTerm)) {
								var stringLength = stringArray[j].length;
								if (stringLength < 100) {
									textReturn.push([stringArray[stringArray.length - 1], stringArray[j]]);
								} else {
									var index = stringArray[j].toLowerCase().indexOf(searchTerm);
									textReturn.push([stringArray[stringArray.length - 1], "..." + stringArray[j].slice(index - 50 > 0 ? index - 50 : 0, index + 50) + "..."]);
								}
							}
						}
					}
					result[JSON.parse(this.order[this.siteContent[i].location])[0]].push({
						content: textReturn,
						location: this.siteContent[i].location
					});
				}
			}

			this.searchResults = result;
		},
		searchSelect: function searchSelect(result, e) {
			var hashArray = this.order[result.location].slice(0, -1) + "," + result.content[0][0] + "]";
			this.$emit('change', hashArray);
			document.activeElement.blur();
			this.searchButtonClick(); // closes search menu
			console.log(hashArray);
		},
		searchButtonClick: function searchButtonClick(e) {
			if (this.searchActive) {
				this.searchActive = false;
				document.querySelector('.header-section__presidents-message').style.right = "23vw";
			} else {
				this.searchActive = true;
				document.querySelector('.search-section__bar').focus();
				document.querySelector('.header-section__presidents-message').style.right = "28vw";
			}
		},
		focus: function focus(index) {
			this.moduleFocus = index;
		},
		checkSearch: function checkSearch(e) {
			if (!this.searching) {
				this.searchButtonClick();
			}
		}
	}
});

Vue.component('module-intro', {
	props: ['section', 'page'],
	template: moduleIntroTemplate
});

Vue.component('module-outro', {
	props: ['file', 'fileName'],
	template: moduleOutroTemplate,
	data: function data() {
		return {
			loaded: false,
		};
	},
	mounted: function mounted() {
		if (document.querySelector(this.fileName)) {
			init();
		} else if (document.querySelector('.scriptJS')) {
			this.loadScript();
		} else {
			this.loadCreateJS();
		}
	},
	beforeDestroy: function beforeDestroy() {
		if (createjs) {
			createjs.Sound.stop();
			createjs.Ticker.removeEventListener('tick', stage);
		}
	},
	methods: {
		loadCreateJS: function loadCreateJS() {
			var doc = window.document;

			var script = doc.createElement("script");
			script.type = "text/javascript";
			script.src = "https://code.createjs.com/createjs-2015.11.26.min.js";
			script.className = "scriptJS";
			script.async = true;
			doc.getElementsByTagName("head")[0].appendChild(script);

			script.onload = this.loadScript;
		},
		loadScript: function loadScript() {
			var doc = window.document;

			var script = doc.createElement("script");
			script.type = "text/javascript";
			script.src = this.file;
			script.className = this.fileName;
			script.async = true;
			doc.getElementsByTagName("head")[0].appendChild(script);

			// script.onload = window.eval.call(window, init);
			// window.setTimeout(function(){init()}, 200)
			// script.onload = init;
			script.addEventListener('load', function () {
				init();
			});
		},
		stop: function stopAnimation(n){
			if (createjs && n) {
				createjs.Sound.stop();
				createjs.Ticker.removeEventListener('tick', stage);
				document.querySelector('.section-transition--forward').classList.remove('section-transition--hidden');
				document.querySelector('.section-transition--back').classList.remove('section-transition--hidden');
				document.querySelector('.pause').classList.add('module-outro-button_disabled');
				document.querySelector('.play').classList.remove('module-outro-button_disabled');
				document.querySelector('.play').removeAttribute("disabled");
		}else if(createjs && !n){
				location.reload();
		}
	}
  }
});

Vue.component('home-nav', {
	props: ['props', 'order'],
	template: homeNavTemplate,
	data: function data() {
		return {
			activeBlock: {},
			pinned: ""
		};
	},
	methods: {
		changePass: function changePass(msg) {
			console.log(msg);
			this.$emit('change', msg);
		},
		activateBlock: function activateBlock(msg) {
			console.log(msg);
			console.log(this.activeBlock[msg]);
			// for (var i = 0; i < this.activeBlock.length; i++) {
			// 	if(!this.pinned[i]){
			// 		this.activeBlock[i] = false;
			// 	}

			// }
			this.activeBlock = {};
			this.activeBlock[this.pinned] = true;
			this.activeBlock[msg] = true;
		},
		hide: function hide() {
			this.activeBlock = {};
			this.activeBlock[this.pinned] = true;
		},
		pin: function pin(msg) {
			console.log(this.activeBlock);
			console.log(this.pinned);
			this.activeBlock[this.pinned] = false;
			this.activeBlock[msg] = true;
			this.pinned = "";
			this.pinned = msg;
			console.log(this.activeBlock);
			console.log(this.pinned);
		}
	}
});

Vue.component('home-nav__block', {
	props: ['module', 'order', 'active', 'index', 'pinned'],
	methods: {
		reveal: function reveal(e) {
			// this.active ? this.$emit('change', this.order[this.module.sections.intro.one.position]) :
			this.$emit('blockActive', this.index);
		},
		hide: function hide(e) {
			this.$emit('hide');
		},
		pin: function pin(e) {
			if (this.index !== this.pinned) {
				e.stopPropagation();
				this.$emit('pin', this.index);
			}
		},
		changePass: function changePass(msg) {
			console.log(msg);
			this.$emit('change', this.order[msg]);
		}
	},
	template: homeNavBlockTemplate, //"#home-nav__block-template",
	components: {
		'home-nav__list-item': {
			props: ['section', 'order'],
			template: homeNavListItemTemplate
		}
	}
});

Vue.component('section-content', {
	props: ['section', 'page', 'order'],
	template: sectionContentTemplate,
	data: function data() {
		return {
			specialModal: null,
			definition: {}
		};
	},
	methods: {
		next: function next() {
			console.log(this.page.position + 1);
			console.log(this.order[this.page.position + 1]);
			this.$emit('change', this.order[this.page.position + 1]);
			// if(this.page.position == 16 || this.page.position == 17 || this.page.position == 18){ location.reload();};
		},
		back: function back() {
			console.log(this.page.position);
			this.$emit('change', this.order[this.page.position - 1]);
			// if(this.page.position == 16 || this.page.position == 17 || this.page.position == 18){ location.reload();};
		},
		checkModal: function checkModal(e) {
			console.log(0);
			if (this.page.awards && e.type === 'click' || this.page.definitions && e.type === 'mousemove') {
				console.log(1);
				if (e.target.nodeName === "A") {
					console.log(2);

					this.specialModal = e.target.classList[0];
					this.definition = e.target.classList[1] && this.page.definitions ? this.page.definitions[e.target.classList[1]] : {};
				} else {
					console.log(3);

					this.closeModal();
				}
			}
		},
		closeModal: function closeModal() {
			this.specialModal = null;
			this.definition = {};
		}
	}
});

Vue.component('tab-panel', {
	props: ['tabs', 'format'],
	template: tabPanelTemplate,
	updated: function updated() {
		if (location.hash.split('/').length > 3) {
			this.focus = parseInt(location.hash.split('/')[3]);
			location.hash = location.hash.split('/').slice(0, 3).join('/');
		}
	},
	mounted: function mounted() {
		if (location.hash.split('/').length > 3) {
			this.focus = parseInt(location.hash.split('/')[3]);
			location.hash = location.hash.split('/').slice(0, 3).join('/');
		}
	},
	data: function data() {
		return {
			focus: 0
		};
	},
	methods: {
		setActive: function setActive(e) {
			var tabs = this.$el.querySelectorAll('.tab-panel__tab'),
			    subpanels = this.$el.querySelectorAll('.tab-panel__subpanel');

			for (var i = 0; i < tabs.length; i++) {
				if (e.currentTarget === tabs[i]) {
					tabs[i].classList.add('tab-panel__tab--active');
					subpanels[i].classList.add('tab-panel__subpanel--active');
				} else {
					tabs[i].classList.remove('tab-panel__tab--active');
					subpanels[i].classList.remove('tab-panel__subpanel--active');
				}
			}
		},
		checkModal: function checkModal(e) {
			this.$emit('checkModal', e);
		}
	}
});

Vue.component('accordion-panel', {
	props: ['content'],
	template: accordionPanelTemplate,
	data: function data() {
		return {
			focus: 0
		};
	},
	created: function created() {
		// I don't think this router function should work.
		// specifically, given 2/0, intended to rout to the first panel in the third
		// tab, the logic should ignore the 0 and rout to the third panel. It doesn't
		// seem to, though. I'll test more when I can.
		console.log(_typeof(location.hash.split('/')[3]));
		console.log(_typeof(location.hash.split('/')[3]));

		if (location.hash.split('/')[4]) {
			this.focus = parseInt(location.hash.split('/')[4]);
		} else if (location.hash.split('/')[3]) {
			this.focus = parseInt(location.hash.split('/')[3]);
		}
	}
});

Vue.component('example-boxes', {
	props: ['tab'],
	data: function data() {
		return {
			modalFocus: null
		};
	},
	template: exampleBoxesTemplate,
	methods: {
		close: function close() {
			this.modalFocus = null;
		}
	}
});

Vue.component('content-video', {
	props: ['page'],
	template: videoTemplate,
	data: function data() {
		return {
			active: false
		};
	},
	methods: {
		open: function open() {
			this.active = true;
		},
		close: function close() {
			this.active = false;
		}
	}
});

Vue.component('home-video', {
	props: ['page'],
	template: homePageVideoTemplate,
	data: function data() {
		return {
			active: false
		};
	},
	methods: {
		open: function open() {
			this.active = true;
		},
		close: function close() {
			this.active = false;
		}
	}
});

Vue.component('modal', {
	props: ['list', 'arc'],
	data: function data() {
		return {
			currentTab: 0
		};
	},
	created: function created() {
		if (location.hash.split('/').length > 4) {
			this.currentTab = parseInt(location.hash.split('/')[4]);
		}
	},
	updated: function updated() {

		// var height =

		if (document.querySelector('.modal__text--overview')) {
			console.log(parseInt(window.getComputedStyle(document.querySelector('.modal__text--overview')).height));
			document.querySelector('.modal__icon').style.top = "calc(" + parseInt(window.getComputedStyle(document.querySelector('.modal__text--overview')).height) / 2 + "px - 6.5vw)";
		} else {
			document.querySelector('.modal__icon').style.top = "";
		}
	},
	template: modalTemplate,
	methods: {
		close: function close() {
			this.currentTab = 0;
			this.$el.classList.remove('modal--active');
			this.$emit('modalClose');
		}
	}
});

Vue.component('proposal-modal', {
	props: ['modal', 'modalFocus'],
	template: proposalModalTemplate,
	methods: {
		close: function close(e) {
			this.$emit('modalClose');
		}
	}
});

Vue.component('example-modal', {
	props: ['modal', 'modalFocus'],
	template: exampleModalTemplate,
	methods: {
		close: function close(e) {
			this.$emit('modalClose');
			console.log(this.modal);
		}
	}
});

Vue.component('definition-popup', {
	props: ['definition', 'specialModal'],
	template: definitionPopupTemplate,
	methods: {
		close: function close() {
			this.$emit('closeModal');
		},
		test: function test() {
			console.log('this is a test');
		}
	}
});

Vue.component('timeline', {
	props: ['segments', 'breaks'],
	template: timelineTemplate,
	data: function data() {
		return {
			active: false
		};
	},
	methods: {
		open: function open() {
			document.querySelector('.header').style.zIndex = 0;
			this.active = true;
		},
		close: function close() {
			document.querySelector('.header').style.zIndex = "";
			this.active = false;
		}
	}
});

Vue.component('timeline-modal', {
	props: ['modal', 'segments', 'breaks'],
	template: timelineModalTemplate,
	data: function data() {
		return {
			last_known_scroll_position: 0,
			ticking: false,
			boxHeight: 3000
		};
	},
	mounted: function mounted() {
		this.setBoxHeight();
	},
	methods: {
		setBoxHeight: function setBoxHeight() {
			if (document.querySelector('.timeline-svg')) {
				this.boxHeight = parseInt(window.getComputedStyle(document.querySelector('.timeline-svg')).height);
				window.setTimeout(this.setBoxHeight, 3000);
			}
		},
		scrollListener: function scrollListener() {
			this.last_known_scroll_position = document.querySelector('.timeline-box').scrollTop;
			if (!this.ticking) {
				requestAnimationFrame(this.update);
			}
			this.ticking = true;
		},
		update: function update() {
			var position = this.last_known_scroll_position / this.boxHeight;
			console.log(position);
			if (position > .7) {
				this.animateLine(6);
			} else if (position > this.breaks[5]) {
				this.animateLine(5);
			} else if (position > this.breaks[4]) {
				this.animateLine(4);
			} else if (position > this.breaks[3]) {
				this.animateLine(3);
			} else if (position > this.breaks[2]) {
				this.animateLine(2);
			} else if (position > this.breaks[1]) {
				this.animateLine(1);
			} else if (position > this.breaks[0]) {
				this.animateLine(0);
			} else {
				this.animateLine(-1);
			}
			this.ticking = false;
		},
		close: function close() {
			this.$emit('close');
		},
		animateLine: function animateLine(step) {
			for (var i = 0; i < 7; i++) {
				if (i <= step) {
					document.querySelectorAll('.timeline-svg__path')[i].classList.add('timeline-svg__path--animate');
				} //else { // allows animations to revert if page scrolls back above the breakpoints
				// 	document.querySelectorAll('.timeline-svg__path')[i].classList.remove('timeline-svg__path--animate');
				// }
			}

			// document.querySelectorAll('.timeline-svg__path')[index].classList.add('timeline-svg__path--animate');

			// if (start) {
			// 	var topPos = 1;
			// } else {
			// 	var topPos = document.querySelectorAll('.timeline-segment')[index].offsetTop;
			// }
			// var scrollTop = document.querySelector('.timeline-box').scrollTop;
			// for (var i = 0; i < 500; i++) {
			// 	let int = i;
			// 	window.setTimeout(function(){
			// 		console.log(int);
			// 		document.querySelector('.timeline-box').scrollTop = scrollTop + (int/500) * (topPos - scrollTop);
			// 	}, int)
			// }
			// window.setTimeout(function(){
			// 	document.querySelectorAll('.timeline-svg__path')[index].classList.add('timeline-svg__path--animate');
			// }, 500)
			// window.setTimeout(function(){
			// 	document.querySelectorAll('.timeline-svg__path')[index].classList.remove('timeline-svg__path--animate');
			// }, 2000)
		},
		moveTo: function moveTo(index, start) {
			if (start) {
				var topPos = 1;
			} else {
				var topPos = document.querySelectorAll('.timeline-segment')[index].offsetTop;
			}
			var scrollTop = document.querySelector('.timeline-box').scrollTop;
			for (var i = 0; i < 500; i++) {
				try {
					throw i;
				} catch (int) {
					// the above is polyfill for
					// let int = i;
					window.setTimeout(function () {
						console.log(int);
						document.querySelector('.timeline-box').scrollTop = scrollTop + int / 500 * (topPos - scrollTop);
					}, int);
				}
			}
		}
	}
});

Vue.component('award-modal', {
	props: ['awards', 'active'],
	template: awardModalTemplate,
	methods: {
		close: function close() {
			this.$emit('closeModal');
		}
	}
});

Vue.component('subject-area', {
	props: ['section', 'page'],
	data: function data() {
		return {
			modalFocus: null
		};
	},
	mounted: function mounted() {

		if (location.hash.split('/')[3] && location.hash.split('/')[3] !== '0') {
			this.openModal(parseInt(location.hash.split('/')[3]) - 1);
		}
		location.hash = location.hash.split('/').slice(0, 3).join('/');
	},
	template: subjectAreaTemplate,
	methods: {
		hover: function hover(index, e) {
			var arc = document.querySelectorAll(".circle-selector__arc")[index],
			    text = document.querySelectorAll(".circle-selector__text")[index],
			    wordArt = document.querySelectorAll(".circle-selector__word-art")[index];

			arc.className.baseVal += ' circle-selector__arc--active';
			text.className.baseVal += ' circle-selector__text--active';
			wordArt.classList.add('circle-selector__word-art--active');
			e.target.addEventListener('mouseleave', function () {
				arc.setAttribute('class', arc.className.baseVal.replace('circle-selector__arc--active', ''));
				text.setAttribute('class', text.className.baseVal.replace('circle-selector__text--active', ''));
				wordArt.classList.remove('circle-selector__word-art--active');
			});
		},
		openModal: function openModal(index) {
			this.modalFocus = index;
			document.querySelector('.modal').classList.add('modal--active');
		}
	}
});

Vue.component('proposal-process', {
	props: ['page'],
	template: proposalProcessTemplate,
	data: function data() {
		return {
			modalFocus: null
		};
	},
	mounted: function mounted() {
		if (location.hash.split('/')[3] !== '0') {
			this.openProposalModal(parseInt(location.hash.split('/')[3]) - 1);
		}

		location.hash = location.hash.split('/').slice(0, 3).join('/');
	},
	methods: {
		proposalHover: function proposalHover(index, e) {
			var gear = document.querySelectorAll('.gear--proposal-process')[index],
			    text = document.querySelectorAll('.proposal-process__text')[index],
			    circle = document.querySelectorAll('.proposal-process__circle')[index];

			gear.className.baseVal += ' hover';
			circle.className.baseVal += ' hover';
			text.className.baseVal += ' hover';
			e.target.addEventListener('mouseleave', function () {
				gear.setAttribute('class', gear.className.baseVal.replace('hover', ''));
				circle.setAttribute('class', circle.className.baseVal.replace('hover', ''));
				text.setAttribute('class', text.className.baseVal.replace('hover', ''));
			});
			e.target.addEventListener('blur', function () {
				gear.setAttribute('class', gear.className.baseVal.replace('hover', ''));
				circle.setAttribute('class', circle.className.baseVal.replace('hover', ''));
				text.setAttribute('class', text.className.baseVal.replace('hover', ''));
			});
		},
		openProposalModal: function openProposalModal(index) {
			this.modalFocus = index;
			// document.querySelector('.proposal-modal').classList.add('modal--active');
			document.querySelector('.proposal-modal__close').focus();
		},
		close: function close(e) {
			console.log(e);
			this.modalFocus = null;
		}
	}
});

var lastIndex = "";
var stagePopup = 0;
Vue.component('project', {
	props: ['page'],
	template: projectTemplate,
	data: function data() {
		return {
			activePopup: null,
			introActive: false,
		};
	},
	methods: {
		openPopup: function openPopup(msg) {
			this.activePopup = msg;
		},
		closePopup: function closePopup() {
			this.activePopup = null;
		},
		openIntro: function openIntro(){
			this.introActive = true;
		},
		closeIntro: function closeIntro(){
			this.introActive = false;
		}
	},
	components: {
		'stage': {
			props: ['stage', 'index'],
			template: stageTemplate,
			data: function data() {
				return {
					headersCollapsed: false
				};
			},
			methods: {
				collapseHeadings: function collapseHeadings() {
					this.headersCollapsed = true;
				},
				expandHeadings: function expandHeadings() {
					this.headersCollapsed = false;
				},
				openPopup: function openPopup(n, el) {
					stagePopup++;
					(stagePopup != 0 && lastIndex != el) ? this.closePopup() : "";
					lastIndex = el;
					this.$emit('popup', this.index);
					this.collapseHeadings();
					document.getElementsByClassName('stage__badge')[el].style.color = n;
					document.getElementsByClassName('stage__badge')[el].style.borderColor = n;
					document.getElementsByClassName('stage__popup')[el].style.backgroundColor = n;
				},
				closePopup: function closePopup() {
					this.$emit('close');
					$('.stage__badge').css({color: "#FFFFFF", borderColor: "#FFFFFF"});
				}
			}
		},
		'illustration': {
			props: ['art', 'index'],
			template: projectIllustrationTemplate,
			data: function data() {
				return {
					active: false
				};
			},
			methods: {
				open: function open() {
					this.active = true;
				},
				close: function close() {
					this.active = false;
					document.querySelector('.proj--journey_img.pulsing').style.animationDuration = '0s';
				}
			}
		}
	}
});

Vue.component('gear', {
	props: ['specs'],
	template: gearTemplate,
	created: function created() {
		if (this.specs.radius) {
			this.gear = this.specs;
			console.log('gear');
			console.log(this.gear);
		} else {
			this.gear.radius = this.specs[0];
			this.gear.teeth = this.specs[1];
			this.gear.depth = this.specs[2];
			this.gear.thickness = this.specs[3];
			this.gear.x = this.specs[4];
			this.gear.y = this.specs[5];
			this.gear.type = this.specs[6];
			this.gear.stop = this.specs[7];
			this.gear.rotate = this.specs[8];
		}
	},
	data: function data() {
		return {
			gear: {}
		};
	},
	methods: {
		drawGear: function drawGear(radius, teeth, depth, thickness, cx, cy, alt) {
			var innerRadius = radius - depth,
			    innerCircle = 'Z M ' + (innerRadius - thickness + cx) + ' ' + (0 + cy) + ' A ' + (innerRadius - thickness) + ' ' + (innerRadius - thickness) + ', 0, 1, 0, ' + (-(innerRadius - thickness) + cx) + ' ' + (0 + cy) + '\n\t\t\t \t\t\tA ' + (innerRadius - thickness) + ' ' + (innerRadius - thickness) + ', 0, 1, 0, ' + (innerRadius - thickness + cx) + ' ' + (0 + cy),
			    result = "",
			    a,
			    lOne,
			    lTwo,
			    lThree,
			    lFour;

			var innerX = function innerX(i) {
				return innerRadius * Math.cos(i * (2 * Math.PI / teeth) + .5 * Math.PI) + cx;
			};
			var innerY = function innerY(i) {
				return innerRadius * Math.sin(i * (2 * Math.PI / teeth) + .5 * Math.PI) + cy;
			};
			var outerX = function outerX(i) {
				return radius * Math.cos(i * (2 * Math.PI / teeth) + .5 * Math.PI) + cx;
			};
			var outerY = function outerY(i) {
				return radius * Math.sin(i * (2 * Math.PI / teeth) + .5 * Math.PI) + cy;
			};

			var handleX = function handleX(i) {
				return (radius - depth * 2) * Math.cos(i * (2 * Math.PI / teeth) + .5 * Math.PI) + cx;
			};
			var handleY = function handleY(i) {
				return (radius - depth * 2) * Math.sin(i * (2 * Math.PI / teeth) + .5 * Math.PI) + cy;
			};

			if (alt === 1) {
				var m = 'M ' + (0 + cx) + ' ' + (innerRadius + cy) + ' ';

				lTwo = function lTwo(i) {
					return 'A ' + depth + ' ' + depth + ', 0, 0, 0, ' + outerX(i + .4) + ' ' + outerY(i + .4) + ' ';
				};
				lThree = function lThree(i) {
					return 'L ' + outerX(i + .6) + ' ' + outerY(i + .6) + ' ';
				};
				lFour = function lFour(i) {
					return 'A ' + depth + ' ' + depth + ', 0, 0, 0, ' + innerX(i + 1) + ' ' + innerY(i + 1) + ' ';
				};
				a = function a(i) {
					return '';
				};
				lOne = function lOne(i) {
					return '';
				};
			} else if (alt === 2) {
				var m = 'M ' + (0 + cx) + ' ' + (radius + cy) + ' ',
				    interval = 2 * Math.PI * radius / teeth * .8;

				// lTwo = i => `A ${interval} ${interval}, 0, 0, 0, ${outerX(i + .8)} ${outerY(i + .8)} `;
				lTwo = function lTwo(i) {
					return 'C ' + handleX(i) + ' ' + handleY(i) + ', ' + handleX(i + .8) + ' ' + handleY(i + .8) + ', ' + outerX(i + .8) + ' ' + outerY(i + .8);
				};
				lThree = function lThree(i) {
					return 'L ' + outerX(i + 1) + ' ' + outerY(i + 1) + ' ';
				};
				lFour = function lFour(i) {
					return '';
				};
				a = function a(i) {
					return '';
				};
				lOne = function lOne(i) {
					return '';
				};
			} else {
				var m = 'M ' + (0 + cx) + ' ' + (radius + cy) + ' ';

				a = function a(i) {
					return 'A ' + innerRadius + ' ' + innerRadius + ', 0, 0, 1, ' + innerX(i + .75) + ' ' + innerY(i + .75) + ' ';
				};
				lOne = function lOne(i) {
					return 'L ' + outerX(i + .85) + ' ' + outerY(i + .85) + ' ';
				};
				lTwo = function lTwo(i) {
					return 'L ' + outerX(i) + ' ' + outerY(i) + ' ';
				};
				lThree = function lThree(i) {
					return 'L ' + outerX(i + .15) + ' ' + outerY(i + .15) + ' ';
				};
				lFour = function lFour(i) {
					return 'L ' + innerX(i + .25) + ' ' + innerY(i + .25) + ' ';
				};
			}

			for (var i = 0; i < teeth; i++) {

				result += lTwo(i);
				result += lThree(i);
				result += lFour(i);
				result += a(i);
				result += lOne(i);
			}

			return m + result + " " + innerCircle;
		},
		from: function from(cx, cy) {
			return '0 ' + cx + ' ' + cy;
		},
		to: function to(cx, cy, i) {
			return (i % 2 === 0 ? 360 : -360) + ' ' + cx + ' ' + cy;
		},
		rotate: function rotate(stop, cx, cy) {
			return 'rotate(' + stop + ' ' + cx + ' ' + cy + ')';
		}
	}
});

var app = new Vue({
	el: '.app',
	data: modelData
});

// Third module --> Pulsing animation logic
function notHome(){

	var moduleThreePhase1 = document.getElementsByClassName('stage--badge__0')[0];
	var moduleThreePhase2 = document.getElementsByClassName('stage--badge__1')[0];
	var moduleThreePhase3 = document.getElementsByClassName('stage--badge__2')[0];
	var moduleThreePhase4 = document.getElementsByClassName('stage--badge__3')[0];
	var moduleThreePhase5 = document.getElementsByClassName('stage--badge__4')[0];

	var moduleThreePulsing = [ moduleThreePhase1, moduleThreePhase2, moduleThreePhase3, moduleThreePhase4, moduleThreePhase5];
	moduleThreePhase1.onclick = function(){pulsing('stage--badge__1')};
	moduleThreePhase2.onclick = function(){pulsing('stage--badge__2')};
	moduleThreePhase3.onclick = function(){pulsing('stage--badge__3')};
	moduleThreePhase4.onclick = function(){pulsing('stage--badge__4')};
	moduleThreePhase5.onclick = function(){
		document.querySelector('.proj--journey_img.pulsing').style.animationDuration = '1.5s';
	};

	function pulsing(v){
		_.forEach(moduleThreePulsing, function(n) {
			n.className.indexOf(v) == -1 ? n.pseudoStyle("before","animation-duration","0s") : n.pseudoStyle("before","animation-duration","1s");
		});
	}
	// function pulsingCompleteSection(v)
}

if(window.location.href.indexOf('moduleThree') != -1 && window.location.href.indexOf('intro') == -1){
	notHome();
}
//<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/157289578?byline=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
