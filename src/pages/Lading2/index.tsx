import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function Landing2() {
    const navigation = useNavigation();

    function handleNavigateSignUp() {
        navigation.navigate('SignUp');
    }

    function handleNavigateSignIn() {
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={giveClassesBgImage} style={styles.content} resizeMode='contain'>
                <Text style={styles.title}>Do you want to join us?</Text>
                <Text style={styles.description}>
                After each match, we provide raw data, advanced statistics, rankings, infographics and many other outputs.
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigateSignUp} style={styles.okButton}>
                <Text style={styles.okButtonText}>Sign Up!</Text>
            </RectButton>
            <RectButton onPress={handleNavigateSignIn} style={styles.okButton}>
                <Text style={styles.okButtonText}>Sign In!</Text>
            </RectButton>
        </View>
    );
}

export default Landing2;