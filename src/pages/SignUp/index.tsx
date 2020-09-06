import React, { useState } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';


function SignUp() {
    const { goBack }= useNavigation();
    const [focus1, setFocus1]= useState(false);

    const [focus2, setFocus2]= useState(false);
    const [focus3, setFocus3]= useState(false);

    const [focus4, setFocus4]= useState(false);

    function handleNavigateBack(){
        goBack();
    }
    
    return (
        
        <View style={styles.container}>
            <ImageBackground source={giveClassesBgImage} style={styles.content} resizeMode='contain'>
            <View style={{
                    backgroundColor: '#FFF',
                    paddingHorizontal: 16,
                    paddingTop: 20
                    }}>
                <Text style={styles.title}>Join our family</Text>
                <View style={styles.inputContainer}>
                    <Input 
                        onFocus={() => setFocus2(true)}
                        onBlur={() => setFocus2(false)}
                        placeholder='Name'
                        inputContainerStyle= {{
                            paddingHorizontal: 8,
                            borderColor: focus2 ? ('#04d361') : ('#EEE' ),
                            borderWidth: 1,
                            }}
                            
                        leftIcon={
                            <Ionicons
                            name="ios-finger-print"
                            size={24}
                            color='black'
                            />
                        }
                    />
                    
                    <Input 
                        onFocus={() => setFocus1(true)}
                        onBlur={() => setFocus1(false)}
                        placeholder='Team you are representing'
                        inputContainerStyle= {{
                            paddingHorizontal: 8,
                            borderColor: focus1 ? ('#04d361') : ('#EEE' ),
                            borderWidth: 1,
                            }}
                            
                        leftIcon={
                            <Ionicons
                            name="ios-flag"
                            size={24}
                            color='black'
                            />
                        }
                    />
                    
                    <Input 
                        onFocus={() => setFocus3(true)}
                        onBlur={() => setFocus3(false)}
                        placeholder='Email'
                        inputContainerStyle= {{
                            paddingHorizontal: 8,
                            borderColor: focus3 ? ('#04d361') : ('#EEE' ),
                            borderWidth: 1,
                            }}
                            
                        leftIcon={
                            <Ionicons
                            name="md-mail"
                            size={24}
                            color='black'
                            />
                        }
                    />
                    
                        
                    <Input
                        onFocus={() => setFocus4(true)}
                        onBlur={() => setFocus4(false)} 
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
                            borderColor: focus4 ? ('#04d361') : ('#EEE' ),
                            borderWidth: 1,
                            }}
                    />

                </View>
                <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Sing Up!</Text>
            </RectButton>

            </View>

            </ImageBackground>

            
        </View>
    );
}

export default SignUp;