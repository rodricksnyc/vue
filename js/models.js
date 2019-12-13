"use strict";

var modelData = {
	modules: {
		moduleOne: {
			title: "who we are",
			img: "url('./assets/who light.jpg')",
			blockColor: "home-nav--purple",
			link: "../one/intro.html",
			class: 'module-one',
			introFooter: "2000+ dedicated employee-owners & staff working around the world",
			sections: {
				intro: {
					introTitle: "who we are",
					introFooter: "2000+ dedicated employee-owners & staff working around the world",
					backgroundImage: "url('assets/Mod1title image.jpg')",
					one: {
						format: 'intro',
						position: 0
					}
				},
				industry: {
					title: "industry",
					module: "who we are",
					backgroundImage: "url('assets/industry bckgrnd.jpg')",
					footer: "Westat is the gold standard of social science research",
					one: {
						format: 0,
						position: 1,
						wordArt: "url('assets/industry type.png')",
						video: 'https://players.brightcove.net/1232842447001/BkS1OPjQ_default/index.html?autoPlay=true&videoId=3530935519001',
						videoTitle: "Improving Lives Through Research",
						videoImg: "url('assets/Improving Lives.png')",
						awards: {
							title: "Awards of Excellence",
							body: "Westat has received awards for excellence in a broad range of areas, including:",
							// 	<ul>
							// 		<li>Finalist, 2016 Innovation Next Awards; for campaigns to help prevent teen pregnancy</li>
							// 		<li>Recipient, National Cancer Institute’s Director’s Award; for supporting the Experimental Therapeutics Clinical Trials Network</li>
							// 		<li>6th of top 10 companies, 2016 American Marketing Association’s Gold Top 50 Report; 192 companies listed</li>
							// 	</ul>
							// 	`,
							// images: ["assets/NEXT award.png", "assets/NIH award.png", "assets/AMA award.png"]
							sections: [{
								image: "assets/NEXT award.png",
								text: "Finalist for the 2016 Innovation Next Awards for campaigns to help prevent teen pregnancy"
							}, {
								image: "assets/NIH award.png",
								text: "The National Cancer Institute’s Director’s Award for supporting the Experimental Therapeutics Clinical Trials Network"
							}, {
								image: "assets/AMA award.png",
								text: "Westat maintains 6th place among U.S. market research and analytics companies for 2018"
							}]
						},
						content: "\n\t\t\t\t\t\t\t<p>Westat is the gold standard of social science research, statistical analysis, and evidence-based communications.</p>\n\n\t\t\t\t\t\t\t<p>Our 50-plus years of experience, broad expertise, and global reach qualify us as an\xA0<a href=\"#\" class=\"award-modal__link\" tabindex=\"1\">award-winning</a>\xA0industry leader.</p>\n\n\t\t\t\t\t\t\t<p>Whatever your role in our organization, you are part of who we are. The quality of your work is key to our company\u2019s sustained record of achievement and our reputation for high-quality work. Together, we continue to improve lives through research.</p>"
					}
				},
				legacy: {
					title: "legacy",
					module: "who we are",
					backgroundImage: "url('assets/legacy bkgrnd.jpg')",
					footer: "Statistical methodology is the backbone of our success",
					one: {
						format: 0,
						position: 2,
						// wordArt: "url('assets/industry type.png')",
						video: 'https://players.brightcove.net/1232842447001/BkS1OPjQ_default/index.html?autoPlay=true&videoId=4932966706001',
						videoTitle: "Westat? What's That?",
						videoImg: "url('assets/westat whats that.png')",
						content: "\n\t\t\t\t\t\t<p>Founded in 1963 from a statistical consulting partnership, Westat\u2019s leading edge was our expertise in statistical methodology and survey methods.</p>\n\t\t\t\t\t\t<p>Across the decades, our expertise has expanded well beyond these origins. Westat leadership has built on our legacy, making careful expansion decisions and attracting talented staff.</p>\n\t\t\t\t\t\t<p>Today, we are a full-service research corporation with a record of financial stability and steady growth.</p>\n\t\t\t\t\t\t",
						timeline: {
							breaks: [-.1, .036, .132, .305, .46, .594],
							segments: [{
								d: 'M 45 13.5 L 76.5 13.5 A 5.25 5.25 0 0 1 87 13.5 A 5.25 5.25 0 0 1 76.5 13.5',
								cy: 13.5,
								title: "1960s",
								icon: './assets/1960s_icon_W@W_timeline.svg',
								employees: '50',
								revenue: '$2k',
								body: "\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Ed Bryant, Jim Daley and Don King create Westat with Ed Bryant as President</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Westat's first significant contract: statistical services for the U.S. Patent Office</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Morris Hansen, a senior statistician from the Bureau of the Census, joins Westat</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Westat relocates from Colorado to Rockville, Maryland</div>\n\t\t\t\t\t\t\t\t\t",
								listTitle: "Areas of Business:",
								listItems: ["Mathematical modeling", "First study involving sample design, weighting, tabulation and reporting for the U.S. Department of Transportation", "First mail survey for the U.S. Department of Education", "Program evaluation projects for the U.S. Post Office and Model Cities Program"]
							}, {
								d: 'M 45 13.5 L 45 32.5 L 13.5 32.5 A 5.25 5.25 0 0 0 3 32.5 A 5.25 5.25 0 0 0 13.5 32.5',
								cy: 32.5,
								title: "1970s",
								icon: './assets/1970s_icon_W@W_timeline.svg',
								employees: '164',
								revenue: '$14m',
								body: "\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Purchases first computer with 32kb memory</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">American Can Company purchases majority interest in Westat</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Joe Hunt becomes President </div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Joe Waksberg, senior statistician, joins Westat from the Bureau of the Census</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Opens first Telephone Research Center (TRC)</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Establishes national field organization for in-person data collection</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Establishes Employee Stock Ownership Plan (ESOP)</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Networks the TRC and field staff</div>\n\t\t\t\t\t\t\t\t\t",
								listTitle: "Added Areas of Business:",
								listItems: ["Families, fertility and health", "Child abuse and neglect", "Surveys on crime-related topics", "Water quality surveys for the EPA", "Fast response survey systems to collect issue-oriented data on key education issues at the elementary and secondary levels", "Expanded health survey business as public health programs matured", "Support services for studies of cancer for NCI"]
							}, {
								d: 'M 45 32.5 L 45 67 L 76.5 67 A 5.25 5.25 0 0 1 87 67 A 5.25 5.25 0 0 1 76.5 67',
								cy: 67,
								title: "1980s",
								icon: './assets/1980s_icon_W@W_timeline.svg',
								employees: '528',
								revenue: '$66m',
								body: "\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Establishes Research Campus</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Provides employees with desktop computers</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Introduces computer-assisted telephone interview (CATI) system</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Launches nationwide database of field supervisors and interviewers</div>\n\t\t\t\t\t\t\t\t\t",
								listTitle: "Added Areas of Business:",
								listItems: ["AIDS and HIV research and clinical trials", "Economics of health care", "Health and nutrition studies", "Educational progress", "Reyes syndrome study leads to FDA warning about aspirin", "First international project in China"]
							}, {
								d: 'M 45 67 L 45 98 L 13.5 98 A 5.25 5.25 0 0 0 3 98 A 5.25 5.25 0 0 0 13.5 98',
								cy: 98,
								title: "1990s",
								icon: './assets/1990s_icon_W@W_timeline.svg',
								employees: '1385',
								revenue: '$242m',
								body: "\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Graham Kalton, senior statistician, joins Westat in 1992</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Conducts first computer-assisted personal interview (CAPI) study</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Connects staff computers with WesNet</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Partners with universities to establish the Joint Program in Survey Methodology</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Opens additional Telephone Research Centers around the country</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Invests in development of survey and statistical systems</div>\t\n\t\t\t\t\t\t\t\t\t",
								listTitle: "Added Areas of Business:",
								listItems: ["Evaluation of smoking cessation products and programs", "Drug exposure studies", "Studies of attitudes of youth towards military service", "Additional major studies on diet and health", "Studies of oil and gas reserves", "Significant expansion of education studies and clinical trials"]
							}, {
								d: 'M 45 98 L 45 124.5 L 76.5 124.5 A 5.25 5.25 0 0 1 87 124.5 A 5.25 5.25 0 0 1 76.5 124.5',
								cy: 124.5,
								title: "2000s",
								icon: './assets/2000s_icon_W@W_timeline.svg',
								employees: '1947',
								revenue: '$506m',
								body: "\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Research methods and survey technologies expand to include web surveys, ACASI, BFOS, Blaise<sup>&reg;</sup> software, tablets and smartphones</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Virtual telephone centers established</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Graham Kalton becomes Chairman of the Board (2006)</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Fitness Center and Caf&eacute; open (2009)</div>\n\t\t\t\t\t\t\t\t\t",
								listTitle: "Added Areas of Business:",
								listItems: ["Early childhood development", "Health information technology", "Health services", "Program evaluation", "Social marketing and communication", "Special education", "Substance abuse", "Transportation"]
							}, {
								d: 'M 45 124.5 L 45 161 L 13.5 161 A 5.25 5.25 0 0 0 3 161 A 5.25 5.25 0 0 0 13.5 161',
								cy: 161,
								title: "2010s",
								icon: './assets/2010s_icon_W@W_timeline.svg',
								employees: '1900',
								revenue: '$565m',
								body: "\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Jim Smith becomes President</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">50th anniversary!</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">International office locations expand to 5, domestic locations to 9</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Research methods expand with mFOS, EAGLE, PD3, M3, SMS, Agile, private cloud computing</div>\n\t\t\t\t\t\t\t\t\t<div class=\"timeline-segment__paragraph\">Research methods expand integrated field management technologies and private cloud computing</div>\n\t\t\t\t\t\t\t\t\t",
								listTitle: "Added Areas of Business:",
								listItems: ["Traffic management", "Operations research", "Expanded household travel survey", "Expanded behavioral and mental health", "Homeland security", "Expanded military and veteran", "Voting patterns and attitude"]
							}]
						}
					}
				},
				expertise: {
					title: "expertise",
					titleTwo: "expertise areas",
					module: "who we are",
					backgroundImage: "url('assets/expertise background.jpg')",
					footer: "Westat forms targeted teams to meet project requirements",
					one: {
						format: 0,
						position: 3,
						definitions: [{
							def: "A project team typically includes statisticians, methodologists, systems developers, questionnaire designers, data collectors, data managers and analysts, and other skilled technical and support staff.",
							top: "2vw",
							left: "53vw"
						}],
						wordArt: "url('assets/knowledge type.png')",
						content: "<p>Westat provides custom solutions that rely on experts throughout the company, staff with unique skills and experience, allowing for fresh perspectives and innovation.</p>\n\n\t\t\t\t\t\t\t<p>Throughout your career, you will have opportunities to apply and build your individual expertise as well as collaborate with Westat staff across the study areas and departments. This <a class=\"definition-popup__link 0\" tabindex=\"1\">dynamic team structure</a> is one way we continue to build our corporate expertise.</p>"
					},
					two: {
						format: 1,
						position: 4,
						footer: " ",
						awards: {
							title: "Westat's Methodology and Technology Highlights",
							body: "<ul>\n \t\t\t\t\t\t\t\t\t\t<li>Eye-tracking analysis for improved questionnaire design </li>\n\t\t\t\t\t\t\t\t\t\t<li>Incentive experiments to improve survey response</li>\n\t\t\t\t\t\t\t\t\t\t<li>Global positioning systems (GPS) for improved survey efficiency</li>\n\t\t\t\t\t\t\t\t\t\t<li>Dashboard to monitor key performance indicators</li>\n\t\t\t\t\t\t\t\t\t\t<li>Integrated information flows across collection modes to improve management </li>\n\t\t\t\t\t\t\t\t\t\t<li>Environmental and biological/genetic specimen tracking to meet clinical standards</li>\n\t\t\t\t\t\t\t\t\t\t<li>Integrated coordinating centers for improved multicenter collaborative\xA0studies</li>\n\t\t\t\t\t\t\t\t\t\t<li>High-speed scanning of materials to reduce costs and improve quality</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t",
							images: ["assets/EAGLE.png", "assets/M3.png", "assets/Pd3.png"]
						},
						tabs: [{
							name: "data collection & management",
							text: "<p>We lead our industry in collecting and managing data from surveys, biomarkers, assessments, administrative records, clinical trials, qualitative studies, and other sources. Our experts apply innovative methods and technologies to project needs, from small, local, one-off research activities to large-scale national and international programs spanning decades. Across all modes of data collection and through to data delivery, Westat maintains best practices for high-quality data products.</p>\n \t\t\t\t\t\t\t\t\t<p>Westat has pioneered various <a class=\"award-modal__link\" tabindex=\"1\">methodologies and technologies</a>.</p>",
							footer: "We lead our industry in data collection & management",
							examples: [{
								title: "MEPS",
								img: "url('assets/MEPS.png')",
								modal: {
									title: "Medical Expenditure Panel Survey (MEPS) – Household Component",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> Agency for Healthcare Research and Quality (AHRQ) and National Center for Health Statistics (NCHS)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p> The MEPS produces a series of data files on health care use and expenditures for the noninstitutionalized U.S. civilian population. The survey uses overlapping household panels, with a new panel sampled each year from households participating in the prior year\u2019s National Health Interview Survey. MEPS households complete five rounds of CAPI interviews over 30 months, providing information for 2 calendar years. The Household Component (HC) is supplemented by a Medical Provider Component (MPC), in which additional information on diagnoses, services, charges, and payments is collected from providers and pharmacies that provide services to household respondents during the survey period. </p>",
									topImage: "assets/MEPS.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}, {
								title: "PATH",
								img: "url('assets/PATH.png')",
								modal: {
									title: "Population Assessment of Tobacco and Health Study (PATH 1.0 and 2.0)",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> National Institute on Drug Abuse (NIDA)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p> The 2009 Family Smoking Prevention and Tobacco Control Act (FSPTCA) gave FDA the authority to regulate the advertising, labeling, and ingredients of tobacco products. In support of NIDA and FDA, Westat is conducting a large national longitudinal cohort study of U.S. tobacco users and nonusers (aged 12+). By measuring the behavioral and health effects associated with FSPTCA regulatory changes, this study will provide an empirical evidence base for developing, implementing, and evaluating regulations governing tobacco products. In addition to interview data, the PATH Study collects biologic specimens.  </p>",
									topImage: "assets/PATH.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}, {
								title: "50-State Survey of Fishing, Hunting, & Wildlife",
								img: "url('assets/AFWA.png')",
								modal: {
									title: "50-State Survey of Fishing, Hunting, and Wildlife-Related Recreation",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> Association of Fish and Wildlife Associations</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p> Westat conducted 50 individual state surveys on fishing, hunting, and wildlife watching in CY2016. The survey data is being used to generate national and state-level estimates. In addition, results obtained using a new methodology (mail surveys sent to a two-phase address-based sample) are being compared to results obtained nationally and in four states from a separate survey also conducted in CY2016 by the U.S. Census Bureau.</p>",
									topImage: "assets/AFWA.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}]
						}, {
							name: "statistical research & survey methods",
							text: "<p>We lead in conducting comprehensive statistical research and applying innovative survey methods.</p>\n\t\t\t\t\t\t\t\t\t<p>This support work cuts across several dimensions:\xA0survey design,\xA0methodological research,\xA0pretesting methods,\xA0statistical design and data science, and\xA0statistical disclosure control.</p>\n\n\t\t\t\t\t\t\t\t\t<p>Westat statisticians and methodologists have deep expertise in all these areas that are well known throughout our industry. These staff work as integral members of our study teams and lead us in applying efficient, unbiased methods to all of our work.</p>\n\n\t\t\t\t\t\t\t\t\t<p>In a nutshell, our statisticians and methodologists focus on accurate measurement and the best ways to accomplish it.</p>",
							footer: "We lead our industry in research & survey methods",
							examples: [{
								title: "NAEP",
								img: "url('assets/NAEP.png')",
								modal: {
									title: "National Assessment of Educational Progress (NAEP)",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> National Center for Education Statistics (NCES)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p> NAEP is an ongoing, congressionally mandated survey of the knowledge and skills of young Americans in a variety of academic subjects. Westat has been the sampling and data collection contractor for NAEP since 1983. In addition to planning all aspects of data collection, every 2 years, Westat hires, trains, and supervises thousands of field staff, who assess more than 1,000,000 students in over 18,000 schools in a 6-week window. In addition to state, national, and long-term trend analyses, Westat regularly conducts special studies, including transcript studies, studies linking NAEP to other assessment programs, technology-based assessments, writing portfolio studies, studies of group learning, and oral reading studies.</p>",
									topImage: "assets/NAEP.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}, {
								title: "ANES",
								img: "url('assets/ANES.png')",
								modal: {
									title: "American National Election Studies (ANES) 2016 Time Series Study: Internet Component",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> Stanford University </p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p> The ANES 2016 Time Series Study is the premier academic survey covering U.S. presidential elections. This contract covered two modes of data collection: a face-to-face component and an internet component. The internet component was built upon the results of the ANES Recruitment Pretest Study that Westat conducted to test several experimental protocols for recruiting web participants via mail. The ANES 2016 Times Series Study consisted of two interviews, a pre-election and a post-election interview, spanning approximately two months before and after Election Day 2016 respectively. The interviews collected information on electoral participation, voting behavior, public opinion, media exposure, cognitive style, and values and predispositions. The target population of the ANES was U.S. eligible voters, defined as U.S. citizens residing at a sampled residential address who were 18 years or older on Election Day, in the contiguous U.S. plus D.C.</p>",
									topImage: "assets/ANES.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}, {
								title: "Diabetes Modeling Project",
								img: "url('assets/CDC.png')",
								modal: {
									title: "Diabetes Modeling Project",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> Centers for Disease Control and Prevention (CDC)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p> The lack of state and local population estimates of risk factor control affects CDC\u2019s ability to measure, stimulate, and track improvement in chronic disease prevention. During this 3-year project, Westat is assembling, combining, and validating existing data sources to produce data sets and composite estimates of levels of and trends in the control of diabetes, prediabetes, risk factors, and diabetes complications, using data from a number of jurisdictions and the nation. The results will serve as a prototype for a sustainable system to monitor the outcomes of chronic disease prevention activities.</p>",
									topImage: "assets/CDC.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}]
						}, {
							name: "program & policy evaluation",
							text: "<p>We lead in program and policy evaluation by observing, analyzing, and measuring the fit and function of a variety of social services available to Americans.</p>\n\t\t\t\t\t\t\t\t\t<p>Applying our expertise in program evaluation, we answer important questions such as:</p>\n\t\t\t\t\t\t\t\t\t<ul class=\"tab-panel__list\">\n\t\t\t\t\t\t\t\t\t\t<li>Is gender-sensitive substance treatment effective?</li>\n\t\t\t\t\t\t\t\t\t\t<li>Are government services for older Americans reaching their target?</li>\n\t\t\t\t\t\t\t\t\t\t<li>Does a school-based reading program improve young students\u2019\xA0reading?</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t",
							footer: "We lead our industry in program & policy evaluation",
							examples: [{
								title: "SED",
								img: "url('assets/SED.png')",
								modal: {
									title: "Supported Employment Demonstration (SED) Project",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> Social Security Administration (SSA)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p> SSA contracted with Westat to implement and evaluate the SED which provides integrated mental health and vocational services to people with mental illness who were recently denied Social Security disability benefits. The evaluation used a randomized controlled trial to compare the outcomes of two treatment groups (full service and basic service) and a control group. Data collection included computer-assisted baseline (in-person) and blinded quarterly (telephone) interviews, collection of SSA administrative and program data, site visits (including fidelity assessments), qualitative interviews with site administrators and service providers, participant focus groups, and ethnographic interviews with participants and nonparticipants. The evaluation includes five components.</p>",
									topImage: "assets/SED.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}, {
								title: "NSOAAP",
								img: "url('assets/ACL.png')",
								modal: {
									title: "Redesign of the National Survey of Older Americans Act Participants (NSOAAP)",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> Administration for Community Living/Administration on Aging (ACL/AOA), U.S. Department of Health and Human Services (HHS)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p> The NSOAAP is a yearly national survey of Older Americans Act participants. The CATI survey covers transportation, congregate and home-delivered meals, case management, homemaker services, and the National Family Caregiver Support Program. Westat examined redesign options, including incorporation of a longitudinal component, development of core sets of questions and measures, introduction of rotating topical modules, assessment of the feasibility and cost of state-level data collection, and incorporation of questions from other surveys. Westat collaborated with ACL/AOA to produce updated questions for at least three surveys, conducted ad hoc analyses, and delivered a final briefing and report.</p>",
									topImage: "assets/ACL.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}]
						}, {
							name: "technical assistance",
							text: "<p>Westat\xA0supports research, implementation, and evaluation programs by providing expertise and assistance to agencies conducting the work.</p>\n\t\t\t\t\t\t\t\t\t<p>This technical expertise takes many forms, including operating\xA0coordinating centers,\xA0transferring knowledge\xA0from model law enforcement agencies to target agencies, creating resource and\xA0educational materials,\xA0and\xA0providing training.</p>",
							footer: "Our technical assistance enhances program success",
							examples: [{
								title: "TIF/ARRA",
								img: "url('assets/TIF.png')",
								modal: {
									title: "Technical Assistance for Teacher Incentive Fund (TIF) Grants Funded Under the American Recovery and Reinvestment Act (ARRA)",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> U.S. Department of Education (ED)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p> Through a combination of ARRA funds and increased appropriations, ED expanded the TIF program to offer additional opportunities for schools, districts, states, and nonprofit organizations to design and implement innovative ways of identifying and rewarding effective teaching and leadership while increasing student achievement. Westat led a team of organizations working with ED to support the third and fourth cohorts of TIF grantees. The team monitored the progress of TIF grants and provided technical assistance in areas such as data quality, stakeholder engagement, program evaluation, and sustainability. </p>",
									topImage: "assets/TIF.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}, {
								title: "CECTR",
								img: "url('assets/NCCIH.png')",
								modal: {
									title: "Center for Evaluation and Coordination of Training and Research in Tobacco Regulatory Science (CECTR)",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> National Cancer Institute (NCI)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p> Westat served as a coordinating and resource center for the FDA\u2019s Center for Tobacco Products (CTP) research. Grantees included 14 Tobacco Centers of Regulatory Science and other TRS research programs. The objective of the CECTR is to support and evaluate these programs in order to assist CTP in developing and evaluating tobacco product regulatory activities and actions. The work of the CECTR is organized around four cores: Leadership and Administration Core; Evaluation Core; Evaluation and Training Core; and  Analytics and Synthesis Core. </p>",
									topImage: "assets/NCCIH.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}, {
								title: "PHIA",
								img: "url('assets/PHIA.png')",
								modal: {
									title: "Population-Based HIV Impact Assessments in Malawi and Zimbabwe",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> Centers for Disease Control and Prevention (CDC)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p> Westat supported Columbia University\u2019s ICAP in developing and implementing population-based HIV impact assessment (PHIA) surveys in Malawi and Zimbabwe. Westat provided technical support for the development of survey sampling frames and weight estimates, as well as an electronic data collection system using Open Data Kit (ODK) software. Westat also provided in-country training on data collection, editing, and uploading from tablet computers to the Westat server; data management support for survey data; and creation of a public release data set.</p>",
									topImage: "assets/PHIA.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}]
						}, {
							name: "health research",
							text: "<p>Westat excels in designing, managing, and analyzing clinical trials and health studies. Our work includes an expansive portfolio of domestic and international trials, epidemiologic studies, comparative effectiveness studies, and community- and clinic-based health interventions.</p>\n\t\t\t\t\t\t\t\t<p>The health topics we study and measure run the gamut from physical and mental health to epidemiology, health IT, and health care delivery.</p>\n\t\t\t\t\t\t\t\t<p>Together, the trials and studies we conduct create a rich source of accurate, relevant, and timely data on health that helps guide actions and policies to improve our nation\u2019s and the world\u2019s well-being.</p>",
							footer: "We lead our industry in clinical trials & health studies",
							examples: [{
								title: "NHANES",
								img: "url('assets/NHANES.png')",
								modal: {
									title: "Health National Health and Nutrition Examination Survey (NHANES)",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> National Center for Health Statistics (NCHS)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p> NHANES collects data on the health of the U.S. population through interviews and physical examinations performed in specially equipped mobile examination centers (MECs) that travel from site to site. Westat has supported NHANES since 1973. Project staff identify MEC sites; recruit, hire, and train interviewers and examiners; conduct all interviews in person (typically in respondents\u2019 homes); and perform medical examinations in the MEC. Westat continues to provide statistical and IT support for NHANES; integrate new content and conduct methodology studies, pilot tests, and related activities; and prepare public use data files.</p>",
									topImage: "assets/NHANES.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}, {
								title: "CTSU",
								img: "url('assets/CTSU.png')",
								modal: {
									title: "Cancer Trials Support Unit (CTSU)",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> National Cancer Institute (NCI)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p> The CTSU facilitates access to NCI-funded oncology clinical trials for qualified clinical sites and supports trial management and implementation. It provides centralized access to a wide range of information and operational and informatics support services for trials conducted within NCI-funded networks. Under task orders, Westat provides support for Core Support Services and the CTSU Enterprise of Systems, the ETCTN process evaluation, Medidata Rave hosting and maintenance, and the central coordination of NCTN auditing activities. </p>",
									topImage: "assets/CTSU.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}, {
								title: "Ghana Breast Health Study",
								img: "url('assets/GHANA.png')",
								modal: {
									title: "Ghana Breast Health Study",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> National Cancer Institute (NCI)</p>\n \t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n \t\t\t\t\t\t\t\t\t\t\t\t<p> This case-control study recruited women suspected of having breast cancer from three hospitals in Ghana as well as an equivalent number of frequency-matched population controls from the catchment areas surrounding the hospitals. Since study initiation in 2011, Westat has developed a study brochure; data collection forms; an operations and procedures manual; and has trained staff in Ghana. Westat also established a local data entry and continuous web-based data transfer system, monitored data receipt and quality control, and provided remote system and logistical support to the sites as well as tracking of biospecimen samples. Westat cleaned and documented data for final delivery, summarizing data for publication and supporting management of analytic substudies.</p>",
									topImage: "assets/GHANA.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}]
						}, {
							name: "communications & social marketing",
							text: "<p>Westat empowers our clients to educate, motivate, and change public attitudes and behaviors about issues that affect our lives through social marketing campaigns, multifaceted education and outreach programs, and first-to-market digital marketing strategies.</p>\n\t\t\t\t\t\t\t\t\t<p>We seek to understand what motivates people, and then develop and evaluate compelling messages and materials that get results. We employ state-of-the-art tools, tactics, and channels to connect with a range of target audiences.</p>",
							footer: "We lead our industry in communications & social marketing",
							examples: [{
								title: "Native Diabetes Wellness Program",
								img: "url('assets/NDWP.png')",
								modal: {
									title: "Development and Marketing of Youth Eagle Books for Diabetes Prevention and Health Promotion Among American Indians/Alaska Natives",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> Centers for Disease Control and Prevention (CDC)</p>\n \t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n \t\t\t\t\t\t\t\t\t\t\t\t<p> CDC\u2019s Native Diabetes Wellness Program contracted with Westat to develop three Eagle Books for Native American youth aged 9 to 13. The project included a community outreach campaign that featured the health messages in the original Eagle Books and promotion of new books. The books were accompanied by a curriculum guide and ancillary products. Westat contracted with and monitored the work of authors and illustrators and worked with a subcontractor to plan, develop, and implement a community outreach campaign for five Native American communities. Westat also developed a broad range of educational and promotional items.</p>",
									topImage: "assets/NDWP.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}, {
								title: "Immunization Marketing",
								img: "url('assets/NCIRD.png')",
								modal: {
									title: "Engaging Partners and Leaders to Promote Influenza Vaccination Through a Communication and Social Marketing Campaign",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> National Center for Immunization and Respiratory Diseases</p>\n \t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n \t\t\t\t\t\t\t\t\t\t\t\t<p> The National Center for Immunization and Respiratory Diseases contracted with Westat to promote vaccination among the U.S. population and specific groups for which immunization is especially important. Westat developed an award-winning, multipronged marketing strategy with a strong digital focus to reach a national audience and key groups at higher risk for flu complications. The strategy included digital partner activities, social media, and paid digital advertising. Westat engaged more than 180 national partners, worked with MeetUp groups nationwide, built a digital ambassador program, launched an award-winning viral hashtag campaign (#vaxwithme), and implemented several innovative paid digital media campaigns.  The campaign generated close to 1 billion total impressions.</p>",
									topImage: "assets/NCIRD.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}, {
								title: "AIDS Awareness",
								img: "url('assets/AIDS.png')",
								modal: {
									title: "Development and Dissemination of a General Awareness Social Marketing Campaign for the Act Against AIDS Campaign",
									body: "<p><strong class=\"example-modal__subhead\">Client:</strong> Centers for Disease Control and Prevention (CDC)</p>\n \t\t\t\t\t\t\t\t\t\t\t\t<p><strong class=\"example-modal__subhead\">Project Overview</strong></p>\n \t\t\t\t\t\t\t\t\t\t\t\t<p> The National Center for HIV/AIDS, Viral Hepatitis, STD, and TB Prevention contracted with Westat to develop a national social marketing campaign to raise awareness of the importance of and to encourage universal HIV testing. This general audience campaign was a component of CDC\u2019s Act Against AIDS initiative and complemented the National HIV/AIDS Strategy. Westat conducted formative research to inform campaign messages and materials, developed a strategic campaign implementation plan, and worked with CDC and its partners to implement the campaign nationwide.</p>",
									topImage: "assets/AIDS.png",
									bottomImage: "assets/NAEP casestudy.png"
								}
							}]
						}]
					}
				},
				culture: {
					title: "culture",
					titleTwo: "about our culture",
					module: "who we are",
					backgroundImage: "url('assets/culture_background-01.png')",
					footer: "Westat employees participate in a vibrant corporate culture",
					one: {
						format: 3,
						position: 5,
						wordArt: "url('assets/collaboration type.png')",
						content: {
							text: '',
							heights: ["14vw", "12vw", "15vw", "15vw"],
							segments: [{
								title: "Employee Ownership and Accountability",
								content: "Because our staff members are also employee-owners, all are accountable for our continued success. Thriving in our strong team environment, Westat employees participate in a vibrant corporate culture that attracts and develops talent, and supports their career growth, work-life balance, and health while providing high-quality results to our clients."
							}, {
								title: "Collaboration and Knowledge Sharing",
								content: "Westat\u2019s culture is one of collaboration and inclusivity. Our diverse staff brings varied perspectives that drive the sound science, creativity, and innovation that are necessary for high-quality research. We encourage knowledge sharing across all of our study areas and departments."
							}, {
								title: "Support for Long-Term Career Growth",
								content: "<p>A hallmark of Westat is our commitment to the long-term growth of each employee. Once you are on board, Westat welcomes your engagement in both internal and external training opportunities.</p>\n\n\t\t\t\t\t\t\t\t\t\t<p>Essential to Westat\u2019s unique culture is our investment in employee-owners, technology and methods, industry engagement, and best practices.</p>"
							}, {
								title: "Big Company with Small Company Feel",
								content: "Despite the steady growth we have experienced over our 50-plus year history, we have retained the intimacy of a smaller company by applying team and group expert models to staff our projects. We extend that model through our collaborative relationships with our clients."
							}]
						}
					},
					two: {
						format: 1,
						position: 6,
						footer: " ",
						definitions: [{
							term: "AAPOR",
							def: "The American Association for Public Opinion Research (AAPOR) is the leading professional organization of public opinion and survey research professionals in the United States, with members from academia, media, government, the nonprofit sector, and private industry.",
							top: "6vw",
							left: "44vw"
						}, {
							term: "ASA",
							def: "The American Statistical Association (ASA) is the world’s largest community of statisticians. The ASA supports excellence in developing, applying, and disseminating statistical science. Members serve in industry, government, and academia, advancing research and promoting sound statistical practice to inform public policy and improve human welfare.",
							top: "6vw",
							left: "44vw"
						}, {
							term: "TRB",
							def: "The Transportation Research Board (TRB) is one of seven program units of the National Academies of Sciences, Engineering, and Medicine. TRB’s varied activities engage more than 7,000 engineers, scientists, and other transportation researchers and practitioners from the public and private sectors and academia.",
							top: "8vw",
							left: "40vw"
						}, {
							term: "APHA",
							def: "The American Public Health Association (APHA) is a professional organization for public health professionals in the United States. APHA’s purpose is to strengthen the public health profession while championing the health of all people and all communities.",
							top: "12vw",
							left: "44vw"
						}],
						tabs: [{
							name: "employee-owners",
							text: "<p>Westat values lifelong learners who will adapt, influence, and grow within our company as our industry evolves.</p>\n\t\t\t\t\t\t\t\t\t<p>Westat invests in a careful process to identify, engage with, and employ highly qualified staff. Human Resource professionals, personnel supervisors, task leaders, and unit managers participate in the hiring process.</p>",
							wordArt: "url('assets/employee type.png')",
							footer: "Westat invests in & engages highly qualified staff"
						}, {
							name: "commitment to careers",
							text: "<p>Build your skill set and role. Westat supports your career growth:</p>\n\t\t\t\t\t\t\t\t\t<ul class=\"tab-panel__list\">\n\t\t\t\t\t\t\t\t\t\t<li>On-the-job learning, including cross-training</li>\n\t\t\t\t\t\t\t\t\t\t<li>Tuition reimbursement</li>\n\t\t\t\t\t\t\t\t\t\t<li>Membership in our industry\u2019s professional organizations</li>\n\t\t\t\t\t\t\t\t\t\t<li>Attendance and participation in conferences</li>\n\t\t\t\t\t\t\t\t\t\t<li>Coaching/mentoring from top experts</li>\n\t\t\t\t\t\t\t\t\t\t<li>Task delegation and transfer of leadership over time</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t",
							wordArt: "url('assets/careers type.png')",
							footer: "Westat encourages innovation & collaboration"
						}, {
							name: "technology & methods",
							text: "<p>Westat incorporates innovations into proven protocols, employing technology that enhances our capabilities and results. Project areas stay abreast of technological and methodological developments, adapting project plans accordingly.</p>\n\t\t\t\t\t\t\t\t\t<p>Recent innovations in data collection include smartphone, tablet, and laptop applications that provide data collectors with detailed real-time schedules, turn-by-turn directions to data collection sites, efficient data entry, and real-time data transmission. Project directors monitor field staff activities with GPS to track progress and ensure performance conforms to project guidelines. Dashboards support project management and client staff in directing work and identifying problems early.</p>",
							wordArt: "url('assets/technology type.png')",
							footer: "Westat stays abreast of technology & methodology"
						}, {
							name: "industry engagement",
							text: "<p>Westat\u2019s staff members are recognized as leaders in social science research. To foster professional growth, encourage networking and visibility, and provide opportunities to advance scientific knowledge, we encourage participation in professional associations and conferences.</p>\n\t\t\t\t\t\t\t\t\t<p>Staff are contributing members of public opinion, survey research, and professional organizations, such as the American Association for Public Opinion Research\xA0<a class=\"definition-popup__link 0\" tabindex=\"1\">(AAPOR)</a>, the American Statistical Association\xA0<a class=\"definition-popup__link 1\" tabindex=\"1\">(ASA)</a>, the Transportation Research Board\xA0<a class=\"definition-popup__link 2\" tabindex=\"1\">(TRB)</a>, the American Public Health Association\xA0<a class=\"definition-popup__link 3\" tabindex=\"1\">(APHA)</a>, and many others.</p>",
							wordArt: "url('assets/industry segment type.png')",
							footer: "Westat is a prominent member of many associations"
						}, {
							name: "best practices",
							text: "<p>Westat invests in applying our industry\u2019s best practices to conduct our work and manage our employee-owned company. Our commitment to developing and applying best practices requires that staff use all that is available at Westat &mdash; our knowledge and technology &mdash; to ensure high-quality performance and ongoing success.</p>\n\n\t\t\t\t\t\t\t\t\t<p>Through our experience and focused research, Westat identifies and documents the processes, techniques, and methodologies that reliably lead to the desired result.</p>\n\n\t\t\t\t\t\t\t\t\t<p>Westat invests in staff participation and networking in external professional organizations as well as internal groups and committees with well-defined objectives.</p>\n\t\t\t\t\t\t\t\t",
							wordArt: "url('assets/best practices.png')",
							footer: "Westat is committed to best practices in all areas of our work"
						}]
					}
				},

				ourWork: {
					title: "our work",
					// module: "who we are",
					// backgroundImage: "",
					// footer: "Westat invests in & highly engages qualified staff",
					one: {
						format: "outro",
						file: "animations/ourWork.js",
						fileName: "our-work",
						transitionText: "what we do",
						position: 7
					}
				}
				// outro: {

				// }
			}
		},
		moduleTwo: {
			title: "what we do",
			img: "url('./assets/what light.jpg')",
			blockColor: "home-nav--green",
			link: "../two/intro.html",
			class: 'module-two',
			introFooter: "Westat is one of the foremost professional service corporations of its kind",
			sections: {
				intro: {
					introTitle: "what we do",
					introFooter: "Westat is one of the foremost professional service corporations of its kind",
					backgroundImage: 'url("./assets/mod 2 background.jpg")',

					// backgroundImage: "url('./assets/Mod_2_Infogr_Bkgrnd_Transportation.png')",

					one: {
						format: 'intro',
						position: 8,
						backgroundImage: 'url("./assets/mod 2 background.jpg")'

					}
				},
				subjectAreas: {
					title: "subject areas",
					link: "../two/subjectAreas1.html",
					backgroundImage: "url('./assets/Mod_2_Infogr_Bkgrnd_Transportation.png')",
					module: 'what we do',
					one: {
						format: "subjectAreas",
						position: 9,
						viewBox: "-70 -70 140 140",
						bigGear: [55, 22, 6, 6, 0, 0],
						arcs: [{
							d: "M 0 45 A 45 45, 0, 0, 0, 42.8 13.9 L 0 0 Z",
							text: "transportation",
							name: "transportation",
							textX: 2,
							textY: 22,
							gearX: 34.1,
							gearY: 47,
							icon: "./assets/Gear_Transportation.svg",
							image: "./assets/Type_Transportation.png",
							iconImg: "./assets/overlay_Transportation.png",
							top: "38vw",
							left: "67vw",

							// gearX: 0,
							// gearY: 0,
							list: [{
								title: 'overview',
								name: 'Overview',
								text: 'Americans take 1.1 billion trips a day, totaling 4 trillion miles over a year. Our nationally recognized transportation researchers study vehicle technology, travel behavior, and traffic operations systems to help find and address traffic and safety challenges. We also explore motorcyclist, pedestrian, special driving population, distraction, and consumer safety issues, vehicle automation and connectivity challenges, and travel behavior patterns.'
							}, {
								title: 'safety',
								name: 'Safety',
								text: "To reduce the causes and consequences of motor vehicle crashes, Westat's transportation safety research focuses on identifying problems, evaluating countermeasures, and enhancing safety programs. We conduct national surveys of restraint use and travel speeds. We also provide technical assistance and evaluation services to state and local law enforcement programs."
							}, {
								title: 'human factors & emerging technologies',
								name: 'Human Factors & Emerging Technologies',
								text: 'How do drivers and passengers respond to emerging vehicle technologies and real-time driving challenges? Using specially instrumented vehicles, driving simulators, laboratory studies, and surveys, Westat supports the development of industry standards and regulatory guidelines that address safety concerns. Older drivers, novice drivers, chronic speeders, and drivers of vehicles with new technologies are often the focus of our work.'
							}, {
								title: 'travel behavior',
								name: 'Travel Behavior',
								text: 'Driving, using public transportation, walking, and riding a bicycle to conduct daily activities affect traffic congestion, the environment, and health. Westat employs web-based and telephone surveys, smartphone apps, GPS loggers, and accelerometers to collect data that helps planners understand current travel patterns and build models that predict future travel patterns.'
							}, {
								title: 'traffic management and operations',
								name: 'Traffic Management and Operations',
								text: 'Traffic cameras, roadside sensors, cell phones, and other technologies feed data into traffic operations and management centers that monitor traffic flow, crash occurrences, special events, and weather issues that affect drivers. Westat develops methods to use this information effectively, improve its quality, and share it with the motoring public while protecting driver privacy and ensuring safety.'
							}, {
								title: 'consumer safety',
								name: 'Consumer Safety',
								text: 'Human factors and user experience experts conduct research on consumer products to better define safety hazards and evaluate countermeasures. Recent topics include seat belt interlocks on recreational off-road vehicles (ROVs), child-resistant ignitions on all-terrain vehicles (ATVs), and studying potential choking hazards from window blind cords.'
							}]
						}, {
							d: "M 42.8 13.9 A 45 45, 0, 0, 0, 26.45 -36.4 L 0 0 Z",
							text: "social policy",
							name: "social policy",
							textX: 7,
							textY: -2,
							gearX: 58,
							gearY: 0,
							icon: "./assets/Gear_SocialPolicy.svg",
							image: "./assets/Type_Social_Policy.png",
							iconImg: "./assets/overlay_gear_SocialPolicy.png",
							top: "19vw",
							left: "75vw",
							list: [{
								title: 'overview',
								name: 'Overview',
								text: 'Westat projects evaluate the fit and function of a variety of social services available to Americans. From children and families to marginalized populations, Westat collects data and performs evaluations that impact public policy decisions. '
							}, {
								title: 'aging populations',
								name: 'Aging Populations',
								text: '<p>Westat provides valuable information resources, from survey data to analyses, to support basic research and policy decisions to meet the challenges facing our aging populations.</p><p>We help our clients answer these and other questions:</p><ul><li>Are government services supporting the aging population optimally?</li><li>What are the trends in late-life functioning and what are the economic and social consequences of aging and disability for individuals, families, and society?</li><li>What factors characterize “exceptional agers,” those people who stay mentally sharp and physically well into their 80s, 90s, and older?</li></ul>'
							}, {
								title: 'children and families',
								name: 'Children and Families',
								text: '<p>Do programs reach their goals to protect and strengthen families? Westat has extensive experience with child welfare and family preservation programs, studies on child abuse and neglect, foster care, and general family functioning. We work with our clients to accomplish these and other goals:</p><ul><li>Boost child passenger safety</li><li>Champion for a healthier diet</li><li>Chart early childhood development</li><li>Count abused and neglected children</li><li>Examine the health habits of teens and their parents</li><li>Help young people transition out of foster care</li><ul>'
							}, {
								title: 'criminal justice',
								name: 'Criminal Justice',
								text: 'Our criminal justice system raises tough topics that require hard statistics: juvenile delinquency, victimization, sexual assault, probation, parole. Westat conducts research on crime characteristics and trends so that policymakers can develop actionable solutions to criminal justice problems.'
							}, {
								title: 'economics',
								name: 'Economics',
								text: 'Westat economics research provides hard data for economic policymakers and business people. Our projects include economic empowerment for veterans, marketing to special populations, health economics, the economic and social consequences of aging and disability, health care claims and administrative data, a census of the U.S. economy, and cost-benefit analyses of social programs and policies.'
							}, {
								title: 'employment',
								name: 'Employment',
								text: 'Issues regarding employment, from both employer and employee perspectives, are complex and far reaching; hiring and recruitment, immigration compliance, training, health care, health and safety, and employee satisfaction are just some of the issues in today\'s employment landscape. Westat conducts both qualitative and quantitative workforce studies that address these topics. From evaluating E-Verify to comparing literacy skills of adults worldwide to evaluating the success of vocational rehabilitation programs, Westat provides valuable data and analysis on employment issues and trends.'
							}, {
								title: 'energy consumption',
								name: 'Energy Consumption',
								text: 'Who are the major users of energy in America and what energy sources do they use? Our research plays a vital part in major studies that track energy consumption, evaluate energy conservation programs, and measure adoption of alternative fuel usage.'
							}, {
								title: 'homelessness and housing',
								name: 'Homelessness and Housing',
								text: 'Westat studies the problem of homelessness from a variety of perspectives, including causes, interventions, transitioning to homes, and funding for services. We help clients select and implement effective housing programs, including public housing, services for special-needs populations, community revitalization, and home ownership.'
							}, {
								title: 'human trafficking prevention',
								name: 'Human Trafficking Prevention',
								text: 'Human trafficking is a crime of exploitation, with the majority of incidents exploiting victims for sex or forced labor. Westat studies measure the number of missing, abused, and exploited children, evaluate the effectiveness of programs that remove children from exploitive situations, and assess methods that combat international trafficking of persons of all ages.'
							}, {
								title: 'military and veteran life',
								name: 'Military and Veteran Life',
								text: 'Many factors affect the everyday lives of active duty military personnel, veterans, and their families. Westat research supports the military\'s human resource needs, including personnel recruitment and retention, quality of life, and programs for military members and their families. The results of these studies are used to shape many of the human resources policies and practices of the U.S. military.'
							}]
						}, {
							d: "M 26.45 -36.4 A 45 45, 0, 0, 0, -26.45 -36.4 L 0 0 Z",
							text: "health",
							name: "health",
							textX: -7,
							textY: -20,
							gearX: 0,
							gearY: -50,
							icon: "./assets/Gear_Health.svg",
							image: "./assets/Type_Health.png",
							iconImg: "./assets/overlay_gear_Health.png",
							top: "2vw",
							left: "15vw",
							list: [{
								title: 'overview',
								name: 'Overview',
								text: 'We collect data through interviews, physical exams, and records review to help guide actions and policies to improve health and health care around the world.'
							}, {
								title: 'clinical trials and public health',
								name: 'Clinical Trials and Public Health',
								text: 'Our clinical trials include support for drug, biologic, and device development for both commercial and government clients. We offer trial design and management, laboratory support, and site management and monitoring. Our epidemiologic research helps to understand the risk factors associated with disease, characteristics and prevalence of disease, and how health conditions affect populations. We conduct surveys on the status of the nation\'s health, and implement and rigorously evaluate clinic- and community-based health interventions and programs, as well as health care services provided to veterans.'
							}, {
								title: 'health care',
								name: 'Health Care',
								text: 'Gathering accurate, relevant, and timely data on the health of all Americans helps guide actions and policies to improve our nation\'s well-being. Health services researchers at Westat seek to improve patient outcomes, patient care quality, and service coordination. We provide national estimates of the use and cost of health care services, study the causes and effects of health disparities among specific population subgroups, and investigate quality of care for targeted health conditions.'
							}, {
								title: 'behavioral and mental health',
								name: 'Behavioral and Mental Health',
								text: 'Westat evaluates the challenges in addressing the impact of addictions and mental health issues on the individual and society. We support research efforts to treat, reduce, and prevent these issues through assessment, technical assistance and implementation, and evaluation of programs and policies for adults, children, and veterans. Our work supports advancing health care systems and services integration; optimizing benefit programs; adopting and financing evidence-based and/or promising practices to improve quality of life (such as return to work programs and software technologies to enhance care); and evaluating specified intervention programs.'
							}]
						}, {
							d: "M -26.45 -36.4 A 45 45, 0, 0, 0, -42.8 13.9 L 0 0 Z",
							text: "education",
							name: "education",
							textX: -35,
							textY: -2,
							gearX: -58,
							gearY: 0,
							icon: "./assets/Gear_Education.svg",
							image: "./assets/Type_Education.png",
							iconImg: "./assets/overlay_gear_Education.png",
							top: "19vw",
							left: "2vw",
							list: [{
								title: 'overview',
								name: 'Overview',
								text: '<p>From students to teachers, from performance standards to national and international comparisons, Westat sets the benchmark on excellence in research, evaluation, and technical assistance around education\'s pressing issues.</p><p>As an objective provider of rigorous research, evaluation, and analysis, we let the data that we collect, manage, analyze, and deliver tell the story.</p><p>As a multifaceted technical assistance partner, we deliver an array of services, including training, mentoring, monitoring use of data, reporting, communications, and dissemination support.</p>'
							}, {
								title: 'education reform',
								name: 'Education Reform',
								text: 'Westat examines the implementation and outcomes of high-profile reform initiatives designed to improve education for today\'s students. How do we improve education? What works? What doesn\'t? Are there correlations for success? Our work contributes to answering these questions.'
							}, {
								title: 'educator effectiveness',
								name: 'Educator Effectiveness',
								text: 'We help state and local education agencies design and implement educator evaluation systems, make data-driven human capital management decisions, and improve instructional practices through structured evaluation and feedback.'
							}, {
								title: 'special education',
								name: 'Special Education',
								text: '<p>Westat works with the Office of Special Education Programs (OSEP) to provide support for implementing the Individuals with Disabilities Act (IDEA). OSEP emphasizes data-based improvement planning for systemic change. With this results-driven accountability model, states need more support than ever to provide high-quality data.</p><p>Westat operates a comprehensive technical assistance center focusing on data requirements under IDEA. We provide a full range of state and local technical assistance&mdash;universal and individualized&mdash;to build capacity related to collecting, reporting, analyzing, and using high-quality IDEA data.</p>'
							}, {
								title: 'international education',
								name: 'International Education',
								text: 'How does the United States compare with other countries in preparing our students for higher education and the workplace? We conduct many of the leading international education studies, with samples sometimes covering more than 60 countries and including over half a million students.'
							}, {
								title: 'postsecondary education',
								name: 'Postsecondary Education',
								text: 'What is the state of postsecondary education in America? Westat conducts studies that examine our nation\'s research infrastructure, adult literacy, costs of postsecondary education, performance measurement, and distance education. Postsecondary education includes colleges and universities as well as technical programs and adult education.'
							}, {
								title: 'pre-k through grade 12 education',
								name: 'Pre-K through Grade 12 Education',
								text: 'How do children\'s early life and school experiences affect their future? Westat conducts research on educational achievement, comparative studies of achievement, school-level implementation of reform, and program effectiveness and impact.'
							}]
						}, {
							d: "M -42.8 13.9 A 45 45, 0, 0, 0, 0 45 L 0 0 Z",
							text: "<tspan>information</tspan><tspan dy='5' dx='-24'>systems</tspan>",
							name: "information systems",
							textX: -31,
							textY: 22,
							gearX: -34.1,
							gearY: 47,
							icon: "./assets/Gear_InformationSystem.svg",
							image: "./assets/Type_Information_Sys.png",
							iconImg: "./assets/overlay_gear_Info_Sys.png",
							top: "36vw",
							left: "7vw",
							list: [{
								title: 'overview',
								name: 'Overview',
								text: '<p>We emphasize advanced technological solutions, accessibility, usable interfaces, comprehensive testing and certification, data security and confidentiality, and user support and training.</p><p>We employ both commercial off-the-shelf (COTS) and custom software solutions to meet project needs.</p><p>We maintain a secure environment and observe all federal requirements for data confidentiality and security.</p>'
							}, {
								title: 'products distributed by Westat',
								name: 'Products Distributed by Westat',
								text: '<p><strong class="example-modal__subhead">Blaise</strong></p><p>Blaise is a multimode computer-assisted interviewing (CAI) system and survey-processing tool used by many Westat projects. Developed by Statistics Netherlands and licensed and supported in North and South America by Westat, Blaise includes many advanced capabilities that meet the high demands of today\'s CAI surveys.</p><p><strong class="example-modal__subhead">WesVar</strong></p><p>WesVar is a statistical tool that uses the robust and flexible approach of replication variance estimation. Using one of five methods of replication, users can estimate standard errors for simple estimators like totals or complicated ones like logistic regression parameter estimates.</p>'
							}, {
								title: 'innovative solutions',
								name: "Innovative Solutions",
								text: '<ul><li>Multimode survey management and support, consolidating data from CATI, CAPI, IVR, mobile, and other sources for case management and reporting</li><li>Custom extensions to support large and complex surveys</li><li>Audio-computer assisted self-interviewing (ACASI) software, featuring text-to-speech capabilities</li><li>Mobile technology in support of data collection that improves data quality and increases operational efficiencies</li><li>Web-based survey management applications to message participants via secure communication channels</li><li>Cross-platform capabilities, including iOS, Android, Windows 8.1, Cordova, Mono, and Sencha</li></ul>'
							}, {
								title: 'targeted support for project needs',
								name: 'Targeted Support for Project Needs',
								text: '<ul><li>Big data management, including GPS coordinate management, and primary sampling unit graphical editors, visualization tools, and dashboards</li><li>Virtualization and cloud computing environments, including IaaS, PaaS, and SaaS</li><li>Collaboration and communications solutions to coordinate team activities</li><li>Video capture, processing, and storage systems integrated through cloud-based services</li><li>Strong support of open-source applications, development tools, and platforms, including Drupal, FusionForge, PHP, Java, and Apache</li><li>Adaptive and responsive web sites using jQuery, HTML5, and CSS3</li><li>GPS technologies and geospatial systems for collecting, analyzing, visualizing, and reporting data</li><li>Strong capabilities in SAS and data analytics</li></ul>'
							}, {
								title: 'custom solutions for critical needs',
								name: 'Custom Solutions for Critical Needs',
								text: '<ul><li><strong>Basic Field Operations System (BFOS)</strong> manages CAI with seamless integration to Blaise and Cheshire, and supports audio computer-assisted self-interviewing (ACASI).</li><li>An <strong>interactive voice response (IVR) and web response (IWR) system</strong> provides for subject randomization and supply management.</li><li><strong>Biospecimen and Environmental Sample Tracking (BEST<sup>&reg;</sup>)</strong> software manages the life cycle of biospecimens and environmental samples.</li><li><strong>Study Tracking and Review System (STaRS)</strong> is a web-based system to manage requests to use study data and specimens. It also manages the publications, presentations, and adjunct studies.</li><li><strong>Case Management and Protocol Workflow (CMPW)</strong> suite is a comprehensive set of configurable tools.</li></ul>'
							}, {
								title: 'tools to support statistical work',
								name: 'Tools to Support Statistical Work',
								text: '<ul><li><strong>WesDaX<sup>&reg;</sup></strong> is a web-based tool that enables non-statisticians and non-analysts to specify and run their own analyses.</li><li><strong>WesPSU</strong> will form primary sampling units (PSUs) from adjacent counties, within user-specified hard boundaries, with respect to a particular objective function and within specified constraints.</li><li><strong>WesSeg</strong> will combine blocks within PSUs to satisfy the constraints indicated by the algorithm controllers.</li><li><strong>WesSamp</strong> is a SAS macro that will draw samples based on user specifications.</li><li><strong>WesDeck</strong> is software for conducting hot-deck imputation.</li><li><strong>AutoImpute</strong> is a tool for semi-parametric multivariate imputation.</li></ul>'
							}, {
								title: 'systems security and confidentiality',
								name: 'Systems Security and Confidentiality',
								text: '<p>To reduce the risk of disclosing the identity of survey respondents, we use unique statistical methods to reduce or modify data and restrict data access.</p><p>Westat-hosted data systems and sites are subject to stringent security standards. Physical data security across all network servers is ensured through the use of secure storage facilities and strict compliance with daily backup protocols.</p>'
							}]
						}]
					}
				},
				clients: {
					title: 'clients',
					titleTwo: 'client types',
					link: '../two/clients1.html',
					backgroundImage: "url('./assets/clientsBackgroundImage.png')",
					module: 'what we do',
					footer: 'Westat performs research services for a variety of clients',
					one: {
						format: 0,
						position: 10,
						wordArt: "url('./assets/clientsTypography.svg')",
						wordArtAlt: "",
						content: "<p>Westat was created and continues to exist today to perform research services focused on the clients' best interests. Providing high-quality work, on time, and within the established budget helps us to maintain our reputation. Earning the confidence of our clients is critical to winning additional work.</p>\n\t\t\t\t\t\t\t\t  <p>Many clients come to Westat with a firm idea of the project design and ask Westat to implement it.  But once they begin working with us, they are impressed by the way we think about the design and how best to operationalize it. Over time, they see Westat as contributing important design perspectives and skills.</p>\n\t\t\t\t\t\t\t\t  <p>As Westat has grown, we have expanded our business to include many client types.</p>"
					},
					two: {
						format: 1,
						position: 11,
						tabs: [{
							name: "federal government",
							text: "The majority of Westat's work is conducted on behalf of the Federal government.",
							// images: ["./assets/federal logos2.svg"],
							// imagesAlt: ["placeholder"]
							clientsList:[
								"Department of Education",
								"Department of Health & Human Services",
								"Department of Labor",
							    "Department of Transportation",
								"Department of Veterans Affairs",
								"Environmental Protection Agency",
								"Food & Drug Administration",
								"National Science Foundation",
								"National Aeronautics and Space Administration"
							]
						}, {
							name: "state/local governments",
							text: "Westat collects data on behalf of and provides technical assistance to  state and local governments. We also work closely with state and local agencies in support of selected Federal contracts.",
							// images: ["./assets/state local logos.svg"]
							clientsList:[
							    "California Department of Public Health",
								"The Children's Hospital of Philadelphia",
								"Department of Children's Services State of Tennessee",
								"Maryland Cancer Registry",
								"Michigan Department of Health and Human Services",
								"University of California, Los Angeles"
							]
						}, {
							name: "foundations and associations",
							text: "<p>Much of our work for organizations such as the Bill & Melinda Gates and Robert Wood Johnson foundations are through grants administered by the Rockville Institute since they must be awarded to not-for-profit organizations. Work for associations such as the National Academy of Sciences and the Insurance Institute for Highway Safety is generally performed under contracts awarded directly to Westat.</p>\n\t\t\t\t\t\t\t\t\t   <p>Westat welcomes opportunities to expand our relationships with nongovernment clients. The work is often very focused, with ambitious project schedules.</p>",
							// images: ["./assets/foundations logos.svg"]
							clientsList:[
								"Bill & Melinda Gates Foundation",
								"Robert Wood Johnson Foundation",
								"Insurance Institute for Highway Safety"
							]
						}, {
							name: "industry/commercial",
							text: "Westat works with industry and commercial clients, helping them to collect and assess data and evaluate products as well as assess their employee programs and offerings.",
							// images: ["./assets/industry commercial logos.svg"]
							clientsList:["SiriusXM", "Verizon", "IBT Media"],
						}]
					}
				},
				contracts: {
					title: 'contracts',
					titleTwo: 'contract types',
					link: '../two/contracts1.html',
					backgroundImage: "url('./assets/contractBackgroundImage.svg')",
					wordArt: "url('./assets/contractsTypography2.svg')",
					module: "what we do",
					footer: "Westat Contracts Unit provides assistance and guidance",
					one: {
						format: 0,
						position: 12,
						wordArt: "url('./assets/contractsTypography2.svg')",
						content: "Contracts are agreements between Westat and clients that describe the specific work to be accomplished and the terms of payment. Clients generally dictate which type of agreement is being offered. There are several types of contracts; it is useful to know their fundamentals. This knowledge can provide the context for your day-to-day work and an understanding of how your tasks are budgeted, priced, and managed. By understanding the subtle differences between contract types, each study team can greatly improve its ability to successfully execute its work."
					},
					two: {
						format: 2,
						position: 13,
						tabs: [{
							name: "firm fixed price (FFP)",
							content: {
								heights: ['7vw', '8vw', '9vw', '15vw'],
								segments: [{
									title: "Pricing",
									content: "<ul class='accordion-panel__list'><li>Fixed unit or milestone pricing</li><li>Costs are NOT appropriate to discuss with external clients after award</li></ul>"
								}, {
									title: "Risk/Return",
									content: "<ul class='accordion-panel__list'><li>Price is fixed and not subject to adjustment unless contract is modified</li><li>Highest return potential, no limit on profit</li></ul>"
								}, {
									title: "Uses",
									content: "<ul class='accordion-panel__list'><li>Easy contract type for goods, products, materials, quantitative, tangible items</li><li>Not easy contract type for services, intangibles, innovation</li></ul>"
								}, {
									title: "Billing/Payment",
									content: "<ul class='accordion-panel__list'><li>Based on completion and acceptance of contract-specific outcomes</li><li>Westat must satisfy contract requirements regardless of cost to perform</li><li>Billed at contract-established prices, deliverables, unit costs, milestones, or monthly</li><li>Westat must adhere to the period of performance</li></ul>"
								}]
							},
							// examples: [
							// 	{
							// 		title: "Early Childhood Longitudinal Study - Kindergarten",
							// 		img: "url('./assets/contracts-FFP-ECLS.png')"
							// 	},
							// 	{
							// 		title: "National Household Travel Study",
							// 		img: "url('./assets/contracts-FFP-NHtS.png')"
							// 	},
							// 	{
							// 		title: "Maryland Cancer Registry",
							// 		img: "url('./assets/contracts-FFP-MD-cancer.png')"
							// 	}
							// ],
							images: []
						}, {
							// name: "cost-reimbursement (CR, CRFF)",
							name: "cost-reimbursement (CPFF)",
							content: {
								text: "",
								heights: ['8vw', '7vw', '6vw', '15vw'],
								segments: [{
									title: "Pricing",
									// content: '<ul class="accordion-panel__list"><li>Project costs are estimated direct and indirect costs</li><li>Fixed fee in the profit</li><li>Contractor is required to make its "best effort" in performance up to the contract funding limit</li></ul>',
									content: '<ul class="accordion-panel__list"><li>All project costs are estimated</li><li>Fee is fixed</li><li>Contractor is required to make "best effort" in performance up to the contract funding limit</li></ul>'
								}, {
									title: "Risk/Return",
									// content: "<ul class='accordion-panel__list'><li>Lowest risk for Westat</li><li>Cost-type contracts are Westat's best effort driven by completion or term</li></ul>",
									content: "<ul class='accordion-panel__list'><li>Lowest risk for Westat</li><li>Cost-type contracts are best effort driven by completion or term</li></ul>"
								},
								// {
								// 	title: "Variations",
								// 	content: "<ul class='accordion-panel__list'><li>Cost-Reimbursement (CR)</li><li>Cost-Plus-Fixed-Fee (CPFF)</li></ul>",
								// },
								{
									title: "Uses",
									content: "<ul class='accordion-panel__list'><li>Used often when costs cannot be estimated with sufficient accuracy and a fixed-price contract is not appropriate</li></ul>"
								}, {
									title: "Billing/Payment",
									// content: "<ul class='accordion-panel__list'><li>Billing based on actual direct costs and provisional indirect costs</li><li>Payment of actual/final indirect rates is done once Westat has received an approved indirect rate</li><li>Used often when costs cannot be estimated with sufficient accuracy and a fixed-price contract is not appropriate</li></ul>",
									content: "<ul class='accordion-panel__list'><li>Billing based on actual direct costs and provisional indirect costs</li><li>Payment of actual/final indirect rates is done once Westat has received an approved indirect rate</li></ul>"
								}]
							},
							// examples: [
							// 	{
							// 		title: "Cancer Trials Support Unit",
							// 		img: "url('./assets/contracts-CR-CTSU.png')"
							// 	},
							// 	{
							// 		title: "National Assessment of Educational Progress",
							// 		img: "url('./assets/contracts-CR-NAEP.png')"
							// 	},
							// 	{
							// 		title: "Population Assessment of Tobacco and Health",
							// 		img: "url('./assets/contracts-CR-PATH.png')"
							// 	}
							// ],
							images: []
						}, {
							name: "time & materials (T&M)",
							content: {
								text: "",
								heights: ['13vw', '5vw', '7vw', '13vw'],
								segments: [{
									title: "Pricing",
									content: "<ul class='accordion-panel__list'><li>Loaded hourly labor rates plus any nonlabor support items needed</li><li>Westat is paid for time spent and materials purchased</li><li>Labor rates are fixed and require labor category descriptions</li></ul>"
								}, {
									title: "Risk/Return",
									content: "<ul class='accordion-panel__list'><li>Medium-pricing risk, low-performance risk</li><li>The risk is nested in the changing costs of labor</li></ul>"
								}, {
									title: "Uses",
									content: "<ul class='accordion-panel__list'><li>Often when it is not possible to estimate accurately the extent or duration of the work or to anticipate costs with confidence</li></ul>"
								}, {
									title: "Billing/Payment",
									content: "<ul class='accordion-panel__list'><li>Billing is based on labor rates and hours, plus associated nonlabor expenses</li><li>Payment is based on labor hours and labor rates, not specific delivery products or outcomes. Nonlabor items are billed at actual cost plus associated indirect costs</li></ul>"
								}]
							},
							// examples: [
							// 	{
							// 		title: "Advertising and Integrated Marketing Solutions",
							// 		img: "url('./assets/contracts-TM-AIMS.png')"
							// 	},
							// 	{
							// 		title: "Misson Oriented Business Integrated Solutions",
							// 		img: "url('./assets/contracts-TM-MOBIS.png')"
							// 	},
							// 	{
							// 		title: "National Travel Household Survey Support",
							// 		img: "url('./assets/contracts-TM-NOPUS.png')"
							// 	},
							// 	{
							// 		title: "Aircraft Noise and Annoyance Research Support",
							// 		img: "url('./assets/contracts-TM-aircraft.png')"
							// 	}
							// ],
							images: []
						}, {
							name: "grants and cooperative agreements",
							content: {
								text: '',
								heights: ['13vw', '11vw', '9vw', '7vw'],
								segments: [{
									title: "Pricing",
									content: "<ul class='accordion-panel__list'><li>Grants are based on cost-reimbursement type of contract with similar budgeting and risks, no fee or profit and requires best effort</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <li>Cooperative agreements require involvement and oversight from the funding agency or prime recipient and often operate like a contract without a fee</li></ul>"
								}, {
									title: "Risk/Return",
									content: "<ul class='accordion-panel__list'><li>Less specific in the work to be done. Often give latitude in defining the research topic and approach. Same risks as for cost-reimbursement contract type</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <li>Are subject to different administrative, cost, and audit requirements than contracts</li></ul>"
								}, {
									title: "Uses",
									// content: `<ul class='accordion-panel__list'><li>Easy contract type for goods, products, materials, quantitative, tangible items</li><li>Not easy contract type for services, intangibles, innovation</li></ul>`,
									content: "<ul class='accordion-panel__list'><li>Academic institutions and nonprofit organizations commonly award grants and cooperative agreements. Federal agencies also use award grants</li></ul>"
								}, {
									title: "Billing/Payment",
									// content: "<ul class='accordion-panel__list'><li>Academic institutions and nonprofit organizations commonly award grants and cooperative agreements.  Federal agencies also use award grants.</li>",
									content: "<ul class='accordion-panel__list'><li>Billing, payment and reporting may vary from other contract types depending on the grant or cooperative agreement</li>"
								}]
							},
							// examples: [
							// 	{
							// 		title: "filler",
							// 		img: ""
							// 	},
							// 	{
							// 		title: "filler",
							// 		img: ""
							// 	},
							// 	{
							// 		title: "filler",
							// 		img: ""
							// 	},
							// ],
							images: []
						}]
					}
					// three: {
					// 	format: 3,
					// 	position: 14,
					// 	wordArt: "url('./assets/contractsTypography2.svg')",
					// 	content: {
					// 		text: `Academic institutions and nonprofit organizations commonly award grants and cooperative agreements.  Federal agencies also use award grants.`,
					// 		segments: [
					// 			{
					// 				title: "Pricing",
					// 				content: `<p>Grants are based on cost-reimbursement type of contract with similar budgeting and risks, no fee or profit and requires best effort.</p>
					// 						  <p>Cooperative agreements require involvement and oversight from the funding agency or prime recipient and often operate like a contract without a fee.</p>`
					// 			},
					// 			{
					// 				title: "Risk and Return",
					// 				content: `<p>Less specific in the work to be done. Often give latitude in defining the research topic and approach. Same risks as for cost-reimbursement contract type</p>
					// 						  <p>Are subject to different administrative, cost, and audit requirements than contracts</p>`
					// 			},
					// 			{
					// 				title: "Use and Examples",
					// 				content: `<p>Easy contract type for goods, products, materials, quantitative, tangible items</p>
					// 						  <p>Not easy contract type for services, intangibles, innovation</p>`
					// 			},
					// 		]
					// 	}
					// }
				},
				proposalProcess: {
					title: 'proposal process',
					module: 'what we do',
					one: {
						format: 'proposalProcess',
						position: 14,
						images: [{
							img: './assets/Proposal_page_Illustraton_Clipboard.png',
							x: -29,
							y: -19,
							width: 5,
							height: 7
						}, {
							img: './assets/Proposal_page_Illustraton_Computer.png',
							x: -22,
							y: 14,
							width: 16,
							height: 10
						}, {
							img: './assets/Proposal_page_Illustraton_HandTarget.png',
							x: 7,
							y: 11,
							width: 12,
							height: 14
						}, {
							img: './assets/Proposal_page_Illustraton_LightBulb.png',
							x: -41,
							y: -3,
							width: 8,
							height: 8.5
						}, {
							img: './assets/Proposal_page_Illustraton_Map.png',
							x: 27,
							y: -3,
							width: 12,
							height: 12
						}, {
							img: './assets/Proposal_page_Illustraton_People.png',
							x: -4,
							y: -20,
							width: 10,
							height: 7.3
						}, {
							img: './assets/Middle_Gear.svg',
							x: -11,
							y: -8,
							width: 24,
							height: 24
						}],
						gears: [{
							radius: 5.3,
							teeth: 18,
							depth: .4,
							thickness: 4.9,
							x: -37.7,
							textX: -40.7,
							y: 17.8,
							type: 2,
							text: "Themes",
							stop: -6,
							modal: {
								title: "Themes",
								body: "What will we emphasize in our proposal?  Our win themes are high-level statements of Westat’s solution features and benefits. Our themes must be tied together and focus on what the client cares about the most. Our themes must be few, distinct, and proof of the unique value of our proposed solution."
							}
						}, {
							radius: 7,
							teeth: 18,
							depth: .55,
							thickness: 6.45,
							x: -27.4,
							textX: -30.4,
							y: 11.2,
							type: 2,
							text: "<tspan dy='-.3' dx='0'>Capture</tspan><tspan dx='-6.3' dy='1.7'>Planning</tspan>",
							stop: 13,
							modal: {
								title: "Capture Planning",
								body: "When a potential opportunity is identified, usually long before the RFP is actually released, senior managers at the corporate and Study Area levels engage in capture planning. Is the opportunity suitable to our unique capabilities and staff? Is the risk manageable? If so, what will be our strategy for capturing this specific opportunity?"
							}
						}, {
							radius: 5.3,
							teeth: 18,
							depth: .4,
							thickness: 4.9,
							x: -16.6,
							textX: -20.5,
							y: 5.2,
							type: 2,
							text: "WesPRESS",
							stop: 0,
							modal: {
								title: "WesPRESS",
								body: "WesPRESS is a rich corporate resource that provides staff with access to the text of previous proposals, project descriptions, experience sheets, and more. This content can help you and the proposal team avoid “reinventing the wheel” and writing anew something that is already well described. Save your time for the new and important aspects of the proposal!"
							}
						}, {
							radius: 7,
							teeth: 18,
							depth: .55,
							thickness: 6.45,
							x: -26,
							textX: -28.4,
							y: -2.7,
							type: 2,
							text: "<tspan dx='-.7' dy='-1'>Request</tspan><tspan dx='-7.8' dy='1.7'>for Proposal</tspan><tspan dx='-6.3' dy='1.7'>(RFP)</tspan>",
							stop: 10,
							modal: {
								title: "Request for Proposal",
								body: "The Request for Proposal is the jumping off point for proposal development and writing. Remember, this is the step where Westat’s previous planning comes into play. RFPs for competitive acquisitions will, at a minimum, describe the project’s requirements, anticipated terms and conditions that will apply, information required to be in the proposal, and factors that will be used to evaluate the proposal. An RFP will result in a negotiated contract. Westat’s proposal must systematically and creatively address each requirement and need expressed in the RFP."
							}
						}, {
							radius: 5.3,
							teeth: 18,
							depth: .4,
							thickness: 4.9,
							x: -35.7,
							textX: -38,
							y: -10,
							type: 2,
							text: "<tspan dy='-.3' dx='.8'>Win</tspan><tspan dx='-4.5' dy='1.7'>Strategy</tspan>",
							stop: -3,
							modal: {
								title: "Win Strategy",
								body: "What will be Westat’s win strategy? Many players participate with the senior team in the planning stage: Marketing Services, Proposal Pricing, Contracts, Graphics, Legal, and Methodology. Together the team determines how Westat will maximize our chances of winning the contract."
							}
						}, {
							radius: 9,
							teeth: 18,
							depth: .8,
							thickness: 8.2,
							x: -12.2,
							textX: -16.4,
							y: -10.9,
							type: 2,
							text: "<tspan dy='-.3' dx='1'>Business</tspan><tspan dx='-8.3' dy='1.7'>Development</tspan>",
							stop: -5,
							modal: {
								title: "Business Development",
								body: "Our company works across the year to position ourselves strategically in our market, build and sustain our expertise and resultant standing with our clients, and identify and assess opportunities in relation to Westat capabilities, likely competitors, and client needs."
							}
						},
						// {
						// 	radius: 11,
						// 	teeth: 24,
						// 	depth: 1.2,
						// 	thickness: 9.8,
						// 	x: 1,
						//textX: 1 - 3,
						// 	y: 3.8,
						// 	type: 0,
						// 	text: "",
						// 	stop: 0,
						// 	modal: {
						// 		title: "",
						// 		body: ""
						// 	}
						// },
						{
							radius: 9,
							teeth: 18,
							depth: .8,
							thickness: 8.2,
							x: 15.3,
							textX: 15.3 - 3,
							y: -11.1,
							type: 2,
							text: "<tspan dx='' dy='-1'>Prime or</tspan><tspan dx='-8.5' dy='1.7'>Sub-Business</tspan><tspan dx='-8' dy='1.7'>Partners</tspan>",
							stop: -8,
							modal: {
								title: "Prime or Sub-Business Partners",
								body: "Often, meeting the requirements of a solicitation with the optimal solution means engaging outside organizations, small businesses, and partners. Westat leverages its contacts in the industry and in our key subject areas to build project teams that excel. Our rich history and reputation enable our success in gaining the support we need to make our proposals successful."
							}
						}, {
							radius: 7,
							teeth: 18,
							depth: .55,
							thickness: 6.45,
							x: 31.3,
							textX: 29.5,
							y: -11.8,
							type: 2,
							text: "<tspan dx='-.2' dy='-1'>Small</tspan><tspan dx='-5.5' dy='1.7'>Business</tspan><tspan dx='-4.8' dy='1.7'>Plan</tspan>",
							stop: 12,
							modal: {
								title: "Small Business Plan",
								body: "Westat’s Small Business Liaison Office (SBLO) supports our commitment to small business use and works with project directors to report federally mandated subcontracting goals accurately and on time. Our SBLO helps staff create a plan for small business goals, select vendors, and report on goals."
							}
						}, {
							radius: 7,
							teeth: 18,
							depth: .55,
							thickness: 6.45,
							x: 20.2,
							textX: 16.7,
							y: 4.1,
							type: 2,
							text: "<tspan dy='-.3' dx='-.1'>Technical</tspan><tspan dx='-6.7' dy='1.7'>Proposal</tspan>",
							stop: 4,
							modal: {
								title: "Technical Proposal",
								body: "Westat strives to ensure that each technical proposal is clear and concise in describing exactly how we will meet the requirements stated in the RFP. Throughout writing, our proposal team keeps in mind the importance of simplifying the tasks of the evaluators who will typically have a large number of proposals to read.  Most important, the technical proposals Westat submits show, supported by evidence, why Westat is the best solution."
							}
						}, {
							radius: 5.3,
							teeth: 18,
							depth: .4,
							thickness: 4.9,
							x: 26.7,
							textX: 24.2,
							y: 14.5,
							type: 2,
							text: "<tspan dy='-.3' dx='.8'>Cost</tspan><tspan dx='-5' dy='1.7'>Proposal</tspan>",
							stop: 4,
							modal: {
								title: "Cost Proposal",
								body: "Westat works diligently to offer pricing that is fair and competitive. Contract pricing is an important aspect of each procurement and a particularly important component in our strategy to win work.  We are aware of historical and current pricing trends, and are strategic in our pricing analysis so that our cost proposal is competitive while profitable."
							}
						}, {
							radius: 5.3,
							teeth: 18,
							depth: .4,
							thickness: 4.9,
							x: 36.5,
							textX: 36.5 - 3,
							y: 17.7,
							type: 2,
							text: "Staffing",
							stop: 5,
							modal: {
								title: "Staffing",
								body: "While developing a proposal strategy, Westat managers identify the key staff for the proposal—those across the company whose skills match the requirements of the project. While Westat work is based within Study Areas, a study team usually reaches across areas to include optimal staff. Westat’s approach to staff management supports this team-building process. The proposal identifies the key staff members, and, once the contract is awarded, these key players build their individual teams from Study Areas and departments."
							}
						}]

					}
				}
			}
		},
		moduleThree: {
			title: "how we do it",
			img: "url('./assets/how main.jpg')",
			blockColor: "home-nav--blue",
			class: 'module-three',
			introFooter: "2,000+ dedicated employee-owners & staff working around the world",
			sections: {
				// to enable the intro and in-progress Human Factors sections, uncomment the following code and remove the following dummy section

				intro: {
					introTitle: "how we do it",
					introFooter: "2,000+ dedicated employee-owners & staff working around the world",
					backgroundImage: "url('./assets/moduleThreeIntros/Mod3 title background.jpg')",


					// backgroundImage: "url('./assets/Mod_2_Infogr_Bkgrnd_Transportation.png')",

					one: {
						format: 'intro',
						position: 15,
						backgroundImage: "url('./assets/moduleThreeIntros/Mod3 title background.jpg')",

					}
				 },
 				overview: {
					title: "overview",
					titleTwo: "overview of project journeys",
					module: "how we do it",
					backgroundImage: "url('./assets/moduleThreeIntros/Mod3 title background.jpg')",
					footer: "Our collaborative philosophy inspires innovation",
					one: {
						format: 0,
						position: 16,
						wordArt: "url('assets/moduleThreeIntros/mod3 title type.png')",
						content: 'We’ve won the opportunity! It is important to take a moment to relish our success, but now the work begins.  How do we do it? Our proposal gives us our starting point. Each proposal was crafted to present our specific customized solution to unique requirements. Although no project journey is exactly the same, they all have recognizable phases and milestones. Here are a few project journeys to tell you something about the road Westat follows to reach project success.'
							// heights: ["14vw", "12vw", "15vw", "15vw"],
							// segments: [{
							// 	title: "Employee Ownership and Accountability",
							// 	content: "Because our staff members are also employee-owners, all are accountable for our continued success. Thriving in our strong team environment, Westat employees participate in a vibrant corporate culture that attracts and develops talent, and supports their career growth, work-life balance, and health while providing high-quality results to our clients."
							// }, {
							// 	title: "Collaboration and Knowledge Sharing",
							// 	content: "Westat\u2019s culture is one of collaboration and inclusivity. Our diverse staff brings varied perspectives that drive the sound science, creativity, and innovation that are necessary for high-quality research. We encourage knowledge sharing across all of our study areas and departments."
							// }, {
							// 	title: "Support for Long-Term Career Growth",
							// 	content: "<p>A hallmark of Westat is our commitment to the long-term growth of each employee. Once you are on board, Westat welcomes your engagement in both internal and external training opportunities.</p>\n\n\t\t\t\t\t\t\t\t\t\t<p>Essential to Westat\u2019s unique culture is our investment in employee-owners, technology and methods, industry engagement, and best practices.</p>"
							// }, {
							// 	title: "Big Company with Small Company Feel",
							// 	content: "Despite the steady growth we have experienced over our 50-plus year history, we have retained the intimacy of a smaller company by applying team and group expert models to staff our projects. We extend that model through our collaborative relationships with our clients."
							// }]
					}
				},
				projectJourneys: {
					title: 'project journeys',
					// footer: 'Westat performs research services for a variety of clients',
					module: 'how we do it',
					one: {
						format: 'project',
						position: 17,
						title: "User Experience/Human Factors Research",
						invert: false,
						intro: {
							text : 'Westat\'s Center for Transportation, Technology & Safety research studies driver\'s behaviors in different ways. We conduct experiments on the dangers of distraction using our driving simulator. Cameras and other equipment we install in vehicles monitor real world driving behoviors.',
							img_0 : 'url(\'./assets/moduleThreeIntros/transp_intro_lftcircle.png\')',
							img_1 : 'url(\'./assets/moduleThreeIntros/transp_intro_midcircle.png\')',
							img_2 : 'url(\'./assets/moduleThreeIntros/transp_intro_rtcircle.png\')',
						},
						illustrations: [
							{
								art_0: "url('./assets/image_GEAR_People.svg')",
								left: "6vw",
								top:"26.5vw",
							},
							{
								art_0: "url('./assets/icon_Driving.svg')",
								left: "43vw",
								top:"29vw"
							},
							{
								art_0: "url('./assets/image_Gear_SteeringWheel.svg')",
								left: "60vw",
								top:"13vw",
								width:"10vw",
								height:"10vw"
							},
							{
								art_0: "url('./assets/icon_ContractAwarded.svg')",
								left: "4.3vw",
								top:"11.5vw",
								width:"5vw",
								height:"5vw"
							},
							{
								art_0: "url('./assets/icon_ContractComplete.svg')",
								left: "89.5vw",
								top:"11.25vw",
								width:"5vw",
								height:"5vw",
								pulsing: true,
								video: 'https://player.vimeo.com/video/157289578?byline=0',
							}
						],
						stages: [
							{
								name: "Project<br>Initiation",
								left: "17.8vw",
								bgColor: "#59023B",
								shadowColor: "0 0 0 0.5vw #59023B",
								alternate: false,
								subsections: [
									{
										heading: "Build a team",
										bullets: [
											"Senior experts",
											"Programmers",
											"Instrumentation specialists", 
											"Research assistants", 
											"Subject recruitment support"
										]
									},
									{
										heading: "Identify resources",
										bullets: [
											"Driving simulator",
											"Instrumented vehicle",
											"Instrumentation for private vehicles"
										]
									},
									{
										heading: "Develop detailed work plan",
										bullets: [
											"Submit draft to client",
											"Present plan at kick-off meeting with client",
											"Revise the work plan with specific assignments"
										]
									}
								]
							},
							{
								name: "Project<br>Development",
								left: "24vw",
								bgColor: "rgb(66,134,63)",
								shadowColor: "0 0 0 0.5vw rgb(66,134,63)",
								alternate: true,
								subsections: [
									{
										heading: "Obtain IRB approval"
									},
									{
										heading: "Establish overall project schedule and budget"
									},
									{
										heading: "Make staffing assignments",
										bullets: [
											"Train support staff on research methods",
											"Establish schedule for managing participants"
										]
									},
									{
										heading: "Develop technology",
										bullets: [
											"Program driving scenarios for the simulator",
											"Create instrumentation for the vehicles",
											"Develop databases for project information"
										]
									},
									{
										heading: "Recruit subjects",
										bullets: [
											"Use in-house recruitment database",
											"Run ads in social media",
											"Negotiate with government agency to identify candidates",
											"Apply screener to select candidates",
											"Schedule study sessions"
										]
									}
								]
							},
							{
								name: "Conduct<br>Research",
								left: "41vw",
								bgColor: "#0F809C",
								shadowColor: "0 0 0 0.5vw #0F809C",
								alternate: false,
								subsections: [
									{
										heading: "Conduct vehicle simulator sessions",
										bullets: [
											"Instruct recruited participants",
											"Manage the simulation/driving session",
											"Provide cash incentive",
											"Retrieve and store the simlator recordings and observational data"
										] 
									},
									{
										heading: "Instrument privately owned vehicles for data collection",
										bullets: [
											"Assemble vehicle instrumentation",
											"Configure vehicel lab",
											"Document vehicle pre-experimental condition",
											"Install instrumentation",
											"Train vehicle owners/drivers"
										]
									}
								]
							},
							{
								name: "Data Analysis<br>Visualization and Reporting",
								left: "56.5vw",
								bgColor: "rgb(55,20,74)",
								shadowColor: "0 0 0 0.5vw rgb(55,20,74)",
								alternate: true,
								subsections: [
									{
										heading: "Prepare simulator files  for review",
									},
									{
										heading: "Organize observational data"
									},
									{
										heading: "Code video as needed"
									},
									{
										heading: "Conduct planned analyses"
									}
								]
							},
							{
								name: "Project<br>Reporting",
								left: "73.2vw",
								bgColor: "#BB3D24",
								shadowColor: "0 0 0 0.5vw #BB3D24",
								alternate: false,
								subsections: [
									{
										heading: "Prepare datasets and metadata for delivery",
									},
									{
										heading: "Create draft and revised final reports"
									},
									{
										heading: "Create presentation for clients"
									},
									{
										heading: "Create journal article"
									},
									{
										heading: "Post WesDax or other files for data viewing"
									},
									{
										heading: "Create a project description for Westat.com"
									},
									{
										heading: "Create an experience sheet for WesPress"
									},
									{
										heading: "Thank the client"
									}
								]
							},
						]
					},
					two: {
						format: 'project',
						position: 18,
						title: "Clinical Site Monitoring",
						invert: true,
						intro: {
							text : 'Clinical site monitoring is performed as a standard practice for studies involving human subjects participating in a clinical trial.  Frequent monitoring at each clinical center, or site, where the trial is taking place is done to assure that clinical trials are conducted ethically and according to protocol.',  
							img_0 : 'url(\'./assets/moduleThreeIntros/clinical_intro_lftcircle.png\')',
							img_1 : 'url(\'./assets/moduleThreeIntros/clinical_intro_midcircle.png\')',
							img_2 : 'url(\'./assets/moduleThreeIntros/clinic_intro_rtcircle.png\')'
						},
						illustrations: [
							{
								art_0: "url('./assets/image_Gear_Doctors.svg')",
								left: "8vw",
								top:"9vw"
							},
							{
								art_0: "url('./assets/icon_DNA.svg')",
								left: "43vw",
								top:"12vw"
							},
							{
								art_0: "url('./assets/image_TestTubes.svg')",
								left: "59.5vw",
								top:"30vw",
								width:"10vw",
								height:"10vw"
							},
							{
								art_0: "url('./assets/icon_ContractAwarded.svg')",
								left: "4.3vw",
								top:"39.25vw",
								width:"5vw",
								height:"5vw"
							},
							{
								art_0: "url('./assets/icon_ContractComplete.svg')",
								left: "89.5vw",
								top:"39.25vw",
								width:"5vw",
								height:"5vw"
							}
						],
						stages: [
							{
								name: "Project<br>Initiation",
								left: "17.8vw",
								bgColor: "#59023B",
								shadowColor: "0 0 0 0.5vw #59023B",
								alternate: true,
								subsections: [
									{
										heading: "Review SOW and Plan Internal and Client Kick-off Meetings",
										bullets: [
											"Meet with Corporate Officer",
											"Identify stakeholders and communications channels",
											"Confirm Project Manager and initial study team", 
											"Identify regional Clinical Research Associates", 
											"Confirm deliverables schedule",
											"Document initial client interactions after clarifying scope of work",
											"Apply Area standard operating procedures (SOPs) for project start-up"										
										]
									},
									{
										heading: "Develop project materials and administrative files",
										bullets: [
											"Set up network drive and staff access",
											"Obtain IRB approval",
											"Determine the status of the study protocols and case report forms",
											"Draft the site monitoring plan",
											"Format SOPs for site initiation, pharmacy, routine, closeout and specialty monitoring visits"
										]
									},
									{
										heading: "Develop project materials",
										bullets: [
											"Draft site monitoring plan",
											"Finalize the site visit report templates",
											"Communicate the deliverables schedule"
										]
									},
									{
										heading: "Create a field staff requisition",
										bullets: [
											"Develop training materials",
											"Identify training location and dates"
										]
									}
								]
							},
							{
								name: "Project<br>Implementation",
								left: "24vw",
								bgColor: "rgb(66,134,63)",
								shadowColor: "0 0 0 0.5vw rgb(66,134,63)",
								alternate: false,
								subsections: [
									{
										heading: "Obtain/verify IRB approval(s)",										
										bullets: [
											"Westat",
											"Local institutions/universities",
											"Country-specific (as applicable)"
										]
									},
									{
										heading: "Establish overall project schedule and budget"
									},
									{
										heading: "Verify that site monitors are trained"
									},
									{
										heading: "Add additional staff, make technical and admin assignments",										
										bullets: [
											"Train staff on project-specific SOPs",
											"Establish schedule for monitoring specific sites"
										]
									},
									{
										heading: "Verify planned data management processes with PI and COR",										
										bullets: [
											"Confirm database(s) of record"
										]
									}
								]
							},
							{
								name: "Conduct Clinical<br>Site Monitoring Visits",
								left: "41vw",
								bgColor: "#0F809C",
								alternate: true,
								shadowColor: "0 0 0 0.5vw #0F809C",
								subsections: [
									{
										heading: "Schedule travel and conduct on-site monitoring visits (per SOPs)",
										bullets: [
											"Send confirmation letter to site staff, per SOP",
											"Verify/confirm regulatory compliance",
											"Assure study participant randomization (as appropriate)",
											"Confirm informed consent for all enrolled participants",
											"Verify case report form entries against source documentation for a sample of charts",
											"Assess on-site data entry into the database of record ",
											"Conduct pharmacy assessments and drug dispensing per protocol",
											"Re-train site staff  on study protocol objectives (as appropriate)",
											"Conduct the exit summary meeting with study principals",
											"Immediately report to the client any suspicions of fraud or misconduct (via email or phone call)"
										]
									},
									{
										heading: "Conduct quality control monitoring visits, per Area SOP"
									}
								]
							},
							{
								name: "Site Visit<br>Reporting",
								left: "56.5vw",
								bgColor: "rgb(55,20,74)",
								alternate: false,
								shadowColor: "0 0 0 0.5vw rgb(55,20,74)",
								subsections: [
									{
										heading: "Draft the site visit report, including action items for site staff, for client review"
									},
									{
										heading: "Send site visit report to site PI and staff"
									},
									{
										heading: "Store visit report on project drive"
									}
								]
							},
							{
								name: "Project<br>Close Out",
								left: "73.2vw",
								bgColor: "#BB3D24",
								alternate: true,
								shadowColor: "0 0 0 0.5vw #BB3D24",
								subsections: [
									{
										heading: "Create draft and revised final reports"
									},
									{
										heading: "Verify completion of all contract deliverables"
									},
									{
										heading: "Apply Area SOPs for project and/or study closure"
									},
									{
										heading: "Complete field staff evaluation and reports"
									},
									{
										heading: "Re-compete for contract (as appropriate)"
									}
								]
							},
						]
					},
					three: {
						format: 'project',
						position: 19,
						title: "Multimode Data Collection",
						invert: false,
						intro: {
							text : 'We use multimode methods and data integration techniques to address research questions. We apply the right data collection strategies and match them to the scale of our clients’ individual needs. Through field operations, web surveys, focus groups, and more, our methods are designed to optimize and improve survey response. In this multimode project journey, we offer participants web and hardcopy options. We follow up by telephone for nonresponse.',
							img_0 : 'url(\'./assets/moduleThreeIntros/mm_intro_lftcircle.png\')',
							img_1 : 'url(\'./assets/moduleThreeIntros/mm_intro_midcircle.png\')',
							img_2 : 'url(\'./assets/moduleThreeIntros/mm_intro_rtcircle.png\')',
						},
						illustrations: [
							{
								art_0: "url('./assets/image_Gear_People_TEAM.svg')",
								left: "6vw",
								top:"26.5vw"
							},
							{
								art_0: "url('./assets/icon_Tablet_Phone.svg')",
								left: "43vw",
								top:"29vw"
							},
							{
								art_0: "url('./assets/image_Laptop_Graphs.svg')",
								left: "60vw",
								top:"13vw",
								width:"10vw",
								height:"10vw"
							},
							{
								art_0: "url('./assets/icon_ContractAwarded.svg')",
								left: "4.3vw",
								top:"11.5vw",
								width:"5vw",
								height:"5vw"
							},
							{
								art_0: "url('./assets/icon_ContractComplete.svg')",
								left: "89.5vw",
								top:"11.5vw",
								width:"5vw",
								height:"5vw"
							},							
							{
								art_0: "url('./assets/icon_Clipboard.svg')",
								left: "79.5vw",
								top:"30vw",
								width:"10vw",
								height:"10vw"
							},
							{
								art_0: "url('./assets/icons_phone_Gear.svg')",
								left: "27.5vw",
								top:"15vw",
								width:"10vw",
								height:"10vw"
							}
						],
						stages: [
							{
								name: "Project<br>Initiation",
								left: "17.8vw",
								bgColor: "#59023B",
								shadowColor: "0 0 0 0.5vw #59023B",
								alternate: false,
								subsections: [
									{
										heading: "Build the Westat team",
										bullets: [
											"Engage specific staff identified in proposal",
											"Task leads recruit members of each task team and assign responsibilities",
											"Task teams include Study Design and Questionnaires, Statistics, DMTRC, and Systems", 
											"Hold kick-off meeting to introduce staff and objectives", 
											"Establish standard meetings, network space, directory structure and rights, and obtain charge codes"
										]
									},
									{
										heading: "Develop detailed work plan",
										bullets: [
											"Review contractual requirements for reporting on progress and decisions",
											"Plan for all contractual deliverables",
											"Identify confidentiality, security and informed consent procedures",
											"Draft participant questionnaire and accompanying materials, including contact protocol to submit to OMB/IRB",
											"Create detailed schedule for the study"
										]
									}
								]
							},
							{
								name: "Project<br>Development",
								left: "24vw",
								bgColor: "rgb(66,134,63)",
								shadowColor: "0 0 0 0.5vw rgb(66,134,63)",
								alternate: true,
								subsections: [
									{
										heading: "Obtain OMB/IRB approval",										
										bullets: [
											"Of contact protocol and materials",
											"Of draft questionnaire",
											"Of informed consent processes",
											"Of respondent burden estimates",
											"Of incentives"
										]
									},
									{
										heading: "Develop detailed data collection procedures",
										bullets: [
											"Develop sample specifications and build sample according to plan in the proposal",
											"Specify ID structure and flow of cases through all contacts and modes of data collection",
											"Select software for the web survey",
											"Decide on management system to control the flow of cases between systems and to report on progress",
											"Specify hardcopy and web surveys (and their data structures) for programming development as well as script for telephone followup",
											"Specify data harmonization rules between modes",
											"Develop respondent materials in coordination with Graphics, order printed materials, acquire incentives (if applicable)",
											"Specify data collection monitoring reports and dashboard needs",
											"Train telephone interviewers in study’s contact procedures and administration of the web questionnaire and scanning verifiers in rules for verification",
											"Set up project mailbox and help line, assign and train staff to support them",
											"Set up field room (if needed)"
										]
									},
									{
										heading: "Develop systems",
										bullets: [
											"Develop, program and test hardcopy version of questionnaire including setting rules for data review during receipt and scanning",
											"Develop and test web versions of questionnaire ",
											"Develop and test receipt system for hardcopy questionnaire",
											"Develop, integrate and test management systems",
											"Develop, integrate and test dashboard",
											"Specify data review and editing process for collected data per client preferences, program edits and establish data decision process and documentation",
											"Consider any special requirements such as 508 compliance"
										]
									}
								]
							},
							{
								name: "Conduct<br>Research",
								left: "41vw",
								bgColor: "#0F809C",
								shadowColor: "0 0 0 0.5vw #0F809C",
								alternate: false,
								subsections: [
									{
										heading: "Contact and recruit participants",
										bullets: [
											"Load sample file in management system and in web questionnaire if needed for preloads",
											"Mail advance letters with web instructions"
										] 
									},
									{
										heading: "Collect Data",
										bullets: [
											"Review data from completed web surveys",
											"Send follow-up contacts to non-respondents per study protocol (mail, email, text) including the mailing of the hardcopy survey",
											"Receipt, scan, and review data from returned hardcopy surveys",
											"Call non-respondents via telephone per study protocol",
											"Provide incentives via process established for the study",
											"Record all mailings in the management system",
											"Monitor and report on study progress across all modes",
											"Handle postal non-deliverables and trace participants as needed",
											"Respond to contacts from participants via study mailbox or helpline and enter record of contacts in the management system",
											"Monitor charges against budget submitted with proposal"
										]
									}
								]
							},
							{
								name: "Data Analysis,<br>Delivery and Reporting",
								left: "56.5vw",
								bgColor: "rgb(55,20,74)",
								shadowColor: "0 0 0 0.5vw rgb(55,20,74)",
								alternate: true,
								subsections: [
									{
										heading: "Prepare data for delivery",
										bullets: [
											"Program and test data harmonization rules",
											"Define codebook for delivery of harmonized data",
											"Perform data review including frequencies, cross tabs and edit checks according to the Data Management Plan",
											"Perform data retrieval, if required per contract",
											"Obtain and document data decisions",
											"Harmonize data across modes into deliverable files, including deduplication",
											"Edit data per specifications, impute missing data, and build composite variables",
											"Develop all necessary weights per Weighting Plan and append to appropriate files",
											"Prepare metadata datasets to include data items specified in the contract"
										]
									},
									{
										heading: "Deliver data",
										bullets: [
											"Post/deliver files as specified in the contract and subsequent decisions",
											"Create codebooks and post/deliver all data documentation necessary for appropriate use and understanding of each data file",
											"Respond to questions from data users as they arise and deliver additional datasets as needed"
										]
									}
								]
							},
							{
								name: "Project<br>Close Out",
								left: "73.2vw",
								bgColor: "#BB3D24",
								shadowColor: "0 0 0 0.5vw #BB3D24",
								alternate: false,
								subsections: [
									{
										heading: "Ensure all contractual deliverables are provided",
										bullets: [
											"Project documentation, data decisions, specifications and code, image files from hardcopy data collection, etc.",
											"Data delivery files"
										]
									},
									{
										heading: "Bookkeeping",
										bullets: [
											"Ensure all plans are up to date and all internal documentation is current",
											"Conduct debriefing and document lessons learned"
										]
									},
									{
										heading: "Meet archiving and data destruction requirements",
										bullets: [
											"Return unused incentives to accounting",
											"Close project charge codes",
											"Zip and archive directories",
											"Close email and phone, surrender equipment and space if field room was used",
											"Archive or destroy project documents (such as any hardcopy survey forms)",
											"Meet and report on all data destruction requirements"
										]
									}
								]
							},
						]
					},
					four: {
						format: 'project',
						position: 20,
						title: "Large Scale Survey Design",
						invert: true,
						intro: {
							text : 'Large Scale Survey projects require the integration of many aspects of Westat capabilities.  The survey sample design is a collaborative effort by statisticians, subject matter experts and analysts, data collection operations staff, data processing staff, and staff from other areas, as needed.  The final design is a result of the coordinated work associated with the efficient implementation of the consensus survey design, including sampling, questionnaire development, interviewer training, data collection, data processing, weighting, file delivery, analysis, and report generation.',
							img_0 : 'url(\'./assets/moduleThreeIntros/largescl-intro_lftcircle.png\')',
							img_1 : 'url(\'./assets/moduleThreeIntros/largescl-intro_midcircle.png\')',
							img_2 : 'url(\'./assets/moduleThreeIntros/largescl-intro_rtcircle.png\')',
						},
						illustrations: [
							{
								art_0: "url('./assets/__image_Gear_ClipboardGraphs.svg')",
								left: "8vw",
								top:"12vw"
							},
							{
								art_0: "url('./assets/__icon_USMap.svg')",
								left: "43vw",
								top:"12vw"
							},
							{
								art_0: "url('./assets/__image_MagnifyingGlass.svg')",
								left: "59.5vw",
								top:"30vw",
								width:"10vw",
								height:"10vw"
							},
							{
								art_0: "url('./assets/icon_ContractAwarded.svg')",
								left: "4.3vw",
								top:"39.25vw",
								width:"5vw",
								height:"5vw"
							},
							{
								art_0: "url('./assets/icon_ContractComplete.svg')",
								left: "89.5vw",
								top:"39.25vw",
								width:"5vw",
								height:"5vw"
							}
						],
						stages: [
							{
								name: "Project<br>Initiation",
								left: "17.8vw",
								bgColor: "#59023B",
								shadowColor: "0 0 0 0.5vw #59023B",
								alternate: true,
								subsections: [
									{
										heading: "Build a team",
										bullets: [
											"Subject matter experts",
											"Statisticians",
											"Data collection operations managers", 
											"Systems leads", 
											"Data Management leads"
										]
									},
									{
										heading: "Develop a survey design and data collection solution",
										bullets: [
											"Flesh out the questions to be answered/literature review",
											"Identify design/technologies/data collection methods",
											"Identify potential resources"
										]
									},
									{
										heading: "Develop detailed work plan",
										bullets: [
											"Submit proposed plan and costs to client",
											"If awarded contract, present plan and task schedule at kick-off meeting with client",
											"Revise the work plan"
										]
									}
								]
							},
							{
								name: "Project<br>Development",
								left: "24vw",
								bgColor: "rgb(66,134,63)",
								shadowColor: "0 0 0 0.5vw rgb(66,134,63)",
								alternate: false,
								subsections: [
									{
										heading: "Solidify next level of survey design plan details",										
										bullets: [
											"Survey design and testing",
											"Frame development",
											"Sample selection",
											"Methodological development",
											"Data environment requirements",
											"Security and confidentiality requirements and plans",
											"Specifications for survey instrumentation, management systems, reporting, and data editing",
											"Dashboard for monitoring paradata and critical survey variables",
											"Review data deliverables and operational requirements to inform specification development for data flows and systems setup",
											"Systems development",
											"Data collection operations planning including recruitment requisitions, training and field management plans, detailed procedures and data collection materials, data collection validation",
											"Data definition, processing and management",
											"Weighting",
											"Analyses",
											"Documentation",
											"Deliverables"
										]
									},
									{
										heading: "Establish comprehensive detailed project schedule and resources/budget",
										bullets: [
											"List all tasks and activities",
											"Identify supplemental resource requirements"
										]
									},
									{
										heading: "Establish cost accounting structure"
									},
									{
										heading: "Establish meeting and communication strategies/practices"
									}
								]
							},
							{
								name: "Sampling, Data Collection and Processing",
								left: "41vw",
								bgColor: "#0F809C",
								shadowColor: "0 0 0 0.5vw #0F809C",
								alternate: true,
								subsections: [
									{
										heading: "Planning",
										bullets: [
											"Implement communications systems",
											"Establish data environment with all necessary security",
											"Complete literature reviews",
											"Produce and test questionnaires and other data collection instruments",
											"Prepare IRB materials for review/approval",
											"Define detailed data collection procedures",
											"Purchase equipment",
											"Determine use of incentives and plan for incentive distribution",
											"Establish project helpdesks as needed",
											"Recruit data collectors",
											"Develop data collector training plan/materials",
											"Prepare OMB package",
											"Define data management and delivery processes",
											"Define production reports for all audiences"
										] 
									},
									{
										heading: "Conduct end-to-end system/process pretest"
									},
									{
										heading: "Sample selection at all stages",
										bullets: [
											"Sample frame(s) development/creation at all stages",
											"Select samples at all stages"
										] 
									},
									{
										heading: "Recruit sampled units"
									},
									{
										heading: "Implementation"
									},
									{
										heading: "Hire and train Staff",
										bullets: [
											"Recruit and hire data collection staff",
											"Produce/distribute “field” materials",
											"Train staff"
										]
									},
									{
										heading: "Collect data",
										bullets: [
											"Contact respondents",
											"Conduct site visits, as needed",
											"Implement mode(s) of data collection",
											"Perform non-response conversion/send reminders",
											"Perform data collection validation",
											"Review and process data",
											"Operate project helpdesk",
											"Implement ongoing quality control of data collection",
											"Monitor production against goals and report to stakeholders"
										]
									}
									// {
									// 	heading: "Close-out activities"
									// }
									// {
									// 	heading: "Capture/edit/recode the data",
									// 	bullets: [
									// 		"•	Perform data entry, as needed",
									// 		"•	Implement WesQx operations hard copy needs",
									// 		"•	Assign  outcome codes",
									// 		"•	Edit/code/recode the data",
									// 		"•	Harmonize data "
									// 	]
									// }
									// ,
									// {
									// 	heading: "Weight the data",
									// 	bullets: [
									// 		"•	Impute key variables, as needed for weighting",
									// 		"•	Assign initial weights",
									// 		"•	Apply nonresponse and calibration adjustments"
									// 	]
									// }
									//,
									// {
									// 	heading: "Generate replicate weights to support variance estimation"
									// },
									// {
									// 	heading: "Create analytic files"
									// },
									// {
									// 	heading: "Respond to all data user questions and inquiries"
									// }
								]
							},
							{
								name: "Conduct Data Analysis and Reporting",
								left: "56.5vw",
								bgColor: "rgb(55,20,74)",
								shadowColor: "0 0 0 0.5vw rgb(55,20,74)",
								alternate: false,
								subsections: [
									{
										heading: "Finalize analysis plan"
									},
									{
										heading: "Conduct analyses/generate tables"
									},
									{
										heading: "Iteratively draft and review analytic reports and client comments"
									}
									// ,
									// {
									// 	heading: "Post WesDax or other files for data viewing/analytic support"
									// }
									// ,
									// {
									// 	heading: "Produce presentations for clients"
									// },
									// {
									// 	heading: "Produce journal articles"
									// }
								]
							},
							{
								name: "Project<br>Reporting",
								left: "73.2vw",
								bgColor: "#BB3D24",
								shadowColor: "0 0 0 0.5vw #BB3D24",
								alternate: true,
								subsections: [
									{
										heading: "Prepare datasets and metadata/documentation for delivery"
									},
									{
										heading: "Create final methodological report"
									},
									{
										heading: "Create a project description for WesPress and Westat.com"
									},
									{
										heading: "Complete field staff evaluations and reports"
									},
									{
										heading: "Continuous Improvement"
									}
								]
							},
						]
					}}
				// dummy: {
				// 	title: "coming soon"
				// }
			}
		},
		moduleFour: {
			title: "where to find it",
			img: "url('./assets/resource main menu.jpg')",
			blockColor: "home-nav--crimson",
			link: "../two/intro.html",
			class: 'module-four',
			introFooter: "Westat is one of the foremost professional service corporations of its kind",
			sections: {
				dummy: {
					title: "coming soon"
				}
			}
		},
		home: {
			class: 'home',
			sections: {
				home: {
					home: {
						format: "home",
						position: 14,
						blocks: {
							block1: {
								title: "who we are",
								li: [{ text: 'industry',
									link: './one/industry.html' }, { text: 'legacy',
									link: './one/legacy.html' }, { text: 'expertise',
									link: './one/expertise.html' }, { text: 'culture',
									link: './one/culture.html' }, { text: 'our work',
									link: './one/our work.html' }],
								img: "url(./assets/who full.jpg)",
								class: "home-nav__title home-nav--purple"
							},
							block2: {
								title: "what we do",
								li: [{ text: 'subject areas' }],
								img: "url(./assets/what full.jpg)",
								class: "home-nav__title home-nav--green"
							},
							block3: {
								title: "how we do it",
								li: [{ text: '' }],
								img: "url(./assets/how full.jpg)",
								class: "home-nav__title home-nav--blue"
							},
							block4: {
								title: "where to find it",
								li: [{ text: '' }],
								img: "url(./assets/resources full.jpg)",
								class: "home-nav__title home-nav--crimson"
							}
						},
						video: 'https://players.brightcove.net/1232842447001/BkS1OPjQ_default/index.html?videoId=5775864952001',
					}
				}
			}
		}
	},
	order: ['["moduleOne", "intro", "one"]', '["moduleOne", "industry", "one"]', '["moduleOne", "legacy", "one"]', '["moduleOne", "expertise", "one"]', '["moduleOne", "expertise", "two"]', '["moduleOne", "culture", "one"]', '["moduleOne", "culture", "two"]', '["moduleOne", "ourWork", "one"]',
	// '["moduleOne", "outro", "one"]',
	'["moduleTwo", "intro", "one"]', '["moduleTwo", "subjectAreas", "one"]', '["moduleTwo", "clients", "one"]', '["moduleTwo", "clients", "two"]', '["moduleTwo", "contracts", "one"]', '["moduleTwo", "contracts", "two"]', '["moduleTwo", "proposalProcess", "one"]',
	'["moduleThree", "intro", "one"]', '["moduleThree", "overview", "one"]', '["moduleThree", "projectJourneys", "one"]', '["moduleThree", "projectJourneys", "two"]', '["moduleThree", "projectJourneys", "three"]', '["moduleThree", "projectJourneys", "four"]', '["home", "home", "home"]']
};


































