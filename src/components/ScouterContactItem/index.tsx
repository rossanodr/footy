import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

function ScoutersContactItem() {
    return (
            <RectButton style={styles.infoBox}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.infoText}>Rossano Dala Rosa</Text>
                    <Image style={styles.flag} source={{uri: 'https://www.sofascore.com/bundles/sofascoreweb/images/lang/br.png'}} />
                </View>
                <Image style={styles.photo} source={{uri: 'https://github.com/rossanodr.png'}} />
            </RectButton>
                    
                   
    )

}

export default ScoutersContactItem;