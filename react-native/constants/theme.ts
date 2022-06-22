export interface Colors {
  primary: string;
  secondary: string;
  white: string;
  gray: string;
  red: string;
  lightGray: string;
  lime: string;
  green: string;
}

export interface Sizes {
  base: number;
  small: number;
  font: number;
  medium: number;
  large: number;
  extraLarge: number;
}

export interface Fonts {
  bold: string;
  semiBold: string;
  medium: string;
  regular: string;
  light: string;
  staatliches: string;
}

export interface Shadow {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowRadius: number;
  elevation: number;
}

export interface Shadows {
  light: Shadow;
  medium: Shadow;
  dark: Shadow;
}

export const COLORS: Colors = {
  primary: "#001F2D",
  secondary: "#4D626C",
  white: "#FFF",
  gray: "#74858C",
  red: "#FF3333",
  lightGray: "#D3D3D3",
  lime: "#CCFF00",
  green: "#36AE7C",
};

export const SIZES: Sizes = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS: Fonts = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
  staatliches: "StaatlichesRegular",
};

export enum ShadowType {
  LIGHT = "light",
  MEDIUM = "medium",
  DARK = "dark",
}

export const SHADOWS: Shadows = {
  [ShadowType.LIGHT]: {
    shadowColor: "rgba(45, 52, 55, 0.22)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2.22,
    elevation: 3,
  },
  [ShadowType.MEDIUM]: {
    shadowColor: "rgba(45, 52, 55, 0.29)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4.65,
    elevation: 7,
  },
  [ShadowType.DARK]: {
    shadowColor: "rgba(45, 52, 55, 0.41)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 9.11,
    elevation: 14,
  },
};
