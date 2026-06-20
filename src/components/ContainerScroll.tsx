import { Box } from "@chakra-ui/react";
import { useScroll, useTransform, motion } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";

/**
 * A 3D "scroll reveal" container ported from the Aceternity/Tailwind reference
 * to Chakra + framer-motion. As the section scrolls through the viewport the
 * card rotates flat (rotateX 20°→0°), scales, and the title drifts up — making
 * the screenshot feel like it's tilting up to meet the reader.
 *
 * The animated transforms live on raw `motion.div` wrappers (so framer-motion's
 * MotionValues bind cleanly); all visual chrome is Chakra `Box`.
 */
export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: ReactNode;
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions: [number, number] = isMobile ? [0.7, 0.9] : [1.05, 1];

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <Box
      ref={containerRef}
      h={{ base: "52rem", md: "70rem" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      px={{ base: 2, md: 20 }}
      py={{ base: 2, md: 8 }}
    >
      <Box
        w="full"
        position="relative"
        pt={{ base: 4, md: 12 }}
        pb={{ base: 10, md: 40 }}
        sx={{ perspective: "1000px" }}
      >
        {/* Title */}
        <motion.div style={{ y: translate }}>
          <Box maxW="5xl" mx="auto" textAlign="center">
            {titleComponent}
          </Box>
        </motion.div>

        {/* Card */}
        <motion.div
          style={{
            rotateX: rotate,
            scale,
          }}
        >
          <Box
            maxW="5xl"
            mt="-3rem"
            mx="auto"
            h={{ base: "30rem", md: "40rem" }}
            w="full"
            border="4px solid"
            borderColor="#3a3f4b"
            p={{ base: 2, md: 6 }}
            bg="#0b1120"
            borderRadius="30px"
          >
            <Box
              h="full"
              w="full"
              overflow="hidden"
              borderRadius="2xl"
              bg="slate.950"
              p={{ base: 0, md: 1 }}
            >
              {children}
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
