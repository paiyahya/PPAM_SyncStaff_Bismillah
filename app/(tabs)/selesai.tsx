import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { Link } from 'expo-router';

export default function Selesai() {
  return (
    <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="/">
                <Image source={require('./foto/ceklis.png')} style={{ marginRight: 115 }} />
            </Link>
            <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginRight: 115}}>Tugas</Text>
            <Link href={"/notificationt"}>
                <Image source={require('./foto/notif.png')}/>
            </Link>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
            <View style={{ width: 59, height: 80, backgroundColor: 'rgba(54, 155, 229, 0.2)', borderRadius: 10, padding: 10, marginTop: 20, marginRight: 15 }}>
                <Text style={{ fontSize: 18, color: '#2261BF', fontWeight: 'bold', opacity: 0.6, textAlign: 'center'}}>04</Text>
                <Text style={{ fontSize: 9, color: '#2261BF', opacity: 0.6, textAlign: 'center'}}>Juni</Text>
                <Text style={{ fontSize: 12, color: '#2261BF', opacity: 0.6, textAlign: 'center', marginTop: 15}}>08/08</Text>
            </View>
            <View style={{ width: 59, height: 80, backgroundColor: 'rgba(54, 155, 229, 0.2)', borderRadius: 10, padding: 10, marginTop: 20, marginRight: 15 }}>
                <Text style={{ fontSize: 18, color: '#2261BF', fontWeight: 'bold', opacity: 0.6, textAlign: 'center'}}>05</Text>
                <Text style={{ fontSize: 9, color: '#2261BF', opacity: 0.6, textAlign: 'center'}}>Juni</Text>
                <Text style={{ fontSize: 12, color: '#2261BF', opacity: 0.6, textAlign: 'center', marginTop: 15}}>07/08</Text>            
            </View>
            <View style={{ width: 58, height: 100, backgroundColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 10, padding: 10, marginTop: 20 }}>
                <Text style={{ fontSize: 18, color: '#2261BF', fontWeight: 'bold', opacity: 1, textAlign: 'center'}}>06</Text>
                <Text style={{ fontSize: 9, color: '#2261BF', opacity: 1, textAlign: 'center'}}>Juni</Text>
                <Text style={{ fontSize: 12, color: '#2261BF', fontWeight: 'bold', opacity: 1, textAlign: 'center', marginTop: 30}}>04/08</Text>
            </View>
            <View style={{ width: 59, height: 80, backgroundColor: 'rgba(217, 217, 217, 0.2)', borderRadius: 10, padding: 10, marginTop: 20, marginLeft: 15 }}>
                <Text style={{ fontSize: 18, color: '#D9DD9', fontWeight: 'bold', opacity: 0.5, textAlign: 'center'}}>07</Text>
                <Text style={{ fontSize: 9, color: '#D9D9D9', opacity: 1, textAlign: 'center'}}>Juni</Text>
                <Text style={{ fontSize: 12, color: '#D9D9D9', opacity: 1, textAlign: 'center', marginTop: 15}}>0/08</Text>
            </View>
            <View style={{ width: 59, height: 80, backgroundColor: 'rgba(217, 217, 217, 0.2)', borderRadius: 10, padding: 10, marginTop: 20, marginLeft: 15 }}>
                <Text style={{ fontSize: 18, color: '#D9DD9', fontWeight: 'bold', opacity: 0.5, textAlign: 'center'}}>08</Text>
                <Text style={{ fontSize: 9, color: '#D9D9D9', opacity: 1, textAlign: 'center'}}>Juni</Text>
                <Text style={{ fontSize: 12, color: '#D9D9D9', opacity: 1, textAlign: 'center', marginTop: 15}}>0/08</Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 15}}>
            <Link style={{marginLeft: 50, marginTop: 20}} href="/tugas">
                <Text style={{ fontSize: 14, color: '#2261BF', fontWeight: 'bold', textAlign: 'left', marginTop: 20, marginLeft: 50 }}>Berlangsung</Text>
            </Link>
            <Text style={{ fontSize: 14, color: '#2261BF', fontWeight: 'bold', textAlign: 'left', marginTop: 20, marginLeft: 130 }}>Selesai</Text>
        </View>
        <Image source={require('./foto/garis.png')} style={{ marginTop: 10, marginLeft: 200 }} />
        <ScrollView>
        <Link style={{marginTop: 25, marginLeft: 25}} href="/detailtugasdone3">
            <View style={{ flexDirection: 'row', width: 335, height: 73, backgroundColor: 'rgba(0,0,0,0.1)', borderColor: '#2261BF', borderWidth: 1, borderRadius: 20, padding: 10, marginTop: 5}}>
                <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginTop: 16, marginLeft: 5 }}>Istirahat</Text>
                <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 16, marginLeft: 195 }}>12:00</Text>
            </View>
        </Link>
        <Link style={{marginTop: 15, marginLeft: 25}} href="/detailtugasdone2">
            <View style={{ flexDirection: 'row', width: 335, height: 73, backgroundColor: 'rgba(0,0,0,0.1)', borderColor: '#2261BF', borderWidth: 1, borderRadius: 20, padding: 10, marginTop: 5}}>
                <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginTop: 16, marginLeft: 5 }}>Kontrol Akses</Text>
                <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 16, marginLeft: 160 }}>11:00</Text>
            </View>
        </Link>
        <Link style={{marginTop: 15, marginLeft: 25}} href="/detailtugasdone1">
            <View style={{ flexDirection: 'row', width: 335, height: 73, backgroundColor: 'rgba(0,0,0,0.1)', borderColor: '#2261BF', borderWidth: 1, borderRadius: 20, padding: 10, marginTop: 5}}>
                <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginTop: 16, marginLeft: 5 }}>Patroli Pagi</Text>
                <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 16, marginLeft: 180 }}>10:00 </Text>
            </View>
        </Link>
        <Link style={{marginTop: 15, marginLeft: 25}} href="/detailtugasdone0">
            <View style={{ flexDirection: 'row', width: 335, height: 73, backgroundColor: 'rgba(0,0,0,0.1)', borderColor: '#2261BF', borderWidth: 1, borderRadius: 20, padding: 10, marginTop: 5}}>
                <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginTop: 16, marginLeft: 5 }}>Briefing Pagi</Text>
                <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 16, marginLeft: 170 }}>08:00</Text>
            </View>
        </Link>
        <View style={{ width: 335, height: 273, backgroundColor: '#FFFFFF', borderRadius: 20, padding: 10, marginTop: 5}}></View>
        </ScrollView>
        <View style={{ position: 'absolute', shadowColor: "#000", shadowOffset: {width: 0, height: -2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, left: 0, right: 0, bottom: 87, flexDirection: 'row', backgroundColor: '#FFFFFF', height: 90, width: '100%', alignItems: 'center', justifyContent: 'space-around', zIndex: 1000}}>
            <Link href="/homepage">
                <Image source={require('./foto/beranda.png')} />
            </Link>
            <Image source={require('./foto/tugasbiru.png')} />
            <Link href="/profil">
                <Image source={require('./foto/profil.png')} />
            </Link>        
        </View>
    </View>
  );
}
