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

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 24,
        paddingVertical: 5,
        backgroundColor: '#eee',
        
    },

    avatar: {
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

    teamContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#eee',
        paddingHorizontal: 5,
        marginTop: -10,
        borderRadius: 2,
        
        
    },

    team: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4,
        
    },

    teamLogo: {
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
    
    statsContainer: {
        backgroundColor: '#eee', 
        alignItems: 'flex-start',
        marginBottom: 10,
        paddingLeft:6,
        borderRadius: 2,
        
       
    },

    playerStats: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',
        marginRight: 8,
        
    },

    attributeDiamondContainer: {
        marginHorizontal: 24,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#eee',
        borderRadius: 8,
    },

    attributeDiamond :{
        flex: 1,
        maxWidth: '90%',
        
    },
    heatmapContainer: {
        marginHorizontal: 20,
        alignItems:'center',
        paddingBottom: 10,
        marginTop: 16,
        borderRadius: 2,
        backgroundColor: '#eee',
               
    },
    heatmap :{
        resizeMode: 'contain',
        width: '98%'
        
    },
    statisticsContainer: {
        marginHorizontal: 20,
        paddingBottom: 10,
        marginTop: 16,
        borderRadius: 2,
        backgroundColor: '#eee',
               
    },
    statisticTitle: {   
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
        marginHorizontal: 4,

    },
    
    statisticsBoxDark: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#e6e6f0',
        marginHorizontal: 4,
        
    },
    statisticsBoxLighter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f2f2f7',
        marginHorizontal: 4,
        
    },


    statisticText: {
        marginHorizontal: 4,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',

    },

    bioContainer: {
        marginHorizontal: 20,
        paddingBottom: 10,
        marginTop: 16,
        borderRadius: 2,
        backgroundColor: '#eee',
    },

    bio: {
        marginHorizontal: 4,
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