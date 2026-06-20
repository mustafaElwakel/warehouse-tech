import {
  Badge,
  Box,
  Circle,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import {
  FiActivity,
  FiAward,
  FiBarChart2,
  FiDollarSign,
  FiGlobe,
  FiMap,
  FiMusic,
  FiSearch,
  FiUsers,
} from "react-icons/fi";

const NAV: { icon: IconType; label: string; active?: boolean }[] = [
  { icon: FiActivity,  label: "Overview",    active: true },
  { icon: FiBarChart2, label: "Analytics" },
  { icon: FiMusic,     label: "Catalog" },
  { icon: FiAward,     label: "Charts" },
  { icon: FiMusic,     label: "Playlists" },
  { icon: FiUsers,     label: "Audience" },
  { icon: FiMap,       label: "Tour Map" },
  { icon: FiDollarSign,label: "Royalties" },
  { icon: FiSearch,    label: "Discovery" },
  { icon: FiGlobe,     label: "Competitors" },
];

const STATS = [
  { label: "Monthly Streams",   value: "847M",  delta: "+18%", color: "brand.400" },
  { label: "Total Followers",   value: "42.3M", delta: "+4.2%", color: "green.300" },
  { label: "Chart Entries",     value: "14",    delta: "+3",   color: "purple.300" },
  { label: "Playlist Adds",     value: "289",   delta: "+41",  color: "orange.300" },
];

const CHART = [42, 55, 48, 63, 72, 61, 83, 77, 91, 86, 97, 90];

const PLATFORM_BREAKDOWN = [
  { name: "YouTube",     streams: "428M", pct: 51, color: "red.400" },
  { name: "Spotify",     streams: "312M", pct: 37, color: "green.400" },
  { name: "Apple Music", streams: " 67M", pct: 8,  color: "pink.300" },
  { name: "TikTok",      streams: " 40M", pct: 5,  color: "brand.300" },
];

const CHART_HISTORY = [
  { track: "Mafia",      chart: "Spotify Egypt",      pos: "#1", peak: "#1",  country: "EG" },
  { track: "Balaha",     chart: "Spotify Global",     pos: "#7", peak: "#3",  country: "WW" },
  { track: "Enta Meen",  chart: "Apple Music MENA",   pos: "#2", peak: "#1",  country: "ME" },
];

function NavItem({ icon, label, active }: { icon: IconType; label: string; active?: boolean }) {
  return (
    <HStack
      spacing={3}
      px={3}
      py={2}
      borderRadius="lg"
      bg={active ? "whiteAlpha.100" : "transparent"}
      color={active ? "white" : "slate.400"}
      borderLeft="2px solid"
      borderColor={active ? "brand.400" : "transparent"}
    >
      <Icon as={icon} boxSize={3.5} />
      <Text fontSize="xs" fontWeight={active ? 600 : 500} display={{ base: "none", lg: "block" }}>
        {label}
      </Text>
    </HStack>
  );
}

export function DashboardMock() {
  return (
    <Flex h="full" w="full" bg="slate.950" borderRadius="xl" overflow="hidden" fontFamily="body">
      {/* Sidebar */}
      <Stack
        spacing={0.5}
        w={{ base: "44px", lg: "190px" }}
        flexShrink={0}
        bg="slate.900"
        borderRight="1px solid"
        borderColor="whiteAlpha.100"
        p={2.5}
      >
        <HStack spacing={2} px={1} pb={3} pt={1}>
          <Box
            boxSize="20px"
            borderRadius="5px"
            bgGradient="linear(to-br, brand.300, brand.600)"
            boxShadow="0 0 14px rgba(6, 182, 212, 0.5)"
            flexShrink={0}
          />
          <Text fontFamily="heading" fontWeight={700} color="white" fontSize="xs" display={{ base: "none", lg: "block" }}>
            Warehouse Tech
          </Text>
        </HStack>
        {NAV.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </Stack>

      {/* Main */}
      <Stack flex="1" spacing={0} minW={0}>
        {/* Top bar */}
        <Flex
          align="center"
          justify="space-between"
          px={{ base: 3, md: 5 }}
          py={2.5}
          borderBottom="1px solid"
          borderColor="whiteAlpha.100"
        >
          <Box>
            <Text fontFamily="heading" fontWeight={600} color="white" fontSize="sm">
              Artist Overview
            </Text>
            <Text fontSize="xs" color="slate.500" display={{ base: "none", md: "block" }}>
              Mohamed Ramadan · Last updated just now
            </Text>
          </Box>
          <HStack spacing={2}>
            <Badge colorScheme="cyan" variant="subtle" fontSize="0.55rem" px={2}>
              Career Score: 94
            </Badge>
            <Circle size="28px" bgGradient="linear(to-br, brand.400, purple.400)" color="slate.950" fontWeight={700} fontSize="0.6rem">
              MR
            </Circle>
          </HStack>
        </Flex>

        {/* Body */}
        <Stack flex="1" spacing={3} p={{ base: 2.5, md: 4 }} overflow="hidden" minH={0}>
          {/* Stat cards */}
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3}>
            {STATS.map((s) => (
              <Box
                key={s.label}
                p={3}
                borderRadius="xl"
                bg="slate.900"
                border="1px solid"
                borderColor="whiteAlpha.100"
              >
                <Text fontSize="0.6rem" color="slate.500" noOfLines={1} textTransform="uppercase" letterSpacing="0.05em">
                  {s.label}
                </Text>
                <HStack align="baseline" spacing={1.5} mt={1}>
                  <Text fontFamily="heading" fontSize={{ base: "lg", md: "xl" }} fontWeight={700} color="white">
                    {s.value}
                  </Text>
                  <Text fontSize="0.6rem" fontWeight={600} color={s.color}>
                    {s.delta}
                  </Text>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* Chart + platform breakdown */}
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={3} h={{ base: "auto", md: "185px" }} flexShrink={0}>
            {/* Streams chart */}
            <Box
              gridColumn={{ lg: "span 2" }}
              p={4}
              borderRadius="xl"
              bg="slate.900"
              border="1px solid"
              borderColor="whiteAlpha.100"
              display="flex"
              flexDirection="column"
            >
              <Flex justify="space-between" align="center" mb={3}>
                <Text fontWeight={600} color="white" fontSize="xs">
                  Monthly streams — all platforms
                </Text>
                <Badge colorScheme="cyan" variant="subtle" fontSize="0.55rem">
                  12 months
                </Badge>
              </Flex>
              <Flex flex="1" align="flex-end" gap={1.5} minH="90px">
                {CHART.map((h, i) => (
                  <Box
                    key={i}
                    flex="1"
                    h={`${h}%`}
                    borderTopRadius="sm"
                    bgGradient="linear(to-t, brand.600, brand.300)"
                    opacity={i === CHART.length - 1 ? 1 : 0.8}
                  />
                ))}
              </Flex>
            </Box>

            {/* Platform breakdown */}
            <Stack
              p={4}
              borderRadius="xl"
              bg="slate.900"
              border="1px solid"
              borderColor="whiteAlpha.100"
              spacing={3}
              display={{ base: "none", lg: "flex" }}
              justify="center"
            >
              <Text fontWeight={600} color="white" fontSize="xs">
                Platform breakdown
              </Text>
              {PLATFORM_BREAKDOWN.map((p) => (
                <Box key={p.name}>
                  <Flex justify="space-between" mb={1}>
                    <Text fontSize="0.6rem" color="slate.300">{p.name}</Text>
                    <Text fontSize="0.6rem" color="slate.400">{p.streams}</Text>
                  </Flex>
                  <Box h="5px" borderRadius="full" bg="whiteAlpha.200">
                    <Box h="full" w={`${p.pct}%`} borderRadius="full" bg={p.color} />
                  </Box>
                </Box>
              ))}
            </Stack>
          </SimpleGrid>

          {/* Chart history */}
          <Box
            borderRadius="xl"
            bg="slate.900"
            border="1px solid"
            borderColor="whiteAlpha.100"
            overflow="hidden"
            flexShrink={0}
            display={{ base: "none", md: "block" }}
          >
            <Flex px={4} py={2.5} borderBottom="1px solid" borderColor="whiteAlpha.100" align="center" justify="space-between">
              <Text fontWeight={600} color="white" fontSize="xs">
                Chart history
              </Text>
              <Badge colorScheme="green" variant="subtle" fontSize="0.55rem">Live</Badge>
            </Flex>
            {CHART_HISTORY.map((c, i) => (
              <Flex
                key={c.track}
                align="center"
                px={4}
                py={2.5}
                borderTop={i === 0 ? "none" : "1px solid"}
                borderColor="whiteAlpha.50"
                gap={3}
              >
                <Text flex="1.2" fontSize="xs" color="white" fontWeight={500}>{c.track}</Text>
                <Text flex="1.8" fontSize="xs" color="slate.400" noOfLines={1}>{c.chart}</Text>
                <Text flex="0.5" fontSize="xs" color="brand.300" fontWeight={700}>{c.pos}</Text>
                <Box flex="0.8" textAlign="right">
                  <Badge colorScheme="cyan" variant="subtle" fontSize="0.55rem">Peak {c.peak}</Badge>
                </Box>
              </Flex>
            ))}
          </Box>
        </Stack>
      </Stack>
    </Flex>
  );
}
