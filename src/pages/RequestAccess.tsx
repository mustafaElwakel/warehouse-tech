import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState, type FormEvent } from "react";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { MotionBox } from "../components/motion";

const ROLES = [
  "Artist manager",
  "Artist",
  "Label",
  "Booking agent",
  "Other",
];

const fieldStyles = {
  size: "lg" as const,
  bg: "whiteAlpha.100",
  border: "1px solid",
  borderColor: "whiteAlpha.200",
  color: "white",
  _placeholder: { color: "slate.500" },
  _focus: {
    borderColor: "brand.400",
    boxShadow: "0 0 0 1px #22d3ee",
    bg: "whiteAlpha.200",
  },
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <FormControl isRequired>
      <FormLabel fontSize="sm" fontWeight={600} color="slate.300" mb={2}>
        {label}
      </FormLabel>
      {children}
    </FormControl>
  );
}

export function RequestAccess() {
  const [sent, setSent] = useState(false);

  // Landing here from the CTA keeps the previous scroll position otherwise.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: there is no backend yet — nothing is transmitted or stored, the
    // form only shows a confirmation. Wire this up to a real endpoint before
    // relying on any request submitted here.
    setSent(true);
  }

  return (
    <Box bg="slate.950" color="slate.200" minH="100vh">
      <Box
        as="header"
        borderBottom="1px solid"
        borderColor="whiteAlpha.100"
        bg="rgba(2, 6, 23, 0.55)"
        backdropFilter="blur(12px)"
      >
        <Container maxW="4xl">
          <Flex h="64px" align="center" justify="space-between">
            <Text
              as={RouterLink}
              to="/"
              fontFamily="'UnifrakturMaguntia', serif"
              fontSize="2xl"
              letterSpacing="0.03em"
              lineHeight={1}
              sx={{
                background:
                  "linear-gradient(135deg, #e8e8e8 0%, #a0a0a0 40%, #ffffff 60%, #888888 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Warehouse Tech
            </Text>
            <Flex
              as={RouterLink}
              to="/"
              align="center"
              gap={2}
              fontSize="sm"
              fontWeight={500}
              color="slate.300"
              _hover={{ color: "white" }}
              transition="color 0.2s"
            >
              <Icon as={FiArrowLeft} boxSize={4} />
              Back to site
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Container maxW="3xl" py={{ base: 14, md: 20 }}>
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Text
            fontSize="sm"
            fontWeight={600}
            letterSpacing="0.15em"
            textTransform="uppercase"
            color="brand.400"
            mb={4}
          >
            Request Access
          </Text>

          {sent ? (
            <Box
              borderRadius="2xl"
              border="1px solid"
              borderColor="whiteAlpha.100"
              bg="whiteAlpha.50"
              p={{ base: 8, md: 12 }}
              textAlign="center"
            >
              <Flex
                display="inline-flex"
                p={3}
                mb={5}
                borderRadius="full"
                bg="brand.500"
                boxShadow="0 0 24px rgba(6, 182, 212, 0.4)"
              >
                <Icon as={FiCheck} boxSize={5} color="slate.950" />
              </Flex>
              <Heading
                fontFamily="heading"
                fontWeight={600}
                letterSpacing="-0.02em"
                fontSize={{ base: "2xl", md: "3xl" }}
                color="white"
                mb={3}
              >
                Your request has been sent
              </Heading>
              <Text color="slate.400" maxW="md" mx="auto" mb={8}>
                Thank you. Our team will review your request and get back to you
                at the address you provided.
              </Text>
              <Button
                as={RouterLink}
                to="/"
                size="lg"
                bg="white"
                color="slate.950"
                fontWeight={600}
                px={7}
                _hover={{ bg: "slate.200" }}
                _active={{ bg: "slate.300" }}
              >
                Back to site
              </Button>
            </Box>
          ) : (
            <>
              <Heading
                fontFamily="heading"
                fontWeight={600}
                letterSpacing="-0.02em"
                fontSize={{ base: "3xl", md: "4xl" }}
                color="white"
                mb={4}
              >
                Tell us who you work with
              </Heading>
              <Text color="slate.400" fontSize={{ base: "md", md: "lg" }} mb={10}>
                A few details so we can set up the right workspace for your team.
                Everything here takes under a minute.
              </Text>

              <Box
                as="form"
                onSubmit={handleSubmit}
                borderRadius="2xl"
                border="1px solid"
                borderColor="whiteAlpha.100"
                bg="whiteAlpha.50"
                p={{ base: 6, md: 9 }}
              >
                <Stack spacing={6}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <Field label="Your name">
                      <Input
                        {...fieldStyles}
                        name="name"
                        placeholder="Jamie Rivera"
                        required
                      />
                    </Field>
                    <Field label="Your email">
                      <Input
                        {...fieldStyles}
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                      />
                    </Field>
                  </SimpleGrid>

                  <Field label="Your role">
                    <Select
                      {...fieldStyles}
                      name="role"
                      placeholder="Select your role"
                      required
                      sx={{ "& option": { background: "#0f172a" } }}
                    >
                      {ROLES.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </Select>
                  </Field>

                  <Field label="Which artist do you want to manage?">
                    <Input
                      {...fieldStyles}
                      name="artist"
                      placeholder="Artist or band name"
                      required
                    />
                  </Field>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <Field label="Their Instagram">
                      <Input
                        {...fieldStyles}
                        name="instagram"
                        placeholder="@handle"
                        required
                      />
                    </Field>
                    <Field label="Their phone or email">
                      <Input
                        {...fieldStyles}
                        name="artistContact"
                        placeholder="Phone number or email"
                        required
                      />
                    </Field>
                  </SimpleGrid>

                  <Button
                    type="submit"
                    size="lg"
                    bg="white"
                    color="slate.950"
                    fontWeight={600}
                    mt={2}
                    _hover={{ bg: "slate.200" }}
                    _active={{ bg: "slate.300" }}
                  >
                    Send request
                  </Button>
                </Stack>
              </Box>
            </>
          )}
        </MotionBox>
      </Container>
    </Box>
  );
}
