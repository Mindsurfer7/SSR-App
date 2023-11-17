"use client";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, HStack, MenuButton, Text } from "@chakra-ui/react";
import { Menu, MenuList, MenuItem, Button } from "@chakra-ui/react";
import Item from "./Item";
import Pagination, { Pages } from "./Pagination";
import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const arr = [1];

export default function Orders() {
  const {
    data: orderList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await axios.get("/api/orders");
      return response.data;
    },
  });

  console.log(orderList);

  return (
    <Flex
      flexDirection={"column"}
      background={"gray.100"}
      padding={"10px"}
      gap={"30px"}
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
        padding={"20px"}
        width={"100%"}
        borderRadius={"26px"}
        background="white"
        justifyContent={"center"}
        flexDirection="column"
        boxShadow="lg"
      >
        <HStack>
          <Menu>
            <MenuButton
              _hover={{ bg: "grey.100" }}
              rightIcon={<ChevronDownIcon color="white" />}
              as={Button}
            >
              Выберите статус
            </MenuButton>
            <MenuList>
              <MenuItem>Одобрено</MenuItem>
              <MenuItem>Отклонено</MenuItem>
              <MenuItem>На проверке</MenuItem>
            </MenuList>
          </Menu>
          <Button
          // colorScheme="teal"
          >
            Выбрать к одобрению/отклонению
          </Button>
        </HStack>
      </Flex>

      <Flex
        padding={"20px"}
        width={"100%"}
        borderRadius={"22px"}
        background="white"
        alignItems="center"
        // justifyContent={"center"}
        flexDirection="column"
        boxShadow="lg"
        marginBottom="40px"
        gap="30px"
      >
        {arr.map((el) => (
          <Item />
        ))}

        <Pagination />
      </Flex>
    </Flex>
  );
}

{
  /*    <Tag size={"md"} variant="solid" colorScheme="#FF0000">
            На проверке
          </Tag> */
}
