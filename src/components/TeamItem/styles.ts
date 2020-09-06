import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 0,
        borderBottomColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        
    },

    teamProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 24,
        paddingVertical: 5,
        backgroundColor: '#eee',
        
        
    },

    teamLogo: {
        width: 70,
        height: 70,
        borderRadius: 32,
        backgroundColor: '#e6e6f0',
        
    },

   

    profileInfo: {
        marginLeft: 5,
        alignItems: 'center',
        marginHorizontal: 15,
        
                       
    },
    

    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
        backgroundColor: '#eee',
        marginBottom: 10,
        paddingHorizontal: 5,
        borderRadius: 2,
        
        
    },

    teamVenue: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#eee',
        paddingHorizontal: 5,
        marginTop: -10,
        borderRadius: 2,
        
        
        
    },

    teamVenueText: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4,
        
        
    },

    countryFlag: {
        width: 20,
        height: 20,
        borderRadius: 32,
        backgroundColor: '#EEE',
        marginHorizontal: 5,
    },
    
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        marginTop: -15,
        
    },

    teamInfo: {
        backgroundColor: '#eee', 
        alignItems: 'flex-start',
        paddingLeft:6,
        borderRadius: 2,
     
    },

    listLabel: {
        backgroundColor: '#eee', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 4,
        marginHorizontal: 24,
        marginTop: 10,
        borderRadius: 2,
    },
    
    teamPlayersContainer: {
        backgroundColor: '#eee', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 4,
        marginHorizontal: 24,
        marginTop: 10,
        borderRadius: 2,
        
    },

    
    playersNameList: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',
        marginRight: 8,
    },

    teamPageText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',
        marginRight: 8,
        
    },
    playersListRatingContainer: {
        backgroundColor: '#edde7d', 
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:8,
        borderRadius: 2,
        marginHorizontal: 6
     
    },

    playersRatingText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',
        marginRight: 8,
    },

    competitionsContainer: {
        backgroundColor: '#eee', 
        paddingVertical: 4,
        marginHorizontal: 24,
        marginTop: 10,
        borderRadius: 2,
    },

    competitionText: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
        backgroundColor: '#eee',
        paddingHorizontal: 16,
        borderRadius: 2,
    },
    
    competitionsLogosContainer: {
        backgroundColor: '#eee', 
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
                
    },

    competitionInfo:{
        padding: 8,
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },

    competitionLogo: {
        width: 70,
        height: 70,
        backgroundColor: '#eee',
    },

    competitionName:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',
        marginRight: 8,
    },


    bio: {
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',
    },

    footer: {
        backgroundColor: '#fafafc',
        padding: 24,
        alignItems: 'center',
        marginTop: 24,
        borderWidth: 1
    },

    price: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14,
    },

    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 16,
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },

    favoriteButton: {
        backgroundColor: '#8257e5',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    
    favorited: {
        backgroundColor: '#6a6180',
    },

    contactButton: {
        backgroundColor: '#04d361',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    contactButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16
    },
})

export default styles;