import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import {
  FiBarChart2,
  FiDollarSign,
  FiGlobe,
  FiMap,
  FiMusic,
  FiUsers,
} from "react-icons/fi";
import { MotionBox } from "./motion";

type Feature = {
  icon: IconType;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: FiBarChart2,
    title: "Multi-Platform Analytics",
    description:
      "One chart. Every platform. Compare Spotify, YouTube, Instagram, and TikTok growth side by side across any date range.",
  },
  {
    icon: FiMusic,
    title: "Catalog & Chart Intelligence",
    description:
      "Every release, every chart entry, every playlist — stream counts, peak positions, and authenticity flags, all in one place.",
  },
  {
    icon: FiUsers,
    title: "Audience DNA",
    description:
      "Country, city, age, interests, brand affinities. A complete audience brief ready to send to a partner in seconds.",
  },
  {
    icon: FiMap,
    title: "Tour Opportunity Map",
    description:
      "An interactive world map of where listeners actually are. Plan routing based on real density, not gut feeling.",
  },
  {
    icon: FiDollarSign,
    title: "Royalty Audit",
    description:
      "Upload statements and cross-reference every line against verified stream data. Mismatches surface automatically.",
  },
  {
    icon: FiGlobe,
    title: "And much more",
    description:
      "Competitive analysis, curator discovery, collaboration intelligence, career timelines — and everything else your team needs.",
  },
];

export function Features() {
  return (
    <Box as="section" id="features" py={{ base: 20, md: 28 }} position="relative">
      <Container maxW="7xl">
        <Stack spacing={4} maxW="3xl" mb={5}>
          <Text
            fontSize="sm"
            fontWeight={600}
            letterSpacing="0.15em"
            textTransform="uppercase"
            color="brand.400"
          >
            Management System
          </Text>
          <Heading
            fontFamily="heading"
            fontWeight={600}
            letterSpacing="-0.02em"
            fontSize={{ base: "3xl", md: "5xl" }}
            color="white"
          >
            Everything your artist's career needs
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="slate.400">
            Built on real management experience — not assumptions. Every module
            solves a problem we've lived ourselves.
          </Text>
        </Stack>

        <Flex
          align="center"
          gap={4}
          mb={12}
          p={4}
          borderRadius="xl"
          border="1px solid"
          borderColor="brand.500"
          bg="rgba(6,182,212,0.06)"
          flexWrap="wrap"
        >
          <Badge
            px={3}
            py={1}
            borderRadius="full"
            colorScheme="cyan"
            variant="solid"
            fontSize="xs"
            fontWeight={700}
            letterSpacing="0.1em"
            flexShrink={0}
          >
            COMING SOON
          </Badge>
          <Text fontSize="sm" color="slate.300">
            Early-access partners get priority onboarding and help shape the
            final product.{" "}
            <Text as="span" color="brand.300" fontWeight={600}>
              Request access below.
            </Text>
          </Text>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {FEATURES.map((feature, i) => (
            <MotionBox
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              p={7}
              borderRadius="2xl"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.100"
              _hover={{ borderColor: "brand.500", bg: "whiteAlpha.100" }}
              sx={{ transition: "border-color 0.25s, background 0.25s" }}
            >
              <Box
                display="inline-flex"
                p={2.5}
                borderRadius="lg"
                bg="brand.500"
                boxShadow="0 0 20px rgba(6, 182, 212, 0.4)"
                mb={4}
              >
                <Icon as={feature.icon} boxSize={4} color="slate.950" />
              </Box>
              <Heading as="h3" fontSize="lg" fontWeight={600} color="white" mb={2}>
                {feature.title}
              </Heading>
              <Text color="slate.400" fontSize="sm" lineHeight={1.75}>
                {feature.description}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
