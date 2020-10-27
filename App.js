import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import React from 'react'
import {Provider} from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";

const navigator = createStackNavigator({
    Index: {
        screen: IndexScreen,
        navigationOptions: {title: 'Blogs'},
    },
    ShowScreen: {
        screen: ShowScreen,
        navigationOptions: {title: 'Show Blog'}
    }
}, {
    initialRouteName: 'Index'
})

const App = createAppContainer(navigator)

export default () => {
    return (
        <Provider>
            <App/>
        </Provider>
    );
};