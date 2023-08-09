import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			blue: {
				400: string;
			};
			black: {
				400: string;
			};
			darkBlue: {
				400: string;
			};
			gray: {
				400: string;
				100: string;
			};
			green: {
				400: string;
			};
			white: string;
		};
		fonts: string[];
	}
}
