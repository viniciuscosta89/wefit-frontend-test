import styled from 'styled-components';

interface CartItemPriceProps {
	price: number;
}

const CartItemSubtotalPriceContainer = styled.div`
	display: grid;
	font-weight: var(--fw-bold);
	text-align: right;
	justify-self: flex-end;

	@media (min-width: 1140px) {
		justify-self: flex-start;
	}
`;

const CartItemSubtotalPriceTitle = styled.span`
	color: ${({ theme }) => theme.colors.gray[400]};
	font-size: var(--fs-200);
	text-transform: uppercase;

	@media (min-width: 1140px) {
		display: none;
	}
`;

const CartItemSubtotalPriceValue = styled.span`
	color: var(--dark-blue-text);
	font-size: var(--fs-400);
`;

function CartItemSubtotalPrice({ price }: CartItemPriceProps) {
	const priceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

	return (
		<CartItemSubtotalPriceContainer>
			<CartItemSubtotalPriceTitle>Subtotal</CartItemSubtotalPriceTitle>
			<CartItemSubtotalPriceValue>{priceFormatted}</CartItemSubtotalPriceValue>
		</CartItemSubtotalPriceContainer>
	);
}

export default CartItemSubtotalPrice;
