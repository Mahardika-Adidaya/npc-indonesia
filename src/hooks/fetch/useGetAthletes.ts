import api from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetAthletes = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get.sports-category'],
    queryFn: async () => {
      const response = await api.get('/athletes');
      return response;
    }
  });

  return {
    data: data?.data,
    isLoading
  };
};
