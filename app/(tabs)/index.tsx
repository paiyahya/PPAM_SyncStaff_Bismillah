import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image,  TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async () => {
    // Implement your login logic here
    if (email && password ) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/homepage');
        } catch (err) {
            console.error('Failed to sign in');  
        }
    };
}

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Image
          source={require('./foto/logo.png')} 
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Masuk</Text>
      <Text style={styles.label}>*Any-Work-Related-Email</Text>
      <TextInput
        inputMode='email'
        value={email}
        onChangeText={value=> setEmail(value)}
        placeholder="Input your email..."
        style={{
          marginTop: 10,
          marginBottom: 10,
          width: 318,
          height: 46,
          borderColor: 'gray',
          borderRadius: 15,
          borderWidth: 1,
          paddingLeft: 10,
        }}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={value=> setPassword(value)}
        placeholder="Input your password..."
        secureTextEntry
        style={{
          marginTop: 10,
          marginBottom: 30,
          width: 318,
          height: 46,
          borderColor: 'gray',
          borderRadius: 15,
          borderWidth: 1,
          paddingLeft: 10,
        }}
      />
      <TouchableOpacity style={{ 
        marginTop: 20,
        marginBottom: 10,
        width: 250,
        height: 50,
        alignItems: 'center', 
        backgroundColor: '#2261BF', 
        borderRadius: 15,
        padding: 10 
      }} onPress={handleSubmit} >
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center', marginTop: 5}}>Masuk</Text>
      </TouchableOpacity>
      <Text style={styles.buttonTitle}>Tidak dapat memasuki akun?</Text>
      <TouchableOpacity onPress={() => console.log('Button pressed')}>
        <Text style={styles.underlineButton}>Laporkan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  underlineButton: {
    fontSize: 12,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#2261BF', 
    textAlign: 'center', 
    marginTop: 5, 
  },
  buttonPassword: {
    fontSize: 12,
    color: '#2261BF',
    marginBottom: 50,
  },
  buttonImage: {
    width: 321.83,
    height: 55,
    marginBottom: 10,
  },
  buttonTitle: {
    fontSize: 12,
    color: '#2261BF',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 1,
    textAlign: 'left',
    marginLeft: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#2261BF',
    fontWeight: '600',
    marginTop: 50,
    marginBottom: 40,
  },
  rectangle: {
    position: 'absolute',
    top: 0,
    height: 164.09, 
    width: 388, 
    backgroundColor: '#2261BF', 
    justifyContent: 'center', 
    alignItems: 'center',
    borderBottomLeftRadius: 20,
  },
  image: {
    width: 163, 
    height: 37, 
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  input: {
    height: 46,
    width: 318,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    borderColor: '#5E6D7D',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 20,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default Login;
