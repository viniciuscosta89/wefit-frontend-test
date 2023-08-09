import styled from 'styled-components';

const CartItemImage = styled.img`
	aspect-ratio: 342/422;
	grid-row: 1 / 3;
	object-fit: contain;
	width: 100%;
	height: 100%;

	@media (min-width: 1140px) {
		grid-row: auto;
	}
`;

export default CartItemImage;
