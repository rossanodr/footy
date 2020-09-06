import React, { useState } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';


function SignIn() {
    const navigation= useNavigation();

    const [focus1, setFocus1]= useState(false);

    const [focus2, setFocus2]= useState(false);

    function handleNavigateToTeamTabs(){
        navigation.navigate('TeamTabs');
    }
    
    
    return (
        
        <View style={styles.container}>
            <ImageBackground source={giveClassesBgImage} style={styles.content} resizeMode='contain'>
                <View style={{
                    backgroundColor: '#FFF',
                    paddingHorizontal: 16,
                    paddingVertical: 30,
                }}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputContainer}>
                    <Input onFocus={() => setFocus1(true)}
                            onBlur={() => setFocus1(false)}
                        placeholder='Email'
                        inputContainerStyle= {{
                            
                            paddingHorizontal: 8,
                            borderColor: focus1 ? ('#04d361') : ('#EEE' ),
                            borderWidth: 1,
                            }}
                            
                        leftIcon={
                         <Ionicons
                            name="md-mail"
                            size={24}
                             color='black'
                         />}
                    />
                    
                        
                    <Input
                        onFocus={() => setFocus2(true)}
                        onBlur={() => setFocus2(false)}
                        placeholder='Password'
                        secureTextEntry= {true}
                        leftIcon={
                        <Ionicons
                            name="md-lock"
                            size={24}
                            color='black'
                        />
                        }
                                               
                        inputContainerStyle= {{
                            paddingHorizontal: 8,      
                            borderColor: focus2 ? ('#04d361') : ('#EEE' ),
                            borderWidth: 1,
                            }}
                    />

                </View>
                    <RectButton onPress={handleNavigateToTeamTabs} style={styles.okButton}>
                        <Text style={styles.okButtonText}>Sing Up!</Text>
                    </RectButton>
                    <Text style={styles.lostPasswordText}>Lost your password?</Text>
            
                </View>
            </ImageBackground>
 
        </View>
    );
}

export default SignIn;