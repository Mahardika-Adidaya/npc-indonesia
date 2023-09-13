import api from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetNewsBySportId = (id: any) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get.news-id', id],
    queryFn: async () => {
      const response = await api.get(`/sports/get-landing-page/${id}`);
      return response;
    }
  });

  return {
    data: data?.data[0],
    isLoading
  };
};