import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';

const Main = styled.main`
	height: 100%;
	padding-block-end: 1rem;

	@media (min-width: 1140px) {
		padding-block: 1.5rem 4.75rem;
	}
`;

export default function Root() {
	return (
		<>
			<Header />
			<Main>
				<Outlet />
			</Main>
		</>
	);
}
