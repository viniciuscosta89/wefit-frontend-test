import type { MouseEvent } from 'react';
import styled from 'styled-components';
import Icons from '@components/Icons';

interface CartItemRemoveButtonProps {
	handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const CartItemRemoveButtonStyle = styled.button`
	background-color: transparent;
	border: none;
	color: var(--primary-color);
	padding: 0;
	transition: all 0.3s ease-in-out;
	width: 1rem;

	&:not(:disabled):hover {
		color: var(--dark-blue-text);
		cursor: pointer;
	}
`;

function CartItemRemoveButton({ handleClick }: CartItemRemoveButtonProps) {
	return (
		<CartItemRemoveButtonStyle onClick={handleClick}>
			<Icons.RecycleBin />
		</CartItemRemoveButtonStyle>
	);
}

export default CartItemRemoveButton;
