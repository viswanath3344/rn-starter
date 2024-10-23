import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MyComponentScreen from "./src/screens/MyComponent";
import FlatListScreen from "./src/screens/ListBootcamp";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import CounterScreenWithReducer from "./src/screens/CounterScreenWithReducer";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreenWithReducer from "./src/screens/SquareScreenWithReducer";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    MyComponent: MyComponentScreen, 
    FlatListComponent: FlatListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    CounterWithReducer: CounterScreenWithReducer,
    Color: ColorScreen, 
    Square: SquareScreen,
    SquareWithReducer: SquareScreenWithReducer,
    Text: TextScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
