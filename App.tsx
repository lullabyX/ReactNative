import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState<{ text: string; id: string }[]>([]);

  const handleAddGoal = (text: string) => {
    setGoals((prev) => [...prev, { text, id: Math.random().toString() }]);
  };

  const handleDeleteGoal = (id: string) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <GoalInput onAddGoal={handleAddGoal} />
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});
