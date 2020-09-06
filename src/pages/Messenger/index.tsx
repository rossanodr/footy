import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import MessengerItem from '../../components/MessengerItem';

function Messenger() {

    const [isSearchBarisVisible, setIsSearchBarisVisible] = useState(false);
    function handleToggleSearchBarisVisible() {
        setIsSearchBarisVisible(!isSearchBarisVisible);
    }
    return (
        <View style={styles.container}>
            <PageHeader title='Messenger' headerRight={(
                <BorderlessButton onPress={handleToggleSearchBarisVisible}>
                    <Feather name='search' size={20} color='#FFF' />
                </BorderlessButton>
            )} 
            >
            
            {isSearchBarisVisible && (
              <View style={styles.searchForm}>

                <SearchBar 
                    placeholder="Type Here..."
                    platform={"android"}
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={styles.inputContainerStyle}           
                /> 
              </View>  
            )}
            </PageHeader>

            <ScrollView
                style={styles.playerList}
                
            >
                <View >
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />

                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                    <MessengerItem />
                </View>
               
            </ScrollView>
        </View>
            
    );
}

export default Messenger;