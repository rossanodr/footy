import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PlayerItem from '../../components/PlayerItem';
import PageHeader from '../../components/PageHeader';

import styles from './styles';


function Favorites() {
    
    return (
        <View style={styles.container}>
            <PageHeader title='Favorites'/>

            <ScrollView
                style={styles.playerList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <PlayerItem />
                <PlayerItem />
                <PlayerItem />
                <PlayerItem />
                <PlayerItem />
                <PlayerItem />
                <PlayerItem />
            </ScrollView>
            
        </View>
            
    );
}

export default Favorites;