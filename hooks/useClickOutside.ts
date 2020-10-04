import { useEffect, useRef } from 'react';

const useClickOutside = (ref: any, handler: any) => {
	const handlerRef = useRef(handler);

	const listener = e => {
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
