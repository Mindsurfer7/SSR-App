"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EmailIcon,
  MoonIcon,
  StarIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  MenuButton,
  Stack,
  Tab,
  Tag,
  Text,
  Badge,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export function Pages() {
  return (
    <>
      <HStack spacing={2}>
        <Box as="span">
          Главная
          <ChevronRightIcon boxSize={5} />
        </Box>
        <Box as="span">
          Рекламодателям
          <ChevronRightIcon boxSize={5} />
        </Box>
        <Box as="span">
          Заказы
          <ChevronRightIcon boxSize={5} />
        </Box>
        <Box as="span">
          Заказ
          <ChevronRightIcon boxSize={5} />
        </Box>
        <Box as="span" fontWeight="bold">
          Заявки{" "}
        </Box>
      </HStack>
    </>
  );
}

export default function Pagination() {
  return (
    <HStack justifyContent="space-between" marginTop="10px" width="100%">
      <Text fontWeight="medium" opacity={0.7}>
        {" "}
        Страница 1 из 1
      </Text>
      <HStack spacing={2}>
        <Button
        // onClick={() => onPageChange(currentPage - 1)}
        // disabled={currentPage === 1}
        >
          {"<"}
        </Button>
        <Button
        // isDisabled
        >
          {1}
        </Button>
        <Button
        // onClick={() => onPageChange(currentPage + 1)}
        // disabled={currentPage === totalPages}
        >
          {">"}
        </Button>
      </HStack>
    </HStack>
  );
}
