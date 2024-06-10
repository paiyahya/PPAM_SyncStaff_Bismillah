import React from 'react';
import { Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Pemberitahuan3() {
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
            <Text style={{ position: 'absolute', top: '40%', left: '35%', color: 'white', fontWeight: "bold", fontSize: 24 }}>PROGRAM</Text>
            <Text style={{ position: 'absolute', top: '57%', left: '21%', color: 'white', fontWeight: "bold", fontSize: 24 }}>KESEHATAN SATPAM</Text>
        </View>
        <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 20, marginLeft: 20, marginRight: 20 }}>Saudara sekalian,</Text>
        <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 20, marginLeft: 20, marginRight: 20 }}>
        Kami memperkenalkan Program Kesehatan Satpam yang bertujuan untuk mempromosikan kesehatan dari tim keamanan. Program ini akan menawarkan check-up kesehatan, kelas fitness, dan seminar manajemen stress serta kesehatan mental. Partisipasi tidak diwajibkan namun sangat diharapkan bagi seluruh anggota tim keamanan untuk mengikuti program demi lingkungan kerja yang lebih baik. Program akan dilaksanakan selama bulan <Text style={{fontWeight: 'bold'}}>Agustus</Text>.
        </Text>
    </View>
  );
}
