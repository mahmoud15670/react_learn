import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/src/components/Header";
import { database } from "@/src/firebase/firebaseConfig";
import { onValue, push, ref, set } from "firebase/database";
import styles from "./styels";
import LightCard from "@/src/components/cards/LightCard";

interface Light {
  id: string;
  name: string;
  status: string;
}

export default function HomeScreen() {
  const [lights, setLights] = useState<Light[]>([]);
  const [lightName, setLightName] = useState("");

  const lightRef = ref(database, "lights/");

  useEffect(() => {
    const unsubscribe = onValue(lightRef, (snapshot) => {
      if (snapshot.exists()) {
        const lightsData = Object.entries(snapshot.val()).map(
          ([key, value]: any) => ({
            id: key,
            name: value.name,
            status: value.status,
          })
        );

        setLights(lightsData);
      } else {
        setLights([]);
      }
    });

    return unsubscribe;
  }, []);

  const addLight = async () => {
    if (!lightName.trim()) return;

    const newLightRef = push(lightRef);
    await set(newLightRef, {
      name: lightName,
      status: "off",
    });

    setLightName("");
  };

  return (
    <View>
      <Header />

      <FlatList
        data={lights}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LightCard light={item} />}
      />

      <TextInput
        placeholder="Enter light name"
        value={lightName}
        style={styles.input}
        onChangeText={setLightName}
      />

      <TouchableOpacity onPress={addLight} style={styles.btn}>
        <Text style={styles.btnText}>Add Light</Text>
      </TouchableOpacity>
    </View>
  );
}
