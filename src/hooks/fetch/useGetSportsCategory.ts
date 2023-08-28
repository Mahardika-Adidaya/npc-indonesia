import apiAmock from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetSportsCategory = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get.sports-category'],
    queryFn: async () => {
      const response = await apiAmock.get('/sports');
      return response;
    }
  });

  return {
    data: data?.data,
    isLoading
  };
};
