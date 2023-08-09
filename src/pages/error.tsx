import Container from '@components/Container';
import { Link, useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import error404 from '@assets/error-404.svg';
import { buttonStyles } from '@components/Button';

const CartHasItems = styled.div`
	background-color: var(--white);
	border-radius: 0.25rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	min-height: 40rem;
	margin-block: 1rem;
	padding: 1rem;
	text-align: center;

	@media (min-width: 1140px) {
		min-height: initial;
		padding: 1.5rem;
	}
`;

const CustomLink = styled.a`
	color: var(--primary-color);
	text-decoration: none;
`;

const LinkButton = styled(Link)`
	${buttonStyles}
	background-color: var(--primary-color);
	min-width: 11.25rem;
	text-decoration: none;
`;

function ErrorPage() {
	let error = useRouteError();
	console.error(error);

	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1 } }}
			exit={{ opacity: 0, transition: { duration: 1 } }}
		>
			<CartHasItems>
				<LinkButton to="/">Voltar</LinkButton>
				<img src={error404} alt="" />
				<CustomLink href="https://storyset.com/web" target="_blank">
					Web illustrations by Storyset
				</CustomLink>
			</CartHasItems>
		</Container>
	);
}

export default ErrorPage;
