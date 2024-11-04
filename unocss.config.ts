import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';

export default defineConfig({
	shortcuts: [
		// ...
	],
	theme: {
		/* fontFamily: {
			serif: 'Noto Serif',
			sans: 'Noto Sans',
			'thai-serif': ['Noto Serif Thai'],
			'thai-sans': ['Noto Sans Thai']
		}, */
		colors: {
			primary: '#fcb100'
		}
	},
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons(),
		presetTypography(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				serif: ['Noto Serif', 'Noto Serif Thai'],
				sans: ['Noto Sans', 'Noto Sans Thai']
			}
		})
	],
	transformers: [transformerDirectives(), transformerVariantGroup()]
});
