import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import {useMyContextController} from '../provider'
import { useNavigation, useRoute } from '@react-navigation/native';

function AddService() {
  const [nameService, setNameService] = useState('');
  const [prices, setPrices] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const { itemId } = route.params ?? {};
  const [{ userLogin }] = useMyContextController();
  const { name } = userLogin;

  useEffect(() => {
    if (itemId) {
      const fetchData = async () => {
        try {
          const documentSnapshot = await firestore().collection('SERVICE').doc(itemId).get();
          const data = documentSnapshot.data();
          setNameService(data.name);
          setPrices(data.price.toString());
        } catch (error) {
          console.error('Lỗi khi lấy dữ liệu:', error);
        }
      };
  
      fetchData();
    }
  }, [route.params]);
  
  const handleSaveService = async () => {
    try {
      console.log('Attempting to save service:', nameService, prices, name);
  
      if (!nameService || !prices || !name) {
        alert('Vui lòng điền đầy đủ thông tin món.');
        return;
      }
  
      if (itemId) {
        await firestore().collection('SERVICE').doc(itemId).update({
          name: nameService,
          price: parseFloat(prices),
          updatedBy: name,
          updatedAt: firestore.FieldValue.serverTimestamp(),
        });
        alert('món đã được cập nhật thành công.');
      } else {
        await firestore().collection('SERVICE').add({
          name: nameService,
          price: parseFloat(prices),
          createdBy: name,
          createdAt: firestore.FieldValue.serverTimestamp(),
          updatedBy: null,
          updatedAt: null,
        });
        alert('món đã được thêm thành công.');
      }
  
      setNameService('');
      setPrices('');
  
      navigation.goBack();
    } catch (error) {
      console.error('Lỗi khi lưu món:', error);
      alert('Đã xảy ra lỗi khi lưu món. Vui lòng thử lại.');
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Tên món *</Text>
      <TextInput
        style={styles.txtInput}
        placeholder='Nhập tên món'
        value={nameService}
        onChangeText={(nameService) => setNameService(nameService)}
      />

      <Text style={styles.txt}>Giá *</Text>
      <TextInput
        style={styles.txtInput}
        placeholder='0'
        value={prices}
        onChangeText={(prices) => setPrices(prices)}
        keyboardType='numeric'
      />

      <Button mode='contained' style={styles.btn} onPress={handleSaveService}>
        <Text>Lưu</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#33CC66',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e06464',
    marginLeft: 10,
  },
  txtInput: {
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  btn: {
    borderRadius: 10,
    backgroundColor: '#e06464',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
});

export default AddService;
