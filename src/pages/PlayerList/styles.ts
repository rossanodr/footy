import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    playerList: {
        marginTop: -40,
    },
    
    searchForm: {
        marginBottom: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerStyle: {
        borderRadius: 8,
        
    },
    
    submitButton: {
        backgroundColor: '#04d361',
        height: 56,
        width: '100%',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    }
});

export default styles;