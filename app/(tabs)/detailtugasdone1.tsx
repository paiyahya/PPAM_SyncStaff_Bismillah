import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { Link } from 'expo-router';

export default function Detailtugasdone1() {
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
                <Text style={{ fontSize: 24, color: '#2261BF', fontWeight: 'bold', textAlign: 'left'}}>Patroli Pagi</Text>
                <Text style={{ fontSize: 16, color: '#000000', textAlign: 'left', marginTop: 5}}>Kamis, 6 Juni 2024</Text>
            </View>
            <View style={{width: 112, height: 61, borderColor: '#2261BF', borderWidth:1, borderRadius: 20, padding: 10, marginLeft: 75}}>
                <Text style={{ fontSize: 24, color: '#2261BF', textAlign: 'center', fontWeight: 'bold', marginTop: 5}}>10:00</Text>
            </View>
        </View>
        <ScrollView>
        <View style={{ width: 335, height: 87, borderColor: 'rgba(34, 97, 191, 0.2)', borderWidth: 1, borderRadius: 20, padding: 10, marginTop: 30, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row'}}>
                <Image source={require('./foto/location.png')} style={{marginLeft: 15}} />
                <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 10}}>Lokasi</Text>
            </View>
            <Text style={{ fontSize: 12, textAlign: 'left', marginTop: 5, marginLeft: 20 }}>Ruangan Server dan Gudang </Text>
        </View>
        <View style={{ width: 335, height: 182, borderColor: 'rgba(34, 97, 191, 0.2)', borderWidth: 1, borderRadius: 20, padding: 10, marginTop: 20, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row'}}>
                <Image source={require('./foto/instruksi.png')} style={{marginLeft: 15}} />
                <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 10}}>Instruksi</Text>
            </View>
            <Text style={{ fontSize: 12, textAlign: 'left', marginTop: 7, marginLeft: 20 }}>1. Lakukan patroli pada area berikut:</Text>
            <Text style={{ fontSize: 12, textAlign: 'left', marginLeft: 33 }}>a. Ruangan server  </Text>
            <Text style={{ fontSize: 12, textAlign: 'left', marginLeft: 33 }}>b. Gudang  </Text>
            <Text style={{ fontSize: 12, textAlign: 'left', marginTop: 5, marginLeft: 20 }}>2. Awasi tindakan yang mencurigakan dan</Text>
            <Text style={{ fontSize: 12, textAlign: 'left', marginLeft: 33 }}>orang-orang yang keluar masuk </Text>
            <Text style={{ fontSize: 12, textAlign: 'left', marginTop: 5, marginLeft: 20 }}>3. Foto keadaan lokasi saat sedang patroli</Text>
        </View>
        <View style={{ width: 335, height: 108, borderColor: 'rgba(34, 97, 191, 0.2)', borderWidth: 1, borderRadius: 20, padding: 10, marginTop: 20, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row'}}>
                <Image source={require('./foto/parameter.png')} style={{marginLeft: 15}} />
                <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 10}}>Parameter</Text>
            </View>
            <Text style={{ fontSize: 12, textAlign: 'left', marginTop: 7, marginLeft: 20 }}>1. Input Foto</Text>
            <Text style={{ fontSize: 12, textAlign: 'left', marginTop: 3, marginLeft: 20 }}>2. Tag Lokasi</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 50, justifyContent: 'center', marginBottom: 200}}>
            <View style={{width: 105, height: 103, backgroundColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10}}>
                <Image source={(require('./foto/approved.png'))} style={{position: 'absolute', top: -10, left: 30 }} />
                <View style={{marginTop: 40}}>
                    <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold',marginLeft: 5 }}>Input Foto</Text>
                    <Text style={{ fontSize: 8, textAlign: 'left', marginTop: 5, marginLeft: 5 }}>xxx1.jpg</Text>
                </View>
            </View>
            <View style={{width: 105, height: 103, backgroundColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10,marginLeft: 10}}>
                <Image source={(require('./foto/approved.png'))} style={{position: 'absolute', top: -10, left: 30 }} />
                <View style={{marginTop: 40}}>
                    <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold',marginLeft: 5 }}>Tag Lokasi</Text>
                    <Text style={{ fontSize: 8, textAlign: 'left', marginTop: 5, marginLeft: 5 }}>Pakuwon Tower</Text>
                </View>
            </View>
        </View>
        </ScrollView>
    </View>
  );
}
