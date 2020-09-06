import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1, //elemento ocupa todo o espaço
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        padding: 40,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        
    },
    inputContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        

        borderColor: '#04d361',
                            borderWidth: 0,
                            paddingVertical: 40,
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 32,
        lineHeight: 37,
        alignSelf: 'center',
        
    },

    okButton: {
        marginBottom: 20,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    okButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },
    lostPasswordText: {
        marginHorizontal: 4,
        marginBottom: 10,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',
        alignSelf: 'center',

    }
});

export default styles;