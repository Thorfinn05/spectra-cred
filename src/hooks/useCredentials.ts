import { useQuery } from '@tanstack/react-query';
import { mockCredentials } from '../utils/mockData';
import { Credential } from '@/types/credential';

export const useCredentials = () => {
  return useQuery<Credential[]>({
    queryKey: ['credentials'],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockCredentials;
    }
  });
};