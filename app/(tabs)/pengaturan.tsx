import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { signOut, getAuth } from 'firebase/auth';
import { auth } from './config/firebase';

export default function Setting() {
    // logged in user email
    const [userEmail, setUserEmail] = useState('');

    const moveToPage = (page: string) => {
        // Handle button press
        router.push(page);
    };

    //SignOut Handler
    const handleLogout = async () => {
        await signOut(auth);
    }

    let email = '';
    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        // Mendapatkan informasi pengguna yang sedang login
        if (user !== null) {
            email = user.email!;
        }
        if (email !== null) {
          setUserEmail(email);
        }
    }, []);


  return (
    <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="/profil">
                <Text style={{ fontSize: 14, color: '#2261BF', marginRight: 120 }}>Kembali</Text>
            </Link>
            <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginLeft: 70, marginRight: 120 }}>Pengaturan</Text>
        </View>
        <ScrollView>
        <View style={{ width: 335, height: 87, borderWidth: 1, borderColor: '#485460', borderRadius: 20, padding: 10, marginTop: 40, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                        <Image source={require('./foto/diri.png')} style={{width: 20, height: 20}} />
                        <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5}}>Data Diri</Text>
                    </View>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 5, marginLeft: 10 }}>Edit data pribadi akun Anda</Text>
                </View>
                <Image source={require('./foto/panah.png')}></Image>
            </View>
        </View>
        <View style={{ width: 335, height: 87, borderWidth: 1, borderColor: '#485460', borderRadius: 20, padding: 10, marginTop: 15, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                        <Image source={require('./foto/key.png')} style={{width: 20, height: 20}} />
                        <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5}}>Kata Sandi</Text>
                    </View>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 5, marginLeft: 10 }}>Ubah kata sandi dari akun Anda</Text>
                </View>
                <Image source={require('./foto/panah.png')}></Image>
            </View>
        </View>
        <TouchableOpacity onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdtu7_sPmWPBONac5rNYl9aOKGn4s2e5B5jdgMbEZN5ISf1gA/viewform?usp=sharing')}>
            <View style={{ width: 335, height: 87, borderWidth: 1, borderColor: '#485460', borderRadius: 20, padding: 10, marginTop: 15, marginLeft: 25, marginBottom: 100 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                            <Image source={require('./foto/report.png')} style={{width: 20, height: 20}} />
                            <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5}}>Bantuan</Text>
                        </View>
                        <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 5, marginLeft: 10 }}>Isi form bantuan untuk menyampaikan kritik atau saran Anda</Text>
                    </View>
                    <Image source={require('./foto/panah.png')}></Image>
                </View>
            </View>
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 200}}>
            <TouchableOpacity
                onPress={() => {
                    Alert.alert(
                        "Logout Confirmation",
                        "Are you sure you want to logout?",
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { 
                                text: "OK", 
                                onPress: () => moveToPage('/') 
                            }
                        ],
                        { cancelable: false }
                    );
                }}
                style={{height: 50, width: 200, backgroundColor: '#FA4D55', borderRadius: 20, justifyContent:'center', alignItems:'center'}}
            >
                <Text style={{color: 'white', textAlign: 'center', fontWeight:'bold'}}>Logout</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  );
}
