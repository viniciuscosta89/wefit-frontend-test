import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './root';
import Home from '../pages';
import Cart from '../pages/cart';
import Purchase from '../pages/purchase';
import ErrorPage from '../pages/error';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<ErrorPage />}>
			<Route index element={<Home />} errorElement={<ErrorPage />} />
			<Route path="/cart" element={<Cart />} errorElement={<ErrorPage />} />
			<Route path="/purchase" element={<Purchase />} errorElement={<ErrorPage />} />
		</Route>
	)
);
