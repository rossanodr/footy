import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import apiFake from '../../services/apiFake';
import styles from './styles';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        apiFake.get('/connections').then(response => {
            const { total } = response.data;
            setTotalConnections(total);
        })
    }, []);

    const navigation = useNavigation();

    function handleNavigateToSignUpPage() {
        navigation.navigate('SignUp');
    }

    function handleNavigateToSignIn() {
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={landingImg} />

            <Text style={styles.title}>
                Welcome, {'\n'}
                <Text style={styles.titleBold}>Let's do this.</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    onPress={handleNavigateToSignIn}
                    style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Start scouting!</Text>
                </RectButton>

                <RectButton 
                    onPress={handleNavigateToSignUpPage} 
                    style={[styles.button, styles.buttonSecondary]}
                    >
                        <Image source={giveClassesIcon} />
                        <Text style={styles.buttonText}>Sign up</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                More than {totalConnections} connections created. {' '} 
                <Image source={heartIcon} />
            </Text>
        </View>

    );
}

export default Landing;