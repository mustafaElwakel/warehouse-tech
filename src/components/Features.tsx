import {
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
  FiCheck,
  FiCloud,
  FiCpu,
  FiDollarSign,
  FiGlobe,
  FiLayers,
  FiLayout,
  FiMusic,
  FiTag,
  FiTrendingUp,
  FiYoutube,
} from "react-icons/fi";
import { MotionBox } from "./motion";

type Capability = {
  icon: IconType;
  title: string;
  description: string;
};

/** What TheWareOps, the flagship management system, actually does. */
const WAREOPS_CAPABILITIES: Capability[] = [
  {
    icon: FiDollarSign,
    title: "Finance & Budgeting",
    description:
      "Revenue and expenses tracked side by side, with ready-made budget templates to work from — or build your own.",
  },
  {
    icon: FiMusic,
    title: "Catalog & Chart Intelligence",
    description:
      "Every release, every chart entry, every playlist — stream counts, peak positions, and authenticity flags, all in one place.",
  },
  {
    icon: FiTrendingUp,
    title: "Daily Trend Insights",
    description:
      "Every trend, mention, and story about your artist, surfaced daily and ranked by severity — so whatever needs attention first is what you read first.",
  },
  {
    icon: FiCpu,
    title: "AI Music Assistant",
    description:
      "Produce a cover, extend a work in progress, or build a track from scratch — studio-grade generation that stays under your team's direction.",
  },
  {
    icon: FiYoutube,
    title: "YouTube Intelligence",
    description:
      "Full performance data on every video, with AI summaries of each comment section — sentiment, recurring themes, and what the audience is actually asking for.",
  },
  {
    icon: FiGlobe,
    title: "And much more",
    description:
      "Competitive analysis, curator discovery, collaboration intelligence, career timelines — and everything else your team needs.",
  },
];

type Product = {
  icon: IconType;
  name: string;
  tagline: string;
  points: string[];
};

/** The three products that sit alongside TheWareOps. */
const PRODUCTS: Product[] = [
  {
    icon: FiTag,
    name: "WareTix",
    tagline: "A full ticketing system built for shows and tours.",
    points: [
      "Presales, on-sales, and allocations managed in one place",
      "Live sales and attendance as the show builds",
      "Guest lists and settlement without the spreadsheet",
    ],
  },
  {
    icon: FiCloud,
    name: "WareSound",
    tagline: "Cloud storage built around music, not generic files.",
    points: [
      "Stems, masters, and artwork organised by release",
      "Version history, so the latest file is never in doubt",
      "Share links you can expire, revoke, and track",
    ],
  },
  {
    icon: FiLayout,
    name: "Artist Sites",
    tagline: "Branded artist websites that stay in sync.",
    points: [
      "Release and tour pages that update themselves",
      "Ticket, streaming, and merch links in one destination",
      "A custom domain, designed around the artist's brand",
    ],
  },
];

function ProductIcon({ icon }: { icon: IconType }) {
  return (
    <Box
      display="inline-flex"
      p={2.5}
      borderRadius="lg"
      bg="brand.500"
      boxShadow="0 0 20px rgba(6, 182, 212, 0.4)"
      alignSelf="flex-start"
      flexShrink={0}
    >
      <Icon as={icon} boxSize={4} color="slate.950" />
    </Box>
  );
}

export function Features() {
  return (
    <Box as="section" id="features" py={{ base: 20, md: 28 }} position="relative">
      <Container maxW="7xl">
        <Stack spacing={4} maxW="3xl" mb={12}>
          <Text
            fontSize="sm"
            fontWeight={600}
            letterSpacing="0.15em"
            textTransform="uppercase"
            color="brand.400"
          >
            The Platform
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
            Four products, one connected system — management, ticketing, storage,
            and presence. Built on real management experience, not assumptions.
          </Text>
        </Stack>

        {/* The flagship product, given room for its full feature set */}
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          p={{ base: 6, md: 9 }}
          mb={5}
          borderRadius="2xl"
          bg="whiteAlpha.50"
          border="1px solid"
          borderColor="whiteAlpha.100"
        >
          <Flex align="center" gap={3} mb={3} flexWrap="wrap">
            <ProductIcon icon={FiLayers} />
            <Heading as="h3" fontSize="xl" fontWeight={600} color="white">
              TheWareOps
            </Heading>
          </Flex>
          <Text color="slate.400" fontSize={{ base: "sm", md: "md" }} maxW="3xl" mb={9}>
            The management system at the centre of the platform — an artist's
            data, catalog, finances, and daily signals in a single view, with AI built into
            the work, for managers, labels, and their teams.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacingX={8} spacingY={7}>
            {WAREOPS_CAPABILITIES.map((capability) => (
              <Box key={capability.title}>
                <Flex align="center" gap={3} mb={2}>
                  <Icon as={capability.icon} boxSize={4} color="brand.400" />
                  <Heading as="h4" fontSize="md" fontWeight={600} color="white">
                    {capability.title}
                  </Heading>
                </Flex>
                <Text color="slate.400" fontSize="sm" lineHeight={1.75}>
                  {capability.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* The other three products, given equal weight to each other */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          {PRODUCTS.map((product, i) => (
            <MotionBox
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              display="flex"
              flexDirection="column"
              p={7}
              borderRadius="2xl"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.100"
              _hover={{ borderColor: "brand.500", bg: "whiteAlpha.100" }}
              sx={{ transition: "border-color 0.25s, background 0.25s" }}
            >
              <ProductIcon icon={product.icon} />
              <Heading
                as="h3"
                fontSize="lg"
                fontWeight={600}
                color="white"
                mt={4}
                mb={2}
              >
                {product.name}
              </Heading>
              <Text color="slate.400" fontSize="sm" lineHeight={1.75} mb={5}>
                {product.tagline}
              </Text>
              <Stack spacing={2.5} mt="auto">
                {product.points.map((point) => (
                  <Flex key={point} align="flex-start" gap={2.5}>
                    <Icon
                      as={FiCheck}
                      boxSize={3.5}
                      color="brand.400"
                      mt="0.3rem"
                      flexShrink={0}
                    />
                    <Text color="slate.300" fontSize="sm" lineHeight={1.6}>
                      {point}
                    </Text>
                  </Flex>
                ))}
              </Stack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
