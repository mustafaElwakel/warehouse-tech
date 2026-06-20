import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MotionBox } from "./motion";

const CREDENTIALS = [
  {
    region: "Middle East",
    detail:
      "Warehouse Tech's management suite was developed in direct collaboration with the team behind Mohamed Ramadan — the most-streamed Arabic-language artist in the world, with over 42 million followers and consistent top-chart positions across Spotify, YouTube, and Apple Music in Egypt, Saudi Arabia, the UAE, and beyond.",
  },
  {
    region: "Europe",
    detail:
      "Our founding partners are active managers of major recording artists across Europe, with hands-on experience navigating label deals, tour logistics, sync licensing, and digital distribution for artists at the highest level of the industry.",
  },
];

export function Testimonial() {
  return (
    <Box
      as="section"
      id="artists"
      py={{ base: 20, md: 28 }}
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Container maxW="7xl">
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Stack spacing={3} mb={14}>
            <Text
              fontSize="sm"
              fontWeight={600}
              letterSpacing="0.15em"
              textTransform="uppercase"
              color="brand.400"
            >
              Credentials
            </Text>
            <Heading
              fontFamily="heading"
              fontWeight={600}
              letterSpacing="-0.02em"
              fontSize={{ base: "3xl", md: "5xl" }}
              color="white"
              maxW="3xl"
            >
              Trusted by the biggest names in the region
            </Heading>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {CREDENTIALS.map((c) => (
              <Box
                key={c.region}
                p={8}
                borderRadius="2xl"
                border="1px solid"
                borderColor="whiteAlpha.100"
                bg="whiteAlpha.50"
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top="-40%"
                  right="-10%"
                  w="50%"
                  h="150%"
                  bg="brand.500"
                  opacity={0.04}
                  filter="blur(60px)"
                  pointerEvents="none"
                />
                <Text
                  fontSize="xs"
                  fontWeight={700}
                  letterSpacing="0.15em"
                  textTransform="uppercase"
                  color="brand.400"
                  mb={4}
                >
                  {c.region}
                </Text>
                <Text color="slate.300" fontSize="md" lineHeight={1.8}>
                  {c.detail}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <Divider mt={14} borderColor="whiteAlpha.100" />

          <Flex
            mt={10}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            direction={{ base: "column", md: "row" }}
            gap={6}
          >
            <Text color="slate.400" fontSize="sm" maxW="xl">
              We are not a generic SaaS company that pivoted to music. We are
              practitioners who built the software we wished existed — and are
              now opening it to the wider industry.
            </Text>
            <Stack spacing={0} flexShrink={0} align={{ base: "flex-start", md: "flex-end" }}>
              <Text color="white" fontWeight={700} fontFamily="heading" fontSize="2xl">
                Warehouse Tech
              </Text>
              <Text color="slate.500" fontSize="sm">
                Entertainment Intelligence, Amsterdam
              </Text>
            </Stack>
          </Flex>
        </MotionBox>
      </Container>
    </Box>
  );
}
