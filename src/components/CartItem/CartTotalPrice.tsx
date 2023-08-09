import styled from 'styled-components';

interface CartItemPriceProps {
	price: number;
}

const CartItemTotalPriceContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1rem;
	font-weight: var(--fw-bold);
	margin-block-end: 1rem;
	text-align: right;

	@media (min-width: 1140px) {
		margin-block-end: 0;
	}
`;

const CartItemTotalPriceTitle = styled.span`
	color: ${({ theme }) => theme.colors.gray[400]};
	font-size: var(--fs-200);
	text-transform: uppercase;
`;

const CartItemTotalPriceValue = styled.span`
	color: var(--dark-blue-text);
	font-size: var(--fs-600);
`;

function CartTotalPrice({ price }: CartItemPriceProps) {
	const priceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

	return (
		<CartItemTotalPriceContainer>
			<CartItemTotalPriceTitle>Total</CartItemTotalPriceTitle>
			<CartItemTotalPriceValue>{priceFormatted}</CartItemTotalPriceValue>
		</CartItemTotalPriceContainer>
	);
}

export default CartTotalPrice;
