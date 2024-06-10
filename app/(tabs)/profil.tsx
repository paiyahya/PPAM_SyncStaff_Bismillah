import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { Link } from 'expo-router';
import { getAuth } from "firebase/auth";

export default function Profil() {
    // logged in user email
    const [userEmail, setUserEmail] = useState('');
    
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

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

  return (
    <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="/homepage">
                <Image source={require('./foto/ceklis.png')} style={{ marginRight: 120 }} />
            </Link>
            <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginRight: 120 }}>Profil</Text>
            <Link href="/pengaturan">
                <Image source={require('./foto/setting.png')} />
            </Link>
        </View>
        <ScrollView>
        <View style={{ width: 318, height: 318, backgroundColor: '#2261BF', borderRadius: 20, padding: 10, marginTop: 20, marginLeft: 35, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('./foto/amir.png')} style={{ marginLeft: 5, marginTop: 15, width: 171, height: 171, borderRadius: 171/2 }} />
                {userEmail ? (
                    <Text style={{fontSize: 30, color: 'white' ,fontWeight: 'bold', textAlign: 'left',  marginTop: 5}}>{capitalizeFirstLetter(userEmail.split('@')[0])}</Text>
                ) : (
                    <Text>Loading user data...</Text>
                )}                
                <Text style={{ fontSize: 14, textAlign: 'left', color: '#FFFFFF', marginTop: 3, marginLeft: 5 }}>Security</Text>
                {userEmail ? (
                    <Text style={{fontSize: 14, color: 'white' , textAlign: 'left',  marginTop: 20}}>{userEmail}</Text>
                ) : (
                    <Text>Loading user data...</Text>
                )}
            </View>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
            <View style={{ width: 141, height: 116, backgroundColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 35, marginLeft: 35 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={(require('./foto/hadir.png'))} style={{ width: 55, height: 55, position: 'absolute', top: -14, left: -23 }} />
                    <View>
                        <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginTop: 20, marginLeft: 35 }}>Kehadiran</Text>
                        <Text style={{ fontSize: 8, textAlign: 'left', marginTop: 5, marginLeft: 35 }}>Periode MM1-MM2</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', height: 10, marginTop: 24, marginLeft: 15, marginRight: 15}}>
                    <View style={{ flex: 0.4, backgroundColor: '#2261BF' }} />
                    <View style={{ flex: 0.6, backgroundColor: 'gray' }} />
                </View>
                <Text style={{ fontSize: 8, textAlign: 'left', marginLeft: 90, color: '#2261BF' }}>40%</Text>
            </View>
            <View style={{ width: 141, height: 116, backgroundColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 35, marginLeft: 35 }}>
            <View style={{ flexDirection: 'row' }}>
                    <Image source={(require('./foto/kinerja.png'))} style={{ width: 55, height: 55, position: 'absolute', top: -14, left: -23 }} />
                    <View>
                        <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginTop: 20, marginLeft: 35 }}>Kinerja</Text>
                        <Text style={{ fontSize: 8, textAlign: 'left', marginTop: 5, marginLeft: 35 }}>Periode MM1-MM2</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', height: 10, marginTop: 24, marginLeft: 15, marginRight: 15}}>
                    <View style={{ flex: 0.35, backgroundColor: '#2261BF' }} />
                    <View style={{ flex: 0.65, backgroundColor: 'gray' }} />
                </View>
                <Text style={{ fontSize: 8, textAlign: 'left', marginLeft: 90, color: '#2261BF' }}>35%</Text>
            </View>
            <View style={{ width: 141, height: 116, backgroundColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 35, marginLeft: 35}}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={(require('./foto/gaji.png'))} style={{ width: 55, height: 55, position: 'absolute', top: -14, left: -23 }} />
                    <View>
                        <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginTop: 20, marginLeft: 35 }}>Penggajian</Text>
                        <Text style={{ fontSize: 8, textAlign: 'left', marginTop: 5, marginLeft: 35 }}>Periode MM1-MM2</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', height: 10, marginTop: 24, marginLeft: 15, marginRight: 15}}>
                    <View style={{ flex: 0.3, backgroundColor: '#2261BF' }} />
                    <View style={{ flex: 0.7, backgroundColor: 'gray' }} />
                </View>
                <Text style={{ fontSize: 8, textAlign: 'left', marginLeft: 90, color: '#2261BF' }}>30%</Text>
            </View>
            <View style={{ width: 141, height: 116, backgroundColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 35, marginLeft: 35, marginBottom: 40 }}>
                <View style={{ flexDirection: 'row'}}>
                    <Image source={(require('./foto/cuti.png'))} style={{ width: 55, height: 55, position: 'absolute', top: -14, left: -23 }} />
                    <View>
                        <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginTop: 10, marginLeft: 35 }}>Manajemen</Text>
                        <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 35 }}>Cuti</Text>
                        <Text style={{ fontSize: 8, textAlign: 'left', marginTop: 5, marginLeft: 35 }}>Periode MM1-MM2</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', height: 10, marginTop: 13, marginLeft: 15, marginRight: 15}}>
                    <View style={{ flex: 0.1, backgroundColor: '#2261BF' }} />
                    <View style={{ flex: 0.9, backgroundColor: 'gray' }} />
                </View>
                <Text style={{ fontSize: 8, textAlign: 'left', marginLeft: 90, color: '#2261BF' }}>10%</Text>
            </View>
        </View>
        </ScrollView>
        <View style={{ position: 'absolute', shadowColor: "#000", shadowOffset: {width: 0, height: -2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, left: 0, right: 0, bottom: -92, flexDirection: 'row', backgroundColor: '#FFFFFF', height: 90, width: '100%', alignItems: 'center', justifyContent: 'space-around', zIndex: 1000}}>
            <Link href="/homepage">
                <Image source={require('./foto/beranda.png')} />
            </Link>            
            <Link href="/tugas">
                <Image source={require('./foto/tugas.png')} />
            </Link>            
            <Image source={require('./foto/profilbiru.png')} />
        </View>
    </View>
  );
}
