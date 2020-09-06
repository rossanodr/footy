import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    infoBox: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        marginVertical: 1,
       
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
})

export default styles