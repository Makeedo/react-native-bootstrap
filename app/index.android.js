import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import configureStore from "./store";
import registerScreens from "./screens";

const store = configureStore();
registerScreens(store, Provider);

// start application
Navigation.startSingleScreenApp({
    screen: {
        screen: 'screen.Home',
    }
});
