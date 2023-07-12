import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import QrScan from '../screens/qrScan';
import ColorDetect from '../screens/colorDetect';

// screens에서 가장 먼저 선언된 screen이 default screen이다.
const screens = {
    Home: {
        screen: Home
    },
    QrScan: {
        screen: QrScan
    },
    ColorDetect: {
        screen: ColorDetect
    }
}

// Home Page를 제일 처음 stack으로 하고, 누르는 페이지들이 Stack으로 그 위에 쌓이는 형태
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);