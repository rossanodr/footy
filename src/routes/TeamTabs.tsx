import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import PlayerList from '../pages/PlayerList';
import Favorites from '../pages/Favorites';

import Messenger from '../pages/Messenger';
import AccountPage from '../pages/AccountPage';

const { Navigator, Screen } = createBottomTabNavigator();

function TeamTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                
                tabStyle: {
                   
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },

                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 8,
                },

                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d',
            }}
        >
            <Screen 
                name='PlayerList' 
                component={PlayerList}
                options={{
                    tabBarLabel: 'Scout!',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name='ios-search' size={size} color={color} />
                        );
                    }
                }} 
            />
            <Screen 
                name='Messenger' 
                component={Messenger}
                options={{
                    tabBarLabel: 'Messenger',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name='ios-chatbubbles' size={size} color={color} />
                        );
                    }
                }} 
            /> 
            <Screen 
                name='Favorites' 
                component={Favorites}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name='ios-heart' size={size} color={color} />
                        );
                    }
                }} 
            /> 
            <Screen 
                name='AccountPage' 
                component={AccountPage}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name='ios-contact' size={size} color={color} />
                        );
                    }
                }} 
            /> 
            
        </Navigator>
    );
}

export default TeamTabs;