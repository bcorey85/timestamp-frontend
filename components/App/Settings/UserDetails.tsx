import React, { useState } from 'react';

import { Button } from '../../shared/Button';
import { UpdateDetails } from './UpdateDetails';

import styles from './UserDetails.module.scss';
import { useSelector } from 'react-redux';
import { selectAppData } from '../../../redux/appData';
import { DateTimeService } from '../../../utils/DateTimeService';

const UserDetails = (): JSX.Element => {
	const [ updatePasswordOpen, setUpdatePasswordOpen ] = useState(false);
	const [ updateEmailOpen, setUpdateEmailOpen ] = useState(false);
	const { email, lastLogin, createdAt } = useSelector(selectAppData);

	const handleUpdatePassword = (mode: string) => {
		setUpdateEmailOpen(false);
		setUpdatePasswordOpen(!updatePasswordOpen);
	};

	const handleUpdateEmail = (mode: string) => {
		setUpdatePasswordOpen(false);
		setUpdateEmailOpen(!updateEmailOpen);
	};

	return (
		<React.Fragment>
			<div>
				Email: {email}({' '}
				<Button btnStyle='link_primary' onClick={handleUpdateEmail}>
					edit
				</Button>{' '}
				)
			</div>
			<div>
				Account Created:{' '}
				<span className={styles.date}>
					{DateTimeService.formatDate(createdAt)} -{' '}
					{DateTimeService.formatTime(createdAt)}
				</span>
			</div>
			<div>
				Last Login:{' '}
				<span className={styles.date}>
					{DateTimeService.formatDate(lastLogin)} -{' '}
					{DateTimeService.formatTime(lastLogin)}
				</span>
			</div>
			<div className={styles.edit_form}>
				<Button btnStyle='link_primary' onClick={handleUpdatePassword}>
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
		</React.Fragment>
	);
};

export { UserDetails };
