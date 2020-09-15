export interface InputProps {
	id: string;
	type?: string;
	label?: string;
	value: string | number;
	error?: string;
	onChange: (props: any) => any;
	autoComplete?: string;
	disabled?: boolean;
	children?: any;
}

export * from './DateTimeInput';
export * from './Input';
export * from './TextArea';
export * from './Select';
