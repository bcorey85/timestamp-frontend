import { useEffect } from 'react';

const useClickOutside = (ref: any, handler: any) => {
	const listener = (e: any) => {
		if (ref.current && !ref.current.contains(e.target)) {
			handler();
		}
	};

	useEffect(
		() => {
			document.addEventListener('click', listener);

			return () => {
				document.removeEventListener('click', listener);
			};
		},
		[ ref, handler ]
	);
};

export { useClickOutside };
