import { site } from '../../config/site';

const publisher = {
	'@type': 'Organization',
	name: 'Syntax Toolbox',
	url: site.home(),
};

export const homeMeta = {
	title: "Syntax Toolbox - Free Online Calculators & Converters",
	description: "Free online calculators, converters & tools - no signup needed. Simplify daily tasks instantly with Syntax Toolbox's growing collection of quality utilities.",
	keywords: "free online calculators and converters, online tools free...",
	schema: [
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Syntax Toolbox',
			url: site.home(),
			logo: site.asset('/assets/indexing/logo.svg'),
			description:
				'Syntax Toolbox is a free online platform offering calculators, converters, and productivity tools designed to simplify everyday tasks. No registration required - get instant, accurate results for math, finance, unit conversion, health, and more.',
			foundingDate: '2025',
			founder: {
				'@type': 'Person',
				name: 'Souleh Shaikh',
				jobTitle: 'Full Stack Senior Software Engineer',
				url: 'https://github.com/soulehshaikh99',
				sameAs: ['https://www.linkedin.com/in/souleh-shaikh'],
			},
			contactPoint: {
				'@type': 'ContactPoint',
				email: 'support@syntaxtoolbox.com',
				contactType: 'Customer Support',
				url: site.page('/contact-us'),
				availableLanguage: ['English'],
			},
			sameAs: [
				'https://x.com/syntaxtoolbox',
				'https://www.instagram.com/syntaxtoolbox/',
				'https://www.threads.com/@syntaxtoolbox',
				'https://www.facebook.com/people/Syntax-Toolbox/61580527934984/',
				'https://www.linkedin.com/company/syntax-toolbox',
				'https://in.pinterest.com/syntaxtoolbox/',
				'https://github.com/syntaxtoolbox',
				'https://www.reddit.com/user/SyntaxToolbox/',
			],
		},
		{
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: 'Syntax Toolbox',
			url: site.home(),
			description:
				"Free online calculators, converters & tools - no signup needed. Simplify daily tasks instantly with Syntax Toolbox's growing collection of quality utilities.",
			publisher,
			siteNavigationElement: [
				{ '@type': 'SiteNavigationElement', name: 'Home', url: site.home() },
				{ '@type': 'SiteNavigationElement', name: 'Tools', url: site.dir('/tools/') },
				{ '@type': 'SiteNavigationElement', name: 'About Us', url: site.page('/about-us') },
				{ '@type': 'SiteNavigationElement', name: 'Contact Us', url: site.page('/contact-us') },
			],
		},
		{
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: 'Syntax Toolbox - Free Online Calculators & Converters',
			url: site.home(),
			description:
				"Free online calculators, converters & tools - no signup needed. Simplify daily tasks instantly with Syntax Toolbox's growing collection of quality utilities.",
			publisher,
		},
		{
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: [
				{
					'@type': 'Question',
					name: 'Is Syntax Toolbox free to use?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Yes. Syntax Toolbox is completely free with no subscriptions, sign-ups, or hidden charges.',
					},
				},
				{
					'@type': 'Question',
					name: 'Do I need to install anything?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'No. Syntax Toolbox runs entirely in your browser. No installations or extensions are required. Just open the website on any device with an internet connection and start using the tools.',
					},
				},
				{
					'@type': 'Question',
					name: 'Is my data private and secure?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Yes. Processing happens completely on your device; we never store or transmit your inputs to our servers.',
					},
				},
				{
					'@type': 'Question',
					name: 'What browsers and devices are supported?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Syntax Toolbox works on modern browsers (Chrome, Firefox, Edge, Safari) across desktop and mobile devices.',
					},
				},
				{
					'@type': 'Question',
					name: 'Are there any usage limits or hidden charges?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'No. Syntax Toolbox is completely free without any limits or hidden charges. Use the tools as often as you like.',
					},
				},
				{
					'@type': 'Question',
					name: 'Can I convert or process multiple files at once?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Yes. Batch processing is available in select tools for handling multiple files simultaneously.',
					},
				},
				{
					'@type': 'Question',
					name: 'Do you show ads or sell user data?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'No. We do not sell your data. If we show ads, we aim to keep them minimal and non-intrusive.',
					},
				},
				{
					'@type': 'Question',
					name: 'How often do you add new tools or updates?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'We ship improvements regularly. Check the changelog for new tools and feature updates.',
					},
				},
				{
					'@type': 'Question',
					name: 'How can I report a bug or request a tool?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: "Visit our 'Contact Us' page to share feedback, report issues, or suggest new tools.",
					},
				},
			],
		},
		{
			'@context': 'https://schema.org',
			'@type': 'ItemList',
			name: 'Most Popular Tools on Syntax Toolbox',
			itemListOrder: 'http://schema.org/ItemListOrderAscending',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, url: site.page('/tools/bmi-calculator'), name: 'BMI Calculator' },
				{ '@type': 'ListItem', position: 2, url: site.page('/tools/age-calculator'), name: 'Age Calculator' },
				{
					'@type': 'ListItem',
					position: 3,
					url: site.page('/tools/percentage-calculator'),
					name: 'Percentage Calculator',
				},
				{ '@type': 'ListItem', position: 4, url: site.page('/tools/csv-to-json'), name: 'CSV to JSON Converter' },
				{
					'@type': 'ListItem',
					position: 5,
					url: site.page('/tools/stock-average-calculator'),
					name: 'Stock Average Calculator',
				},
			],
		},
	]
}
