import axiosInstance from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetSportsCategory = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get.sports-category'],
    queryFn: async () => {
      const response = await axiosInstance.get('/getSportsCategory');
      return response;
    }
  });

  return {
    data: data?.data,
    isLoading
  };
};
