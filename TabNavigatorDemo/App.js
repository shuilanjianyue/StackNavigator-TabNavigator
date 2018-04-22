/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import  TabBarItem from './TabBarItem';
import ProductScreen from './ProductScreen';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const TabBars = TabNavigator({

    Home:
        {
          screen: HomeScreen,
            navigationOptions:({navigation}) => ({

                tabBarLabel:'首页',

                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./images/pfb_tabbar_homepage_2x.png')}
                        selectedImage={require('./images/pfb_tabbar_homepage_selected_2x.png')}
                    />
                )
            }),
        },

    Settings:
        {
          screen: SettingsScreen,
            navigationOptions:({navigation}) => ({

                    tabBarLabel:'设置',
                    tabBarIcon:({focused,tintColor}) => (
                        <TabBarItem
                            tintColor={tintColor}
                            focused={focused}
                            normalImage={require('./images/pfb_tabbar_mine_2x.png')}
                            selectedImage={require('./images/pfb_tabbar_mine_selected_2x.png')}
                        />
                    )
                }

            ),
        },
},
    {
        tabBarCompact:TabBarBottom,
        tabBarVisible:false,
        tabBarPosition:'bottom',
        swipeEnabled:false,
        animationEnabled:false,
        lazy:true,
        tabBarOptions:{
            activeTintColor:'#06c1ae',
            inactiveTintColor:'#979797',
            style:{backgroundColor:'#ffffff',},
            labelStyle: {
                fontSize: 10, // 文字大小
            },
        }
    }

);


const Navigator = StackNavigator(

    {
        Tab:{screen:TabBars},
        Product:{screen:ProductScreen}
    },

    {
        navigationOptions:{
            headerBackTitle:null,
            headerTintColor:'red',
            showIcon:true,
            swipeEnabled:false,
            animationEnabled:false,

        },

        mode:'card',

    });

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <Navigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
