import { Tuple } from "@mantine/core";

type CustomColor1 = "Marigold" | "Amber";

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<CustomColor1, Tuple<string, 10>>;
    primaryColor;
    secondaryColor;
    primaryShade;
  }
}
