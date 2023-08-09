import styled from 'styled-components';

export const buttonStyles = `	
	border: none;
	border-radius: 0.25rem;
	color: var(--white);
	display: flex;
	align-items: center;
	gap: 0.75rem;
	justify-content: center;
	font-size: var(--fs-200);
	font-weight: var(--fw-bold);
	line-height: normal;
	padding: 0.75rem;
	position: relative;
	text-transform: uppercase;
	transition: all 0.3s ease-in-out;

	@media (min-width: 1140px) {		
		padding-block: 0.69rem;
	}

	&:not(:disabled):hover {		
		cursor: pointer;		
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

const Button = styled.button<{ $variant?: 'primary' | 'success'; $fontSizeDesktop?: string }>`
	background-color: ${(props) => props.$variant === 'primary' && 'var(--primary-color)'};
	background-color: ${(props) => props.$variant === 'success' && 'var(--success-color)'};
	${buttonStyles}

	&:not(:disabled):hover {
		background-color: var(--dark-blue-text);
	}

	> div + span {
		min-width: 9.8125rem;
		text-align: center;
	}
`;

export default Button;
