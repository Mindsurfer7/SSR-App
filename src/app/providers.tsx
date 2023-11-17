"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (e) => {
        console.log(e);
      },
      onSuccess: (data) => {
        console.log(data);
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}

// type ErrorResponse = {
//   response: {
//     data: {
//       message: string;
//     };
//   };
// };
// type SuccessResponse = {
//   orders: Order[];
// };

// const acceptOrders: UseMutationResult<Order, ErrorResponse, Order> =
//   useMutation<Order, ErrorResponse, Order>(
//     (order: Order) => axios.put<Order>(`/api/orders/${order.id}/accept`),

//     {
//       onSuccess: (response: AxiosResponse<Order[]>) => {
//         console.log("Mutation succeeded!", data);
//         return response.data;
//       },
//       onError: (error: any) => {
//         // Логика обработки ошибок
//         console.error("Mutation failed!", error);
//       },
//     }
//   );
