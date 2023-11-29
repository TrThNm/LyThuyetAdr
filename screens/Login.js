import React, { useState ,useEffect} from 'react';
import { View, StyleSheet,Text, Alert, Image } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { useMyContextController, login } from '../provider'



function Login({navigation}) {
    const [isShow,setIsShow] = useState(true)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [controller, dispatch] = useMyContextController();
    const {userLogin} = controller;
    useEffect(() => {
        console.log("useEffect triggered");
        if (userLogin !== null)
        { navigation.navigate("Home")
    };
      }, [userLogin]);
    const handleLoginPress =()=>{
        login(dispatch,email,password);
    }
    return (

        <View style={styles.container} >
            <View style={styles.wrapperImg}>
                <Image style={styles.Img} source={require('../assets/abc.jpg')} />
                    </View>
            <Text style={styles.txt}>Đăng nhập</Text>
            <TextInput
            style={styles.txtInput}
            label='Email'
            value={email}
            onChangeText={(email) => setEmail(email)}
            left={<TextInput.Icon icon='email'/>}
            />
            <TextInput
            style={styles.txtInput}
            label='Mật khẩu'
            value={password}
            secureTextEntry ={isShow}
            onChangeText={(password) => setPassword(password)}
            left={<TextInput.Icon icon='key'/>}
            right={<TextInput.Icon icon='eye'r
            onPress={()=>setIsShow(!isShow)}/>}
            />

            <Button mode='contained' style={styles.btn} onPress={handleLoginPress}><Text style={{color:'#000000'}}>Đăng nhập</Text></Button>
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#33CC66',
    },
    txt:{
        fontSize:40,
        fontWeight: 'bold',
        alignSelf:'center',
 
        paddingBottom:50,
        color:'#FF99FF',
    },
    txtInput:{
        marginBottom:20,
        marginLeft:10,
        marginRight:10
    },
    btn:{
        borderRadius:10,
        backgroundColor:'#CCCCCC',
        
        marginLeft:10,
        marginRight:10,
        marginTop:10
    },
    wrapperImg: {
        alignItems: 'center',
    },
    Img:{
        width:200,
        height:200,
    },
})

export default Login;