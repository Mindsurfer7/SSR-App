"use client";
import { ChevronDownIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Error } from "../components/error";
import { Preloader } from "../components/preloader";
import {
  ErrorResponse,
  OrderAcceptResponse,
  QueryResponse,
} from "../types/orders";
import Pagination, { Pages } from "./Pagination";
import OrderItem from "./orderItem";

const LIMIT = 2;

export default function Orders() {
  const [status, setStatus] = useState("Выберите статус");
  const [isToCheck, setIsToCheck] = useState(false);
  const [orderIds, setOrderIds] = useState<string[]>([]);
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
      setOrderIds(orderIds.filter((order) => order !== response.data.id));
      setIsToCheck(false); //по хорошему, конечно, надо бы сделать так, чтобы режим выбора
      console.log(response.data); //отключался только в случае, если вообше все промисы fulfilled
    },
  });

  const handleAcceptAllOrders = async () => {
    for (let i = 0; i < orderIds.length; i++) await updateOrder(orderIds[i]);
  };

  let totalPages;
  if (data) {
    totalPages = Math.ceil(data?.totalCount / LIMIT);
  }

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const cleanSelection = () => {
    setOrderIds([]);
  };

  const onChangeSelectionMode = () => {
    setIsToCheck((prev) => {
      if (prev === true) {
        setOrderIds([]);
      }
      return !prev;
    });
  };

  const handleStatusChange = (status: string) => {
    setStatus(status);
  };

  const handleSelect = (id: string) => {
    if (orderIds.includes(id)) {
      setOrderIds([...orderIds.filter((orderId) => orderId !== id)]);
    } else {
      setOrderIds([...orderIds, id]);
    }
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
          <Button
            colorScheme={isToCheck ? "teal" : "gray"}
            onClick={onChangeSelectionMode}
          >
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
              tags={ord.tags}
              title={ord.title}
              price={ord.price}
              quantity={ord.quantity}
              status={ord.status}
              onSelect={handleSelect}
              isToSelect={isToCheck}
              isChecked={orderIds.includes(ord.id)}
            />
          ))
        ) : (
          <Preloader />
        )}

        <Pagination
          orderIds={orderIds}
          currentPage={page}
          onChange={handlePageChange}
          totalPages={totalPages}
          onSubmit={handleAcceptAllOrders}
          onClean={cleanSelection}
        />
      </Flex>
    </Flex>
  );
}
