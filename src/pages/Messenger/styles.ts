import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    playerList: {
        marginTop: -20,
        
    },
    searchForm: {
        justifyContent: 'center',
        alignItems: 'center',
        
        marginBottom: -30,
        marginTop: -10
    },

    containerStyle: {
        borderRadius: 8,
       
    },
    inputContainerStyle: {
        paddingVertical: 15,
        maxHeight: '60%'
    },
            
    contactContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#e6e6f0',
        flex: 1,
        borderWidth: 1,
        borderColor: '#8257e5'
    },

    avatarContainer:{
        backgroundColor: '#e6e6f0',
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