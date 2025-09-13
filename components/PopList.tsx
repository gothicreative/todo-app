import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { createSettingsStyles } from "@/assets/styles/setting.styles";

interface PopListProps {
  onClose: () => void;
}

const PopList = ({ onClose }: PopListProps) => {

const { colors } = useTheme();

  const homeStyles = createHomeStyles(colors);
    const settingsStyles = createSettingsStyles(colors); // Reusing home styles for simplicity

  const todos = useQuery(api.todos.getTodos);
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const updateTodo = useMutation(api.todos.updateTodo);

  return (
     <LinearGradient colors={colors.gradients.surface} >
      {/* Close button */}
      <View style={settingsStyles.statsContainer}>
              <TouchableOpacity
        onPress={onClose}
        style={{ position: "absolute", top: 25, right: 25 }}
      >
        <Ionicons name="close" size={28} color={colors.textMuted} />
      </TouchableOpacity>
        <Text style={settingsStyles.sectionTitle}>Progress Stats</Text>


    
        <ScrollView contentContainerStyle={{ flexGrow: 1,  paddingTop: 20 }}>
          {todos && todos.length > 0 ? (
            todos.map((todo) => (
              <TouchableOpacity
                key={todo._id}
                activeOpacity={0.7}
                style={[
                  settingsStyles.statCard,
                  { flexDirection: "row", alignItems: "center", marginBottom: 10 },
                ]}
                onPress={() => toggleTodo({ id: todo._id })} // toggle complete
                onLongPress={() => deleteTodo({ id: todo._id })} // delete on long press
              >
                <Ionicons
                  name={todo.isCompleted ? "checkmark-circle" : "ellipse-outline"}
                  size={24}
                  color={todo.isCompleted ? colors.success : colors.textMuted}
                  style={{ marginRight: 12 }}
                />
                <Text
                  style={{
                    color: colors.text,
                    textDecorationLine: todo.isCompleted ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Ionicons name="clipboard-outline" size={40} color={colors.textMuted} />
              <Text style={{ color: colors.textMuted, marginTop: 10 }}>
                No todos yet!
              </Text>
            </View>
          )}
        </ScrollView>
        
        
        

        </View>

      </LinearGradient>

      
    
  );
};
export default PopList;