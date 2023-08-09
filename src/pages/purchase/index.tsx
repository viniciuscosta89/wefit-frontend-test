import styled from 'styled-components';
import Container from '@components/Container';
import TheTitle from '@components/TheTitle';
import { buttonStyles } from '@components/Button';
import successfulPurchase from '@assets/successful-purchase-illustration.svg';
import { Link } from 'react-router-dom';

const TheCard = styled.div`
	background-color: var(--white);
	border-radius: 0.25rem;
	display: flex;
	flex-direction: column;
	padding: 4rem;
`;

const LinkButton = styled(Link)`
	background-color: var(--primary-color);
	${buttonStyles}
	font-size: var(--fs-300);
	text-decoration: none;
	min-width: 11.25rem;
`;

const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	margin-inline: auto;
	max-width: 40rem;
`;

function Purchase() {
	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1 } }}
			exit={{ opacity: 0, transition: { duration: 1 } }}
		>
			<TheCard>
				<InnerContainer>
					<TheTitle>Compra realizada com sucesso!</TheTitle>

					<img src={successfulPurchase} alt="" />

					<LinkButton to="/">Voltar</LinkButton>
				</InnerContainer>
			</TheCard>
		</Container>
	);
}

export default Purchase;
