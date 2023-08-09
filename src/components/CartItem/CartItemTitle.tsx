import styled from 'styled-components';

interface CartItemTitleProps {
	text: string;
}

const CartItemTitleStyle = styled.h2`
	color: var(--dark-blue-text);
	font-size: var(--fs-300);
	font-weight: var(--fw-bold);
`;

function CartItemTitle({ text }: CartItemTitleProps) {
	return <CartItemTitleStyle>{text}</CartItemTitleStyle>;
}

export default CartItemTitle;
