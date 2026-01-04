import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { use, useEffect } from "react";
import styles from "./stayls";
import { ref, remove, update } from "firebase/database";
import { database } from "@/src/firebase/firebaseConfig";
import Icon from "react-native-vector-icons/Ionicons";

interface Light {
  id: string;
  name: string;
  status: string;
}
export default function LightCard(light: Light | any) {
  const lightData = light["light"];
  useEffect(() => {
    return () => {};
  }, []);

  const updateLight = async () => {
    if (lightData.status === "off") {
      await update(ref(database, `lights/${lightData.id}`), {
        status: "on",
      });
      return;
    }
    await update(ref(database, `lights/${lightData.id}`), {
      status: "off",
    });
  };
  const deleteLight = async () => {
    await remove(ref(database, `lights/${lightData.id}`));
  };
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Pressable onPress={deleteLight}>
          <Icon name="trash" size={20} color="#555555ff" />
        </Pressable>
        <Text style={styles.title}>{lightData.name}</Text>
      </View>
      <TouchableOpacity style={styles.statusButton} onPress={updateLight}>
        <Text style={styles.statusButtonText}>{lightData.status}</Text>
      </TouchableOpacity>
    </View>
  );
}
