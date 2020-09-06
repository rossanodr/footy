import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
        
    },

    photoContainer: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        
    },
    infoBox: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f7'
        
        
    },

    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',
        marginLeft: 16
    },

    photo: {
        width: 70,
        height: 70,
        borderRadius: 32,
        backgroundColor: '#e6e6f0',
        marginRight: 8,
        marginVertical: 6,

    },

    
    infoText: {
        marginHorizontal: 8,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',


    },

    logoutButton: {
        backgroundColor: '#fa1e1e',
        height: 56,
        width: '50%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 16,
    },

    logoutButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16
    },

    
});

export default styles;