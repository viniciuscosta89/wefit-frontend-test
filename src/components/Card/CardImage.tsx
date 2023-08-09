import styled from 'styled-components';

interface CardImageProps {
	src: string;
	alt?: string;
}

const CardImageStyle = styled.img`
	aspect-ratio: 342 / 430;
	margin-inline: auto;
	margin-block-end: 0.44rem;
	max-width: 9.1875rem;
`;

function CardImage({ src, alt }: CardImageProps) {
	return <CardImageStyle src={src} alt={alt} />;
}

export default CardImage;
