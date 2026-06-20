import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

export function Footer() {
  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
      py={{ base: 10, md: 12 }}
    >
      <Container maxW="7xl">
        <Divider mb={8} borderColor="whiteAlpha.100" />

        <Flex
          direction={{ base: "column", sm: "row" }}
          align={{ base: "flex-start", sm: "center" }}
          justify="space-between"
          gap={4}
        >
          <HStack spacing={2.5}>
            <Box
              boxSize="20px"
              borderRadius="5px"
              bgGradient="linear(to-br, brand.300, brand.600)"
              boxShadow="0 0 14px rgba(34, 211, 238, 0.5)"
            />
            <Text fontFamily="heading" fontWeight={700} fontSize="md" color="white">
              Warehouse Tech
            </Text>
          </HStack>
          <Text fontSize="sm" color="slate.500">
            © {new Date().getFullYear()} Warehouse Tech. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
