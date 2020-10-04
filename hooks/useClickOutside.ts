import { useEffect, useRef } from 'react';

const useClickOutside = (ref: any, handler: any) => {
	const handlerRef = useRef(handler);
	console.log(handlerRef.current === handler);

	const listener = e => {
		if (ref.current && !ref.current.contains(e.target)) {
			console.log('calling handler');

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
