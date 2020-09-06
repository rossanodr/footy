import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PlayerItem from '../../components/PlayerItem';
import PageHeader from '../../components/PageHeader';

import styles from './styles';
import PlayerFullProfile from '../../components/PlayerFullProfile';



function PlayerPage() {
    

    return (
        <View style={styles.container}>
            <PageHeader title='Scout now!'/>

            <ScrollView
                style={styles.playerList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <PlayerFullProfile />
            </ScrollView>
        </View>
            
    );
}

export default PlayerPage;