import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import type { Movies, Movie } from '@type/movies';

interface ShoppingCartProviderType {
	children: ReactNode;
}

interface ShoppingCartContextData {
	shoppingCartItems: Movies;
	addToShoppingCart(arg1: Movie): void;
	handleMinusButton(arg1: Movie): void;
	handlePlusButton(arg1: Movie): void;
	removeFromShoppingCart(arg1: Movie): void;
	resetShoppingCart(arg1: void): void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData);

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

export function ShoppingCartProvider({ children }: ShoppingCartProviderType) {
	const localStorageItems = JSON.parse(localStorage.getItem('shoppingCartItems')!);
	const [shoppingCartItems, setShoppingCartItemsInfo] = useState(localStorageItems || []);

	const addToShoppingCart = (movie: Movie) => {
		const isAlreadyInCart = shoppingCartItems.find((item: Movie) => item.id === movie.id);

		if (isAlreadyInCart) {
			setShoppingCartItemsInfo(
				shoppingCartItems.map((item: Movie) =>
					item.id === movie.id
						? {
								...item,
								quantity: item.quantity + 1,
						  }
						: {
								...item,
						  }
				)
			);
		} else {
			setShoppingCartItemsInfo([
				...shoppingCartItems,
				{
					id: movie.id,
					title: movie.title,
					price: movie.price,
					image: movie.image,
					quantity: 1,
				},
			]);
		}

		localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCartItems));
	};

	const removeFromShoppingCart = (movie: Movie) => {
		setShoppingCartItemsInfo(shoppingCartItems.filter((item: Movie) => item.id !== movie.id));
		localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCartItems));
	};

	const handleMinusButton = (movie: Movie) => {
		setShoppingCartItemsInfo(
			shoppingCartItems.map((item: Movie) =>
				item.id === movie.id
					? {
							...item,
							quantity: item.quantity - 1,
					  }
					: item
			)
		);
	};

	const handlePlusButton = (movie: Movie) => {
		setShoppingCartItemsInfo(
			shoppingCartItems.map((item: Movie) =>
				item.id === movie.id
					? {
							...item,
							quantity: item.quantity + 1,
					  }
					: item
			)
		);
	};

	const resetShoppingCart = (callback: void) => {
		callback;
		setShoppingCartItemsInfo([]);
	};

	useEffect(() => {
		localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCartItems));
	}, [shoppingCartItems]);

	return (
		<ShoppingCartContext.Provider
			value={{
				shoppingCartItems,
				addToShoppingCart,
				removeFromShoppingCart,
				handleMinusButton,
				handlePlusButton,
				resetShoppingCart,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}
