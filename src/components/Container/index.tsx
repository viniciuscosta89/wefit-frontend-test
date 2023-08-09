import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)<{ $margin?: string }>`
	position: relative;
	max-width: 60rem;
	margin-inline: auto;
	width: min(60rem, 100% - ${(props) => props.$margin || '2rem'});
`;

export default Container;
