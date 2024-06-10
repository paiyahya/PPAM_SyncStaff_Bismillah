import React from 'react';
import { Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Pemberitahuan2() {
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
            <Text style={{ position: 'absolute', top: '40%', left: '33%', color: 'white', fontWeight: "bold", fontSize: 24 }}>PENERAPAN</Text>
            <Text style={{ position: 'absolute', top: '57%', left: '21%', color: 'white', fontWeight: "bold", fontSize: 24 }}>TEKNOLOGI TERKINI</Text>
        </View>
        <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 20, marginLeft: 20, marginRight: 20 }}>Saudara sekalian,</Text>
        <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 20, marginLeft: 20, marginRight: 20 }}>Dengan senang hati kami sampaikan, sistem keamanan perusahaan telah ditingkatkan dengan menerapkan teknologi CCTV dan pengawas terkini. Peningkatan kualitas ini tentu saja akan meningkatkan efektivitas tim keamanan dalam melakukan pemantauan.</Text>
        <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 20, marginLeft: 20, marginRight: 20 }}>
        Pemasangan akan dilakukan selama dua minggu ke depan, mulai tanggal <Text style={{fontWeight: 'bold'}}>7 Juni 2024 sampai 21 Juni 2024</Text> . Karena itu, beberapa lokasi di perusahaan tidak dapat diakses. Terima kasih atas pengertiannya.
        </Text>
    </View>
  );
}
