import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import type { Movies } from '@type/movies';

const getMovies = async (): Promise<Movies> => await axios.get('/api/movies').then((response) => response.data);

export const useMovies = () => {
	const { data, isLoading, isSuccess } = useQuery(['movies'], getMovies);

	return { data, isLoading, isSuccess };
};
