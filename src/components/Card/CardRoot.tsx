import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardRoot = styled(motion.article)`
	background-color: var(--white);
	border-radius: 0.25rem;
	display: flex;
	flex-direction: column;
	padding: 0.62rem;
	text-align: center;
`;

export default CardRoot;
