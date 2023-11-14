"use client";
import { Box, Container, Flex, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function Navbar() {
  // const { toggleColorMode } = useColorMode();
  const [isSwitched, setSwitch] = useState(false);

  return (
    <Box as="header">
      <Container maxW="container.lg">
        <Flex
          // justifyContent="space-between"
          alignItems="center"
          background={"gray"}
          gap={"20px"}
          p={12}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/orders"}>Orders</Link>
          <Box
            as="button"
            onClick={() => {
              // toggleColorMode();
              setSwitch((prev) => !prev);
            }}
            cursor={"pointer"}
            alignSelf={"flex-end"}
          >
            {isSwitched ? <SunIcon /> : <MoonIcon />}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
