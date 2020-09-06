import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

import attributeDiamond from '../../assets/images/attributediamond.png';
import heatmap from '../../assets/images/heatmap.png';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import AttributesOverview from '../AttributesCharts';


import styles from './styles';

function PlayerFullProfile() {
    const navigation = useNavigation();

    function handleNavigateToTeamPage() {
        navigation.navigate('TeamPage');
    }
    function handleNavigateToTeamScouters() {
        navigation.navigate('TeamScouters');
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={handleNavigateToTeamPage} style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://www.sofascore.com/images/player/image_1015291.png'}}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Patrick de Paula!</Text>
                    
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
                
                </BorderlessButton>
           
            <View>
           
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

                <View style={styles.heatmapContainer}>
                    <Text style={styles.statisticTitle}>Season Heatmap</Text>
                    <Image source={heatmap} style={styles.heatmap}  />
                </View>

                <View style={styles.statisticsContainer}>
                    <Text style={styles.statisticTitle}>Matches</Text>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Total played:</Text>
                        <Text style={styles.statisticText}>4</Text>
                    </View>
                    <View style={styles.statisticsBoxLighter}>
                        <Text style={styles.statisticText}>Started:</Text>
                        <Text style={styles.statisticText}>3</Text>
                    </View>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Minutes per game:</Text>
                        <Text style={styles.statisticText}>75</Text>
                    </View>
                </View>

                <View style={styles.statisticsContainer}>
                    <Text style={styles.statisticTitle}>Attacking</Text>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Goals:</Text>
                        <Text style={styles.statisticText}>1</Text>
                    </View>
                    <View style={styles.statisticsBoxLighter}>
                        <Text style={styles.statisticText}>Scoring frequency:</Text>
                        <Text style={styles.statisticText}>300min</Text>
                    </View>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Goals per game:</Text>
                        <Text style={styles.statisticText}>0.3</Text>
                    </View>
                    <View style={styles.statisticsBoxLighter}>
                        <Text style={styles.statisticText}>Shots per game:</Text>
                        <Text style={styles.statisticText}>0.8</Text>
                    </View>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Big chances missed</Text>
                        <Text style={styles.statisticText}>0</Text>
                    </View>
                </View>

                <View style={styles.statisticsContainer}>
                    <Text style={styles.statisticTitle}>Passes</Text>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Assists:</Text>
                        <Text style={styles.statisticText}>0</Text>
                    </View>
                    <View style={styles.statisticsBoxLighter}>
                        <Text style={styles.statisticText}>Touches:</Text>
                        <Text style={styles.statisticText}>63.5</Text>
                    </View>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Big chances created:</Text>
                        <Text style={styles.statisticText}>0</Text>
                    </View>
                    <View style={styles.statisticsBoxLighter}>
                        <Text style={styles.statisticText}>Key passes:</Text>
                        <Text style={styles.statisticText}>0.8</Text>
                    </View>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Accurate per game:</Text>
                        <Text style={styles.statisticText}>44.0 (86%)</Text>
                    </View>
                    <View style={styles.statisticsBoxLighter}>
                        <Text style={styles.statisticText}>Acc. own half</Text>
                        <Text style={styles.statisticText}>18.8(93%)</Text>
                    </View>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Acc. opposition half</Text>
                        <Text style={styles.statisticText}>25.3(81%)</Text>
                    </View>
                    <View style={styles.statisticsBoxLighter}>
                        <Text style={styles.statisticText}>Acc. long balls</Text>
                        <Text style={styles.statisticText}>2.5(71%)</Text>
                    </View>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Acc. chipped passes</Text>
                        <Text style={styles.statisticText}>2.5(71%)</Text>
                    </View>
                    <View style={styles.statisticsBoxLighter}>
                        <Text style={styles.statisticText}>Acc. crosses</Text>
                        <Text style={styles.statisticText}>0.0 (00%)</Text>
                    </View>
                </View>

                <View style={styles.statisticsContainer}>
                    <Text style={styles.statisticTitle}>Defending</Text>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Interceptions per game:</Text>
                        <Text style={styles.statisticText}>1.3</Text>
                    </View>
                    <View style={styles.statisticsBoxLighter}>
                        <Text style={styles.statisticText}>Tackles per game:</Text>
                        <Text style={styles.statisticText}>1.5</Text>
                    </View>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Possession won:</Text>
                        <Text style={styles.statisticText}>0.3</Text>
                    </View>
                    <View style={styles.statisticsBoxLighter}>
                        <Text style={styles.statisticText}>Dribbled past per game:</Text>
                        <Text style={styles.statisticText}>2.3</Text>
                    </View>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Clearances per game:</Text>
                        <Text style={styles.statisticText}>1.0</Text>
                    </View>
                    <View style={styles.statisticsBoxLighter}>
                        <Text style={styles.statisticText}>Error led to shot</Text>
                        <Text style={styles.statisticText}>0</Text>
                    </View>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Error led to goal</Text>
                        <Text style={styles.statisticText}>0)</Text>
                    </View>
                    <View style={styles.statisticsBoxLighter}>
                        <Text style={styles.statisticText}>Penalty committed</Text>
                        <Text style={styles.statisticText}>0</Text>
                    </View>
                </View>

                <View style={styles.statisticsContainer}>
                <Text style={styles.statisticTitle}>Other</Text>
                <View style={styles.statisticsBoxDark}>
                    <Text style={styles.statisticText}>Succ. dribbles:</Text>
                    <Text style={styles.statisticText}>0.8 (75%)</Text>
                </View>
                <View style={styles.statisticsBoxLighter}>
                    <Text style={styles.statisticText}>Total duels won</Text>
                    <Text style={styles.statisticText}>3.8 (42%)</Text>
                </View>
                <View style={styles.statisticsBoxDark}>
                    <Text style={styles.statisticText}>Ground duels won</Text>
                    <Text style={styles.statisticText}>2.5 (36%)</Text>
                </View>
                <View style={styles.statisticsBoxLighter}>
                    <Text style={styles.statisticText}>Aerial duels won</Text>
                    <Text style={styles.statisticText}>1.3 (63%)</Text>
                </View>
                <View style={styles.statisticsBoxDark}>
                    <Text style={styles.statisticText}>Possession lost</Text>
                    <Text style={styles.statisticText}>9.8</Text>
                </View>
                <View style={styles.statisticsBoxLighter}>
                    <Text style={styles.statisticText}>Fouls</Text>
                    <Text style={styles.statisticText}>1.8</Text>
                </View>
                <View style={styles.statisticsBoxDark}>
                    <Text style={styles.statisticText}>Was fouled</Text>
                    <Text style={styles.statisticText}>0.3</Text>
                </View>
                <View style={styles.statisticsBoxLighter}>
                    <Text style={styles.statisticText}>Offsides</Text>
                    <Text style={styles.statisticText}>0</Text>
                </View>
            </View>
            
                <View style={styles.statisticsContainer}>
                    <Text style={styles.statisticTitle}>Cards</Text>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Yellow:</Text>
                        <Text style={styles.statisticText}>0</Text>
                    </View>
                    <View style={styles.statisticsBoxLighter}>
                        <Text style={styles.statisticText}>Yellow-Red:</Text>
                        <Text style={styles.statisticText}>0</Text>
                    </View>
                    <View style={styles.statisticsBoxDark}>
                        <Text style={styles.statisticText}>Red:</Text>
                        <Text style={styles.statisticText}>0</Text>
                    </View>
                </View>
            </View>

            <View style={styles.bioContainer}>
                <Text style={styles.statisticTitle}>Bio</Text>    
                <View style={styles.statisticsBoxLighter}>

                <Text style={styles.bio}>
                Patrick de Paula (BRA) currently plays for Brasileiro Serie A club Palmeiras. Patrick de Paula is 20 years old (07/09/1999) and he is 180cm tall.  
                {'\n'} {'\n'}
                Patrick de Paula prefers to play with left foot. His jersey number is 5.
                </Text>
                </View>
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
        </View>
    );
}

export default PlayerFullProfile;