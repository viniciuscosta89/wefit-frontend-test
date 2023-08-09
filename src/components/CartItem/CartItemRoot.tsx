import styled from 'styled-components';
import { motion } from 'framer-motion';

const CartItemRoot = styled(motion.article)`
	display: grid;
	grid-template-columns: 4rem 1fr 1fr;
	grid-template-rows: repeat(2, auto);
	gap: 1rem;

	@media (min-width: 1140px) {
		align-items: center;
		grid-template-columns: 5.5625rem repeat(4, 1fr);
		grid-template-rows: 1fr;
		gap: 3.25rem;
	}
`;

export default CartItemRoot;
