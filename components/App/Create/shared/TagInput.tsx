import React, { SyntheticEvent, useState } from 'react';

import { Tag } from './Tag';

import styles from './TagInput.module.scss';
import { BiPlus } from 'react-icons/bi';

interface Props {
	handleAddTag: (tagName: string) => void;
	handleRemoveTag: (tagName: string) => void;
	tags: string[];
}

const TagInput = ({
	handleAddTag,
	handleRemoveTag,
	tags
}: Props): JSX.Element => {
	const [ currentTag, setCurrentTag ] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentTag(e.target.value);
	};

	const handleAdd = (e: SyntheticEvent) => {
		e.preventDefault();
		handleAddTag('#' + currentTag);
		setCurrentTag('');
	};

	const handleRemove = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		handleRemoveTag(e.currentTarget.textContent);
	};

	const tagElements = tags.map(tag => {
		return <Tag tagName={tag} handleRemove={handleRemove} key={tag} />;
	});

	return (
		<div className={styles.container}>
			<label>Tags</label>
			<div className={styles.input_container}>
				<input
					type='text'
					id='tag'
					value={currentTag}
					onChange={handleChange}
					autoComplete='off'
				/>
				<button onClick={handleAdd}>
					<BiPlus />
				</button>
			</div>

			<div className={styles.tag_container}>{tagElements}</div>
		</div>
	);
};

export { TagInput };
