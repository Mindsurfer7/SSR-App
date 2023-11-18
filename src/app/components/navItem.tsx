import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, BoxProps } from "@chakra-ui/react";

export const NavItem = ({ children }: BoxProps) => (
  <Box as="span" cursor="pointer">
    {children}
    <ChevronRightIcon boxSize={5} />
  </Box>
);
