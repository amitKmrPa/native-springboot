import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import GetProducts from '../Product/GetProducts';
function Home({navigation}) {
    const GetProductFn = ()=> {
        navigation.navigate('GetProducts');
    }
    return (
        <View>
            <Text>Test</Text>
            <Text>Test</Text>
            <Button 
             title="click"
            onPress={GetProductFn}
            />
        </View>
    );
}

export default Home;