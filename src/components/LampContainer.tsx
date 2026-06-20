import { Box, type BoxProps } from "@chakra-ui/react";
import { type ReactNode } from "react";
import { MotionBox } from "./motion";

const CYAN_500  = "#06b6d4";
const CYAN_400  = "#22d3ee";
const SLATE_950 = "#020617";

const coneTransition = { delay: 0.3, duration: 0.8, ease: "easeInOut" } as const;
const coneViewport = { once: true } as const;

/**
 * The "lamp" hero backdrop, ported from the Tailwind/Aceternity reference to
 * pure Chakra + framer-motion. Two conic-gradient cones grow outward on view,
 * a thin bright line and a soft glow form the lamp's filament, and a stack of
 * slate-950 masks/blurs blends everything into the page background.
 *
 * `children` are rendered above the effect, pulled up into the light.
 */
export function LampContainer({
  children,
  ...rest
}: { children: ReactNode } & BoxProps) {
  return (
    <Box
      position="relative"
      display="flex"
      minH={{ base: "78vh", md: "100vh" }}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      bg={SLATE_950}
      w="full"
      zIndex={0}
      {...rest}
    >
      <Box
        position="relative"
        display="flex"
        w="full"
        flex="1"
        transform="scaleY(1.25)"
        alignItems="center"
        justifyContent="center"
        sx={{ isolation: "isolate" }}
        zIndex={0}
      >
        {/* Left cone */}
        <MotionBox
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={coneTransition}
          viewport={coneViewport}
          position="absolute"
          inset="auto"
          right="50%"
          h="14rem"
          overflow="visible"
          w="30rem"
          color="white"
          backgroundImage={`conic-gradient(from 70deg at center top, ${CYAN_500}, transparent, transparent)`}
        >
          <Box
            position="absolute"
            w="100%"
            left={0}
            bottom={0}
            h="10rem"
            bg={SLATE_950}
            zIndex={20}
            sx={{
              maskImage: "linear-gradient(to top, white, transparent)",
              WebkitMaskImage: "linear-gradient(to top, white, transparent)",
            }}
          />
          <Box
            position="absolute"
            w="10rem"
            h="100%"
            left={0}
            bottom={0}
            bg={SLATE_950}
            zIndex={20}
            sx={{
              maskImage: "linear-gradient(to right, white, transparent)",
              WebkitMaskImage: "linear-gradient(to right, white, transparent)",
            }}
          />
        </MotionBox>

        {/* Right cone */}
        <MotionBox
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={coneTransition}
          viewport={coneViewport}
          position="absolute"
          inset="auto"
          left="50%"
          h="14rem"
          w="30rem"
          color="white"
          backgroundImage={`conic-gradient(from 290deg at center top, transparent, transparent, ${CYAN_500})`}
        >
          <Box
            position="absolute"
            w="10rem"
            h="100%"
            right={0}
            bottom={0}
            bg={SLATE_950}
            zIndex={20}
            sx={{
              maskImage: "linear-gradient(to left, white, transparent)",
              WebkitMaskImage: "linear-gradient(to left, white, transparent)",
            }}
          />
          <Box
            position="absolute"
            w="100%"
            right={0}
            bottom={0}
            h="10rem"
            bg={SLATE_950}
            zIndex={20}
            sx={{
              maskImage: "linear-gradient(to top, white, transparent)",
              WebkitMaskImage: "linear-gradient(to top, white, transparent)",
            }}
          />
        </MotionBox>

        {/* Soft slate wash behind the filament */}
        <Box
          position="absolute"
          top="50%"
          h="12rem"
          w="full"
          transform="translateY(3rem) scaleX(1.5)"
          bg={SLATE_950}
          filter="blur(40px)"
        />
        <Box
          position="absolute"
          top="50%"
          zIndex={50}
          h="12rem"
          w="full"
          bg="transparent"
          opacity={0.1}
          backdropFilter="blur(12px)"
        />
        {/* Wide cyan glow */}
        <Box
          position="absolute"
          inset="auto"
          zIndex={50}
          h="9rem"
          w="28rem"
          transform="translateY(-50%)"
          borderRadius="full"
          bg={CYAN_500}
          opacity={0.5}
          filter="blur(64px)"
        />
        {/* Tight cyan glow (animates wider) */}
        <MotionBox
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={coneTransition}
          viewport={coneViewport}
          position="absolute"
          inset="auto"
          zIndex={30}
          h="9rem"
          w="16rem"
          transform="translateY(-6rem)"
          borderRadius="full"
          bg={CYAN_400}
          filter="blur(40px)"
        />
        {/* The bright filament line */}
        <MotionBox
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={coneTransition}
          viewport={coneViewport}
          position="absolute"
          inset="auto"
          zIndex={50}
          h="0.125rem"
          w="30rem"
          transform="translateY(-7rem)"
          bg={CYAN_400}
        />
        {/* Mask that crops the top of the cones */}
        <Box
          position="absolute"
          inset="auto"
          zIndex={40}
          h="11rem"
          w="full"
          transform="translateY(-12.5rem)"
          bg={SLATE_950}
        />
      </Box>

      <Box
        position="relative"
        zIndex={50}
        display="flex"
        flexDir="column"
        alignItems="center"
        px={5}
        transform={{ base: "translateY(-14rem)", md: "translateY(-20rem)" }}
      >
        {children}
      </Box>
    </Box>
  );
}
