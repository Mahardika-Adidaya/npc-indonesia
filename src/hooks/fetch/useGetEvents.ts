import api from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetEvents = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get.events'],
    queryFn: async () => {
      const response = await api.get('/events');
      return response;
    }
  });

  return {
    data: data?.data,
    isLoading
  };
};
