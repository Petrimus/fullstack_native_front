import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    barBackColor: '#24292e'    
  },
  fontSizes: {
    body: 14,
    subheading: 24,
  },
  fonts: {
    main: Platform.select({
      android: 'sans-serif',
      ios: 'arial',
      default: 'system'
    })    
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;