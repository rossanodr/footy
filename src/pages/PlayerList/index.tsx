import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';


import PageHeader from '../../components/PageHeader';
import PlayerItem from '../../components/PlayerItem';

import styles from './styles';

function PlayerList() {

    const [ searchName, setSearchName] = useState('');
    
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFilterisVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader title='Scout now!' headerRight={(
                <BorderlessButton onPress={handleToggleFilterisVisible}>
                    <Feather name='filter' size={20} color='#FFF' />
                </BorderlessButton>
            )} 
            >
                {isFiltersVisible && (
                   <View style={styles.searchForm}>

                   <SearchBar 
                   placeholder="Type Here..."
                   platform={"android"}
                   containerStyle={styles.containerStyle}
                   
                   
                   /> 
                   <RectButton style={styles.submitButton}>
                       <Text style={styles.submitButtonText}>Filter!</Text>
                   </RectButton>
                   </View>
                   
                )}
            </PageHeader>

            <ScrollView
                style={styles.playerList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <PlayerItem />
            </ScrollView>
        </View>
    );
}

export default PlayerList;