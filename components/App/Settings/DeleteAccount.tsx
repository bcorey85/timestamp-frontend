import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { Button } from '../../shared/Button';
import { Modal, ModalContent, ModalControls } from '../../shared/Modal/Modal';

import { selectUser, logout } from '../../../redux/user';
import { deleteUserApiConfig } from '../../../api/user';
import { useApiRequest } from '../../../hooks/useApiRequest';
import styles from './DeleteAccount.module.scss';
import { useRouterService } from '../../../hooks/useRouterService';

const DeleteAccount = (): JSX.Element => {
	const { userId, token } = useSelector(selectUser);
	const [ deleteModalOpen, setDeleteModalOpen ] = useState(false);
	const {
		request: deleteUserRequest,
		errors: deleteUserErrors
	} = useApiRequest();
	const { router } = useRouterService();
	const dispatch = useDispatch();

	const toggleDeleteModal = (boolean: boolean) => {
		setDeleteModalOpen(boolean);
	};

	const handleDelete = async () => {
		setDeleteModalOpen(false);
		dispatch(logout());

		const config = deleteUserApiConfig({ userId, token });

		await deleteUserRequest(config);

		router.push.root();
	};

	return (
		<React.Fragment>
			<h2 className='section_heading'>Delete Account</h2>
			<p>
				Warning this action is permanent. All account data will be lost
			</p>
			<div className={styles.btn_container}>
				<Button
					btnStyle='delete'
					onClick={() => {
						toggleDeleteModal(true);
					}}>
					Delete
				</Button>
			</div>
			<Modal toggleModal={toggleDeleteModal} isOpen={deleteModalOpen}>
				<ModalContent>
					<div className={styles.delete_msg}>
						<h1>Delete Account</h1>
						<p>
							Are you sure you want to delete your account? (This
							action is permanent)
						</p>
					</div>
				</ModalContent>
				<ModalControls>
					<Button
						btnStyle='outline'
						onClick={() => setDeleteModalOpen(false)}>
						Cancel
					</Button>
					<Button btnStyle='delete' onClick={handleDelete}>
						Confirm Delete
					</Button>
				</ModalControls>
			</Modal>
		</React.Fragment>
	);
};

export { DeleteAccount };
