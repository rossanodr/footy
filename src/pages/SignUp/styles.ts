import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1, //elemento ocupa todo o espaço
        backgroundColor: '#8257e5',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 30,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 32,
        lineHeight: 37,
        alignSelf: 'center',
                
    },

    inputContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 20,
        marginTop: 40,

        borderColor: '#04d361',
                            borderWidth: 0,
                            
    },

    okButton: {
        marginBottom: 40,
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
});

export default styles;