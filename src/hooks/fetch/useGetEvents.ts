import apiAmock from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetEvents = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get.events'],
    queryFn: async () => {
      const response = await apiAmock.get('/events');
      return response;
    }
  });

  return {
    data: data?.data,
    isLoading
  };
};
