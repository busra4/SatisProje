import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import App from '../App.js';
import HesapOnay from './HesapOnay.js';
import UyeOl from './UyeOl.js';
import ProfilSec from './ProfilSec.js';
import Deneme from '../Deneme.js';

const AppNavigator = createStackNavigator(
    {
        App:{screen:App},
        HesapOnay:{screen: HesapOnay},
        UyeOl:{screen: UyeOl},
        ProfilSec:{screen: ProfilSec},
        Deneme:{screen: Deneme},
    },
    {
        initialRoutedName: 'App',
        headerMode:'none'
    }
);

export default createAppContainer(AppNavigator);