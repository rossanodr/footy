import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Landing from '../pages/Landing';
import Landing2 from '../pages/Lading2';
import PlayerPage from '../pages/PlayerPage';
import TeamTabs from './TeamTabs';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import AttributesOverview from '../components/AttributesCharts';
import TeamPage from '../pages/TeamPage';
import TeamScouters from '../pages/TeamScoutersPage';

const { Navigator, Screen } = createStackNavigator();



function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='Landing' component={Landing} />
                <Screen name='Landing2' component={Landing2} />
                <Screen name='PlayerPage' component={PlayerPage} />
                <Screen name='SignUp' component={SignUp} />
                <Screen name='SignIn' component={SignIn} />
                <Screen name='Attributes' component={AttributesOverview} />
                <Screen name='TeamPage' component={TeamPage} />
                <Screen name='TeamScouters' component={TeamScouters} />
                
                <Screen name='TeamTabs' component={TeamTabs} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;