import React from 'react';

import { Button } from '../../shared/Button';

import styles from './DeleteAccount.module.scss';

const DeleteAccount = (): JSX.Element => {
	return (
		<React.Fragment>
			<h2 className='section_heading'>Delete Account</h2>
			<p>
				Warning this action is permanent. All account data will be lost
			</p>
			<div className={styles.btn_container}>
				<Button btnStyle='delete' onClick={() => {}}>
					Delete
				</Button>
			</div>
		</React.Fragment>
	);
};

export { DeleteAccount };
