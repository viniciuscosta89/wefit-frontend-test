import styled from 'styled-components';

interface CardTitleProps {
	text: string;
}

const CardTitleStyle = styled.h2`
	color: var(--text);
	font-size: var(--fs-200);
	font-weight: var(--fw-bold);
	margin-block-end: 0.13rem;
`;

function CardTitle({ text }: CardTitleProps) {
	return <CardTitleStyle>{text}</CardTitleStyle>;
}

export default CardTitle;
