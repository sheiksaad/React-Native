import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { primary_color } from '../utils/app_theme.js'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Signup = () => {
  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");

  const navigation = useNavigation();

  const handleSignup = async() => {
    const data = {
      user: name,
      email: email,
      password: password,
    }
    await AsyncStorage.setItem('@user_data', JSON.stringify(data))
    navigation.navigate('Login')
  }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{flex:1, paddingBottom:20}}>
    <ScrollView>
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Image resizeMode='cover' height={350} source={{ uri: 'https://img.freepik.com/premium-vector/useful-tips-abstract-concept-vector-illustration_107173-29003.jpg?w=740' }} />


      <View style={{ paddingHorizontal: 20, gap: 10 }}>

        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
          Signup
        </Text>
        <View style={{ gap: 15 }}>

          <View>
            <Text style={{color: 'black'}}>
              Name
            </Text>
            <TextInput onChangeText={newText => setname(newText)} style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, color: 'black' }} />
          </View>
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
            <TouchableOpacity onPress={handleSignup} style={{ backgroundColor: primary_color, paddingVertical: 15, borderRadius: 30, width:120 }}>
              <Text style={{ textAlign: 'center', color: 'white', flexWeight: 'bold' }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>




        </View>


      </View>

    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}