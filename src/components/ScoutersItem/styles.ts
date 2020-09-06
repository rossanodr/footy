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
        marginBottom: 8,
        
    },
    infoBox: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        marginVertical: 1,
        
        
        
        
    },

    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',
        marginLeft: 16
    },

    teamLogo: {
        width: 70,
        height: 70,
        borderRadius: 32,
        backgroundColor: '#e6e6f0',
        marginRight: 8,
        marginVertical: 6,

    },

    photo: {
        width: 50,
        height: 50,
        borderRadius: 32,
        backgroundColor: '#e6e6f0',
        marginRight: 8,
        

    },

    infoText: {
        marginHorizontal: 8,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',

    },
    
    flag: {
        width: 20,
        height: 20,
        borderRadius: 32,
        backgroundColor: '#e6e6f0',
        marginRight: 8,
        

    },

    

    
});

export default styles;