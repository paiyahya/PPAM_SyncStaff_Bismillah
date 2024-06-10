import React from 'react';
import { Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Pemberitahuan4() {
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
            <Text style={{ position: 'absolute', top: '40%', left: '25%', color: 'white', fontWeight: "bold", fontSize: 24 }}>AGENDA COMPANY</Text>
            <Text style={{ position: 'absolute', top: '57%', left: '20%', color: 'white', fontWeight: "bold", fontSize: 24 }}>VISIT MAHASISWA ITB</Text>
        </View>
        <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 20, marginLeft: 20, marginRight: 20 }}>Saudara sekalian,</Text>
        <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 20, marginLeft: 20, marginRight: 20 }}>
        Seluruh satpam dihimbau untuk meningkatkan kewaspadaan dan bersiaga dalam rangka menyambut kunjungan mahasiswa ITB pada tanggal <Text style={{fontWeight: 'bold'}}>3 Juni 2024</Text> yang berlangsung dari <Text style={{fontWeight: 'bold'}}>jam 9.00 hingga 14.00</Text> di area kantor.
        </Text>
        <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 20, marginLeft: 20, marginRight: 20 }}>Terima kasih atas perhatian dan kerjasamanya.</Text>
    </View>
  );
}
