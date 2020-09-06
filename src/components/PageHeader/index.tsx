import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logImg from '../../assets/images/logo.png';

import styles from './styles';

interface PageHeaderProps {
    title?: string;
    headerRight?: ReactNode;
    
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight,  children }) => {
    const { navigate, goBack } = useNavigation();
    
    function handleGoBack() {
        goBack();
    };
    
    function handleGoToLanding() {
        navigate('Landing');
    };

    return (
        <View style={styles.container}>
            <View style={styles.topBar}
            >
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode='contain' />
                </BorderlessButton>

                <BorderlessButton onPress={handleGoToLanding}>
                <Image source={logImg} resizeMode='contain' />
                </BorderlessButton>
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>
            <View style={styles.children}>

                {children}
            </View>
        </View>
    );
}

export default PageHeader;