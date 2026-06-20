import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { MotionBox } from "./motion";

export function CTA() {
  const [submitted, setSubmitted] = useState(false);

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
            Early Access Programme
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
            Be among the first teams to run on Warehouse Tech
          </Heading>
          <Text
            position="relative"
            mt={5}
            fontSize={{ base: "md", md: "lg" }}
            color="slate.400"
            maxW="xl"
            mx="auto"
          >
            We are onboarding a small number of artist management teams and
            labels ahead of the public launch. Drop your email and we'll reach
            out when your spot is ready.
          </Text>

          {submitted ? (
            <Box position="relative" mt={10}>
              <Text
                fontSize="md"
                fontWeight={600}
                color="brand.300"
              >
                You're on the list. We'll be in touch.
              </Text>
            </Box>
          ) : (
            <Flex
              position="relative"
              mt={10}
              maxW="md"
              mx="auto"
              gap={3}
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Input
                placeholder="your@email.com"
                size="lg"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                color="white"
                _placeholder={{ color: "slate.500" }}
                _focus={{
                  borderColor: "brand.400",
                  boxShadow: "0 0 0 1px #22d3ee",
                  bg: "whiteAlpha.150",
                }}
                flex="1"
              />
              <Button
                size="lg"
                bg="white"
                color="slate.950"
                fontWeight={600}
                px={7}
                flexShrink={0}
                _hover={{ bg: "slate.200" }}
                _active={{ bg: "slate.300" }}
                onClick={() => setSubmitted(true)}
              >
                Join waitlist
              </Button>
            </Flex>
          )}
        </MotionBox>
      </Container>
    </Box>
  );
}
