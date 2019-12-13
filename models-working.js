var modelData = {
	modules: {
		moduleOne: {
			title: "who we are",
			img: "url('./assets/who full.jpg')",
			blockColor: "home-nav--purple",
			link: "../one/intro.html",
			class: 'module-one',
			introFooter: "2000+ dedicated employee-owners & staff working around the world",
			sections: {
				intro: {
					introTitle: "who we are",
					introFooter: "2000+ dedicated employee-owners & staff working around the world",
					one:{
						format: 'intro',
						position: 0,
					}
				},
				industry: {
					title: "industry",
					module: "who we are",
					link: "../one/industry1.html",
					one: {
						format: 0,
						position: 1,
					}
				},
				legacy: {
					title: "legacy",
					module: "who we are",
					link: "../one/legacy1.html",
					one: {
						format: 0,
						position: 2,
						timeline: {
							breaks: [-.1, .036, .132, .305, .46, .594],
							segments: [
								{
									d: 'M 45 13.5 L 76.5 13.5 A 5.25 5.25 0 0 1 87 13.5 A 5.25 5.25 0 0 1 76.5 13.5',
									cy: 13.5,
									title: "1960s",
									icon: './assets/1960s_icon_W@W_timeline.svg',
									employees: '50',
									revenue: '$2k',
									body: `
										<div class="timeline-segment__paragraph">Ed Bryant, Jim Daley & Don King create Westat with Ed Bryant as President</div>
										<div class="timeline-segment__paragraph">Westat's first significant contract: statistical services for the U.S. Patent Office</div>
										<div class="timeline-segment__paragraph">Morris Hansen, a senior statistician from the Bureau of the Census, joins Westat</div>
										<div class="timeline-segment__paragraph">Westat relocates from Colorado to Rockville, Maryland</div>
									`,
									listTitle: "Areas of business:",
									listItems: [
										"Mathematical modeling",
										"First study involving sample design, weighting, tabulation and reporting  for the Department of Transportation",
										"First mail survey for the Department of Education",
										"Program evaluation projects for the U.S. Post Office and Model Cities Program"
									]
								},
								{
									d: 'M 45 13.5 L 45 32.5 L 13.5 32.5 A 5.25 5.25 0 0 0 3 32.5 A 5.25 5.25 0 0 0 13.5 32.5',
									cy: 32.5,
									title: "1970s",
									icon: './assets/1970s_icon_W@W_timeline.svg',
									employees: '164',
									revenue: '$14m',
									body: `
										<div class="timeline-segment__paragraph">Purchases first computer with 32kb memory</div>
										<div class="timeline-segment__paragraph">American Can Company purchases majority interest in Westat</div>
										<div class="timeline-segment__paragraph">Joe Hunt becomes President </div>
										<div class="timeline-segment__paragraph">Joe Waksberg, senior statistician, joins Westat from the Bureau of the Census</div>
										<div class="timeline-segment__paragraph">Opens first Telephone Research Center</div>
										<div class="timeline-segment__paragraph">Establishes national field organization for in-person data collection</div>
										<div class="timeline-segment__paragraph">Establishes Employee Stock Ownership Plan (ESOP)</div>
										<div class="timeline-segment__paragraph">Networks the TRC and field staff</div>
									`,
									listTitle: "Added areas of business:",
									listItems: [
										"Families, Fertility and Health",
										"Child Abuse and Neglect",
										"Surveys on crime-related topics",
										"Water quality surveys for the EPA",
										"Fast Response Survey Systems to collect issue-oriented data on key education issues at the elementary and secondary levels",
										"Expanded health survey business as public health programs matured",
										"Support Services for Studies of Cancer for NCI"
									]
								},
								{
									d: 'M 45 32.5 L 45 67 L 76.5 67 A 5.25 5.25 0 0 1 87 67 A 5.25 5.25 0 0 1 76.5 67',
									cy: 67,
									title: "1980s",
									icon: './assets/1980s_icon_W@W_timeline.svg',
									employees: '528',
									revenue: '$66m',
									body: `
										<div class="timeline-segment__paragraph">Establishes Research Campus</div>
										<div class="timeline-segment__paragraph">Provides employees with desktop computers</div>
										<div class="timeline-segment__paragraph">Introduces computer-assisted telephone interview (CATI) system</div>
										<div class="timeline-segment__paragraph">Launches nationwide database of field supervisors & interviewers</div>
									`,
									listTitle: "Added areas of business:",
									listItems: [
										"AIDS and HIV Research and Clinical trials",
										"Economics of Health Care",
										"Health and Nutrition Studies",
										"Educational Progress",
										"Reyes Syndrome Study leads to FDA warning about aspirin",
										"First international project in China"
									]
								},
								{
									d: 'M 45 67 L 45 98 L 13.5 98 A 5.25 5.25 0 0 0 3 98 A 5.25 5.25 0 0 0 13.5 98',
									cy: 98,
									title: "1990s",
									icon: './assets/1990s_icon_W@W_timeline.svg',
									employees: '1385',
									revenue: '$242m',
									body: `
										<div class="timeline-segment__paragraph">Graham Kalton, senior statistician, joins Westat in 1992</div>
										<div class="timeline-segment__paragraph">Conducts first computer-assisted personal interview (CAPI) study</div>
										<div class="timeline-segment__paragraph">Connects staff computers with WesNet</div>
										<div class="timeline-segment__paragraph">Partners with universities to establish the Joint Program in Survey Methodology</div>
										<div class="timeline-segment__paragraph">Opens additional Telephone Research Centers around the country</div>
										<div class="timeline-segment__paragraph">Invests in development of survey and statistical systems</div>	
									`,
									listTitle: "Added areas of business:",
									listItems: [
										"Evaluation of smoking cessation products and programs",
										"Drug exposure studies",
										"Studies of attitudes of youth towards military service",
										"Additional major studies on diet and health",
										"Studies of oil and gas reserves",
										"Significant expansion of education studies and clinical trials"
									]
								},
								{
									d: 'M 45 98 L 45 124.5 L 76.5 124.5 A 5.25 5.25 0 0 1 87 124.5 A 5.25 5.25 0 0 1 76.5 124.5',
									cy: 124.5,
									title: "2000s",
									icon: './assets/2000s_icon_W@W_timeline.svg',
									employees: '1947',
									revenue: '$506m',
									body: `
										<div class="timeline-segment__paragraph">Research methods & survey technologies expand to include web surveys, ACASI, BFOS, Blaise<sup>&reg;</sup> software, tablets & smartphones</div>
										<div class="timeline-segment__paragraph">Virtual telephone centers established</div>
										<div class="timeline-segment__paragraph">Graham Kalton becomes Chair of the Board (2006)</div>
										<div class="timeline-segment__paragraph">Fitness Center & Caf&eacute; open (2009)</div>
									`,
									listTitle: "Added areas of business:",
									listItems: [
										"Early Childhood Development",
										"Health Information Technology",
										"Health Services",
										"Program Evaluation",
										"Social Marketing & Communication",
										"Special Education",
										"Substance Abuse",
										"Transportation"
									]
								},
								{
									d: 'M 45 124.5 L 45 161 L 13.5 161 A 5.25 5.25 0 0 0 3 161 A 5.25 5.25 0 0 0 13.5 161',
									cy: 161,
									title: "2010s",
									icon: './assets/2010s_icon_W@W_timeline.svg',
									employees: '2000',
									revenue: '$565m',
									body: `
										<div class="timeline-segment__paragraph">Research methods & survey technologies expand to include web surveys, ACASI, BFOS, Blaise<sup>&reg;</sup> software, tablets & smartphones</div>
										<div class="timeline-segment__paragraph">Virtual telephone centers established</div>
										<div class="timeline-segment__paragraph">Graham Kalton becomes Chair of the Board (2006)</div>
										<div class="timeline-segment__paragraph">Fitness Center & Caf&eacute; open (2009)</div>
									`,
									listTitle: "Added areas of business:",
									listItems: [
										"Traffic management",
										"Operations research",
										"Expanded household travel survey",
										"Expanded behavioral and mental health",
										"Homeland security",
										"Expanded veterans administration and military",
										"Voting patterns and attitude"
									]
								},
							]
						}
					}
				},
				expertise: {
					title: "expertise",
					module: "who we are",
					link: "../one/expertise1.html",
					one: {
						format: 0,
						position: 3,
					},
					two: {
						format: 1,
						position: 4,
						tabs: [
							{
								title: "data collection & management",
								text: "blah"
							},
							{
								title: "statistical research & survey methods",
								text: "blah"
							},							
							{
								title: "program & policy evaluation",
								text: "blah"
							},							
							{
								title: "technical assistance",
								text: "blah"
							},							
							{
								title: "health research",
								text: "blah"
							},							
							{
								title: "communications & social marketing",
								text: "blah"
							},
						]
					}
				},
				culture: {
					title: "culture",
					module: "who we are",
					link: "../one/culture1.html",
					one: {
						format: 3,
						position: 5,
						content: {
							text: '',
							segments: []
						}
					}
				},
				ourWork: {
					title: "our work",
					module: "who we are",
					link: "../one/ourWork1.html",
					one: {
						format: 1,
						position: 6,
						tabs: []
					}
				},
				outro: {
					one: {
						format: "outro",
						position: 7
					}
				}
			}
		},
		moduleTwo: {
			title: "what we do",
			img: "url('./assets/what full.jpg')",
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
						backgroundImage: 'url("./assets/mod 2 background.jpg")',

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
						arcs: [
							{
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
								list: [
									{
										title: 'overview',
										name: 'Overview',
										text: 'Americans take 1.1 billion trips a day, totaling 4 trillion miles over a year. Our nationally recognized transportation researchers study vehicle technology, travel behavior, and traffic operations systems to help find and address traffic and safety challenges. We also explore motorcyclist, pedestrian, special driving population, distraction, and consumer safety issues, vehicle automation and connectivity challenges, and travel behavior patterns.'
									},
									{
										title: 'safety',
										name: 'Safety',
										text: "To reduce the causes and consequences of motor vehicle crashes, Westat's transportation safety research focuses on identifying problems, evaluating countermeasures, and enhancing safety programs. We conduct national surveys of restraint use and travel speeds. We also provide technical assistance and evaluation services to state and local law enforcement programs."
									},
									{
										title: 'human factors & emerging technologies',
										name: 'Human Factors & Emerging Technologies',
										text: 'How do drivers and passengers respond to emerging vehicle technologies and real-time driving challenges? Using specially instrumented vehicles, driving simulators, laboratory studies, and surveys, Westat supports the development of industry standards and regulatory guidelines that address safety concerns. Older drivers, novice drivers, chronic speeders, and drivers of vehicles with new technologies are often the focus of our work.'
									},
									{
										title: 'travel behavior',
										name: 'Travel Behavion',
										text: 'Driving, using public transportation, walking, and riding a bicycle to conduct daily activities affect traffic congestion, the environment, and health. Westat employs web-based and telephone surveys, smartphone apps, GPS loggers, and accelerometers to collect data that helps planners understand current travel patterns and build models that predict future travel patterns.'
									},
									{
										title: 'traffic management and operations',
										name: 'Traffic Management and Operations',
										text: 'Traffic cameras, roadside sensors, cell phones, and other technologies feed data into traffic operations and management centers that monitor traffic flow, crash occurrences, special events, and weather issues that affect drivers. Westat develops methods to use this information effectively, improve its quality, and share it with the motoring public while protecting driver privacy and ensuring safety.'
									},
									{
										title: 'consumer safety',
										name: 'Consumer Safety',
										text: 'Human factors and user experience experts conduct research on consumer products to better define safety hazards and evaluate countermeasures. Recent topics include seatbelt interlocks on recreational off-road vehicles (ROVs), child-resistant ignitions on all-terrain vehicles (ATVs), and studying potential choking hazards from window blind cords.'
									},
								]
							},
							{
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
								list: [
									{
										title: 'overview',
										name: 'Overview',
										text: 'Westat projects evaluate the fit and function of a variety of social services available to Americans. From children and families to marginalized populations, Westat collects data and performs evaluations that impact public policy decisions. '
									},
									{
										title: 'aging populations',
										name: 'Aging Populations',
										text: '<p>Westat provides valuable information resources, from survey data to analyses, to support basic research and policy decisions to meet the challenges facing our aging populations.</p><p>We help our clients answer these and other questions:</p><ul><li>Are government services supporting the aging population optimally?</li><li>What are the trends in late-life functioning and what are the economic and social consequences of aging and disability for individuals, families, and society?</li><li>What factors characterize “exceptional agers,” those people who stay mentally sharp and physically well into their 80s, 90s, and older?</li></ul>'
									},
									{
										title: 'children and families',
										name: 'Children and Families',
										text: '<p>Do programs reach their goals to protect and strengthen families? Westat has extensive experience with child welfare and family preservation programs, studies on child abuse and neglect, foster care, and general family functioning. We work with our clients to accomplish these and other goals:</p><ul><li>Boost child passenger safety</li><li>Champion for a healthier diet</li><li>Chart early childhood development</li><li>Count abused and neglected children</li><li>Examine the health habits of teens and their parents</li><li>Help young people transition out of foster care</li><ul>'
									},
									{
										title: 'criminal justice',
										name: 'Criminal Justice',
										text: 'Our criminal justice raises tough topics that require hard statistics: juvenile delinquency, victimization, sexual assault, probation, parole. Westat conducts research on crime characteristics and trends so that policymakers can develop actionable solutions to criminal justice problems.'
									},
									{
										title: 'economics',
										name: 'Economics',
										text: 'Westat economics research provides hard data for economic policymakers and business people. Our projects include economic empowerment for veterans, marketing to special populations, health economics, the economic and social consequences of aging and disability, health care claims and administrative data, a census of the U.S. economy, and cost-benefit analyses of social programs and policies.'
									},
									{
										title: 'employment',
										name: 'Employment',
										text: 'Issues regarding employment, from both employer and employee perspectives, are complex and far reaching; hiring and recruitment, immigration compliance, training, health care, health and safety, and employee satisfaction are just some of the issues in today\'s employment landscape. Westat conducts both qualitative and quantitative workforce studies that address these topics. From evaluating E-Verify to comparing literacy skills of adults worldwide to evaluating the success of vocational rehabilitation programs, Westat provides valuable data and analysis on employment issues and trends.'
									},
									{
										title: 'energy consumptions',
										name: 'Energy Consumptions',
										text: 'Who are the major users of energy in America and what energy sources do they use? Our research plays a vital part in major studies that track energy consumption, evaluate energy conservation programs, and measure adoption of alternative fuel usage.'
									},
									{
										title: 'homelessness and housing',
										name: 'Homelessness and Housing',
										text: 'Westat studies the problem of homelessness from a variety of perspectives, including causes, interventions, transitioning to homes, and funding for services. We help clients select and implement effective housing programs, including public housing, services for special-needs populations, community revitalization, and home ownership.'
									},
									{
										title: 'human trafficking prevention',
										name: 'Human Trafficking Prevention',
										text: 'Human trafficking is a crime of exploitation, with the majority of incidents exploiting victims for sex or forced labor. Westat studies measure the number of missing, abused, and exploited children, evaluate the effectiveness of programs that remove children from exploitive situations, and assess methods that combat international trafficking of persons of all ages.'
									},
									{
										title: 'military and veteran life',
										name: 'Military and Veteran Life',
										text: 'Many factors affect the everyday lives of active duty military personnel, veterans, and their families. Westat research supports the military\'s human resource needs, including personnel recruitment and retention, quality of life, and programs for military members and their families. The results of these studies are used to shape many of the human resources policies and practices of the U.S. military.'
									}
								]
							},
							{
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
								list: [
									{
										title: 'overview',
										name: 'Overview',
										text: ''
									},
									{
										title: 'clinical trials and public health',
										name: 'Clinical Trials and Public Health',
										text: 'Our clinical trials include support for drug, biologic, and device development for both commercial and government clients. We offer trial design and management, laboratory support, and site management and monitoring. Our epidemiologic research helps to understand the risk factors associated with disease, characteristics and prevalence of disease, and how health conditions affect populations. We conduct surveys on the status of the nation\'s health, and implement and rigorously evaluate clinic- and community-based health interventions and programs, as well as health care services provided to veterans.'
									},
									{
										title: 'health care',
										name: 'Health Care',
										text: 'Gathering accurate, relevant, and timely data on the health of all Americans helps guide actions and policies to improve our nation\'s well-being. Health services researchers at Westat seek to improve patient outcomes, patient care quality, and service coordination. We provide national estimates of the use and cost of health care services, study the causes and effects of health disparities among specific population subgroups, and investigate quality of care for targeted health conditions.'
									},
									{
										title: 'behavioral and mental health',
										name: 'Behavioral and Mental Health',
										text: 'Westat evaluates the challenges in addressing the impact of addictions and mental health issues on the individual and society. We support research efforts to treat, reduce, and prevent these issues through assessment, technical assistance and implementation, and evaluation of programs and policies for adults, children, and veterans. Our work supports advancing health care systems and services integration; optimizing benefit programs; adopting and financing evidence-based and/or promising practices to improve quality of life (such as return to work programs and software technologies to enhance care); and evaluating specified intervention programs.'
									},
								]
							},
							{
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
								list: [
									{
										title: 'overview',
										name: 'Overview',
										text: '<p>From students to teachers, from performance standards to national and international comparisons, Westat sets the benchmark on excellence in research, evaluation, and technical assistance around education\'s pressing issues.</p><p>As an objective provider of rigorous research, evaluation, and analysis, we let the data that we collect, manage, analyze, and deliver tell the story.</p><p>As a multifaceted technical assistance partner, we deliver an array of services, including training, mentoring, monitoring use of data, reporting, communications, and dissemination support.</p>'
									},
									{
										title: 'education reform',
										name: 'Education Reform',
										text: 'Westat examines the implementation and outcomes of high-profile reform initiatives designed to improve education for today\'s students. How do we improve education? What works? What doesn\'t? Are there correlations for success? Our work contributes to answering these questions.'
									},
									{
										title: 'educator effectiveness',
										name: 'Educator Effectiveness',
										text: 'We help state and local education agencies design and implement educator evaluation systems, make data-driven human capital management decisions, and improve instructional practices through structured evaluation and feedback.'
									},
									{
										title: 'special education',
										name: 'Special Education',
										text: '<p>Westat works with the Office of Special Education Programs (OSEP) to provide support for implementing the Individuals with Disabilities Act (IDEA). OSEP emphasizes data-based improvement planning for systemic change. With this results-driven accountability model, states need more support than ever to provide high-quality data.</p><p>Westat operates a comprehensive technical assistance center focusing on data requirements under IDEA. We provide a full range of state and local technical assistance&mdash;universal and individualized&mdash;to build capacity related to collecting, reporting, analyzing, and using high-quality IDEA data.</p>'
									},
									{
										title: 'international education',
										name: 'International Education',
										text: 'How does the United States compare with other countries in preparing our students for higher education and the workplace? We conduct many of the leading international education studies, with samples sometimes covering more than 60 countries and including over half a million students.'
									},
									{
										title: 'postsecondary education',
										name: 'Postsecondary Education',
										text: 'What is the state of postsecondary education in America? Westat conducts studies that examine our nation\'s research infrastructure, adult literacy, costs of postsecondary education, performance measurement, and distance education. Postsecondary education includes colleges and universities as well as technical programs and adult education.'
									},
									{
										title: 'pre-k through grade 12 education',
										name: 'Pre-K through Grade 12 Education',
										text: 'How do children\'s early life and school experiences affect their future? Westat conducts research on educational achievement, comparative studies of achievement, school-level implementation of reform, and program effectiveness and impact.'
									},
								]
							},
							{
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
								list: [
									{
										title: 'overview',
										name: 'Overview',
										text: '<p>We emphasize advanced technological solutions, accessibility, usable interfaces, comprehensive testing and certification, data security and confidentiality, and user support and training.</p><p>We employ both commercial off-the-shelf (COTS) and custom software solutions to meet project needs.</p><p>We maintain a secure environment and observe all federal requirements for data confidentiality and security.</p>'
									},
									{
										title: 'products distributed by Westat',
										name: 'Products Distributed by Westat',
										text: '<p><strong>Blaise</strong></p><p>Blaise is a multimode computer-assisted interviewing (CAI) system and survey-processing tool used by many Westat projects. Developed by Statistics Netherlands and licensed and supported in North and South America by Westat, Blaise includes many advanced capabilities that meet the high demands of today\'s CAI surveys.</p><p><strong>WesVar</strong></p><p>WesVar is a statistical tool that uses the robust and flexible approach of replication variance estimation. Using one of five methods of replication, users can estimate standard errors for simple estimators like totals or complicated ones like logistic regression parameter estimates.</p>'
									},
									{
										title: 'innovative solutions for Westat\'s projects',
										name: "Innovative Solutions for Westat's Projects",
										text: '<ul><li>Multimode survey management and support, consolidating data from CATI, CAPI, IVR, mobile, and other sources for case management and reporting</li><li>Custom extensions to support large and complex surveys</li><li>Audio-computer assisted self-interviewing (ACASI) software, featuring text-to-speech capabilities</li><li>Mobile technology in support of data collection that improves data quality and increases operational efficiencies</li><li>Web-based survey management applications to message participants via secure communication channels</li><li>Cross-platform capabilities, including iOS, Android, Windows 8.1, Cordova, Mono, and Sencha</li></ul>'
									},
									{
										title: 'targeted support for project needs',
										name: 'Targeted Support for Project Needs',
										text: '<ul><li>Big data management, including GPS coordinate management, and primary sampling unit graphical editors, visualization tools, and dashboards</li><li>Virtualization and cloud computing environments, including IaaS, PaaS, and SaaS</li><li>Collaboration and communications solutions to coordinate team activities</li><li>Video capture, processing, and storage systems integrated through cloud-based services</li><li>Strong support of open-source applications, development tools, and platforms, including Drupal, FusionForge, PHP, Java, and Apache</li><li>Adaptive and responsive web sites using jQuery, HTML5, and CSS3</li><li>GPS technologies and geospatial systems for collecting, analyzing, visualizing, and reporting data</li><li>Strong capabilities in SAS and data analytics</li></ul>'
									},
									{
										title: 'custom solutions for critical needs',
										name: 'Custom Solutions for Critical Needs',
										text: '<ul><li><strong>Basic Field Operations System (BFOS)</strong> manages CAI with seamless integration to Blaise and Cheshire, and supports audio computer-assisted self-interviewing (ACASI).</li><li>An <strong>interactive voice response (IVR) and web response (IWR) system</strong> provides for subject randomization and supply management.</li><li><strong>Biospecimen and Environmental Sample Tracking (BEST<sup>&reg;</sup>)</strong> software manages the life cycle of biospecimens and environmental samples.</li><li><strong>Study Tracking and Review System (STaRS)</strong> is a web-based system to manage requests to use study data and specimens. It also manages the publications, presentations, and adjunct studies.</li><li><strong>Case Management and Protocol Workflow (CMPW)</strong> suite is a comprehensive set of configurable tools.</li></ul>'
									},
									{
										title: 'tools to support statistical work',
										name: 'Tools to Support Statistical Work',
										text: '<ul><li><strong>WesDaX<sup>&reg;</sup></strong> is a web-based tool that enables non-statisticians and non-analysts to specify and run their own analyses.</li><li><strong>WesPSU</strong> will form primary sampling units (PSUs) from adjacent counties, within user-specified hard boundaries, with respect to a particular objective function and within specified constraints.</li><li><strong>WesSeg</strong> will combine blocks within PSUs to satisfy the constraints indicated by the algorithm controllers.</li><li><strong>WesSamp</strong> is a SAS macro that will draw samples based on user specifications.</li><li><strong>WesDeck</strong> is software for conducting hot-deck imputation.</li><li><strong>AutoImpute</strong> is a tool for semi-parametric multivariate imputation.</li></ul>'
									},
									{
										title: 'systems security and confidentiality',
										name: 'Systems Security and Confidentiality',
										text: '<p>To reduce the risk of disclosing the identity of survey respondents, we use unique statistical methods to reduce or modify data and restrict data access.</p><p>Westat-hosted data systems and sites are subject to stringent security standards. Physical data security across all network servers is ensured through the use of secure storage facilities and strict compliance with daily backup protocols.</p>'
									},
								]
							}
						]
					}
				},
				clients: {
					title: 'clients',
					link: '../two/clients1.html',
					backgroundImage: "url('./assets/clientsBackgroundImage.svg')",
					module: 'what we do',
					footer: 'Westat performs research services for a variety of clients',
					one: {
						format: 0,
						position: 10,
						wordArt: "url('./assets/clientsTypography.svg')",
						wordArtAlt: "",
						content: `<p>Westat was created and continues to exist today to perform research services focused on the clients' best interests. Providing high-quality work, on time, and within the established budget helps us to maintain our reputation. Earning the confidence of our clients is critical to winning additional work.</p>
								  <p>Many clients come to Westat with a firm idea of the project design and ask Westat to implement it.  But once they begin working with us, they are impressed by the way we think about the design and how best to operationalize it. Over time, they see Westat as contributing important design perspectives and skills.</p>
								  <p>As Westat has grown, we have expanded our business to include many client types.</p>`,
					},
					two: {
						format: 1,
						position: 11,
						tabs: [
							{
								name: "federal government",
								text: `The majority of Westat's work is conducted on behalf of the Federal government.`,
								images: [
									"./assets/federal logos2.svg"
								],
								imagesAlt: [
									"placeholder"
								]
							},
							{
								name: "state/local governments",
								text: `Westat collects data on behalf of and provides technical assistance to  state and local governments. We also work closely with state and local agencies in support of selected Federal contracts.`,
								images: [
									"./assets/state local logos.svg"
								]
							},
							{
								name: "foundations and associations",
								text: `<p>Much of our work for organizations such as the Gates and Robert Wood Johnson foundations are through grants administered by the Rockville Institute since they must be awarded to not-for-profit organizations. Work for associations such as the National Academy of Sciences and the Insurance Institute for Highway Safety is generally performed under contracts awarded directly to Westat.</p>
									   <p>Westat welcomes opportunities to expand our relationships with nongovernment clients. The work is often very focused, with ambitious project schedules.</p>`,
								images: [
									"./assets/foundations logos.svg"
								]
							},
							{
								name: "industry/commercial",
								text: `Westat works with industry and commercial clients, helping them to collect and assess data and evaluate products as well as assess their employee programs and offerings.`,
								images: [
									"./assets/industry commercial logos.svg"
								]
							}
						]
					},
				},
				contracts: {
					title: 'contracts',
					link: '../two/contracts1.html',
					backgroundImage: "url('./assets/contractBackgroundImage.svg')",
					wordArt: "url('./assets/contractsTypography2.svg')",
					module: "who we are",
					footer: "Westat Contracts Unit provides assistance and guidance",
					one: {
						format: 0,
						position: 12,
						wordArt: "url('./assets/contractsTypography2.svg')",
						content: `Contracts are agreements between Westat and clients that describe the specific work to be accomplished and the terms of payment. Clients generally dictate which type of agreement is being offered. There are several types of contracts; it is useful to know their fundamentals. This knowledge can provide the context for your day-to-day work and an understanding of how your tasks are budgeted, priced and managed. By understanding the subtle differences between contract types, each study team can greatly improve its ability to successfully execute its work.`
					},
					two: {
						format: 2,
						position: 13,
						tabs: [
							{
								name: "firm fixed price (FFP)",
								content: {
									heights: ['7vw', '8vw', '9vw', '15vw'],
									segments: [
										{
											title: "Pricing",
											content: "<ul class='accordion-panel__list'><li>Fixed unit or milestone pricing</li><li>Costs are NOT appropriate to discuss with external clients after award</li></ul>",
										},
										{
											title: "Risk/Return",
											content: "<ul class='accordion-panel__list'><li>Price is fixed and not subject to adjustment unless contract is modified</li><li>Highest return potential, no limit on profit</li></ul>",
										},
										{
											title: "Uses",
											content: "<ul class='accordion-panel__list'><li>Easy contract type for goods, products, materials, quantitative, tangible items</li><li>Not easy contract type for services, intangibles, innovation</li></ul>",
										},
										{
											title: "Billing/Payment",
											content: "<ul class='accordion-panel__list'><li>Based on completion and acceptance of contract-specific outcomes</li><li>Westat must satisfy contract requirements regardless of cost to perform</li><li>Billed at contract-established prices, deliverables, unit costs, milestones, or monthly</li><li>Westat must adhere to the period of performance</li></ul>",
										}
									]
								},
								examples: [
									{
										title: "Early Childhood Longitudinal Study - Kindergarten",
										img: "url('./assets/contracts-FFP-ECLS.png')"
									},
									{
										title: "National Household Travel Study",
										img: "url('./assets/contracts-FFP-NHtS.png')"
									},
									{
										title: "Maryland Cancer Registry",
										img: "url('./assets/contracts-FFP-MD-cancer.png')"
									}
								],
								images: []
							},
							{
								name: "cost-reimbursement (CR, CRFF)",
								content: {
									text: "",
									heights: ['9vw', '7vw', '5vw', '15vw'],
									segments: [
										{
											title: "Pricing",
											content: '<ul class="accordion-panel__list"><li>Project costs are estimated direct and indirect costs</li><li>Fixed fee in the profit</li><li>Contractor is required to make its "best effort" in performance up to the contract funding limit</li></ul>',
										},
										{
											title: "Risk/Return",
											content: "<ul class='accordion-panel__list'><li>Lowest risk for Westat</li><li>Cost-type contracts are Westat's best effort driven by completion or term</li></ul>",
										},
										{
											title: "Variations",
											content: "<ul class='accordion-panel__list'><li>Cost-Reimbursement (CR)</li><li>Cost-Plus-Fixed-Fee (CPFF)</li></ul>",
										},
										{
											title: "Billing/Payment",
											content: "<ul class='accordion-panel__list'><li>Billing based on actual direct costs and provisional indirect costs</li><li>Payment of actual/final indirect rates is done once Westat has received an approved indirect rate</li><li>Used often when costs cannot be estimated with sufficient accuracy and a fixed-price contract is not appropriate</li></ul>",
										}
									]
								},
								examples: [
									{
										title: "Cancer Trials Support Unit",
										img: "url('./assets/contracts-CR-CTSU.png')"
									},
									{
										title: "National Assessment of Educational Progress",
										img: "url('./assets/contracts-CR-NAEP.png')"
									},
									{
										title: "Population Assessment of Tobacco and Health",
										img: "url('./assets/contracts-CR-PATH.png')"
									}
								],
								images: []
							},
							{
								name: "time & materials (T&M)",
								content: {
									text: "",
									heights: ['13vw', '5vw', '7vw', '13vw'],
									segments: [
										{
											title: "Pricing",
											content: "<ul class='accordion-panel__list'><li>Loaded hourly labor rates plus any nonlabor support items needed</li><li>Westat is paid for time spent and materials purchased</li><li>Labor rates are fixed and require labor category descriptions</li></ul>",
										},
										{
											title: "Risk/Return",
											content: "<ul class='accordion-panel__list'><li>Medium-pricing risk, low-performance risk</li><li>The risk is nested in the changing costs of labor</li></ul>",
										},
										{
											title: "Uses",
											content: "<ul class='accordion-panel__list'><li>Often when it is not possible to estimate accurately the extent or duration of the work or to anticipate costs with confidence</li></ul>",
										},
										{
											title: "Billing/Payment",
											content: "<ul class='accordion-panel__list'><li>Billing is based on labor rates and hours, plus associated nonlabor expenses</li><li>Payment is based on labor hours and labor rates, not specific delivery products or outcomes. Nonlabor items are billed at actual cost plus associated indirect costs</li></ul>",
										}
									]
								},
								examples: [
									{
										title: "Advertising and Integrated Marketing Solutions",
										img: "url('./assets/contracts-TM-AIMS.png')"
									},
									{
										title: "Misson Oriented Business Integrated Solutions",
										img: "url('./assets/contracts-TM-MOBIS.png')"
									},
									{
										title: "National Travel Household Survey Support",
										img: "url('./assets/contracts-TM-NOPUS.png')"
									},
									{
										title: "Aircraft Noise and Annoyance Research Support",
										img: "url('./assets/contracts-TM-aircraft.png')"
									}
								],
								images: []
							},
							{
								name: "grants and cooperative agreements",
								content: {
									text: '',
									heights: ['13vw', '11vw', '9vw', '7vw'],
									segments: [
										{
											title: "Pricing",
											content: `<ul class='accordion-panel__list'><li>Grants are based on cost-reimbursement type of contract with similar budgeting and risks, no fee or profit and requires best effort.</li>
													  <li>Cooperative agreements require involvement and oversight from the funding agency or prime recipient and often operate like a contract without a fee.</li></ul>`,
										},
										{
											title: "Risk and Return",
											content: `<ul class='accordion-panel__list'><li>Less specific in the work to be done. Often give latitude in defining the research topic and approach. Same risks as for cost-reimbursement contract type</li>
													  <li>Are subject to different administrative, cost, and audit requirements than contracts</li></ul>`,
										},
										{
											title: "Use and Examples",
											content: `<ul class='accordion-panel__list'><li>Easy contract type for goods, products, materials, quantitative, tangible items</li>
													  <li>Not easy contract type for services, intangibles, innovation</li></ul>`,
										},
										{
											title: "Billing/Payment",
											content: "<ul class='accordion-panel__list'><li>Academic institutions and nonprofit organizations commonly award grants and cooperative agreements.  Federal agencies also use award grants.</li>",
										}
									]
								},
								examples: [
									{
										title: "filler",
										img: ""
									},
									{
										title: "filler",
										img: ""
									},
									{
										title: "filler",
										img: ""
									},
								],
								images: []
							}
						]
					},
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
					module: 'who we are',
					one: {
						format: 'proposalProcess',
						position: 14,
						images: [
							{
								img: './assets/Proposal_page_Illustraton_Clipboard.png',
								x: -29,
								y: -19,
								width: 5
							},
							{
								img: './assets/Proposal_page_Illustraton_Computer.png',
								x: -22,
								y: 14,
								width: 16
							},
							{
								img: './assets/Proposal_page_Illustraton_HandTarget.png',
								x: 7,
								y: 11,
								width: 12
							},
							{
								img: './assets/Proposal_page_Illustraton_LightBulb.png',
								x: -41,
								y: -3,
								width: 8
							},
							{
								img: './assets/Proposal_page_Illustraton_Map.png',
								x: 27,
								y: -3,
								width: 12
							},
							{
								img: './assets/Proposal_page_Illustraton_People.png',
								x: -4,
								y: -20,
								width: 10
							},
							{
								img: './assets/Proposal_page_Illustraton_CenterGear.svg',
								x: -11,
								y: -8,
								width: 24
							}


						],
						gears: [
							{
								radius: 5.3,
								teeth: 18,
								depth: .4,
								thickness: 4.9,
								x: -37.7,
								y: 17.8,
								type: 2,
								text: "Themes",
								stop: -6,
								modal: {
									title: "Business Development",
									body: "Our company works across the year to position ourselves strategically in our market, build and sustain our expertise and resultant standing with our clients, and to identify and assess opportunities in relation to Westat capabilities, likely competitors, and client needs."
								}
							},
							{
								radius: 7,
								teeth: 18,
								depth: .55,
								thickness: 6.45,
								x: -27.4,
								y: 11.2,
								type: 2,
								text: "<tspan dy='-.3' dx='0'>Capture</tspan><tspan dx='-6.3' dy='1.7'>Planning</tspan>",
								stop: 13,
								modal: {
									title: "Business Development",
									body: "Our company works across the year to position ourselves strategically in our market, build and sustain our expertise and resultant standing with our clients, and to identify and assess opportunities in relation to Westat capabilities, likely competitors, and client needs."
								}
							},
							{
								radius: 5.3,
								teeth: 18,
								depth: .4,
								thickness: 4.9,
								x: -16.6,
								y: 5.2,
								type: 2,
								text: "WesPress",
								stop: 0,
								modal: {
									title: "Business Development",
									body: "Our company works across the year to position ourselves strategically in our market, build and sustain our expertise and resultant standing with our clients, and to identify and assess opportunities in relation to Westat capabilities, likely competitors, and client needs."
								}
							},
							{
								radius: 7,
								teeth: 18,
								depth: .55,
								thickness: 6.45,
								x: -26,
								y: -2.7,
								type: 2,
								text: "<tspan dx='-.7' dy='-1'>Request</tspan><tspan dx='-7.8' dy='1.7'>for Proposal</tspan><tspan dx='-6.3' dy='1.7'>(RFP)</tspan>",
								stop: 10,
								modal: {
									title: "Business Development",
									body: "Our company works across the year to position ourselves strategically in our market, build and sustain our expertise and resultant standing with our clients, and to identify and assess opportunities in relation to Westat capabilities, likely competitors, and client needs."
								}
							},
							{
								radius: 5.3,
								teeth: 18,
								depth: .4,
								thickness: 4.9,
								x: -35.7,
								y: -10,
								type: 2,
								text: "<tspan dy='-.3' dx='.8'>Win</tspan><tspan dx='-4.5' dy='1.7'>Strategy</tspan>",
								stop: -3,
								modal: {
									title: "Business Development",
									body: "Our company works across the year to position ourselves strategically in our market, build and sustain our expertise and resultant standing with our clients, and to identify and assess opportunities in relation to Westat capabilities, likely competitors, and client needs."
								}
							},
							{
								radius: 9,
								teeth: 18,
								depth: .8,
								thickness: 8.2,
								x: -12.2,
								y: -10.9,
								type: 2,
								text: "<tspan dy='-.3' dx='1'>Business</tspan><tspan dx='-8.3' dy='1.7'>Development</tspan>",
								stop: -5,
								modal: {
									title: "Business Development",
									body: "Our company works across the year to position ourselves strategically in our market, build and sustain our expertise and resultant standing with our clients, and to identify and assess opportunities in relation to Westat capabilities, likely competitors, and client needs."
								}
							},
							// {
							// 	radius: 11,
							// 	teeth: 24,
							// 	depth: 1.2,
							// 	thickness: 9.8,
							// 	x: 1,
							// 	y: 3.8,
							// 	type: 0,
							// 	text: "",
							// 	stop: 0,
							// 	modal: {
							// 		title: "Business Development",
							// 		body: "Our company works across the year to position ourselves strategically in our market, build and sustain our expertise and resultant standing with our clients, and to identify and assess opportunities in relation to Westat capabilities, likely competitors, and client needs."
							// 	}
							// },
							{
								radius: 9,
								teeth: 18,
								depth: .8,
								thickness: 8.2,
								x: 15.3,
								y: -11.1,
								type: 2,
								text: "<tspan dx='' dy='-1'>Prime or</tspan><tspan dx='-8.5' dy='1.7'>Sub-business</tspan><tspan dx='-8' dy='1.7'>Partners</tspan>",
								stop: -8,
								modal: {
									title: "Business Development",
									body: "Our company works across the year to position ourselves strategically in our market, build and sustain our expertise and resultant standing with our clients, and to identify and assess opportunities in relation to Westat capabilities, likely competitors, and client needs."
								}
							},
							{
								radius: 7,
								teeth: 18,
								depth: .55,
								thickness: 6.45,
								x: 31.3,
								y: -11.8,
								type: 2,
								text: "<tspan dx='-.2' dy='-1'>Small</tspan><tspan dx='-5.5' dy='1.7'>Business</tspan><tspan dx='-4.8' dy='1.7'>Plan</tspan>",
								stop: 12,
								modal: {
									title: "Business Development",
									body: "Our company works across the year to position ourselves strategically in our market, build and sustain our expertise and resultant standing with our clients, and to identify and assess opportunities in relation to Westat capabilities, likely competitors, and client needs."
								}
							},
							{
								radius: 7,
								teeth: 18,
								depth: .55,
								thickness: 6.45,
								x: 20.2,
								y: 4.1,
								type: 2,
								text: "<tspan dy='-.3' dx='-.1'>Technical</tspan><tspan dx='-6.7' dy='1.7'>Proposal</tspan>",
								stop: 4,
								modal: {
									title: "Business Development",
									body: "Our company works across the year to position ourselves strategically in our market, build and sustain our expertise and resultant standing with our clients, and to identify and assess opportunities in relation to Westat capabilities, likely competitors, and client needs."
								}
							},
							{
								radius: 5.3,
								teeth: 18,
								depth: .4,
								thickness: 4.9,
								x: 26.7,
								y: 14.5,
								type: 2,
								text: "<tspan dy='-.3' dx='.8'>Cost</tspan><tspan dx='-5' dy='1.7'>Proposal</tspan>",
								stop:4,
								modal: {
									title: "Business Development",
									body: "Our company works across the year to position ourselves strategically in our market, build and sustain our expertise and resultant standing with our clients, and to identify and assess opportunities in relation to Westat capabilities, likely competitors, and client needs."
								}
							},
							{
								radius: 5.3,
								teeth: 18,
								depth: .4,
								thickness: 4.9,
								x: 36.5,
								y: 17.7,
								type: 2,
								text: "Staffing",
								stop: 5,
								modal: {
									title: "Business Development",
									body: "Our company works across the year to position ourselves strategically in our market, build and sustain our expertise and resultant standing with our clients, and to identify and assess opportunities in relation to Westat capabilities, likely competitors, and client needs."
								}
							},
						]

					}
				}
			}
		},
		moduleThree: {
			title: "how we do it",
			img: "url('./assets/how full.jpg')",
			blockColor: "home-nav--blue",
			link: "../two/intro.html",
			class: 'module-three',
			introFooter: "Westat is one of the foremost professional service corporations of its kind",
			sections: []
		},
		moduleFour: {
			title: "resources",
			img: "url('./assets/resources full.jpg')",
			blockColor: "home-nav--crimson",
			link: "../two/intro.html",
			class: 'module-four',
			introFooter: "Westat is one of the foremost professional service corporations of its kind",
			sections: []
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
						    	li: [
								      { text: 'industry',
								      	link: './one/industry.html' },
								      { text: 'legacy',
								      	link: './one/legacy.html' },
								      { text: 'expertise',
								      	link: './one/expertise.html' },
								      { text: 'culture',
								      	link: './one/culture.html' },
								      { text: 'our work',
								      	link: './one/our work.html' }
								    ],
								img: "url(./assets/who full.jpg)",
								class: "home-nav__title home-nav--purple"
							},
							block2: {
								title: "what we do",
								li: [
									{text: 'subject areas'}
								],
								img: "url(./assets/what full.jpg)",
								class: "home-nav__title home-nav--green"
							},
							block3: {
								title: "how we do it",
								li: [
									{text: ''}
								],
								img: "url(./assets/how full.jpg)",
								class: "home-nav__title home-nav--blue"
							},
							block4: {
								title: "resources",
								li: [
									{text: ''}
								],
								img: "url(./assets/resources full.jpg)",
								class: "home-nav__title home-nav--crimson"
							}
						}
					}
				}
			}
		}
	},
	order: [
		'["moduleOne", "intro", "one"]',
		'["moduleOne", "industry", "one"]',
		'["moduleOne", "legacy", "one"]',
		'["moduleOne", "expertise", "one"]',
		'["moduleOne", "expertise", "two"]',
		'["moduleOne", "culture", "one"]',
		'["moduleOne", "ourWork", "one"]',
		'["moduleOne", "outro", "one"]',
		'["moduleTwo", "intro", "one"]',
		'["moduleTwo", "subjectAreas", "one"]',
		'["moduleTwo", "clients", "one"]',
		'["moduleTwo", "clients", "two"]',
		'["moduleTwo", "contracts", "one"]',
		'["moduleTwo", "contracts", "two"]',
		'["moduleTwo", "proposalProcess", "one"]',
		'["home", "home", "home"]'

	]
}