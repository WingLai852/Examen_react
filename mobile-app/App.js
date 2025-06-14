import { StatusBar } from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails.js";
import BlogDetailScreen from "./screens/BlogDetail";
import ProfileScreen from "./screens/Profile.js";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={ProductDetails} />
        <Stack.Screen name="BlogDetail" component={BlogDetailScreen} />
        <Stack.Screen name="Profiel" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


