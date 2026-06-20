import { type BoxProps, chakra, shouldForwardProp } from "@chakra-ui/react";
import { type HTMLMotionProps, isValidMotionProp, motion } from "framer-motion";

/**
 * Props for a Chakra Box that also accepts framer-motion props. We strip the
 * keys that collide between the two (notably `transition`, which Chakra types
 * as a CSS string and motion types as an animation config) from `BoxProps` and
 * let the motion versions win.
 */
export type MotionBoxProps = Omit<BoxProps, keyof HTMLMotionProps<"div">> &
  HTMLMotionProps<"div">;

/**
 * A Chakra `Box` that also accepts framer-motion props. Following Chakra's
 * official recipe: forward a prop if it's a valid motion prop OR a valid
 * Chakra/DOM prop. This lets the lamp's animated cones use both `bg`/`position`
 * style props and `initial`/`whileInView`/`transition` motion props.
 */
export const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
}) as React.FC<MotionBoxProps>;
