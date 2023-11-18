"use client";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, HStack, MenuButton, Text, useToast } from "@chakra-ui/react";
import { Menu, MenuList, MenuItem, Button } from "@chakra-ui/react";
import Pagination, { Pages } from "./Pagination";
import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  ErrorResponse,
  OrderAcceptResponse,
  QueryResponse,
} from "../types/orders";
import { useState } from "react";
import { Preloader } from "../components/preloader";
import { Error } from "../components/error";
import OrderItem from "./orderItem";

const LIMIT = 10;

export default function Orders() {
  const [status, setStatus] = useState("Выберите статус");
  const [page, setPage] = useState(1);
  const toast = useToast();

  const { data, error } = useQuery<QueryResponse>({
    queryKey: ["orders", page, status],
    queryFn: async () => {
      const response = await axios.get(
        `/api/orders?limit=${LIMIT}&offset=${(page - 1) * LIMIT}&filt=${status}`
      );
      return response.data;
    },
  });

  const acceptOrder = async (orderID: string): Promise<OrderAcceptResponse> => {
    const response = await axios.put<OrderAcceptResponse>(
      `/api/orders/${orderID}/accept`
    );
    return response.data;
  };

  const { mutateAsync: updateOrder } = useMutation<
    OrderAcceptResponse,
    ErrorResponse,
    string
  >({
    mutationFn: acceptOrder,
    onError: (e) => {
      toast({
        title: "Error: ",
        description: `${e.message}`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    },
    onSuccess: (response) => {
      console.log(response.data);
    },
  });

  const handleAcceptAllOrders = async () => {
    for (const order of data?.orders || []) {
      await updateOrder(order.id);
    }
  };

  let totalPages;
  if (data) {
    totalPages = Math.ceil(data?.totalCount / LIMIT);
  }

  const handlePageChange = (page: number) => {
    setPage(page);
  };
  const handleStatusChange = (status: string) => {
    setStatus(status);
  };

  if (error) {
    return <Error error={error.message} />;
  }

  return (
    <Flex
      flexDirection="column"
      background="gray.100"
      padding="10px"
      gap="30px"
    >
      <Pages />

      <HStack>
        <Button
          background="gray.200"
          _hover={{
            background: "gray.300",
          }}
        >
          <ChevronLeftIcon boxSize={5} />
        </Button>

        <Text fontSize="2xl" fontWeight="bold" as={"span"}>
          Заявки по заказу #уалмьцз-сжьцдуьс-хцзмьсбцьж-ыдвмьжцаьза
        </Text>
      </HStack>

      <Flex
        padding="20px"
        width="100%"
        borderRadius="26px"
        background="white"
        justifyContent="center"
        flexDirection="column"
        boxShadow="lg"
      >
        <HStack>
          <Menu>
            <MenuButton
              _hover={{ bg: "gray.200" }}
              rightIcon={<ChevronDownIcon color="black" />}
              as={Button}
            >
              {status}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleStatusChange("одобрено")}>
                Одобрено
              </MenuItem>
              <MenuItem onClick={() => handleStatusChange("отклонено")}>
                Отклонено
              </MenuItem>
              <MenuItem onClick={() => handleStatusChange("на проверке")}>
                На проверке
              </MenuItem>
            </MenuList>
          </Menu>
          <Button onClick={handleAcceptAllOrders}>
            Выбрать к одобрению/отклонению
          </Button>
        </HStack>
      </Flex>

      <Flex
        padding="20px"
        width="100%"
        borderRadius="22px"
        background="white"
        alignItems="center"
        flexDirection="column"
        boxShadow="lg"
        marginBottom="40px"
        gap="30px"
      >
        {data ? (
          data?.orders.map((ord) => (
            <OrderItem
              key={ord.id}
              id={ord.id}
              title={ord.title}
              price={ord.price}
              quantity={ord.quantity}
              status={ord.status}
            />
          ))
        ) : (
          <Preloader />
        )}

        <Pagination
          currentPage={page}
          onChange={handlePageChange}
          totalPages={totalPages}
        />
      </Flex>
    </Flex>
  );
}
