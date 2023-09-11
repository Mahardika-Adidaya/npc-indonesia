import api from '@/lib/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useGetEvents = ({
  recent = true,
  next = true,
  all = true,
  countdown = true
}: {
  recent?: boolean;
  next?: boolean;
  all?: boolean;
  countdown?: boolean;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get.events', { recent, next, all, countdown }],
    queryFn: async () => {
      const response = await api.get(
        `/events/get-event-landing-page?countdown=${countdown}&recent=${recent}&next=${next}&all=${all}`
      );
      return response;
    }
  });

  return {
    data: data?.data?.results?.data[0],
    isLoading
  };
};
