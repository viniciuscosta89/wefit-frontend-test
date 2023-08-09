import styled from 'styled-components';
import Container from '@components/Container';
import TheTitle from '@components/TheTitle';
import { useShoppingCartContext } from '@contexts/ShoppingCartContext';
import { motion, AnimatePresence } from 'framer-motion';
import emptyCartIllustration from '@assets/empty-cart-illustration.svg';
import CartItem from '@components/CartItem';
import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';

const CartEmpty = styled(motion.div)`
	background-color: var(--white);
	border-radius: 0.25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	padding: 4rem;
`;

const CartHasItems = styled(motion.div)`
	background-color: var(--white);
	border-radius: 0.25rem;
	display: flex;
	flex-direction: column;
	min-height: 40rem;
	padding: 1rem;

	@media (min-width: 1140px) {
		min-height: initial;
		padding: 1.5rem;
	}
`;

const CartGrid = styled.div`
	display: grid;
	align-content: flex-start;
	gap: 2rem;
`;

const PriceAndRemoveBtnContainer = styled.div`
	display: flex;
	align-items: center;
	justify-self: flex-end;
	gap: 1rem;

	@media (min-width: 1140px) {
		order: 4;
	}
`;

const TotalPriceContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-block-start: auto;
`;

const TotalPriceDivider = styled.hr`
	border: none;
	border-block-start: 1px solid;
	color: ${({ theme }) => theme.colors.gray[400]};
	margin-block: 1.31rem;
`;

const TotalPriceAndButtonContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 1140px) {
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-between;
	}
`;

const OrderButton = styled(Button)`
	min-width: 14.71388rem;
`;

const ShoppingCartHeader = styled.div`
	display: none;

	@media (min-width: 1140px) {
		color: ${({ theme }) => theme.colors.gray[400]};
		display: grid;
		gap: 3.25rem;
		font-size: var(--fs-300);
		font-weight: var(--fw-bold);
		grid-template-columns: 5.5625rem repeat(4, 1fr);
		margin-block-end: 1.31rem;
		text-transform: uppercase;
	}
`;

function Cart() {
	const { shoppingCartItems, removeFromShoppingCart, handlePlusButton, handleMinusButton, resetShoppingCart } =
		useShoppingCartContext();
	const navigate = useNavigate();

	const totalPrice =
		shoppingCartItems &&
		shoppingCartItems.reduce((accumulator, { price, quantity }): number => {
			const currentPrice = price * quantity;

			return accumulator + currentPrice;
		}, 0);

	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1 } }}
			exit={{ opacity: 0, transition: { duration: 1 } }}
		>
			<AnimatePresence mode="wait">
				{shoppingCartItems.length === 0 ? (
					<CartEmpty
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1 } }}
						exit={{ opacity: 0, transition: { duration: 1 } }}
					>
						<TheTitle>Parece que não há nada por aqui :(</TheTitle>

						<img src={emptyCartIllustration} />
					</CartEmpty>
				) : (
					<CartHasItems
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1 } }}
						exit={{ opacity: 0, transition: { duration: 1 } }}
					>
						<ShoppingCartHeader>
							<span>Produto</span>
							<span></span>
							<span>Qtd</span>
							<span>Subtotal</span>
						</ShoppingCartHeader>

						<CartGrid>
							<AnimatePresence mode="popLayout" initial={false}>
								{shoppingCartItems.map((cartItem) => (
									<CartItem.Root
										key={cartItem.id}
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -32 }}
										transition={{ type: 'spring' }}
									>
										<CartItem.Image src={cartItem.image} />
										<CartItem.Title text={cartItem.title} />
										<PriceAndRemoveBtnContainer>
											<CartItem.Price price={cartItem.price} />
											<CartItem.RemoveBtn handleClick={() => removeFromShoppingCart(cartItem)} />
										</PriceAndRemoveBtnContainer>

										<CartItem.Counter
											counterNumber={cartItem.quantity}
											handlePlusButton={() => handlePlusButton(cartItem)}
											handleMinusButton={() => handleMinusButton(cartItem)}
										/>
										<CartItem.SubtotalPrice price={cartItem.price * cartItem.quantity} />
									</CartItem.Root>
								))}
							</AnimatePresence>
						</CartGrid>

						<TotalPriceContainer>
							<TotalPriceDivider />
							<TotalPriceAndButtonContainer>
								<CartItem.TotalPrice price={totalPrice} />

								<OrderButton type="button" $variant="primary" onClick={() => resetShoppingCart(navigate('/purchase'))}>
									Finalizar pedido
								</OrderButton>
							</TotalPriceAndButtonContainer>
						</TotalPriceContainer>
					</CartHasItems>
				)}
			</AnimatePresence>
		</Container>
	);
}

export default Cart;
