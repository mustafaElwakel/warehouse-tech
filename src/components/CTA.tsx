import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MotionBox } from "./motion";

export function CTA() {
  return (
    <Box as="section" id="pricing" py={{ base: 20, md: 28 }}>
      <Container maxW="6xl">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          position="relative"
          overflow="hidden"
          borderRadius="3xl"
          border="1px solid"
          borderColor="whiteAlpha.200"
          bg="slate.900"
          px={{ base: 8, md: 16 }}
          py={{ base: 14, md: 20 }}
          textAlign="center"
        >
          <Box
            position="absolute"
            top="-40%"
            left="50%"
            transform="translateX(-50%)"
            w="60%"
            h="80%"
            bg="brand.500"
            opacity={0.2}
            filter="blur(140px)"
            pointerEvents="none"
          />
          <Text
            position="relative"
            fontSize="sm"
            fontWeight={600}
            letterSpacing="0.15em"
            textTransform="uppercase"
            color="brand.400"
            mb={4}
          >
            Request Access
          </Text>
          <Heading
            position="relative"
            fontFamily="heading"
            fontWeight={600}
            letterSpacing="-0.02em"
            fontSize={{ base: "3xl", md: "5xl" }}
            color="white"
            maxW="3xl"
            mx="auto"
          >
            Bring your roster onto Warehouse Tech
          </Heading>
          <Text
            position="relative"
            mt={5}
            fontSize={{ base: "md", md: "lg" }}
            color="slate.400"
            maxW="xl"
            mx="auto"
          >
            Warehouse Tech is live for artist management teams and labels. Send
            us a request with a few details about you and your roster, and our
            team will set your workspace up.
          </Text>

          <Box position="relative" mt={10}>
            <Button
              as={RouterLink}
              to="/request-access"
              size="lg"
              bg="white"
              color="slate.950"
              fontWeight={600}
              px={8}
              _hover={{ bg: "slate.200", textDecoration: "none" }}
              _active={{ bg: "slate.300" }}
            >
              Request access
            </Button>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
