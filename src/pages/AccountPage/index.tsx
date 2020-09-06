import React from 'react';
import { View, Image, Text } from 'react-native';


import PageHeader from '../../components/PageHeader';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

function AccountPage() {
    return (
        <View style={styles.container}>
            <PageHeader title='Profile'/>
            <View style={styles.container}>
                <View style={styles.photoContainer}>
                    <Text style={styles.title}>Photo</Text>
                    <Image style={styles.photo} source={{uri: 'https://github.com/rossanodr.png'}} />
                </View>
                <View >
                    <View style={styles.infoBox}>
                        <Text style={styles.title}>Name</Text>
                        <Text style={styles.infoText}>Rossano Dala Rosa</Text>
                    </View>
                    <View style={styles.infoBox}>
                        <Text style={styles.title}>Email</Text>
                        <Text style={styles.infoText}>rvdalarosa@gmail.com</Text>
                    </View>
                    <View style={styles.infoBox}>
                        <Text style={styles.title}>Team</Text>
                        <Text style={styles.infoText}>Palmeiras</Text>
                    </View>
                    <View style={styles.infoBox}>
                        <Text style={styles.title}>Gender</Text>
                        <Text style={styles.infoText}>Male</Text>
                    </View>
                    <View style={styles.infoBox}>
                        <Text style={styles.title}>Birthday</Text>
                        <Text style={styles.infoText}>24-12-1991</Text>
                    </View>

                    <View>

                    <RectButton style={styles.logoutButton}>
                        <Text style={styles.logoutButtonText}>Logout</Text>
                    </RectButton>
                    </View>
                </View>
            </View>
            
            
        </View>
            
    );
}

export default AccountPage;