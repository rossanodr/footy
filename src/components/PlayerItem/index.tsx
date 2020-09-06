import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

import attributeDiamond from '../../assets/images/attributediamond.png';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';


import styles from './styles';
import AttributesOverview from '../AttributesCharts';

function PlayerItem() {
    const navigation = useNavigation();

    function handleNavigateToPlayerPage() {
        navigation.navigate('PlayerPage');
    }
    function handleNavigateToTeamScouters() {
        navigation.navigate('TeamScouters');
    }

    return (
        <RectButton onPress={handleNavigateToPlayerPage}  style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://www.sofascore.com/images/player/image_1015291.png'}}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Patrick de Paula</Text>
                    
                    <View style={styles.teamContainer}>
                        <Text style={styles.team}> Palmeiras</Text>
                        <Image 
                            style={styles.teamLogo}
                            source={{ uri: 'https://www.sofascore.com/images/team-logo/football_1963.png'}}
                        />
                        <Text style={styles.team}>|</Text>
                        <Image 
                            style={styles.teamLogo}
                            source={{ uri: 'https://www.sofascore.com/bundles/sofascoreweb/images/lang/br.png'}}
                        />
                        <Text style={styles.team}> Brazil</Text>

                    </View>
                </View>
                
            </View>
            <View style={styles.profileContainer}>
            
                <View style={styles.statsContainer}>
                    <Text style ={styles.playerStats}>Age: 20</Text>
                    <Text style ={styles.playerStats}>Rating: 8.2</Text>
                </View>
            
                <View style={styles.statsContainer}>
                    <Text style ={styles.playerStats}>Height: 180cm</Text>
                    <Text style ={styles.playerStats}>Weight: 80kg</Text>
                </View>

                <View style={styles.statsContainer}>
                    <Text style ={styles.playerStats}>Position: DM</Text>
                    <Text style ={styles.playerStats}>Birth: Brazil</Text>
                </View>
            </View>

            <View style={styles.attributeDiamondContainer}>
            <AttributesOverview/>
            </View>

                  
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Transfer Market Price{'  '}
                    <Text style={styles.priceValue}>€250Th.</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]} >
                        {/*<Image source={heartOutlineIcon} />*/}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton} onPress={handleNavigateToTeamScouters}>
                        <Feather name="message-circle" size={24} color="#FFF"  />
                        <Text style={styles.contactButtonText}>Message Team</Text>
                    </RectButton>
                </View>
                
            </View>
        </RectButton>
    );
}

export default PlayerItem;