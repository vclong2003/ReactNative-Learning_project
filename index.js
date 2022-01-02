/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/DesignSystem/assets';
import './src/DesignSystem/colors';
import './src/DesignSystem/space';
import './src/DesignSystem/typo';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => App);
