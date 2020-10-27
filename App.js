import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import React from 'react'
import {Provider} from "./src/context/BlogContext";

const navigator = createStackNavigator({
    Index:{
        screen: IndexScreen,
        navigationOptions: {title: 'Blogs'},
    }
}, {
    initialRouteName: 'Index'
})

const App = createAppContainer(navigator)

export default () => {
    return (
        <Provider>
        <App />
    </Provider>
    );
};