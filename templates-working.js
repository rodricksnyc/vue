//------------------------------------------ home templates ----------------------------------------------

var homeNavTemplate = `
	<div>
		<home-nav__block v-for="(module, index) in props" v-on:change="changePass" v-on:blockActive="activateBlock" :order="order" v-bind:module="module" :index="index" :active="activeBlock[index]"></home-nav__block>
	</div>
`

var homeNavBlockTemplate = `
	<div class="home-nav__block" v-on:mouseenter="reveal" v-on:click="$emit('change', order[module.sections.intro.one.position])" v-bind:style="{ backgroundImage: module.img }">
		<h2 v-bind:class="module.blockColor" class="home-nav__title" :class="[{'home-nav__title--active': active}, module.blockColor]" v-on:click.stop="reveal" >{{ module.title }}</h2>
		<ul class="home-nav__list" :class="[{'home-nav__list--active': active}, module.blockColor]" v-on:click.stop="" >
			<home-nav__list-item class="home-nav__list-item" v-for="section in module.sections" v-on:change="changePass" v-bind:section="section"></home-nav__list-item>
		</ul>
	</div>`;

	//v-on:click="$emit('change', order[module.sections.intro.one.position])"
	//v-on:mouseleave="hide"
	//v-on:mouseenter="reveal"
	//v-on:mouseleave="hide"
	//

var homeNavListItemTemplate = `
	<li>
		<a class="home-nav__list-item" v-on:click="$emit('change', section.one.position)">
			{{ section.title }}
		</a>
	</li>
`


//------------------------------------------ app template ----------------------------------------------

var appTemplate = `
	<div class="wrapper" v-on:touchstart="handleTouchStart" v-on:touchmove="handleTouchMove" v-on:touchend="handleTouchEnd" :class="module.class">
		<div class="header">
			<nav-menu v-bind:props="props" :order="order" :module="module" v-on:change="change"></nav-menu>
			<div class="section-title">{{section.title}}</div>
			<search-section v-bind:props="props" :order="order" v-on:change="change"></search-section>
		</div>

		<!-- <div class="content" v-if="page.format === 'subjectAreas'">
			<subject-area v-bind:section="section" v-on:change="change" v-bind:page="page"></subject-area>
		</div> -->


		<div class="content">


			<section-content v-if="page.format !== 'home'" v-bind:order="order" v-bind:section="section" v-on:change="change" v-bind:page="page"></section-content>

			<home-nav v-if="page.format === 'home'" :props='props' :order="order" v-on:change="change" class="home-nav"></home-nav>

		</div>

		<div class="footer"></div>
	</div>
`

//------------------------------------------ header templates ----------------------------------------------

var navMenuTemplate = `
	<div class="nav-menu">
		<div v-on:click="slideRight" class="nav-menu__button"></div>
		<div v-on:click="slideLeft" class="nav-menu__shade nav-menu--hidden"></div>
		<div class="nav-menu__menu nav-menu--left">
			<div v-on:click="slideLeft" class="nav-menu__close">X</div>
			<nav-menu__list-item v-on:change="changePass" v-for="item in props" :active="module" v-bind:module="item"></nav-menu__list-item>
		</div>
	</div>
`;

var navMenuListItemTemplate = `
	<div class="nav-menu__list-item">
		<a not-href="module.link" v-bind:class="{'nav-menu__list-title--active': active === module }" v-on:click="clickHandler" class="nav-menu__list-title">
			{{ module.title }}
		</a>
		<a not-href="item.link" class="nav-menu__list-section" v-on:click="$emit('change', item.one.position)" v-bind:class="{'nav-menu--hidden': active !== module }" v-for="item in module.sections">{{ item.title }}</a>
	</div>
`;

var searchSectionTemplate = `
	<div class="search-section">
		<div class="search-section__result-box">
			<div v-on:blur="boxIn" v-on:focus="boxOutFast" tabindex="1" v-on:click="searchSelect(result, $event)" v-on:keyup.enter="searchSelect(result, $event)" class="search-section__result" v-for="result in searchResults">
				<div class="search-section__result-location">{{JSON.parse(order[result.location]).join('/')}}</div>
				<div class="search-section__result-content">"{{result.content[0][1]}}"</div>
			</div>
		</div>
		<div v-on:mousedown="$emit('change')" class="search-section__logo"></div>
		<input v-on:blur="boxIn" v-on:focus="boxOut" class="search-section__bar" id="search" v-on:keyup="search" v-on:keydown.tab.prevent="resultFocus"></input>
		<div v-on:mousedown="searchButtonClick" tabindex="1" class="search-section__icon"></div>

	</div>
`

//------------------------------------------ content templates ----------------------------------------------

var sectionContentTemplate = `
	<div class="section-content" v-bind:style="{ backgroundImage: section.backgroundImage }">
		<div v-if="page.wordArt" v-bind:style="{ backgroundImage: page.wordArt }" class="section-content__word-art"></div>
		<div v-if="page.video" class="section-content__video"></div>

		<div v-if="typeof page.format === 'number'" class="section-content__content-panel">

			<div v-if="page.format === 0" v-html="page.content"></div>

			<tab-panel v-if="page.format === 1 || page.format === 2" v-bind:tabs="page.tabs" v-bind:format="page.format"></tab-panel>

			<accordion-panel v-if="page.format === 3" v-bind:content="page.content"></accordion-panel>

		</div>

		<module-intro v-if="page.format === 'intro'" :section="section" :page="page"></module-intro>

		<!-- <template v-if="page.format === 'subjectAreas'">
			<img v-for="arc in page.arcs" class="circle-selector__word-art" :src="arc.image" :style="{top: arc.top, left: arc.left}" :class="{'circle-selector__word-art--health': arc.text === 'health'}" />
			<svg class="circle-selector" viewBox="-80 -80 160 160">
				<circle cy="0" cx="0" r="45" class="circle-selector__background-circle"></circle>
				<g v-for="(arc, index) in page.arcs" v-on:mouseenter="hover(index, $event)" v-on:click="openModal(index)">
					<path class="circle-selector__arc"  :d="arc.d"></path>
					<text class="circle-selector__text" :x="arc.textX" :y="arc.textY" font-size="5" v-html="arc.text"></text>
				</g>
				<path class="gear" :d="drawGear(55, 24, 6, 6, 0, 0)">
				</path>
				<g v-for="(arc, index) in page.arcs" v-on:mouseenter="hover(index, $event)" v-on:click="openModal(index)">
					<path class="gear gear--small" :d="drawGear(18, 18, 2.5, 15.5, arc.gearX, arc.gearY, 1)">
					</path>
					<image :x="arc.gearX - 19" :y="arc.gearY - 19" width="38" height="38" :xlink:href="arc.icon" />
				</g>
			</svg>
			<modal :list="page.arcs[modalFocus].list" v-on:modalClose="modalClose" :currentTab="0" :arc="page.arcs[modalFocus]"></modal>
		</template>
 -->
		<subject-area v-if="page.format === 'subjectAreas'" :page='page'></subject-area>

<!-- 		<template v-if="page.format === 'proposalProcess'">
			<svg class="proposal-process" viewBox="-50 -23.5 100 55">
				<filter id="glow">
				    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
				    <feMerge>
				        <feMergeNode in="coloredBlur"/>
				        <feMergeNode in="SourceGraphic"/>
				    </feMerge>
				</filter>
				<g class="proposal-process__gear-assembly" tabindex="1" v-for="(gear, index) in page.gears" v-on:mouseenter="proposalHover(index, $event)" v-on:focus="proposalHover(index, $event)" v-on:click="openProposalModal(index)" v-on:keyup.enter="openProposalModal(index)">
					<gear class="gear--proposal-process" :class="{'gear--proposal-process--blue': index < 6}" :specs="gear">
					</gear>
					<circle class="proposal-process__circle" :class="{'proposal-process__circle--blue': index < 6}" :cx="gear.x" :cy="gear.y" :r="gear.radius-gear.depth-1"></circle>
					<text class="proposal-process__text" :class="{'proposal-process__text--blue': index < 6}" :x="gear.x" :y="gear.y" :dy=".5" text-anchor="middle" font-size="1.6" v-html="gear.text"></text>
				</g>
					<image v-for="image in page.images" :x="image.x" :y="image.y" :width="image.width" :xlink:href="image.img" />
			</svg>
			<proposal-modal :modal="page.gears[modalFocus].modal" :modalFocus="modalFocus" v-on:modalClose="modalClose"></proposal-modal>
		</template> -->

		<proposal-process v-if="page.format === 'proposalProcess'" :page="page"></proposal-process>

		<timeline-modal v-if="page.timeline" :segments='page.timeline.segments' :breaks='page.timeline.breaks'></timeline-modal>


		<a not-href="page.back" v-on:click="back" class="section-transition section-transition--back"></a>
		<a not-href="page.forward" v-on:click="next" class="section-transition section-transition--forward"></a>
		<div v-if="section.module" class="section-content__module-title">{{ section.module }}</div>
		<div v-if="section.footer" class="section-content__footer">{{ section.footer }}</div>
	</div>
`


var moduleIntroTemplate = `
	<div class="module-intro">
		<div class="module-intro__panel">
			<div class="module-intro__panel-ribbon">
				<div class="module-intro__title">{{ section.introTitle }}</div>
			</div>
		</div>
		<div class="module-intro__footer">{{ section.introFooter }}</div>
	</div>
`



var tabPanelTemplate = `
	<div class="tab-panel">
		<div v-for="(tab, index) in tabs">
			<div class="tab-panel__tab"
			v-on:click="focus = index" v-bind:class="{'tab-panel__tab--active': index === focus }">{{tab.name}}</div>

			<div v-if="format === 1" class="tab-panel__subpanel" v-bind:class="{'tab-panel__subpanel--active': index === focus }">
				<div class="tab-panel__text" v-html="tab.text"></div>
				<div class="tab-panel__images">
					<img class="tab-panel__image" v-for="image in tab.images" v-bind:src="image">
				</div>
			</div>

			<div v-if="format === 2" class="tab-panel__subpanel" v-bind:class="{'tab-panel__subpanel--active': index === focus }">
				<accordion-panel v-bind:content="tab.content"></accordion-panel>
				<example-boxes v-bind:tab="tab"></example-boxes>
			</div>

		</div>
	</div>
`

var accordionPanelTemplate = `
	<div class="accordion-panel">
		<div v-if="content.text" class="accordion-panel__text">{{ content.text }}</div>
		<div class="accordion-panel__segment" v-for="(segment, index) in content.segments">
			<div class="accordion-panel__segment-title" :class="{'accordion-panel__segment-title--expanded': index === focus}" v-on:click="focus = index" >{{ segment.title }}</div>
			<div class="accordion-panel__segment-content" :style="{height: index === focus ? content.heights[index] : ''}" v-html="segment.content"></div>
		</div>
	</div>
`


var exampleBoxesTemplate = `
	<div class="example-boxes">
		<div v-for="example in tab.examples" class="example-box" :style="{backgroundImage: example.img}">
			<div class="example-box__title">{{example.title}}</div>
			<div class="example-box__expand-icon"></div>
		</div>
	</div>
`



//`
//	<div class="example-boxes">
//		<div v-for="example in tab.examples" class="example-box">
//			<div class="example-box__title">{{example.title}}</div>
//			<div class="example-box__expand-icon"></div>
//		</div>
//	</div>
//		<img v-for="example in tab.examples" class="example-box" :src="example.img">
//
//`

//------------------------------------------ custom content templates --------------------------------------------

var subjectAreaTemplate = `
	<div>
		<img v-for="arc in page.arcs" class="circle-selector__word-art" :src="arc.image" :style="{top: arc.top, left: arc.left}" :class="{'circle-selector__word-art--health': arc.text === 'health'}" />
		<svg class="circle-selector" viewBox="-80 -80 160 160">
			<circle cy="0" cx="0" r="45" class="circle-selector__background-circle"></circle>
			<g v-for="(arc, index) in page.arcs" v-on:mouseenter="hover(index, $event)" v-on:click="openModal(index)">
				<path class="circle-selector__arc"  :d="arc.d"></path>
				<text class="circle-selector__text" :x="arc.textX" :y="arc.textY" font-size="5" v-html="arc.text"></text>
			</g>
			<gear :specs="[55, 24, 6, 6, 0, 0, 0, 0]">
			</gear>
			<g v-for="(arc, index) in page.arcs" v-on:mouseenter="hover(index, $event)" v-on:click="openModal(index)">
				<gear class="gear--small" :specs="[18, 18, 2.5, 15.5, arc.gearX, arc.gearY, 1, 0]">
				</gear>
				<image :x="arc.gearX - 19" :y="arc.gearY - 19" width="38" height="38" :xlink:href="arc.icon" />
			</g>
		</svg>
		<modal :list="modalFocus ? page.arcs[modalFocus].list : page.arcs[0].list" v-on:modalClose="$emit('modalClose')" :currentTab="0" :arc="modalFocus ? page.arcs[modalFocus] : page.arcs[0]"></modal>
	</div>
`
var proposalProcessTemplate = `
	<div>
		<svg class="proposal-process" viewBox="-50 -23.5 100 55" v-on:click="close">
			<filter id="glow">
			    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
			    <feMerge>
			        <feMergeNode in="coloredBlur"/>
			        <feMergeNode in="SourceGraphic"/>
			    </feMerge>
			</filter>
			<image v-for="image in page.images" :x="image.x" :y="image.y" :width="image.width" :xlink:href="image.img" />
			<g class="proposal-process__gear-assembly" tabindex="1" v-for="(gear, index) in page.gears" v-on:mouseenter="proposalHover(index, $event)" v-on:focus="proposalHover(index, $event)" v-on:click.stop="openProposalModal(index)" v-on:keyup.enter="openProposalModal(index)">
				<gear class="gear--proposal-process" :class="{'gear--proposal-process--blue': index < 6, 'active': index === modalFocus}" :specs="gear">
				</gear>
				<circle class="proposal-process__circle" :class="{'proposal-process__circle--blue': index < 6, 'active': index === modalFocus }" :cx="gear.x" :cy="gear.y" :r="gear.radius-gear.depth-1"></circle>
				<text class="proposal-process__text" :class="{'proposal-process__text--blue': index < 6, 'active': index === modalFocus }" :x="gear.x" :y="gear.y" :dy=".5" text-anchor="middle" font-size="1.6" v-html="gear.text"></text>
			</g>

		</svg>
		<proposal-modal :modal="modalFocus ? page.gears[modalFocus].modal : page.gears[0].modal" :class="{'modal--active': modalFocus || modalFocus === 0 }" :modalFocus="modalFocus" v-on:modalClose="close"></proposal-modal>
	</div>
`

//---------------------------------------- modal ------------------------------

var modalTemplate = `
		<div class="modal" v-on:click="close">
			<div class="modal__box" v-on:click.stop="">
				<div class="modal__close" v-on:click="close">x</div>
				<div class="modal__tab" v-for="(tab, i) in list" v-on:click="currentTab = i" v-bind:class="{'modal__tab--active': i === currentTab }">{{tab.title}}</div>
				<div class="modal__content">
					<img v-if="arc" class="modal__icon" :class="{'modal__icon--overview': currentTab === 0}" :src="arc.iconImg"/>
					<div class="modal__title" :class="{'modal__title--overview': currentTab === 0}" v-html="list[currentTab].name"></div>
					<div class="modal__text" :class="{'modal__text--overview': currentTab === 0}" v-html="list[currentTab].text"></div>
				</div>
				<div class="modal__name">{{arc.name}}</div>
			</div>
		</div>
`

var proposalModalTemplate = `
		<div class="proposal-modal" >
			<div class="proposal-modal__box" :class="{'proposal-modal__box--blue': modalFocus < 6}" v-on:click.stop="">
				<div class="proposal-modal__close" tabindex="1" v-on:keyup.enter="close" v-on:click="close">x</div>
				<div class="proposal-modal__title" v-html="modal.title"></div>
				<div class="proposal-modal__body" v-html="modal.body"></div>
			</div>
		</div>
`

//<path class="centerline" d="M 45 14 L 45 199" stroke="black"></path>

 //<a class="timeline-svg__transition"  v-on:keyup.enter="moveTo(0)" v-on:click="moveTo(0)">
//						<circle cx="45" cy="6.7" tabindex="1" r="2.2"></circle>
//						<path class="timeline-svg__transition-arrow" d="M 43.8 6.3 L 45 7.5 L 46.2 6.3"></path>
//					</a>

var timelineModalTemplate = `
		<div class="modal modal--active" v-on:click="close">
			<div class="timeline-box" v-on:click.stop="" v-on:scroll="scrollListener">
				<div class="timeline-box__close" v-on:click="close">x</div>
				<div v-for="(segment, index) in segments" class="timeline-segment" :class="{'timeline-segment--left': index % 2 !== 0}" :style="{top: segment.cy - 6 + 'vw'}">
					<div class="timeline-segment__title" :class="{'timeline-segment__title--left': index % 2 !== 0}">
						{{segment.title}}
					</div>
					<div class="timeline-segment__body" :class="{'timeline-segment__body--left': index % 2 !== 0}" v-html="segment.body"></div>
					<div class="timeline-segment__list-title" :class="{'timeline-segment__list-title--left': index % 2 !== 0}">{{segment.listTitle}}</div>
					<ul class="timeline-segment__list" :class="{'timeline-segment__list--left': index % 2 !== 0}">
						<li v-for="item in segment.listItems" class="timeline-segment__list-item">{{item}}</li>
					</ul>
					<div class="timeline-segment__employees" :class="{'timeline-segment__employees--left': index % 2 !== 0}">{{segment.employees}}</div>
					<div class="timeline-segment__employees-label" :class="{'timeline-segment__employees-label--left': index % 2 !== 0}">employees</div>
					<div class="timeline-segment__revenue" :class="{'timeline-segment__revenue--left': index % 2 !== 0}">revenue<br/><span class="timeline-segment__revenue-span">{{segment.revenue}}</span></div>
				</div>
				<svg class="timeline-svg" viewBox="0 0 90 199">
					<defs>
						<linearGradient id="grad" x1="44.5" y1="0" x2="45.5" y2="0" gradientUnits="userSpaceOnUse">
				            <stop stop-color="rgb(15,128,156)" offset="0"/>
				            <stop stop-color="black" offset="0.01"/>
				            <stop stop-color="black" offset="0.7"/>
				            <stop stop-color="rgb(15,128,156)" offset="0.7"/>
				        </linearGradient>
				    </defs>

					<g v-for="(segment, index) in segments">
						<image :x="index % 2 === 0 ? 53 : 11" :y='segment.cy - 11' width="9" height="9" xlink:href="./assets/Employees_icon_W@W_timeline.svg"></image>
						<image :x="index % 2 === 0 ? 79.25 : 5.75" :y='segment.cy + 7' width="5" height="5" xlink:href="./assets/Revenue_icon_W@W_timeli
						ne.svg"></image>
						<image :x="index % 2 === 0 ? (81.75 - 5.25) : (8.25 - 5.25)" :y='segment.cy - 5.25' width="10.5" height="10.5" :xlink:href="segment.icon"></image>
						<path class="timeline-svg__path" :class="{'timeline-svg__path--animate': index === 0}" :d="segment.d" stroke="url(#grad)"></path>
					</g>
					<path class="timeline-svg__path" d="M 45 161 L 45 199" stroke="url(#grad)"></path>
					<g v-for="(segment, index) in segments">
						<circle tabindex='1' v-on:focus="moveTo(index)" v-on:keyup.enter="moveTo(index)" v-on:click="moveTo(index)" cx='45' :cy='segment.cy' r="1"></circle>
					</g>
					<a class="timeline-svg__transition" tabindex="1" v-on:keyup.enter="moveTo(0, true)" v-on:click="moveTo(0, true)">
						<circle cx="45" cy="194.6" r="2.2"></circle>
						<path class="timeline-svg__transition-arrow" d="M 43.8 195 L 45 193.8 L 46.2 195"></path>
					</a>
				</svg>

			</div>
		</div>
`

//---------------------------------------- gears ------------------------------

var gearTemplate = `
		<path class="gear" :d="drawGear(gear.radius, gear.teeth, gear.depth, gear.thickness, gear.x, gear.y, gear.type)" :transform="rotate(gear.stop, gear.x, gear.y)">
			<animateTransform v-if="gear.rotate" attributeName="transform" type="rotate" dur="12s" repeatCount="indefinite" :from="from(gear.x, gear.y)" :to="to(gear.x, gear.y, index)"></animateTransform>
		</path>
`
