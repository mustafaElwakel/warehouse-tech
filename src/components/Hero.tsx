import { Badge, HStack, Text } from "@chakra-ui/react";
import { LampContainer } from "./LampContainer";
import { MotionBox } from "./motion";

const fadeUp = {
  initial: { opacity: 0.5, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function Hero() {
  return (
    <LampContainer as="section" id="top">
      <MotionBox
        {...fadeUp}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      >
        <HStack justify="center" mb={5}>
          <Badge
            px={3}
            py={1}
            borderRadius="full"
            bg="whiteAlpha.100"
            border="1px solid"
            borderColor="brand.500"
            color="brand.300"
            fontSize="xs"
            fontWeight={600}
            letterSpacing="0.08em"
            textTransform="uppercase"
          >
            Management System — Coming Soon
          </Badge>
        </HStack>
      </MotionBox>

      <MotionBox
        {...fadeUp}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      >
        <Text
          as="h1"
          mt={2}
          textAlign="center"
          fontFamily="heading"
          fontWeight={600}
          letterSpacing="-0.03em"
          lineHeight={1.05}
          fontSize={{ base: "4xl", md: "7xl" }}
          bgGradient="linear(to-br, slate.100, slate.400)"
          bgClip="text"
        >
          Intelligence software
          <br />
          for the entertainment industry
        </Text>
      </MotionBox>

      <MotionBox
        {...fadeUp}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
      >
        <Text
          mt={6}
          maxW="2xl"
          textAlign="center"
          fontSize={{ base: "md", md: "lg" }}
          color="slate.400"
        >
          Warehouse Tech builds data infrastructure and management tools for
          artists, labels, and their teams — connecting every platform, every
          metric, and every deal into one unified view.
        </Text>
      </MotionBox>
    </LampContainer>
  );
}
