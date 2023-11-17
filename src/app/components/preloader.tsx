import { Flex, Spinner, Text } from "@chakra-ui/react";

export function Preloader() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      padding="100px"
      flexDirection="column"
      gap="20px"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text fontWeight="bold">Orders are loading</Text>
    </Flex>
  );
}
