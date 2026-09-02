import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MotionBox } from "./motion";

const PILLARS = [
  {
    no: "01",
    title: "Built from inside the industry",
    description:
      "Our founding partners are active managers of major recording artists across Europe and the Middle East. We built this platform because we lived the problem — not because we read about it.",
  },
  {
    no: "02",
    title: "Connected to every data source",
    description:
      "Warehouse Tech aggregates streaming platforms, chart trackers, social analytics, playlist intelligence, and royalty data into a single real-time feed — no more switching between tools.",
  },
  {
    no: "03",
    title: "Designed for decisions, not dashboards",
    description:
      "Every feature exists to help a manager, label, or artist make a faster, better-informed decision — whether that's routing a tour, pitching to a brand, or auditing a royalty statement.",
  },
];

export function Workflow() {
  return (
    <Box
      as="section"
      id="workflow"
      py={{ base: 20, md: 28 }}
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
      bg="linear-gradient(180deg, rgba(6,182,212,0.04), transparent)"
    >
      <Container maxW="7xl">
        <Stack spacing={4} maxW="2xl" mb={{ base: 12, md: 16 }}>
          <Text
            fontSize="sm"
            fontWeight={600}
            letterSpacing="0.15em"
            textTransform="uppercase"
            color="brand.400"
          >
            Our Approach
          </Text>
          <Heading
            fontFamily="heading"
            fontWeight={600}
            letterSpacing="-0.02em"
            fontSize={{ base: "3xl", md: "5xl" }}
            color="white"
          >
            Built by the industry,
            <br />for the industry
          </Heading>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 10, md: 8 }}>
          {PILLARS.map((p, i) => (
            <MotionBox
              key={p.no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <Text
                fontFamily="heading"
                fontSize="5xl"
                fontWeight={700}
                bgGradient="linear(to-br, brand.300, brand.600)"
                bgClip="text"
                mb={4}
              >
                {p.no}
              </Text>
              <Heading as="h3" fontSize="xl" fontWeight={600} color="white" mb={3}>
                {p.title}
              </Heading>
              <Text color="slate.400" fontSize="sm" lineHeight={1.75}>
                {p.description}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
