"use client";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { NavItem } from "../components/navItem";

interface PaginationProps {
  currentPage: number;
  totalPages: number | undefined;
  onChange: (page: number) => void;
  orderIds: Array<string>;
  onSubmit: () => void;
  onClean: () => void;
}

export default function Pagination({
  onChange,
  totalPages,
  currentPage,
  orderIds,
  onClean,
  onSubmit,
}: PaginationProps) {
  return (
    <HStack justifyContent="space-between" marginTop="10px" width="100%">
      <Text fontWeight="medium" opacity={0.7}>
        Страница {currentPage} из {totalPages}
      </Text>
      <HStack spacing={2}>
        <Button
          onClick={() => onChange(currentPage - 1)}
          isDisabled={currentPage === 1}
        >
          {"<"}
        </Button>

        <Button>{currentPage}</Button>
        <Button
          onClick={() => onChange(currentPage + 1)}
          isDisabled={currentPage === totalPages}
        >
          {">"}
        </Button>
      </HStack>
      <HStack>
        <Button onClick={onClean} isDisabled={orderIds.length < 1}>
          Сбросить
        </Button>
        <Button
          colorScheme="teal"
          isDisabled={orderIds.length === 0}
          onClick={onSubmit}
        >
          Выбрать {orderIds.length} заявок
        </Button>
      </HStack>
    </HStack>
  );
}

export function Pages() {
  return (
    <HStack spacing={2}>
      <NavItem>Главная</NavItem>
      <NavItem>Рекламодателям</NavItem>
      <NavItem>Заказы</NavItem>
      <NavItem>Заказ</NavItem>
      <Box as="span" fontWeight="bold">
        Заявки
      </Box>
    </HStack>
  );
}
