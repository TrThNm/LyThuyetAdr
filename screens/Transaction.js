import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Transaction() {
    return ( 
        <View style={styles.container}>
            <Text>Transaction Screen</Text>
        </View>
     );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#33CC66',
    }
})

export default Transaction;