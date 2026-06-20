import { Box, Heading, Text } from "@chakra-ui/react";
import { ContainerScroll } from "./ContainerScroll";
import { DashboardMock } from "./DashboardMock";

export function Showcase() {
  return (
    <Box
      as="section"
      id="product"
      overflow="hidden"
      position="relative"
      mt={{ base: "-6rem", md: "-16rem" }}
    >
      <ContainerScroll
        titleComponent={
          <Box pb={4}>
            <Text
              fontSize="sm"
              fontWeight={600}
              letterSpacing="0.15em"
              textTransform="uppercase"
              color="brand.400"
              mb={3}
            >
              Artist Intelligence Hub
            </Text>
            <Heading
              as="h2"
              fontFamily="heading"
              fontWeight={600}
              letterSpacing="-0.02em"
              lineHeight={1.05}
              color="white"
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              Every metric, every platform,
              <Box
                as="span"
                display="block"
                mt={2}
                fontSize={{ base: "4xl", md: "7xl" }}
                fontWeight={700}
                bgGradient="linear(to-br, slate.100, slate.400)"
                bgClip="text"
              >
                one screen
              </Box>
            </Heading>
          </Box>
        }
      >
        <DashboardMock />
      </ContainerScroll>
    </Box>
  );
}
