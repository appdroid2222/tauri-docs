import type { AstroIntegration } from 'astro';
import { TranslationStatusBuilder } from '../lib/translation-status/builder';
import locales from '../../../locales.json';

const createPlugin = (): AstroIntegration => {
	return {
		name: 'docs-i18n-tracker',
		hooks: {
			'astro:build:done': async (options) => {
				console.log(options);
				// const translationStatusBuilder = new TranslationStatusBuilder({
				// 	pageSourceDir: '../../../src/content/docs',
				// 	htmlOutputFilePath: '../../../dist/contribute/translate-status.html',
				// 	sourceLanguage: 'en',
				// 	targetLanguages: Object.values(locales)
				// 		.map((el) => el.lang)
				// 		.filter((lang) => lang !== 'en')
				// 		.sort(),
				// 	languageLabels: Object.values(locales)
				// 		.filter((loc) => loc.lang !== 'en')
				// 		.reduce((acc, curr) => ({ [curr.lang]: curr.label, ...acc }), {}),
				// 	githubRepo: process.env.GITHUB_REPOSITORY || 'tauri-apps/tauri-docs',
				// 	gitHubRef: 'next',
				// 	githubToken: process.env.GITHUB_TOKEN,
				// });

				// await translationStatusBuilder.run();
			},
		},
	};
};

export default createPlugin;
