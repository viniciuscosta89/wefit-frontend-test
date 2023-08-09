import styled from 'styled-components';

interface CardPriceProps {
	price: number;
}

const CardPriceStyle = styled.span`
	color: var(--dark-blue-text);
	font-size: var(--fs-400);
	font-weight: var(--fw-bold);
	margin-block-end: 0.5rem;
`;

function CardPrice({ price }: CardPriceProps) {
	const priceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

	return <CardPriceStyle>{priceFormatted}</CardPriceStyle>;
}

export default CardPrice;
