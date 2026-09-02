import { Box, Center, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FiCloud, FiLayers, FiLayout, FiTag } from "react-icons/fi";
import { MotionBox } from "./motion";
import { SplineScene } from "./SplineScene";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

type Service = {
  icon: IconType;
  name: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: FiLayers,
    name: "TheWareOps",
    description:
      "A full management system for artists, managers, and their teams.",
  },
  {
    icon: FiTag,
    name: "WareTix",
    description: "A full ticketing system built for shows and tours.",
  },
  {
    icon: FiCloud,
    name: "WareSound",
    description: "Cloud storage for music — think Dropbox, built for artists.",
  },
  {
    icon: FiLayout,
    name: "Artist Sites",
    description: "Branded personal websites, designed for every artist.",
  },
];

const CORNER_POSITIONS = [
  { top: 0, left: "-1rem" },
  { top: 0, right: "-1rem" },
  { bottom: 0, left: "-1rem" },
  { bottom: 0, right: "-1rem" },
] as const;

function ServiceCard({
  service,
  ...rest
}: { service: Service } & React.ComponentProps<typeof Box>) {
  return (
    <Box
      w={{ md: "15rem" }}
      p={5}
      borderRadius="2xl"
      bg="whiteAlpha.50"
      border="1px solid"
      borderColor="whiteAlpha.100"
      backdropFilter="blur(6px)"
      _hover={{ borderColor: "brand.500", bg: "whiteAlpha.100" }}
      sx={{ transition: "border-color 0.25s, background 0.25s" }}
      {...rest}
    >
      <Box
        display="inline-flex"
        p={2.5}
        borderRadius="lg"
        bg="brand.500"
        boxShadow="0 0 20px rgba(6, 182, 212, 0.4)"
        mb={3}
      >
        <Icon as={service.icon} boxSize={4} color="slate.950" />
      </Box>
      <Text fontWeight={700} color="white" fontSize="md" mb={1}>
        {service.name}
      </Text>
      <Text color="slate.400" fontSize="sm" lineHeight={1.6}>
        {service.description}
      </Text>
    </Box>
  );
}

export function RobotShowcase() {
  return (
    <Box
      as="section"
      position="relative"
      mt={{ base: "-5rem", md: "-14rem" }}
      pt={{ base: 4, md: 6 }}
      pb={{ base: 16, md: 20 }}
      overflow="hidden"
    >
      <MotionBox {...fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
        <Center>
          <Text
            fontSize="sm"
            fontWeight={600}
            letterSpacing="0.15em"
            textTransform="uppercase"
            color="brand.400"
            mb={3}
          >
            AI-Powered
          </Text>
        </Center>
        <Text
          textAlign="center"
          fontFamily="heading"
          fontWeight={600}
          letterSpacing="-0.02em"
          lineHeight={1.05}
          fontSize={{ base: "2xl", md: "4xl" }}
          bgGradient="linear(to-br, slate.100, slate.400)"
          bgClip="text"
          mb={{ base: 2, md: 3 }}
        >
          Your intelligent companion for every deal
        </Text>
        <Text
          textAlign="center"
          fontSize={{ base: "sm", md: "md" }}
          color="slate.400"
          maxW="md"
          mx="auto"
          mb={{ base: 10, md: 14 }}
        >
          One system, four products — everything an artist's team needs, connected.
        </Text>
      </MotionBox>

      {/* Orbit layout: robot centered, services framing it on desktop */}
      <Box
        position="relative"
        maxW="6xl"
        mx="auto"
        px={{ base: 5, md: 12 }}
        py={{ base: 0, md: "4rem" }}
      >
        {/* Decorative orbit ring behind the robot */}
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="38rem"
          h="38rem"
          borderRadius="full"
          border="1px dashed"
          borderColor="transparent"
          pointerEvents="none"
          zIndex={0}
        />

        <MotionBox
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          position="relative"
          zIndex={1}
          mx="auto"
          maxW="26rem"
          h={{ base: "20rem", md: "26rem" }}
          borderRadius="3xl"
          overflow="hidden"
        >
          {/* Brand cyan glow, echoing the Hero lamp */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="24rem"
            h="24rem"
            borderRadius="full"
            bg="brand.500"
            opacity={0.18}
            filter="blur(90px)"
            pointerEvents="none"
            zIndex={0}
          />

          <Box position="relative" w="full" h="full" zIndex={1}>
            <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
          </Box>
        </MotionBox>

        {/* Desktop: service cards floating at the four corners */}
        {SERVICES.map((service, i) => (
          <MotionBox
            key={service.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: "easeOut" }}
            display={{ base: "none", md: "block" }}
            position="absolute"
            zIndex={2}
            {...CORNER_POSITIONS[i]}
          >
            <ServiceCard service={service} />
          </MotionBox>
        ))}

        {/* Mobile: service cards as a simple grid below the robot */}
        <SimpleGrid
          display={{ base: "grid", md: "none" }}
          columns={2}
          spacing={4}
          mt={8}
          position="relative"
          zIndex={1}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
