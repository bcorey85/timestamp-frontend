import { useDispatch, useSelector } from 'react-redux';

import { selectInterface, toggleCreateModal } from '../redux/interface';
import { selectCreateModal } from '../redux/createModal';

const useCreateModal = () => {
	const { createModalOpen } = useSelector(selectInterface);
	const { createModalPage } = useSelector(selectCreateModal);
	const dispatch = useDispatch();

	const setCreateModalOpen = () => {
		dispatch(toggleCreateModal());
	};

	return {
		createModalOpen,
		toggleCreateModal: setCreateModalOpen,
		createModalPage
	};
};

export { useCreateModal };
