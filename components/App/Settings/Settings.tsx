import React, { useState } from 'react';

import { DashboardHeader } from '../shared/DashboardHeader';
import { Button } from '../../shared/Button';

import styles from './Settings.module.scss';
import { UpdateDetails } from './UpdateDetails';
import { useApiRequest } from '../../../hooks/useApiRequest';

const Settings = (): JSX.Element => {
	const [ updatePasswordOpen, setUpdatePasswordOpen ] = useState(false);
	const [ updateEmailOpen, setUpdateEmailOpen ] = useState(false);

	const handleUpdatePassword = (mode: string) => {
		setUpdateEmailOpen(false);
		setUpdatePasswordOpen(!updatePasswordOpen);
	};

	const handleUpdateEmail = (mode: string) => {
		setUpdatePasswordOpen(false);
		setUpdateEmailOpen(!updateEmailOpen);
	};

	return (
		<div>
			<DashboardHeader heading='Settings' subheading='Account' />
			<section className={styles.section}>
				<h2 className='section_heading'>User Details</h2>
				<div>
					Email: bcorey85@gmail.com ({' '}
					<Button btnStyle='link_primary' onClick={handleUpdateEmail}>
						edit
					</Button>{' '}
					)
				</div>
				<div>Account Created: 02/26/2019</div>
				<div>Last Login: 03/31/2019</div>
				<div className={styles.edit_form}>
					<Button
						btnStyle='link_primary'
						onClick={handleUpdatePassword}>
						Change Password
					</Button>
					{updatePasswordOpen ? (
						<UpdateDetails
							mode={'password'}
							closeForm={() => setUpdatePasswordOpen(false)}
						/>
					) : null}
					{updateEmailOpen ? (
						<UpdateDetails
							mode={'email'}
							closeForm={() => setUpdateEmailOpen(false)}
						/>
					) : null}
				</div>
			</section>
			<section className={styles.section}>
				<h2 className='section_heading'>Interface</h2>
				<div>
					Color mode
					<div>Light Mode / Dark Mode</div>
				</div>
			</section>
			<section className={styles.section}>
				<h2 className='section_heading'>Delete Account</h2>
				<p>
					Warning this action is permanent. All account data will be
					lost
				</p>
				<div className={styles.btn_container}>
					<Button btnStyle='delete' onClick={() => {}}>
						Delete
					</Button>
				</div>
			</section>
		</div>
	);
};

export { Settings };
