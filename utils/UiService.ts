import chroma from 'chroma-js';

import { MathService } from './MathService';

class UiService {
	static preventBodyScrollOnModalOpen = (nextModalState: boolean) => {
		if (nextModalState === true) {
			document.body.style.position = 'fixed';
			document.body.style.top = `-${window.scrollY}px`;
		} else {
			const scrollY = document.body.style.top;
			document.body.style.position = '';
			document.body.style.top = '';
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
		}
	};

	static toggleDarkMode = (darkMode: boolean) => {
		if (darkMode === true) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	};

	static calculateAlpha = (colorAlpha: number, colorVar: string) => {
		let adjustedAlpha;

		if (MathService.lte(colorAlpha, 0)) {
			adjustedAlpha = 0.1;
		} else if (MathService.between(colorAlpha, 0, 0.5)) {
			adjustedAlpha = 0.3;
		} else if (MathService.between(colorAlpha, 0.6, 0.8)) {
			adjustedAlpha = 0.6;
		} else {
			adjustedAlpha = 1;
		}

		const bodyStyles = getComputedStyle(document.body);
		const colorVarValue = bodyStyles.getPropertyValue(colorVar).trim();

		const color = chroma(colorVarValue).alpha(adjustedAlpha);

		return color;
	};
}

export { UiService };
