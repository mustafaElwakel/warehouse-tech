import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";

const NAV_LINKS = [
  { label: "Platform", href: "#features" },
  { label: "About", href: "#workflow" },
  { label: "Clients", href: "#artists" },
  { label: "Early Access", href: "#pricing" },
];

export function Navbar() {
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      backdropFilter="blur(12px)"
      bg="rgba(2, 6, 23, 0.55)"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Container maxW="7xl">
        <Flex h="64px" align="center" justify="space-between">
          <Text
            fontFamily="'UnifrakturMaguntia', serif"
            fontSize="2xl"
            letterSpacing="0.03em"
            lineHeight={1}
            color="white"
            userSelect="none"
            sx={{
              background: "linear-gradient(135deg, #e8e8e8 0%, #a0a0a0 40%, #ffffff 60%, #888888 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Warehouse Tech
          </Text>

          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontSize="sm"
                fontWeight={500}
                color="slate.300"
                _hover={{ color: "white", textDecoration: "none" }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))}
          </HStack>

        </Flex>
      </Container>
    </Box>
  );
}
