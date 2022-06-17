import React from 'react';
import { View, Text } from 'react-native-web';

export default function ResultImc(props){
    return(
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.resultImc}</Text>
        </View>
    );
}