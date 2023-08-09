import { createGlobalStyle } from 'styled-components';
import '@fontsource-variable/open-sans';

const GlobalStyles = createGlobalStyle`
	:root {
		--fw-regular: 400;
		--fw-semibold: 600;
		--fw-bold: 700;

		--fs-200: 0.75rem;
		--fs-300: 0.875rem;
		--fs-400: 1rem;
		--fs-500: 1.25rem;
		--fs-600: 1.5rem;

		--primary-color: ${({ theme }) => theme.colors.blue[400]};
		--text: ${({ theme }) => theme.colors.black[400]};
		--dark-blue-text: ${({ theme }) => theme.colors.darkBlue[400]};
		--bg: ${({ theme }) => theme.colors.darkBlue[400]};
		--success-color: ${({ theme }) => theme.colors.green[400]};
		--white: ${({ theme }) => theme.colors.white};

		font-family: ${({ theme }) => theme.fonts.join(',')};		
		line-height: normal;
		font-size: var(--fs-400);
		font-weight: var(--fw-semibold);

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	::-moz-selection {
		background: ${({ theme }) => theme.colors.blue[400]};
		text-shadow: none;
	}

	::selection {
		background: ${({ theme }) => theme.colors.blue[400]};
		text-shadow: none;
	}

	html {
		box-sizing: border-box;
		scroll-behavior: smooth;
		height: 100%;

		@media (prefers-reduced-motion: reduce) {
			scroll-behavior: auto;

			body * {
				animation-duration: 0s !important;
				animation-delay: 0s !important;
			}
		}  
	}

	*,
	*::after,
	*::before {
		box-sizing: inherit;
	}

	body {
		background-color: var(--bg);
		color: var(--text);	
		height: 100%;
	}

	blockquote,
	body,
	figure,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	hr,
	li,
	ol,
	p,
	pre,
	ul {
		margin: 0;
		padding: 0;
	}

	ul:where([class]) {
		list-style: none;
	}

	button,
	input,
	select,
	textarea {
		color: inherit;
		letter-spacing: inherit;
		font: inherit;
	}

	input[type="text"],
	textarea {
		width: 100%;
	}

	fieldset {
		padding: 0;
		border: none;
	}

	legend {
		margin-bottom: 0.5rem;
		max-width: 100%;
	}

	button,
	input,
	textarea {
		border: 1px solid gray;
	}

	button * {
		pointer-events: none;
	}

	button:hover {
		cursor: pointer;
	}

	embed,
	iframe,
	img,
	object,
	svg,
	video {
		display: block;
		max-width: 100%;
	}

	table {
		width: 100%;
		table-layout: fixed;
	}

	[hidden] {
		display: none !important;
	}

	noscript {
		display: block;
		margin-top: 1em;
		margin-bottom: 1em;
	}

	[tabindex="-1"] {
		outline: none !important;
		box-shadow: none !important;
	}
`;

export default GlobalStyles;
