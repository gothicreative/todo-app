import { Button, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useMutation, useQuery } from "convex/react";
import { api } from '../../convex/_generated/api'; // Adjust the path as needed
import  useTheme from '@/hooks/useTheme';
import { createHomeStyles } from '../../assets/styles/home.styles';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import  Header  from "../../components/Header";
import TodoInput from "@/components/TodoInput";
export default function Index() {
  const { colors, toggleDarkMode } = useTheme();
    const todos = useQuery(api.todos.getTodos);

    const addTodos = useMutation(api.todos.addTodo);

    const homeStyles = createHomeStyles(colors);



    // console.log(todos);

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
    <SafeAreaView style={homeStyles.safeArea} >
        <Header />

        <TodoInput />
    </SafeAreaView> 
    </LinearGradient>
  );
}

  
