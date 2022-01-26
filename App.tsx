import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

export default function App() {
  const singleTap = Gesture.Tap()
    .numberOfTaps(1)
    .maxDuration(250)
    .onEnd((_event, success) => {
      if (success) {
        console.log("single tap!");
      }
    });
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .maxDuration(250)
    .onEnd((_event, success) => {
      if (success) {
        console.log("double tap!");
      }
    });
  const tripleTap = Gesture.Tap()
    .numberOfTaps(3)
    .maxDuration(250)
    .onEnd((_event, success) => {
      if (success) {
        console.log("trip tap!");
      }
    });

  const taps = Gesture.Exclusive(tripleTap, doubleTap, singleTap);
  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={taps}>
        <Animated.View
          style={{ height: 50, width: 50, backgroundColor: "purple" }}
        ></Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
