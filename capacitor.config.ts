import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'catapi',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      showSpinner: true,
      androidSpinnerStyle: 'large',
      splashFullScreen: true,
      splashImmersive: true
    }
  }
};

export default config;
