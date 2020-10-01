import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

import styles from './ListPagination.module.scss';

interface Props {
	next: () => void;
	back: () => void;
	showNextButton: boolean;
	showBackButton: boolean;
	pageNumber: number;
	totalPages: number;
}

const ListPagination = ({
	next,
	back,
	showBackButton,
	showNextButton,
	pageNumber,
	totalPages
}: Props): JSX.Element => {
	return (
		<nav className={styles.container}>
			<button
				onClick={back}
				className={styles.btn}
				disabled={!showBackButton}>
				{showBackButton ? <BiChevronLeft /> : null}
			</button>
			Page: {pageNumber} / {totalPages}
			<button
				onClick={next}
				className={styles.btn}
				disabled={!showNextButton}>
				{showNextButton ? <BiChevronRight /> : null}
			</button>
		</nav>
	);
};

export { ListPagination };
