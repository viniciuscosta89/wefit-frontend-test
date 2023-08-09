import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '@components/Container';
import Icons from '@components/Icons';
import { useShoppingCartContext } from '@contexts/ShoppingCartContext';

const HeaderStyle = styled(motion.header)`
	background-color: var(--bg);
	padding-block: 1.12rem;
`;

const HeaderTitle = styled(Link)`
	color: var(--white);
	font-size: var(--fs-500);
	font-weight: var(--fw-bold);
	text-decoration: none;
	transition: all 0.3s ease-in-out;

	&:hover,
	&:focus {
		color: var(--primary-color);
	}

	h1 {
		font-size: inherit;
	}
`;

const HeaderGrid = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ShoppingCartContainer = styled(Link)`
	color: var(--white);
	display: flex;
	align-items: center;
	gap: 0.5rem;
	text-decoration: none;
	transition: all 0.3s ease-in-out;

	&:hover,
	&:focus {
		color: var(--primary-color);
	}
`;

const MyShoppingCartContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const MyShoppingCartTitle = styled.span`
	color: var(--white);
	display: none;
	font-size: var(--fs-300);
	text-align: right;

	@media (min-width: 1140px) {
		display: block;
	}
`;

const MyShoppingCartItems = styled.span`
	color: ${({ theme }) => theme.colors.gray[400]};
	font-size: var(--fs-200);
`;

function Header() {
	const { shoppingCartItems } = useShoppingCartContext();

	const totalQuantity =
		shoppingCartItems &&
		shoppingCartItems.reduce((accumulator, { quantity }): number => {
			return accumulator + quantity;
		}, 0);

	return (
		<HeaderStyle initial={{ opacity: 0, y: -32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
			<Container $margin="1.24rem">
				<HeaderGrid>
					<HeaderTitle to="/">
						<h1>WeMovies</h1>
					</HeaderTitle>

					<ShoppingCartContainer to="/cart">
						<MyShoppingCartContainer>
							<MyShoppingCartTitle>Meu Carrinho</MyShoppingCartTitle>
							<MyShoppingCartItems>
								<span>{totalQuantity}</span>
								<span> itens</span>
							</MyShoppingCartItems>
						</MyShoppingCartContainer>
						<Icons.ShoppingBag />
					</ShoppingCartContainer>
				</HeaderGrid>
			</Container>
		</HeaderStyle>
	);
}

export default Header;
