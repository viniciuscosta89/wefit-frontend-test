import styled from 'styled-components';

interface CartItemPriceProps {
	price: number;
}

const CartItemPriceStyle = styled.span`
	color: var(--dark-blue-text);
	font-size: var(--fs-400);
	font-weight: var(--fw-bold);

	@media (min-width: 1140px) {
		display: none;
	}
`;

function CartItemPrice({ price }: CartItemPriceProps) {
	const priceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

	return <CartItemPriceStyle>{priceFormatted}</CartItemPriceStyle>;
}

export default CartItemPrice;
