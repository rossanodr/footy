import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeamItem from '../../components/TeamItem';

import styles from './styles';


function TeamPage() {
    

    return (
        <View style={styles.container}>
            <PageHeader/>

            <ScrollView
                style={styles.playerList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TeamItem />
            </ScrollView>
        </View>
            
    );
}

export default TeamPage;