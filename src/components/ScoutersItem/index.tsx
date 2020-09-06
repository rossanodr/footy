import React from 'react';
import { View, Image, Text } from 'react-native';
import {  BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import ScoutersContactItem from '../ScouterContactItem';

import styles from './styles';

function ScoutersItem() {
    const navigation = useNavigation();

    function handleNavigateToTeamPage() {
        navigation.navigate('TeamPage');
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <BorderlessButton onPress={handleNavigateToTeamPage} style={styles.photoContainer}>
                    <Text style={styles.title}>Palmeiras</Text>
                    <Image style={styles.teamLogo} source={{uri: 'https://www.sofascore.com/images/team-logo/football_1963.png'}} />
                </BorderlessButton>
                <View>
                    <View style={styles.infoBox}>
                        <Text style={styles.title}>Scouters</Text>
                        
                    </View>
                </View>
                <ScrollView>
                    <ScoutersContactItem />
                    <ScoutersContactItem />
                    <ScoutersContactItem />
                    <ScoutersContactItem />
                    <ScoutersContactItem />
                    <ScoutersContactItem />
                    <ScoutersContactItem />
                    <ScoutersContactItem />
                    <ScoutersContactItem />
                    

                </ScrollView>
                
            
            </View>
        </View>

    );
}
export default ScoutersItem