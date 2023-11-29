import React from "react";
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native'

function ListComponent({title, price,onClick}) {
    return ( 
        <TouchableOpacity style={styles.btn} onPress={onClick}>
            <Text style={styles.txtName}>{title}</Text>
            <Text style={styles.txtPrice}>{price}đ</Text>
        </TouchableOpacity>
     );
}
const styles = StyleSheet.create({
    btn:{
        height:50,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems: 'center',
        marginTop:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#ccc',
        marginLeft:10,
        marginRight:10
    },
    txtPrice:{
        fontSize:14,
        fontWeight: 'bold',
        color:'black',
        marginRight:10
    },
    txtName:{
        fontSize:14,
        color:'black',
        marginLeft:10

    }
})

export default ListComponent;