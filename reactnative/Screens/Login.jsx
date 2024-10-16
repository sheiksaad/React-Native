import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { primary_color } from '../utils/app_theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = () => {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const GetData = await AsyncStorage.getItem('@user_data');
      const parsed = JSON.parse(GetData);
  
      if (parsed && parsed.email === email && parsed.password === password) {
        navigation.navigate('Bottom-Tabs');
      } else {
        Alert.alert("Invalid Email OR Password");
      }
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <View style={{ paddingHorizontal: 20, gap: 10 }}>

      <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Login</Text>

      <View style={{ gap: 15 }}>
         <View>
            <Text style={{color: 'black'}}>
              Email
            </Text>
            <TextInput onChangeText={newText => setemail(newText)} style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, color: 'black' }} />
          </View>
          <View>
            <Text style={{color: 'black'}}>
              Password
            </Text>
            <TextInput  onChangeText={newText => setpassword(newText)} style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, color: 'black' }} />
          </View>

          <View style={{alignItems:'flex-end'}}>
            <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: primary_color, paddingVertical: 15, borderRadius: 30, width:120 }}>
              <Text style={{ textAlign: 'center', color: 'white', flexWeight: 'bold' }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

        </View>
    </View>
  )
}

