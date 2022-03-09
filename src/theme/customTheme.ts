const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
};
const customTheme = {
  colors: {
    // Add new color
    custom: {
      text: '#fff',
      primary: '#560CCE',
      secondary: '#414757',
      error: '#d97706',
      background: '#19173e',
      blue1: '#99cfef',
      hight: '#d55858',
      medium: '#3395c6',
      low: '#99ef9a',
    },
  },
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      200: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
      700: {
        normal: 'Roboto-Bold',
      },
      800: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
      900: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
    h1: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.h4, lineHeight: 20},
    body1: {
      fontFamily: 'Roboto-Regular',
      fontSize: SIZES.body1,
      lineHeight: 36,
    },
    body2: {
      fontFamily: 'Roboto-Regular',
      fontSize: SIZES.body2,
      lineHeight: 30,
    },
    body3: {
      fontFamily: 'Roboto-Regular',
      fontSize: SIZES.body3,
      lineHeight: 22,
    },
    body4: {
      fontFamily: 'Roboto-Regular',
      fontSize: SIZES.body4,
      lineHeight: 22,
    },
    body5: {
      fontFamily: 'Roboto-Regular',
      fontSize: SIZES.body5,
      lineHeight: 22,
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
};
export default customTheme;
