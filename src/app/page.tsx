import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      height="100vh"
      width="100%"
      alignItems="center"
      backgroundColor="gray.300"
    >
      <Box as="span">Главная Страница</Box>
    </Flex>
  );
}
