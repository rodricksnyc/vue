
Vue.component('app', {
	props: ['props', 'order', 'options'],
	created: function(){
		var createdApp = this;
		window.onhashchange = function(){
			if (location.hash !== ''){
				console.log('hashChange')
				var hashModule = location.hash.replace('#','').split('/')[0],
					hashSection = location.hash.split('/')[1],
					hashPage = location.hash.split('/')[2];

				document.querySelector('.nav-menu__shade').click();
				createdApp.module = createdApp.props[hashModule];
				createdApp.section = createdApp.props[hashModule].sections[hashSection];
				createdApp.page = createdApp.props[hashModule].sections[hashSection][hashPage];

			} else {
				createdApp.module = createdApp.props["home"];
				createdApp.section = createdApp.props["home"].sections["home"];
				createdApp.page = createdApp.props["home"].sections["home"]["home"];
			}
		}
	},
	data: function(){
		var result = {};
		if (location.hash !== ''){
			var hashModule = location.hash.replace('#','').split('/')[0],
				hashSection = location.hash.split('/')[1],
				hashPage = location.hash.split('/')[2];
			result = {
				module: this.props[hashModule],
				section: this.props[hashModule].sections[hashSection],
				page: this.props[hashModule].sections[hashSection][hashPage],
			}
		} else {
			result = {
				module: this.props["home"],
				section: this.props["home"].sections["home"],
				page: this.props["home"].sections["home"]["home"],
			}
		};
		result.xDown = null;
		return result;
	},
	template: appTemplate,
	methods: {
		handleTouchStart: function(e){
			this.xDown = e.touches[0].clientX;
		},
		handleTouchMove: function(e){
			if ( !this.xDown ) {
		        return;
		    };

		    var xUp = e.touches[0].clientX;                                    
		    var xDiff = this.xDown - xUp;

		    if ( Math.abs( xDiff ) > 80 && document.querySelector('.section-transition') ) {/* sensitivity */
		        if ( xDiff > 0 ) {
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
		handleTouchEnd: function(e){
			this.xDown = null;
		},
		change: function(a) {
			if (a) {
				var array = JSON.parse(a),
					focusString = '/' + (array[3] || '0') + '/' + (array[4] || '0') + '/' + (array[5] || '0');
			} else {
				var array = ["home", "home", "home"],
					focusString = '';
			}
			window.location = location.pathname + `#${array[0]}/${array[1]}/${array[2]}${focusString}`;
		}
	}

})


Vue.component('nav-menu', {
	props: ['props', 'module', 'order'],
	template: navMenuTemplate,
	methods: {
		slideRight: function(e){
			this.$el.querySelector('.nav-menu__shade').classList.remove('nav-menu--hidden');
			this.$el.querySelector('.nav-menu__menu').classList.remove('nav-menu--left');
		},
		slideLeft: function(e){
			this.$el.querySelector('.nav-menu__shade').classList.add('nav-menu--hidden');
			this.$el.querySelector('.nav-menu__menu').classList.add('nav-menu--left');
		},
		changePass: function(msg){
			console.log(msg);
			this.$emit('change', this.order[msg])
		}	
	},
	components: {
		'nav-menu__list-item': {
			props: ['module', 'active'],
			template: navMenuListItemTemplate,
			methods: {
				clickHandler(e){
					if (!e.currentTarget.classList.contains('nav-menu__list-title--active')){
						this.dropDown(e);
					} else {
						this.$emit('change', this.module.sections.intro.one.position);
					}
				},
				dropDown: function(e){
					e.preventDefault();
					var sections = this.$el.querySelectorAll('.nav-menu__list-section'),
						modules = this.$parent.$children;

					for (var i = 0; i < modules.length; i++) {
						modules[i].pullUp();
					}

					for (var i = 0; i < sections.length; i++) {
						sections[i].classList.remove('nav-menu--hidden');
					}

					e.currentTarget.classList.add('nav-menu__list-title--active');
				},

				pullUp: function(e){
					var sections = this.$el.querySelectorAll('.nav-menu__list-section');

					this.$el.firstElementChild.classList.remove('nav-menu__list-title--active');

					for (var i = 0; i < sections.length; i++) {
						sections[i].classList.add('nav-menu--hidden');
					}
				}
			}
		}
	}
})

Vue.component('search-section', {
	props: ['props', 'order'],
	template: searchSectionTemplate,
	data: function(){
		return {
			searchResults: []
		}
	},
	computed: {
		siteContent: function(){
			var result = [];
			for (module in this.props) { // sift through each module
				if (module !== this.props.home) {
					for (section in this.props[module].sections) { // sift through each section
						var pages = [this.props[module].sections[section].one, this.props[module].sections[section].two, this.props[module].sections[section].three, this.props[module].sections[section].four];
						// console.log('pages');
						// console.log(pages);
						for (var i = 0; i < pages.length; i++) { // sift through pages, up to four
							var object = {};
							if(pages[i]){
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
											for (var l = 0; l < pages[i].tabs[j].examples.length; l++) {
												text += "||" + pages[i].tabs[j].examples[l].title + "||" + pages[i].tabs[j].examples[l].imgAlt;
												text += "||" + 0 + "," + 0 + "," + (l + 1) + "$%$";
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
		search: function(e){
			var searchTerm = e.currentTarget.value.toLowerCase(),
				result = [];

			if (searchTerm === ""){
				this.searchResults = [];
				return;
			}

			for (var i = 0; i < this.siteContent.length; i++) {
				if (this.siteContent[i].content.toLowerCase().includes(searchTerm)) {
					var sectionArray = this.siteContent[i].content.split('$%$'),
						textReturn = [];
					for (var k = 0; k < sectionArray.length; k++) {
						var stringArray = sectionArray[k].split('||');
						for (var j = 0; j < stringArray.length - 1; j++) {
							if (stringArray[j].toLowerCase().includes(searchTerm)){
								var stringLength = stringArray[j].length;
								if (stringLength < 100) {
									textReturn.push([stringArray[stringArray.length-1], stringArray[j]]);
								} else {
									var index = stringArray[j].toLowerCase().indexOf(searchTerm);
									textReturn.push([stringArray[stringArray.length-1], "..." + stringArray[j].slice((index - 50 > 0 ? (index - 50) : 0), (index + 50)) + "..."])
								}
							}
						}

					}	
					result.push({
						content: textReturn,
						location: this.siteContent[i].location
					});

				}
			}
			// console.log(this.siteContent)
			console.log(result);
			// console.log(this.siteContent)
			this.searchResults = result;
		},
		boxOut: function(e){
			document.querySelector('.search-section__bar').classList.add('search-section__bar--active');
			document.querySelector('.search-section__result-box').classList.add('search-section__result-box--out');
			window.setTimeout(function(){
				document.querySelector('.search-section__icon').classList.add('search-section__icon--active');
			},100);
			// document.querySelector('.search-section__bar').addEventListener('blur', this.boxIn);
			// document.querySelector('.search-section__icon').addEventListener('mousedown', this.closeSearch);
			// document.querySelector('.search-section__icon').classList.add('search-section__icon--active');

			// this.searchFocus(null, true);
		},
		boxOutFast: function(){
			document.querySelector('.search-section__bar').classList.add('search-section__bar--active');
			document.querySelector('.search-section__result-box').classList.add('search-section__result-box--out-fast');
			// window.setTimeout(function(){
			// 	document.querySelector('.search-section__icon').classList.add('search-section__icon--active');
			// },100);
			// document.querySelector('.search-section__bar').addEventListener('blur', this.boxIn);

			// document.querySelector('.search-section__icon').addEventListener('click', function(e){e.currentTarget.blur()});
			// document.querySelector('.search-section__icon').classList.add('search-section__icon--active');

			// document.querySelector('.search-section__icon').removeEventListener('click', this.searchFocus);
			// this.searchFocus(null, true);
		},
		boxIn: function(){
			document.querySelector('.search-section__bar').classList.remove('search-section__bar--active');
			document.querySelector('.search-section__result-box').classList.remove('search-section__result-box--out');
			document.querySelector('.search-section__result-box').classList.remove('search-section__result-box--out-fast');
			window.setTimeout(function(){
				document.querySelector('.search-section__icon').classList.remove('search-section__icon--active');
			},10);
			// document.querySelector('.search-section__bar').removeEventListener('blur', this.boxIn);

			// document.querySelector('.search-section__icon').classList.remove('search-section__icon--active');
			// document.querySelector('.search-section__icon').addEventListener('click', this.searchFocus);
			// this.searchBlur(null, true);
		},
		resultFocus: function(e){
			// var resultArray = document.querySelectorAll('.search-section__result'),
			// 	lastResult = resultArray[resultArray.length - 1];
			// console.log(resultArray);
			// if(lastResult){
				// console.log(lastResult);
				document.querySelector('.search-section__result').focus()
				// lastResult.focus();
			// }
		},
		searchSelect: function(result, e){
			var hashArray = this.order[result.location].slice(0,-1) + "," + result.content[0][0] + "]";
			this.$emit('change',  hashArray);
			document.activeElement.blur();
			console.log(hashArray);
			// this.boxIn();
				// document.querySelector('.search-section__icon').classList.remove('search-section__icon--active');



		},
		searchButtonClick: function(e){
				if(document.querySelector('.search-section__icon').classList.contains('search-section__icon--active')){
					console.log(1)
					// this.boxIn();
				} else {
					console.log(2)
					window.setTimeout(function(){
						document.querySelector('.search-section__bar').focus();
					},10)
					// this.boxOut();
				}
		}
	}
})

Vue.component('module-intro', {
	props: ['section', 'page'],
	template: moduleIntroTemplate
})

Vue.component('home-nav', {
	props: ['props', 'order'],
	template: homeNavTemplate,
	data: function(){
		return {
			activeBlock: [false, false, false, false]
		}
	},
	methods: {
		changePass: function(msg){
			console.log(msg);
			this.$emit('change', msg)
		},
		activateBlock: function(msg){
			this.activeBlock = [false, false, false, false];
			this.activeBlock[msg] = true;
		}
	}
})

Vue.component('home-nav__block', {
  props: ['module', 'order','active','index'],
  methods: {
  	reveal: function(e){
  		this.active ? this.$emit('change', this.order[this.module.sections.intro.one.position]) : this.$emit('blockActive', this.index);
  	},
  	changePass: function(msg){
		console.log(msg);
		this.$emit('change', this.order[msg])
	}	
  },
  template: homeNavBlockTemplate,//"#home-nav__block-template",
  components: {
  	'home-nav__list-item': {
  		props: ['section', 'order'],
  		template: homeNavListItemTemplate,
  	}
  }
})



Vue.component('section-content', {
	props: ['section', 'page', 'order'],
	template: sectionContentTemplate,
	methods: {
		next: function() {
			console.log(this.page.position + 1)
			console.log(this.order[this.page.position + 1]);
			this.$emit('change', this.order[this.page.position + 1]);
		},
		back: function() {
			console.log(this.page.position);
			this.$emit('change', this.order[this.page.position - 1]);
		},
	}
})

Vue.component( 'tab-panel', {
	props: ['tabs', 'format'],
	template: tabPanelTemplate,
	updated: function(){
		if (location.hash.split('/').length > 3) {
			this.focus = parseInt(location.hash.split('/')[3]);
			location.hash = location.hash.split('/').slice(0,3).join('/');
		}
	},
	mounted: function(){
		if (location.hash.split('/').length > 3) {
			this.focus = parseInt(location.hash.split('/')[3]);
			location.hash = location.hash.split('/').slice(0,3).join('/');
		}
		
	},
	data: function(){
		return {
			focus: 0
		}
	},
	methods: {
		setActive: function(e) {
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
		}
	}
})
		
Vue.component('accordion-panel', {
	props: ['content'],
	template: accordionPanelTemplate,
	data: function(){
		return {
			focus: 0,
		}
	},
	created: function(){ // I don't think this router function should work. 
	// specifically, given 2/0, intended to rout to the first panel in the third
	// tab, the logic should ignore the 0 and rout to the third panel. It doesn't
	// seem to, though. I'll test more when I can.
		console.log(typeof location.hash.split('/')[3])
		console.log(typeof location.hash.split('/')[3])

		if (location.hash.split('/')[4]) {
			this.focus = parseInt(location.hash.split('/')[4]);
		} else if (location.hash.split('/')[3]) {
			this.focus = parseInt(location.hash.split('/')[3]);
		}

	},
})


Vue.component('example-boxes', {
	props: ['tab'],
	template: exampleBoxesTemplate
})


Vue.component('modal', {
	props: ['list', 'arc'],
	data: function(){
		return {
			currentTab: 0
		}
	},
	created: function(){
		if (location.hash.split('/').length > 4) {
			this.currentTab = parseInt(location.hash.split('/')[4]);
		}
	},
	updated: function(){

		// var height = 

		if (document.querySelector('.modal__text--overview')){
			console.log(parseInt(window.getComputedStyle(document.querySelector('.modal__text--overview')).height));
			document.querySelector('.modal__icon').style.top = "calc(" + (parseInt(window.getComputedStyle(document.querySelector('.modal__text--overview')).height)/2) + "px - 6.5vw)";
		} else {
			document.querySelector('.modal__icon').style.top = "";
		}
	},
	template: modalTemplate,
	methods: {
		close: function() {
			this.currentTab = 0;
			this.$el.classList.remove('modal--active');
			this.$emit('modalClose');
		}
	}
})

Vue.component('proposal-modal', {
	props: ['modal', 'modalFocus'],
	template: proposalModalTemplate,
	methods: {
		close: function(e) {
			this.$emit('modalClose');
		}
	}
})

Vue.component('timeline-modal', {
	props: ['modal', 'segments', 'breaks'],
	template: timelineModalTemplate,
	data: function(){
		return {
			last_known_scroll_position: 0,
			ticking: false,
			boxHeight: 3000
		}
	},
	mounted: function() {
		this.setBoxHeight();
	},
	methods: {
		setBoxHeight: function(){
			this.boxHeight =
			parseInt(window.getComputedStyle(document.querySelector('.timeline-svg')).height);
			window.setTimeout(this.setBoxHeight, 3000);			
		},
		scrollListener: function(){
			this.last_known_scroll_position = document.querySelector('.timeline-box').scrollTop;
			if (!this.ticking) {
				requestAnimationFrame(this.update);
			}
			this.ticking = true;
		},
		update: function(){
			var position = this.last_known_scroll_position / this.boxHeight;
			console.log(position);
			if (position > .7) {
				this.animateLine(6);
			}else if (position > this.breaks[5]){
				this.animateLine(5);
			} else if (position > this.breaks[4]){
				this.animateLine(4);
			} else if (position > this.breaks[3]){
				this.animateLine(3);
			} else if (position > this.breaks[2]){
				this.animateLine(2);
			} else if (position > this.breaks[1]){
				this.animateLine(1);
			} else if (position > this.breaks[0]){
				this.animateLine(0);
			} else {
				this.animateLine(-1);
			}
			this.ticking = false;
		},
		close: function(){
			this.$el.classList.remove('modal--active');
		},
		animateLine: function(step){
			for (var i = 0; i < 7; i++) {
				if (i <= step){
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
		moveTo: function(index, start){
			if (start) {
				var topPos = 1;
			} else {
				var topPos = document.querySelectorAll('.timeline-segment')[index].offsetTop;
			}
			var scrollTop = document.querySelector('.timeline-box').scrollTop;
			for (var i = 0; i < 500; i++) {
				try{throw i}catch(int){
				// the above is polyfill for
				// let int = i;
					window.setTimeout(function(){
						console.log(int);
						document.querySelector('.timeline-box').scrollTop = scrollTop + (int/500) * (topPos - scrollTop);	
					}, int)

				}
			}
	
		}
	}
})


Vue.component('subject-area', {
	props: ['section', 'page'],
	data: function() {
		return {
			modalFocus: null
		}
	},
	mounted: function(){

		if (location.hash.split('/')[3] && location.hash.split('/')[3] !== '0') {
			this.openModal(parseInt(location.hash.split('/')[3]) - 1);
		}
		location.hash = location.hash.split('/').slice(0,3).join('/');

	},
	template: subjectAreaTemplate,
	methods: {
		hover: function(index, e){
			var	arc = document.querySelectorAll(".circle-selector__arc")[index],
				text = document.querySelectorAll(".circle-selector__text")[index];

			arc.classList.add('circle-selector__arc--active');
			text.classList.add('circle-selector__text--active');
			e.target.addEventListener('mouseleave', function(){
				arc.classList.remove('circle-selector__arc--active');
				text.classList.remove('circle-selector__text--active');
			})
		},
		openModal: function(index){
			this.modalFocus = index;
			document.querySelector('.modal').classList.add('modal--active');
		}
	}
})

Vue.component('proposal-process', {
	props: ['page'],
	template: proposalProcessTemplate,
	data: function() {
		return {
			modalFocus: null
		}
	},
	mounted: function(){
		if (location.hash.split('/')[3] !== '0') {
			this.openProposalModal(parseInt(location.hash.split('/')[3]) - 1);
		}
		
		location.hash = location.hash.split('/').slice(0,3).join('/');
	},
	methods: {
		proposalHover: function(index, e){
			var gear = document.querySelectorAll('.gear--proposal-process')[index],
				text = document.querySelectorAll('.proposal-process__text')[index],
				circle = document.querySelectorAll('.proposal-process__circle')[index];

			gear.classList.add('hover');
			circle.classList.add('hover');
			e.target.addEventListener('mouseleave', function(){
				gear.classList.remove('hover');
				circle.classList.remove('hover');
			})
			e.target.addEventListener('blur', function(){
				gear.classList.remove('hover');
				circle.classList.remove('hover');
			})
		},
		openProposalModal: function(index){
			this.modalFocus = index;
			// document.querySelector('.proposal-modal').classList.add('modal--active');
			document.querySelector('.proposal-modal__close').focus();
		},
		close: function(e){
			console.log(e)
			this.modalFocus = null;
		}
	}
})

Vue.component('gear', {
	props: ['specs'],
	template: gearTemplate,
	created: function(){
		if (this.specs.radius) {
			this.gear = this.specs;
			console.log('gear')
			console.log(this.gear)
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
	data: function(){
		return {
			gear: {},
		}
	},
	methods: {
		drawGear: function(radius, teeth, depth, thickness, cx, cy, alt){
			var innerRadius = radius - depth,
				innerCircle = `Z M ${innerRadius - thickness + cx} ${0 + cy} A ${innerRadius - thickness} ${innerRadius -thickness}, 0, 1, 0, ${-(innerRadius - thickness) + cx} ${0 + cy}
			 			A ${innerRadius - thickness} ${innerRadius -thickness}, 0, 1, 0, ${(innerRadius - thickness) + cx} ${0 + cy}`,
				result = "";

				innerX = i => (innerRadius * Math.cos((i)*((2 * Math.PI/teeth))+(.5* Math.PI))) + cx;
				innerY = i => (innerRadius * Math.sin((i)*((2 * Math.PI/teeth))+(.5* Math.PI))) + cy;
				outerX = i => (radius * Math.cos((i)*((2 * Math.PI/teeth))+(.5* Math.PI))) + cx;
				outerY = i => (radius * Math.sin((i)*((2 * Math.PI/teeth))+(.5* Math.PI))) + cy;

				handleX = i => ((radius - depth *2) * Math.cos((i)*((2 * Math.PI/teeth))+(.5* Math.PI))) + cx;
				handleY = i => ((radius - depth * 2) * Math.sin((i)*((2 * Math.PI/teeth))+(.5* Math.PI))) + cy;

			if (alt === 1) {
				var m = `M ${0 + cx} ${innerRadius + cy} `;

				lTwo = i => `A ${depth} ${depth}, 0, 0, 0, ${outerX(i + .4)} ${outerY(i + .4)} `;
				lThree = i => `L ${outerX(i + .6)} ${outerY(i + .6)} `;
				lFour = i => `A ${depth} ${depth}, 0, 0, 0, ${innerX(i + 1)} ${innerY(i + 1)} `;
				a = i => '';
				lOne = i => '';

			} else if (alt === 2) {
				var m = `M ${0 + cx} ${radius + cy} `,
					interval = ((2 * Math.PI * radius)/teeth) * .8;

				// lTwo = i => `A ${interval} ${interval}, 0, 0, 0, ${outerX(i + .8)} ${outerY(i + .8)} `;
				lTwo = i => `C ${handleX(i)} ${handleY(i)}, ${handleX(i + .8)} ${handleY(i + .8)}, ${outerX(i + .8)} ${outerY(i + .8)}`
				lThree = i => `L ${outerX(i + 1)} ${outerY(i + 1)} `;
				lFour = i => ``;
				a = i => '';
				lOne = i => '';

			} else {				
				var m = `M ${0 + cx} ${radius + cy} `;

				a = i => `A ${innerRadius} ${innerRadius}, 0, 0, 1, ${innerX(i + .75)} ${innerY(i + .75)} `;
				lOne = i => `L ${outerX(i + .85)} ${outerY(i + .85)} `;
				lTwo = i => `L ${outerX(i)} ${outerY(i)} `;
				lThree = i => `L ${outerX(i + .15)} ${outerY(i + .15)} `;
				lFour = i => `L ${innerX(i + .25)} ${innerY(i + .25)} `;
			}

			for (var i = 0; i < teeth; i++) {
						
						result += (lTwo(i));
						result += (lThree(i));
						result += (lFour(i));
						result += (a(i));
						result += (lOne(i));
					}

			return m + result + " " + innerCircle;
		},
		from: function(cx, cy) {
			return `0 ${cx} ${cy}`;
		},
		to: function(cx, cy, i) {
			return `${i%2 === 0 ? 360 : -360} ${cx} ${cy}`;
		},
		rotate: function(stop, cx, cy){
			return `rotate(${stop} ${cx} ${cy})`;
		},
	}
})



var app = new Vue({
	el: '.app',
	data: modelData
})



