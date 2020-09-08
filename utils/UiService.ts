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
}

export { UiService };
