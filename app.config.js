export default {
  expo: {
    name: "template-app",
    slug: "template-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "template-app",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.onesignal.example",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      [
        "onesignal-expo-plugin",
        {
          mode: "development",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      EXPO_PUBLIC_ONE_SIGNAL_IOS: process.env.EXPO_PUBLIC_ONE_SIGNAL_IOS,
      EXPO_PUBLIC_ONE_SIGNAL_ANDROID: process.env.EXPO_PUBLIC_ONE_SIGNAL_ANDROID,
    },
  },
};
