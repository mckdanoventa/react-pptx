import { InternalPresentation } from "./normalizer";

export const POINTS_TO_INCHES = 1 / 72;

export const layoutToInches = (
  layout: InternalPresentation["layout"]
): [number, number] => {
  switch (layout) {
    case "16x10":
      return [10, 6.25];
    case "16x9":
      return [10, 5.625];
    case "4x3":
      return [10, 7.5];
    case "wide":
      return [13.3, 7.5];
  }
};
