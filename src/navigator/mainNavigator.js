import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen88852Navigator from '../features/BlankScreen88852/navigator';
import BlankScreen78241Navigator from '../features/BlankScreen78241/navigator';
import BlankScreen88095Navigator from '../features/BlankScreen88095/navigator';
import BlankScreen68055Navigator from '../features/BlankScreen68055/navigator';
import BlankScreen57867Navigator from '../features/BlankScreen57867/navigator';
import BlankScreen47863Navigator from '../features/BlankScreen47863/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen88852: { screen: BlankScreen88852Navigator },
BlankScreen78241: { screen: BlankScreen78241Navigator },
BlankScreen88095: { screen: BlankScreen88095Navigator },
BlankScreen68055: { screen: BlankScreen68055Navigator },
BlankScreen57867: { screen: BlankScreen57867Navigator },
BlankScreen47863: { screen: BlankScreen47863Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
