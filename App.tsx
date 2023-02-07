import { StatusBar } from "expo-status-bar";
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconMaterial from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

export default function App() {
  const [iconOne] = useState(new Animated.Value(40));
  const [iconTwo] = useState(new Animated.Value(40));
  const [iconThree] = useState(new Animated.Value(40));

  let animation = new Animated.Value(0);

  const [pop, setPop] = useState(false);

  const popIn = () => {
    setPop(true);
    Animated.timing(iconOne, {
      toValue: 100,
      duration: 400,
      useNativeDriver: false,
    }).start();
    Animated.timing(iconTwo, {
      toValue: 150,
      duration: 400,
      useNativeDriver: false,
    }).start();
    Animated.timing(iconThree, {
      toValue: 200,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  const popOut = () => {
    setPop(false);
    Animated.timing(iconOne, {
      toValue: 40,
      duration: 400,
      useNativeDriver: false,
    }).start();
    Animated.timing(iconTwo, {
      toValue: 40,
      duration: 400,
      useNativeDriver: false,
    }).start();
    Animated.timing(iconThree, {
      toValue: 40,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  Animated.timing(animation, {
    toValue: pop === true ? 360 : 0,
    duration: 400,
    useNativeDriver: false,
  }).start();

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 360],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Animated.View
        style={[styles.containerButtonSecondary, { bottom: iconThree }]}
      >
        <Text style={[styles.title, { opacity: pop === true ? 1 : 0 }]}>
          Espacios
        </Text>
        <TouchableOpacity activeOpacity={1}>
          <Icon name="mic-outline" size={26} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={[styles.containerButtonSecondary, { bottom: iconTwo }]}
      >
        <Text style={[styles.title, { opacity: pop === true ? 1 : 0 }]}>
          Fotos
        </Text>
        <TouchableOpacity activeOpacity={1}>
          <Icon name="image-outline" size={20} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={[styles.containerButtonSecondary, { bottom: iconOne }]}
      >
        <Text style={[styles.title, { opacity: pop === true ? 1 : 0 }]}>
          GIF
        </Text>
        <TouchableOpacity activeOpacity={1}>
          <IconMaterial name="gif" size={34} />
        </TouchableOpacity>
      </Animated.View>

      <Text style={[styles.titleTweet, { opacity: pop === true ? 1 : 0 }]}>
        Tweet
      </Text>
      <Animated.View style={[styles.containerIcon, rotation]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            pop === false ? popIn() : popOut();
          }}
        >
          {pop === true ? (
            <MaterialCommunityIcons name="feather" size={24} color="#fff" />
          ) : (
            <Icon name="add-outline" size={32} color="#fff" />
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
  },
  containerIcon: {
    position: "absolute",
    bottom: 40,
    right: 30,
    backgroundColor: "rgb(29, 155, 240)",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  containerButtonSecondary: {
    position: "absolute",
    bottom: 40,
    right: 39,
    backgroundColor: "#fff",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    position: "absolute",
    right: 50,
    color: "#fff",
    width: 100,
    textAlign: "right",
    fontWeight: "bold",
    letterSpacing: 0.4,
    paddingRight: 10,
    fontSize: 16,
  },
  titleTweet: {
    position: "absolute",
    right: 90,
    bottom: 60,
    color: "#fff",
    width: 100,
    textAlign: "right",
    fontWeight: "bold",
    letterSpacing: 0.4,
    paddingRight: 10,
    fontSize: 16,
  },
});
