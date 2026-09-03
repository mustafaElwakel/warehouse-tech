import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { FiArrowLeft, FiCheck, FiPlus, FiX } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { MotionBox } from "../components/motion";

const ROLES = [
  "Artist manager",
  "Artist",
  "Label",
  "Booking agent",
  "Other",
];

/** The four products, named as they are on the landing page. */
const SERVICES = [
  { name: "TheWareOps", blurb: "Management system" },
  { name: "WareTix", blurb: "Ticketing" },
  { name: "WareSound", blurb: "Music storage" },
  { name: "Artist Sites", blurb: "Artist websites" },
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

type ArtistEntry = { id: number; name: string; instagram: string };

const emptyArtist = (id: number): ArtistEntry => ({ id, name: "", instagram: "" });

export function RequestAccess() {
  const [sent, setSent] = useState(false);
  const [services, setServices] = useState<string[]>([]);
  const [servicesError, setServicesError] = useState(false);
  const [artists, setArtists] = useState<ArtistEntry[]>([emptyArtist(1)]);
  // Rows are keyed by id rather than index, so removing one from the middle
  // does not shift the remaining rows' state onto the wrong inputs.
  const nextArtistId = useRef(2);

  // Landing here from the CTA keeps the previous scroll position otherwise.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function addArtist() {
    setArtists((current) => [...current, emptyArtist(nextArtistId.current++)]);
  }

  function removeArtist(id: number) {
    setArtists((current) => current.filter((artist) => artist.id !== id));
  }

  function updateArtist(
    id: number,
    field: "name" | "instagram",
    value: string,
  ) {
    setArtists((current) =>
      current.map((artist) =>
        artist.id === id ? { ...artist, [field]: value } : artist,
      ),
    );
  }

  function toggleService(name: string) {
    setServices((current) => {
      const next = current.includes(name)
        ? current.filter((s) => s !== name)
        : [...current, name];
      if (next.length > 0) setServicesError(false);
      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // A checkbox group has no native "at least one" rule, so it is checked here.
    if (services.length === 0) {
      setServicesError(true);
      return;
    }
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

                  <FormControl isInvalid={servicesError}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight={600}
                      color="slate.300"
                      mb={1}
                    >
                      Which services are you interested in?
                      <Box as="span" color="red.300" ml={1} aria-hidden="true">
                        *
                      </Box>
                    </FormLabel>
                    <Text fontSize="xs" color="slate.500" mb={3}>
                      Select all that apply.
                    </Text>
                    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3}>
                      {SERVICES.map((service) => {
                        const checked = services.includes(service.name);
                        return (
                          <Box
                            key={service.name}
                            as="label"
                            display="flex"
                            alignItems="center"
                            gap={3}
                            px={4}
                            py={3}
                            borderRadius="xl"
                            cursor="pointer"
                            bg={checked ? "rgba(6,182,212,0.08)" : "whiteAlpha.100"}
                            border="1px solid"
                            borderColor={checked ? "brand.500" : "whiteAlpha.200"}
                            _hover={{
                              borderColor: checked ? "brand.400" : "whiteAlpha.300",
                            }}
                            sx={{
                              transition: "border-color 0.2s, background 0.2s",
                            }}
                          >
                            <Checkbox
                              id={`service-${service.name
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              name="services"
                              value={service.name}
                              isChecked={checked}
                              onChange={() => toggleService(service.name)}
                              colorScheme="cyan"
                              size="lg"
                            />
                            <Box>
                              <Text
                                fontSize="sm"
                                fontWeight={600}
                                color="white"
                                lineHeight={1.3}
                              >
                                {service.name}
                              </Text>
                              <Text fontSize="xs" color="slate.400">
                                {service.blurb}
                              </Text>
                            </Box>
                          </Box>
                        );
                      })}
                    </SimpleGrid>
                    <FormErrorMessage fontSize="sm">
                      Please choose at least one service.
                    </FormErrorMessage>
                  </FormControl>

                  <Box>
                    {/* Not a FormControl: it would hand every input in the
                        group the same generated id. */}
                    <FormLabel
                      as="p"
                      fontSize="sm"
                      fontWeight={600}
                      color="slate.300"
                      mb={1}
                    >
                      Which artists do you want to manage?
                      <Box as="span" color="red.300" ml={1} aria-hidden="true">
                        *
                      </Box>
                    </FormLabel>
                    <Text fontSize="xs" color="slate.500" mb={3}>
                      Add a row for each artist on your roster.
                    </Text>

                    <Stack spacing={3}>
                      {artists.map((artist, index) => (
                        <Box
                          key={artist.id}
                          px={4}
                          py={4}
                          borderRadius="xl"
                          bg="whiteAlpha.100"
                          border="1px solid"
                          borderColor="whiteAlpha.200"
                        >
                          <Flex align="center" justify="space-between" mb={3}>
                            <Text
                              fontSize="xs"
                              fontWeight={700}
                              letterSpacing="0.1em"
                              textTransform="uppercase"
                              color="slate.500"
                            >
                              Artist {index + 1}
                            </Text>
                            {artists.length > 1 && (
                              <IconButton
                                aria-label={`Remove artist ${index + 1}`}
                                icon={<Icon as={FiX} boxSize={4} />}
                                size="sm"
                                variant="ghost"
                                color="slate.400"
                                _hover={{ color: "white", bg: "whiteAlpha.200" }}
                                onClick={() => removeArtist(artist.id)}
                              />
                            )}
                          </Flex>
                          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                            <Input
                              {...fieldStyles}
                              size="md"
                              aria-label={`Artist ${index + 1} name`}
                              name={`artistName${index + 1}`}
                              placeholder="Artist or band name"
                              value={artist.name}
                              onChange={(event) =>
                                updateArtist(artist.id, "name", event.target.value)
                              }
                              required
                            />
                            <Input
                              {...fieldStyles}
                              size="md"
                              aria-label={`Artist ${index + 1} Instagram`}
                              name={`artistInstagram${index + 1}`}
                              placeholder="Instagram handle"
                              value={artist.instagram}
                              onChange={(event) =>
                                updateArtist(
                                  artist.id,
                                  "instagram",
                                  event.target.value,
                                )
                              }
                              required
                            />
                          </SimpleGrid>
                        </Box>
                      ))}
                    </Stack>

                    <Button
                      type="button"
                      onClick={addArtist}
                      mt={3}
                      size="sm"
                      variant="outline"
                      color="brand.300"
                      borderColor="whiteAlpha.300"
                      leftIcon={<Icon as={FiPlus} boxSize={4} />}
                      _hover={{ bg: "whiteAlpha.100", borderColor: "brand.500" }}
                    >
                      Add another artist
                    </Button>
                  </Box>

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
