import { createServer } from 'miragejs';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../data/server.json';
import Container from '@components/Container';
import Card from '@components/Card';
import Button from '@components/Button';
import Icons from '@components/Icons';
import { useMovies } from '@hooks/useMovies';
import { useShoppingCartContext } from '@contexts/ShoppingCartContext';

const CenterContent = styled(motion.div)`
	display: grid;
	color: var(--white);
	place-content: center;
	padding-block-start: 18.87rem;
	width: 100%;
`;

const MoviesGrid = styled(motion.div)`
	display: grid;
	gap: 1rem;

	@media (min-width: 1140px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const ShoppingCartIconContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.21rem;
	font-weight: var(--fw-regular);
`;

createServer({
	routes() {
		this.namespace = 'api';

		this.get('/movies', () => {
			return data.products;
		});
	},
});

function Home() {
	const { data, isLoading } = useMovies();
	const { shoppingCartItems, addToShoppingCart } = useShoppingCartContext();

	const isMovieOnCart = (id: number) => {
		return shoppingCartItems?.some((cartItem) => cartItem.id === id);
	};

	const movieOnCartQuantity = (id: number) => {
		return shoppingCartItems.find((cartItem) => cartItem.id === id)?.quantity;
	};

	return (
		<>
			<Container
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 1 } }}
				exit={{ opacity: 0, transition: { duration: 1 } }}
			>
				<AnimatePresence>
					{isLoading ? (
						<CenterContent initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
							<Icons.Loading />
						</CenterContent>
					) : (
						<MoviesGrid initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
							{data?.map((movie, i) => (
								<Card.Root
									key={movie.id}
									initial={{ opacity: 0, y: -16 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.15 * i }}
								>
									<Card.Image src={movie.image} alt={movie.title} />
									<Card.Title text={movie.title} />
									<Card.Price price={movie.price} />

									<Button
										$variant={isMovieOnCart(movie.id) ? 'success' : 'primary'}
										type="button"
										onClick={() => addToShoppingCart(movie)}
									>
										<ShoppingCartIconContainer>
											<Icons.ShoppingCart /> <span>{isMovieOnCart(movie.id) ? movieOnCartQuantity(movie.id) : 0}</span>
										</ShoppingCartIconContainer>
										<AnimatePresence mode="wait">
											{isMovieOnCart(movie.id) ? (
												<motion.span
													key="adicionado"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{ duration: 1 }}
												>
													Item adicionado
												</motion.span>
											) : (
												<motion.span
													key="adicionar"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{ duration: 1 }}
												>
													Adicionar ao carrinho
												</motion.span>
											)}
										</AnimatePresence>
									</Button>
								</Card.Root>
							))}
						</MoviesGrid>
					)}
				</AnimatePresence>
			</Container>
		</>
	);
}

export default Home;
