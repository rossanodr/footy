import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import { View, Text } from 'react-native';

 import styles from './styles'
    
    function  AttributesOverview () {
      
        return ( 
        <View style={styles.container}>
          <View style={{justifyContent: 'center', alignItems: 'center', padding: 6}}>

          <ProgressCircle style={{height: 280, width: 280 }}animate={true} strokeWidth={15} progress={0.57}backgroundColor={'#e6e6f0'} progressColor={'#69c7c9'}>
            
            <ProgressCircle style={{ height: 280, width: 240, alignSelf: 'center' }} strokeWidth={15} progress={0.71}backgroundColor={'#e6e6f0'} progressColor={'#04d361'}>
            <ProgressCircle style={{ height: 280, width: 200, alignSelf: 'center' }} strokeWidth={15} progress={0.65}backgroundColor={'#e6e6f0'} progressColor={'#c03991'}>
            <ProgressCircle style={{ height: 280, width: 160, alignSelf: 'center' }}   strokeWidth={15} progress={0.72}backgroundColor={'#e6e6f0'} progressColor={'#f37520'}>
            <ProgressCircle style={{ height: 280, width: 120, alignSelf: 'center' }}   strokeWidth={15} progress={0.68} backgroundColor={'#e6e6f0'} progressColor={'#eeda2b'}>
              <View style={{alignItems: 'center',  justifyContent: 'center' }}>
                
                </View>
            </ProgressCircle>
            </ProgressCircle>
            </ProgressCircle>
            </ProgressCircle>
            
          </ProgressCircle>
          </View>
            
            <View style={styles.labelContainer}>

            <View style={styles.labelView}>
            
              <View style={{height: 20, width: 20, backgroundColor: '#69c7c9'}}></View>
              <Text style={styles.labelText}>Attacking 57</Text>
              
              <View style={{height: 20, width: 20, backgroundColor: '#04d361'}}></View>
              <Text style={styles.labelText}>Technical 71</Text>
              
              <View style={{height: 20, width: 20, backgroundColor: '#c03991'}}></View>
              <Text style={styles.labelText}>tactical 65</Text>
            </View>

            <View style={styles.labelView}>
              <View style={{height: 20, width: 20, backgroundColor: '#f37520'}}></View>
              <Text style={styles.labelText}>Defending 72</Text>
            <View style={{height: 20, width: 20, backgroundColor: '#eeda2b'}}></View>
              <Text style={styles.labelText}>Creativity 68</Text>
            </View>
            
            </View>
        </View>
            
            
        )
    }

  
    export default AttributesOverview;
 