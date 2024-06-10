import React from 'react';
import { Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Pemberitahuan1() {
  return (
    <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="/homepage">
                <Text style={{ fontSize: 14, color: '#2261BF', marginRight: 120 }}>Kembali</Text>
            </Link>
            <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginLeft: 70, marginRight: 120 }}>Pemberitahuan</Text>
        </View>
        <View style={{ position: 'relative', alignItems: 'center', justifyContent: "center" }}>
            <Image source={require('./foto/kantor.png')} style={{ width: "100%", marginTop: 30 }} />
            <Text style={{ position: 'absolute', top: '40%', left: '35%', color: 'white', fontWeight: "bold", fontSize: 24 }}>PELATIHAN</Text>
            <Text style={{ position: 'absolute', top: '57%', left: '38%', color: 'white', fontWeight: "bold", fontSize: 24 }}>SATPAM</Text>
        </View>
        <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 20, marginLeft: 20, marginRight: 20 }}>Saudara sekalian,</Text>
        <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 20, marginLeft: 20, marginRight: 20 }}>
          Dengan berita ini kami sampaikan, bahwa mulai tanggal <Text style={{fontWeight: 'bold'}}>10 Juni 2024</Text> akan diadakan Program Pelatihan Satpam untuk meningkatkan kemampuan dan pengetahuan dari tim keamanan kami. Program ini mencakup modul mengenai teknik-teknik pertahanan, protokol dalam menangani situasi darurat, sampai panduan teknologi keamanan terkini. Seluruh anggota tim keamanan diwajibkan untuk mengikuti program tersebut.
        </Text>
    </View>
  );
}
