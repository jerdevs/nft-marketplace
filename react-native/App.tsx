// Think of react navigation as react router
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home/Home";
import Details from "./screens/Details/Details";
import { NFT } from "./constants/data";
import AppProvider from "./providers/AppProvider";
import Login from "./screens/Login/Login";

const Stack = createStackNavigator();

interface AppTheme extends Theme {
  color: {
    background: string;
  };
}

const theme: AppTheme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export type RootStackParamList = {
  Login: {};
  Home: {};
  Details: {
    data: NFT;
  };
};

const App: React.FC = (): React.ReactElement => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    StaatlichesRegular: require("./assets/fonts/Staatliches-Regular.ttf"),
  });

  return (
    <AppProvider>
      {loaded ? (
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Login"
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <></>
      )}
    </AppProvider>
  );
};

export default App;
