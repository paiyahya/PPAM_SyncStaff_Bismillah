import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { Link } from 'expo-router';

export default function Detailtugasdone3() {
  return (
    <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="/selesai">
                <Text style={{ fontSize: 14, color: '#2261BF', marginRight: 120 }}>Kembali</Text>
            </Link>
            <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginLeft: 90, marginRight: 140 }}>Tugas</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
            <View>
                <Text style={{ fontSize: 24, color: '#2261BF', fontWeight: 'bold', textAlign: 'left'}}>Istirahat</Text>
                <Text style={{ fontSize: 16, color: '#000000', textAlign: 'left', marginTop: 5}}>Kamis, 6 Juni 2024</Text>
            </View>
            <View style={{width: 112, height: 61, borderColor: '#2261BF', borderWidth:1, borderRadius: 20, padding: 10, marginLeft: 75}}>
                <Text style={{ fontSize: 24, color: '#2261BF', textAlign: 'center', fontWeight: 'bold', marginTop: 5}}>12:00</Text>
            </View>
        </View>
        <ScrollView>
        <View style={{ width: 335, height: 87, borderColor: 'rgba(34, 97, 191, 0.2)', borderWidth: 1, borderRadius: 20, padding: 10, marginTop: 30, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row'}}>
                <Image source={require('./foto/location.png')} style={{marginLeft: 15}} />
                <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 10}}>Lokasi</Text>
            </View>
            <Text style={{ fontSize: 12, textAlign: 'left', marginTop: 5, marginLeft: 20 }}>Menyesuaikan (kondisional) </Text>
        </View>
        <View style={{ width: 335, height: 182, borderColor: 'rgba(34, 97, 191, 0.2)', borderWidth: 1, borderRadius: 20, padding: 10, marginTop: 20, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row'}}>
                <Image source={require('./foto/instruksi.png')} style={{marginLeft: 15}} />
                <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 10}}>Instruksi</Text>
            </View>
            <Text style={{ fontSize: 12, textAlign: 'left', marginTop: 7, marginLeft: 20 }}>1. Silakan manfaatkan waktu istirahat Anda</Text>
        </View>
        </ScrollView>
    </View>
  );
}
