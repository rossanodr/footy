import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    

    playerList: {
        marginTop: -20,
    },
    buttonContainer:{
       
        backgroundColor: '#e6e6f0',
        
        
    },
    
    contactContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
        borderBottomWidth: 0.4,
        borderColor: '#8257e5',
        
    },

    avatarContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    avatarPhoto: {
        width: 50,
        height: 50,
        borderRadius: 32,
        backgroundColor: '#e6e6f0',
        margin: 5
    },

    contactName:{
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
        borderRadius: 2,

    },

    messagePreview:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',
    },

    time: {
        
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',
    },

    messageCounter: {
        
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        alignSelf: 'center',
        borderRadius: 32,
        backgroundColor: '#04d361',
    }



    
});

export default styles;