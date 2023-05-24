import { useToast } from '@chakra-ui/react';

export const useToastError = () => {
  const toast = useToast();
  return (err: Error) => {
    if (err instanceof Error) {
      toast({
        status: 'error',
        title: err.message,
        position: 'top'
      });
    }
  };
};
