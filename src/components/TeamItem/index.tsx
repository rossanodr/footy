import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';


import styles from './styles';
import { colors } from 'react-native-elements';

function TeamItem() {
    const navigation = useNavigation();

    // {const [rating, setRating] = useState();

    
    const rating = 6.9;

    function handleNavigateToPlayerPage() {
        navigation.navigate('PlayerPage');
    }
    function handleNavigateToTeamScouters() {
        navigation.navigate('TeamScouters');
    }
    
    function handleRanting(){
        if (rating > 5 ) {
            return 'red'
        }
        if ( rating > 6) {
            return'#edde7d'
        }
        if (rating > 7) {
            return '#b9fb93'
        }
         if (rating > 8 ){
            return'#7ffb56'
        }
      if ( rating> 9) {
            return '#56b6fb'
        }
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={handleNavigateToPlayerPage} style={styles.teamProfile}>
                <Image 
                    style={styles.teamLogo}
                    source={{ uri: 'https://www.sofascore.com/images/team-logo/football_1963.png'}}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Palmeiras</Text>
                    
                    <View style={styles.teamVenue}>
                        <Text style={styles.teamVenueText}>São Paulo</Text>
                        <Image 
                            style={styles.countryFlag}
                            source={{ uri: 'https://www.sofascore.com/bundles/sofascoreweb/images/lang/br.png'}}
                        />
                        <Text style={styles.teamVenueText}>Brazil</Text>

                    </View>
                </View>
                
            </BorderlessButton>
            <View style={styles.profileContainer}>
            
                <View style={styles.teamInfo}>
                    <Text style ={styles.teamPageText}>Stadium: Allianz Parque</Text>
                    <Text style ={styles.teamPageText}>Capacity: 43600</Text>
                </View>
            
                <View style={styles.teamInfo}>
                    <Text style ={styles.teamPageText}>Foundation:</Text>
                    <Text style ={styles.teamPageText}>26 August 1914</Text>
                </View>

               
            </View>
            <View style={styles.competitionsContainer}>
                <Text style={styles.competitionText}>Competitions</Text>
                <View style={styles.competitionsLogosContainer}>
                    <View style={styles.competitionInfo}>
                    <Image 
                            style={styles.competitionLogo}
                            source={{ uri: 'https://api.sofascore.com/api/v1/unique-tournament/325/image'}}
                        />
                        <Text style={styles.competitionName}>Brasileiro Série A</Text>
                    </View>

                
                    <View style={styles.competitionInfo}>
                    <Image 
                            style={styles.competitionLogo}
                            source={{ uri: 'https://api.sofascore.com/api/v1/unique-tournament/384/image'}}
                        />
                        <Text style={styles.competitionName}>CONMENBOL {'\n'}Libertadores</Text>
                    </View>

                
                    <View style={styles.competitionInfo}>
                    <Image 
                            style={styles.competitionLogo}
                            source={{ uri: 'https://api.sofascore.com/api/v1/unique-tournament/372/image'}}
                        />
                        <Text style={styles.competitionName}>Paulista Série A1</Text>
                    </View>

                
                
                    <View style={styles.competitionInfo}>
                    <Image 
                            style={styles.competitionLogo}
                            source={{ uri: 'https://api.sofascore.com/api/v1/unique-tournament/10709/image'}}
                        />
                        <Text style={styles.competitionName}>Florida Cup</Text>
                    </View>
                </View>
                
            </View>
            <View style={styles.listLabel}>
                
                <View style={styles.teamInfo}>
                    <Text style ={[styles.teamPageText, {marginLeft: 8}]}>#</Text>
                </View>

                <View >
                <Text style ={styles.teamPageText}>Rating</Text>
                
                </View>
            </View>
            <View style={styles.teamPlayersContainer}>
                
                <View style={styles.teamInfo}>
                    <Text style ={styles.teamPageText}>1</Text>
                </View>

                <View style={styles.teamInfo}>
                    <Image 
                    style={styles.teamLogo}
                    source={{ uri: 'https://www.sofascore.com/images/player/image_1015291.png'}}
                />
                </View>

                <View style={styles.teamInfo}>
                    <Text style ={styles.playersNameList}>Patrick Vieira</Text>
                    <Text style ={styles.teamPageText}>Position</Text>
                </View >
                <View style={styles.playersListRatingContainer}>
                    <Text style ={[styles.playersRatingText, {backgroundColor: handleRanting()}]}>{rating}</Text>
                </View>
            </View>

                  
            <BorderlessButton onPress={handleNavigateToTeamScouters} style={styles.footer}>
                <Text style={styles.price}>
                    Contact team{'  '}
                    
                </Text>
                
            </BorderlessButton>
        </View>
    );
}

export default TeamItem;