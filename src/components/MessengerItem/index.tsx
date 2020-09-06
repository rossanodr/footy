import React from 'react';
import { View, Image, Text } from 'react-native';


import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';


function MessengerItem() {
    return (
                
                   
                <RectButton style={styles.buttonContainer}>
                    <View style={styles.contactContainer}>

                    <View style={styles.avatarContainer}>
                        <Image style={styles.avatarPhoto} source={{uri: 'https://github.com/rossanodr.png' }} />
                    </View>
                    

                    <View >
                        <Text style={styles.contactName}>Rossano Dala Rosa</Text>
                        <Text style={styles.messagePreview}>Mensagem</Text>
                    </View>
                    <View >
                        <Text style={styles.time}>15:30</Text>
                        <View style={styles.messageCounter}><Text>1</Text></View>
                    </View>
        
                    </View>
                </RectButton>
                    
              
               
           
       
            
    );
}

export default MessengerItem;