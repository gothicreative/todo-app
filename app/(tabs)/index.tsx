import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import { useTheme } from '../../hooks/useTheme';
import { useMutation, useQuery } from "convex/react";
import { api } from '../../convex/_generated/api'; // Adjust the path as needed

export default function Index() {
    const { theme, toggleTheme, colors } = useTheme();
    const todos = useQuery(api.todos.getTodos);
    const addTodos = useMutation(api.todos.addTodo);

    const backgroundColor = theme === "dark" ? "#18181b" : "#fff";


    console.log(todos);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:backgroundColor }} >
      <Button title="Toggle Theme" onPress={toggleTheme} color={colors.primary} />
      <Button title="todos" onPress={()=> addTodos({ text: "jump on the table"})} color={colors.primary} />

      <Text style={{  color: theme === "dark" ? "#fff" : "#000" , marginTop: 16 }}>
        {todos ? `Todos: ${todos.length}` : "Loading todos..."}
      </Text>
    </View> 
  );
}
  
