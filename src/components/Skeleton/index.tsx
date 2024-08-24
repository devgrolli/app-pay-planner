import { Skeletons } from "./styles";

interface SkeletonProps {
  color?: string;
  height?: number;
  bottom?: number;
}

export function Skeleton({ color, height, bottom }: SkeletonProps) {
  return <Skeletons color={color} height={height} bottom={bottom} />;
}
