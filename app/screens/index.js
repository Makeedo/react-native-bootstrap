import { Navigation } from 'react-native-navigation';
import Home from "./Home";

export default function registerScreens(store, Provider) {
    Navigation.registerComponent('screen.Home', () => Home, store, Provider);
}