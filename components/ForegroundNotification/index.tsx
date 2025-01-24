import { HStack, Text, IconButton, CloseIcon, Icon, Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { OSNotification } from "react-native-onesignal";

type ForegroundNotificationProps = {
  data: OSNotification;
  onClose: () => void;
};

type AditionalDataProps = {
  route?: "details";
  product_id?: string;
};

export function ForegroundNotification({ data, onClose }: ForegroundNotificationProps) {
  function handleOnPress() {
    const { route, product_id } = data.additionalData as AditionalDataProps;
    if (route === "details" && product_id) {
      router.push("/");
      onClose();
    }
  }

  return (
    <Pressable
      w="full"
      p={4}
      pt={12}
      bgColor="gray.200"
      position="absolute"
      top={0}
      onPress={handleOnPress}
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Icon as={Ionicons} name="notifications-outline" size={5} color="black" mr={2} />
        <Text fontSize="md" color="black" flex={1}>
          {data.title}
        </Text>
        <IconButton
          variant="unstyled"
          _focus={{ borderWidth: 0 }}
          icon={<CloseIcon size="3" />}
          _icon={{ color: "coolGray.600" }}
          color="black"
          onPress={onClose}
        />
      </HStack>
    </Pressable>
  );
}
