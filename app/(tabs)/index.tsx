import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import { useTheme } from '../../hooks/useTheme';

export default function Index() {
    const { theme, toggleTheme, colors } = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }} >
      <Button title="Toggle Theme" onPress={toggleTheme} color={colors.primary} />
    </View> 
  );
}
  
