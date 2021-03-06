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

		const app = document.getElementById('app') as HTMLDivElement;

		let color;
		if (app) {
			const bodyStyles = getComputedStyle(app);
			const colorVarValue = bodyStyles.getPropertyValue(colorVar).trim();
			color = chroma(colorVarValue).alpha(adjustedAlpha);
		}

		return color;
	};

	static getScreenWidth = () => {
		if (typeof window === 'undefined') {
			return 0;
		}

		return window.innerWidth;
	};

	static isMobileDevice = () => {
		if (typeof navigator !== 'object') {
			return false;
		}

		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)
		) {
			// true for mobile device
			return true;
		} else {
			// false for not mobile device
			return false;
		}
	};
}

export { UiService };
