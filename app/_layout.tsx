import { ForegroundNotification } from "@/components/ForegroundNotification";
import { Stack } from "expo-router";
import { Fragment, useEffect, useState } from "react";
import { Platform } from "react-native";
import { OneSignal, NotificationWillDisplayEvent, OSNotification } from "react-native-onesignal";

const oneSignalAppId =
  Platform.OS === "ios"
    ? process.env.EXPO_PUBLIC_ONE_SIGNAL_IOS
    : process.env.EXPO_PUBLIC_ONE_SIGNAL_ANDROID;

OneSignal.initialize(oneSignalAppId || "");

export default function RootLayout() {
  const [notification, setNotification] = useState<OSNotification>();

  useEffect(() => {
    const handleNotification = (event: NotificationWillDisplayEvent): void => {
      event.preventDefault();
      const response = event.getNotification();
      console.log(response);
    };

    OneSignal.Notifications.addEventListener("foregroundWillDisplay", handleNotification);

    return () =>
      OneSignal.Notifications.removeEventListener("foregroundWillDisplay", handleNotification);
  }, []);

  return (
    <Fragment>
      <Stack />
      {notification?.title && (
        <ForegroundNotification data={notification} onClose={() => setNotification(undefined)} />
      )}
    </Fragment>
  );
}
