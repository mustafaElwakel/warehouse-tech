import { Center, Spinner } from "@chakra-ui/react";
import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <Center w="full" h="full">
          <Spinner color="brand.400" thickness="3px" size="lg" />
        </Center>
      }
    >
      <Spline scene={scene} className={className} style={{ width: "100%", height: "100%" }} />
    </Suspense>
  );
}
