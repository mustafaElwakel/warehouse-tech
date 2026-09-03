import { Box, useBreakpointValue, type BoxProps } from "@chakra-ui/react";
import { type ReactNode } from "react";
import { MotionBox } from "./motion";

const CYAN_500  = "#06b6d4";
const CYAN_400  = "#22d3ee";
const SLATE_950 = "#020617";

const coneTransition = { delay: 0.3, duration: 0.8, ease: "easeInOut" } as const;
// `margin` widens the intersection root so the filament — which sits close to
// the top of the section — still triggers its reveal and stays lit afterwards,
// instead of being stranded at its `initial` width when it never intersects.
const coneViewport = { once: true, amount: 0, margin: "200px 0px" } as const;

/**
 * The lamp is drawn at desktop proportions; on a phone those widths overshoot
 * the viewport, so the cones bleed off both edges and the filament reads as a
 * hard rule across the screen. These are the same shape at a smaller scale.
 */
const LAMP_SIZES = {
  base: { coneFrom: "9rem", coneTo: "18rem", coneMask: "6rem",
          barFrom: "8rem", barTo: "17rem", glowFrom: "5rem", glowTo: "10rem",
          wideGlowW: "17rem" },
  md:   { coneFrom: "15rem", coneTo: "30rem", coneMask: "10rem",
          barFrom: "15rem", barTo: "30rem", glowFrom: "8rem", glowTo: "16rem",
          wideGlowW: "28rem" },
} as const;

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
  // framer-motion writes the animated width as an inline style, so responsive
  // Chakra props cannot reach it — the breakpoint has to be resolved here.
  const size =
    useBreakpointValue(
      { base: LAMP_SIZES.base, md: LAMP_SIZES.md },
      { ssr: false },
    ) ?? LAMP_SIZES.base;

  return (
    <Box
      position="relative"
      display="flex"
      minH={{ base: "78vh", md: "100vh" }}
      flexDir="column"
      alignItems="center"
      justifyContent={{ base: "flex-start", md: "center" }}
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
        flex={{ base: "0 0 auto", md: "1" }}
        h={{ base: "16rem", md: "auto" }}
        top={{ base: "9rem", md: 0 }}
        transform="scaleY(1.25)"
        alignItems="center"
        justifyContent="center"
        sx={{ isolation: "isolate" }}
        zIndex={0}
      >
        {/* Left cone */}
        <MotionBox
          initial={{ opacity: 0.5, width: size.coneFrom }}
          whileInView={{ opacity: 1, width: size.coneTo }}
          transition={coneTransition}
          viewport={coneViewport}
          position="absolute"
          inset="auto"
          right="50%"
          h="14rem"
          overflow="visible"
          w={size.coneTo}
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
            w={size.coneMask}
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
          initial={{ opacity: 0.5, width: size.coneFrom }}
          whileInView={{ opacity: 1, width: size.coneTo }}
          transition={coneTransition}
          viewport={coneViewport}
          position="absolute"
          inset="auto"
          left="50%"
          h="14rem"
          w={size.coneTo}
          color="white"
          backgroundImage={`conic-gradient(from 290deg at center top, transparent, transparent, ${CYAN_500})`}
        >
          <Box
            position="absolute"
            w={size.coneMask}
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
          w={size.wideGlowW}
          transform="translateY(-50%)"
          borderRadius="full"
          bg={CYAN_500}
          opacity={0.5}
          filter="blur(64px)"
        />
        {/* Tight cyan glow (animates wider) */}
        <MotionBox
          initial={{ width: size.glowFrom }}
          whileInView={{ width: size.glowTo }}
          transition={coneTransition}
          viewport={coneViewport}
          position="absolute"
          inset="auto"
          zIndex={30}
          h="9rem"
          w={size.glowTo}
          transform="translateY(-6rem)"
          borderRadius="full"
          bg={CYAN_400}
          filter="blur(40px)"
        />
        {/* The bright filament line */}
        <MotionBox
          initial={{ width: size.barFrom }}
          whileInView={{ width: size.barTo }}
          transition={coneTransition}
          viewport={coneViewport}
          position="absolute"
          inset="auto"
          zIndex={50}
          h="0.125rem"
          w={size.barTo}
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
        transform={{ base: "translateY(-4rem)", md: "translateY(-20rem)" }}
      >
        {children}
      </Box>
    </Box>
  );
}
