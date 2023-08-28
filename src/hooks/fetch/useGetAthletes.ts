import apiAmock from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetAthletes = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get.sports-category'],
    queryFn: async () => {
      const response = await apiAmock.get('/athletes');
      return response;
    }
  });

  return {
    data: data?.data,
    isLoading
  };
};
