import type { MouseEvent } from 'react';
import styled from 'styled-components';
import Icons from '@components/Icons';

interface CardItemCounterProps {
	counterNumber: number;
	handleMinusButton: (e: MouseEvent<HTMLButtonElement>) => void;
	handlePlusButton: (e: MouseEvent<HTMLButtonElement>) => void;
}

const CartItemCounterStyle = styled.div`
	display: grid;
	align-items: center;
	justify-content: flex-start;
	grid-template-columns: 1.125rem auto 1.125rem;
	gap: 0.69rem;
`;

const CartItemButton = styled.button`
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: 50%;
	color: var(--primary-color);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	width: 1.125rem;
	height: 1.125rem;
	transition: all 0.3s ease-in-out;

	&:not(:disabled):hover {
		color: var(--dark-blue-text);
		cursor: pointer;
	}

	&:disabled {
		cursor: not-allowed;
		color: ${({ theme }) => theme.colors.gray[400]};
	}
`;

const CartItemInput = styled.input`
	background-color: var(--white);
	border-radius: 0.25rem;
	border: 1px solid ${({ theme }) => theme.colors.gray[100]};
	color: var(--dark-blue-text);
	font-size: var(--fs-300);
	height: 1.625rem;
	padding: 0 0.5rem;
	max-width: 4rem;
`;

function CardItemCounter({ counterNumber, handleMinusButton, handlePlusButton }: CardItemCounterProps) {
	return (
		<CartItemCounterStyle>
			<CartItemButton aria-label="Minus button" onClick={handleMinusButton} disabled={counterNumber === 1}>
				<Icons.Minus />
			</CartItemButton>
			<CartItemInput value={counterNumber} readOnly />
			<CartItemButton aria-label="Plus button" onClick={handlePlusButton}>
				<Icons.Plus />
			</CartItemButton>
		</CartItemCounterStyle>
	);
}

export default CardItemCounter;
