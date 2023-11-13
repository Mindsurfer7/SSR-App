// "use client";
import { Box, Container, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box as="header">
      <Container maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center">
          <Link href={"/"}>Home</Link>
          <Link href={"/orders"}>Orders</Link>
        </Flex>
      </Container>
    </Box>
  );
}
