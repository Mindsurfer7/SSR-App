"use client";
import {
  EmailIcon,
  InfoIcon,
  MoonIcon,
  SearchIcon,
  StarIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { Box, Flex, HStack, Stack, Tag, Text, Badge } from "@chakra-ui/react";
import { Status, Tags } from "../types/orders";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";

interface ItemProps {
  id: string;
  title: string;
  price: number;
  quantity: number;
  status: Status;
  description?: string;
  onSelect: (id: string) => void;
  isToSelect: boolean;
  isChecked: boolean;
  tags: Tags;
}

export default function OrderItem({
  id,
  title,
  price,
  tags,
  status,
  isToSelect,
  isChecked,
  onSelect,
}: ItemProps) {
  const bgColors = {
    "на проверке": "#FFDEAD",
    одобрено: "#00FF00",
    отклонено: "#FF0000",
  };

  return (
    <Stack
      width="100%"
      padding="20px"
      borderRadius="28px"
      background="white"
      boxShadow="0px 8px 20px rgba(0, 0, 0, 0.2)"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        position="relative"
      >
        <Stack>
          <HStack
            marginBottom="20px"
            spacing={4}
            direction="row"
            alignItems="center"
            width="100%"
          >
            <EmailIcon boxSize={4} />
            <Text fontSize="md">~1</Text>
            <MoonIcon boxSize={4} />
            <Text fontSize="md">~1</Text>
            <SunIcon boxSize={4} />
            <Text fontSize="md">50%</Text>
            <StarIcon boxSize={4} />
            <Text fontSize="md">50%</Text>
          </HStack>

          {isToSelect && (
            <Checkbox
              position="absolute"
              top="5px"
              right="5px"
              onChange={() => {
                onSelect(id);
              }}
              isChecked={isChecked}
            />
          )}

          <HStack>
            <InfoIcon boxSize={6} color={"blue.500"} />
            <Text fontWeight="bold" opacity={0.5}>
              Сеть каналов СНГ
            </Text>
          </HStack>

          <Flex alignItems="center" marginBottom="20px">
            <HStack align="center">
              <Text fontSize="2xl" fontWeight="bold">
                {title}
              </Text>
              <Badge
                borderRadius="8px"
                px={2}
                py={1}
                bg={bgColors[status]}
                fontWeight="400"
              >
                <Flex alignItems="center">
                  <SearchIcon boxSize={4} marginRight={2} />
                  <Text
                    fontSize="small"
                    fontWeight="medium"
                    textTransform="none"
                  >
                    {status}
                  </Text>
                </Flex>
              </Badge>
            </HStack>
          </Flex>
          <HStack gap="15px">
            <HStack gap="5px">
              {tags.geo.map((tag) => (
                <Tag
                  as="button"
                  size="md"
                  variant="solid"
                  color="black"
                  background="gray.200"
                >
                  {tag}
                </Tag>
              ))}
            </HStack>
            <HStack gap="5px">
              {tags.types.map((tag) => (
                <Tag
                  as="button"
                  size="md"
                  variant="solid"
                  color="black"
                  background="gray.200"
                >
                  {tag}
                </Tag>
              ))}
            </HStack>
            <HStack gap="5px">
              {tags.other.map((tag) => (
                <Tag
                  as="button"
                  size="md"
                  variant="solid"
                  color="black"
                  background="gray.200"
                >
                  {tag}
                </Tag>
              ))}
            </HStack>
          </HStack>
        </Stack>
        {price && (
          <Box as="span" fontWeight="bold" fontSize="2xl">
            {price.toFixed(2)} USDT
          </Box>
        )}
      </Flex>
    </Stack>
  );
}
