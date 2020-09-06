import React from 'react';
import { View, Image, Text } from 'react-native';


import PageHeader from '../../components/PageHeader';


import { ScrollView } from 'react-native-gesture-handler';
import ScoutersItem from '../../components/ScoutersItem';
import styles from './styles';


function TeamScouters() {
     return (
        <View style={styles.container}>
         <PageHeader title='Scouters!'/>
         <ScrollView
                style={styles.playerList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                    <ScoutersItem />
            </ScrollView>
        </View>
            
    );
     }

export default TeamScouters