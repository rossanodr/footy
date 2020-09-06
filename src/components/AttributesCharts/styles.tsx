import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        flexWrap: 'wrap'
        
        
    },

    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
       
    },

    labelView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:10,
       
    },

    labelText: {
        marginHorizontal: 10,
        marginBottom: 10,
        color: '#6a6180'

    },
})
export default styles;
