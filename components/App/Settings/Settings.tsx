import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import { useDispatch, useSelector } from 'react-redux';

import { DashboardHeader } from '../shared/DashboardHeader';
import { Button } from '../../shared/Button';

import styles from './Settings.module.scss';
import { UpdateDetails } from './UpdateDetails';
import { IconType } from '../../App/shared/TypeIcon';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { setDarkColorMode, selectInterface } from '../../../redux/interface';

const Settings = (): JSX.Element => {
	const { darkColorMode } = useSelector(selectInterface);

	const [ updatePasswordOpen, setUpdatePasswordOpen ] = useState(false);
	const [ updateEmailOpen, setUpdateEmailOpen ] = useState(false);
	const [ darkModeChecked, setDarkModeChecked ] = useState(darkColorMode);
	const dispatch = useDispatch();

	const handleUpdatePassword = (mode: string) => {
		setUpdateEmailOpen(false);
		setUpdatePasswordOpen(!updatePasswordOpen);
	};

	const handleUpdateEmail = (mode: string) => {
		setUpdatePasswordOpen(false);
		setUpdateEmailOpen(!updateEmailOpen);
	};

	const handleDarkModeToggle = (mode: string | null) => {
		if (mode === 'light') {
			dispatch(setDarkColorMode({ darkColorMode: false }));
			return setDarkModeChecked(false);
		}

		if (mode === 'dark') {
			dispatch(setDarkColorMode({ darkColorMode: true }));
			return setDarkModeChecked(true);
		}

		dispatch(setDarkColorMode({ darkColorMode: !darkModeChecked }));
		setDarkModeChecked(!darkModeChecked);
	};

	return (
		<div>
			<DashboardHeader
				heading='Settings'
				subheading='Account'
				subheadingType={IconType.generic}
			/>
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
					<div className={styles.dark_mode_toggle}>
						<button
							onClick={e => handleDarkModeToggle('light')}
							className={styles.dark_mode_btn}>
							Light Mode
						</button>
						<label>
							<Switch
								onChange={e => handleDarkModeToggle(null)}
								checked={darkModeChecked}
								offColor='#e4e7e6'
								onColor='#303634'
								checkedIcon={false}
								uncheckedIcon={false}
							/>
						</label>
						<button
							onClick={e => handleDarkModeToggle('dark')}
							className={styles.dark_mode_btn}>
							Dark Mode
						</button>
					</div>
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
