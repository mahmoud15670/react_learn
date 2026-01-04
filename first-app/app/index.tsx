import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "@/src/screens/homescreen/HomeScreen";

export default function Index() {
  return (
    <View>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </View>
  );
}
