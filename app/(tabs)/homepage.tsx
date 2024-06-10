import React, { useState, useEffect } from 'react';
import { Text, View, Image,ScrollView} from 'react-native';
import { Link } from 'expo-router';
import { getAuth } from "firebase/auth";

export default function Homepage() {
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
                <Image source={require('./foto/ceklis.png')} style={{ marginRight: 108}} />
            </Link>
            <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginRight: 108}}>Beranda</Text>
            <Link href={"/notificationh"}>
                <Image source={require('./foto/notif.png')}/>
            </Link>
        </View>
        {userEmail ? (
            <Text style={{fontSize: 30, color: '#2261BF' ,fontWeight: 'bold', textAlign: 'left',  marginTop: 30, marginLeft: 25 }}>Hai, {capitalizeFirstLetter(userEmail.split('@')[0])}!</Text>
        ) : (
            <Text>Loading user data...</Text>
        )}
        <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 2, marginLeft: 25 }}>Security</Text>
        <View style={{ flexDirection: 'row', width: 318, height: 99, borderWidth: 3, borderColor: '#2261BF', borderRadius: 20, padding: 10, marginTop: 20, marginLeft: 25 }}>
            <View>
                <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 8, marginLeft: 5 }}>Selamat Datang!</Text>
                <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 5, marginLeft: 5 }}>Berikut merupakan tugas</Text>
                <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 1, marginLeft: 5 }}>Anda untuk hari ini!</Text>
            </View>
            <Image source={require('./foto/hp.png')} style={{ marginLeft: 50 }} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 15}}>
            <Text style={{ fontSize: 14, color: '#2261BF', fontWeight: 'bold', textAlign: 'left', marginTop: 20, marginLeft: 60 }}>Terbaru</Text>
            <Link style={{marginLeft: 140, marginTop: 20}} href="/homepagetop">    
                <Text style={{ fontSize: 14, color: '#2261BF', fontWeight: 'bold', textAlign: 'left'}}>Teratas</Text>
            </Link>
        </View>
        <Image source={require('./foto/garis.png')} style={{ marginTop: 10 }} />
        <ScrollView>
        <View style={{ width: 335, height: 116, backgroundColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 20, marginLeft: 25 }}>
            <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5 }}>Pelatihan Satpam</Text>
            <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 2, marginLeft: 5, marginBottom: 6 }}>Dengan berita ini kami sampaikan, bahwa mulai tanggal 10 Juni 2024 akan diadakan Program Pelatihan Satpam untuk...</Text>
            <Link style={{marginLeft: 250}} href="/pemberitahuan1">
                <View style={{ width: 50, height: 20, backgroundColor: '#2261BF', borderRadius: 5, marginLeft: 250, marginTop: 3, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{ fontSize: 10, color: '#FFFFFF', textAlign: 'center'}}>Detail</Text>
                </View>
            </Link>
        </View>
        <View style={{ width: 335, height: 116, backgroundColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 20, marginLeft: 25 }}>
            <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5 }}>Penerapan Teknologi Terkini</Text>
            <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 2, marginLeft: 5, marginBottom: 6 }}>Dengan senang hati kami sampaikan, sistem keamanan perusahaan telah ditingkatkan dengan menerapkan teknologi...</Text>
            <Link style={{marginLeft: 250}} href="/pemberitahuan2">
                <View style={{ width: 50, height: 20, backgroundColor: '#2261BF', borderRadius: 5, marginLeft: 250, marginTop: 3, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{ fontSize: 10, color: '#FFFFFF', textAlign: 'center'}}>Detail</Text>
                </View>
            </Link>
        </View>
        <View style={{ width: 335, height: 116, backgroundColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 20, marginLeft: 25 }}>
            <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5 }}>Program Kesehatan Satpam</Text>
            <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 2, marginLeft: 5, marginBottom: 6 }}>Kami memperkenalkan Program Kesehatan Satpam yang bertujuan untuk mempromosikan kesehatan dari tim keamanan...</Text>
            <Link style={{marginLeft: 250}} href="/pemberitahuan3">
                <View style={{ width: 50, height: 20, backgroundColor: '#2261BF', borderRadius: 5, marginLeft: 250, marginTop: 3, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{ fontSize: 10, color: '#FFFFFF', textAlign: 'center'}}>Detail</Text>
                </View>
            </Link>
        </View>
        <View style={{ width: 335, height: 116, backgroundColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 20, marginLeft: 25 }}>
            <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5 }}>Agenda Company Visit Mahasiswa ITB</Text>
            <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 2, marginLeft: 5, marginBottom: 6 }}>Seluruh satpam diimbau untuk meningkatkan kewaspadaan dan bersiaga dalam rangka menyambut kunjungan...</Text>
            <Link style={{marginLeft: 250}} href="/pemberitahuan4">
                <View style={{ width: 50, height: 20, backgroundColor: '#2261BF', borderRadius: 5, marginLeft: 250, marginTop: 3, alignItems:"center", justifyContent: "center"}}>
                    <Text style={{ fontSize: 10, color: '#FFFFFF', textAlign: 'center'}}>Detail</Text>
                </View>
            </Link>
        </View>
        <View style={{ width: 335, height: 373, backgroundColor: '#FFFFFF', borderRadius: 20, padding: 10, marginTop: 5}}></View>
        </ScrollView> 
        <View style={{ position: 'absolute', shadowColor: "#000", shadowOffset: {width: 0, height: -2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, left: 0, right: 0, bottom: 264, flexDirection: 'row', backgroundColor: '#FFFFFF', height: 90, width: '100%', alignItems: 'center', justifyContent: 'space-around', zIndex: 1000}}>
            <Image source={require('./foto/berandabiru.png')} />
            <Link href="/tugas">
                <Image source={require('./foto/tugas.png')} />
            </Link>
            <Link href="/profil">
                <Image source={require('./foto/profil.png')} />
            </Link>
        </View>
    </View>
  );
}
