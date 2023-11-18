import { Flex, Text } from "@chakra-ui/react";

interface ErrorProps {
  error: string;
}

export function Error({ error }: ErrorProps) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      padding="100px"
      flexDirection="column"
      gap="20px"
    >
      {" "}
      <Text fontSize="24px" fontWeight="bold">
        Something bad happened:
      </Text>
      <Text color={"red"} fontSize="24px" fontWeight="bold">
        {error}
      </Text>
    </Flex>
  );
}
