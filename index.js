/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
{/* <script src="http://localhost:8097"></script> */}
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
