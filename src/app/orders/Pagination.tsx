"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number | undefined;
  onChange: (page: number) => void;
}

export default function Pagination({
  onChange,
  totalPages,
  currentPage,
}: PaginationProps) {
  return (
    <HStack justifyContent="space-between" marginTop="10px" width="100%">
      <Text fontWeight="medium" opacity={0.7}>
        Страница {currentPage} из {totalPages}
      </Text>
      <HStack spacing={2}>
        <Button
          onClick={() => onChange(currentPage - 1)}
          disabled={true}
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
    </HStack>
  );
}

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
