import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { Link } from 'expo-router';

export default function Tugas() {
  return (
    <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="/homepage">
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
            <Text style={{ fontSize: 14, color: '#2261BF', fontWeight: 'bold', textAlign: 'left', marginTop: 20, marginLeft: 50 }}>Berlangsung</Text>
            <Link style={{marginLeft: 130, marginTop: 20}} href="/selesai">    
                <Text style={{ fontSize: 14, color: '#2261BF', fontWeight: 'bold', textAlign: 'left', marginTop: 20, marginLeft: 120 }}>Selesai</Text>
            </Link>
        </View>
        <Image source={require('./foto/garis.png')} style={{ marginTop: 10 }} />
        <ScrollView>
        <View style={{ flexDirection: 'row', width: 335, height: 73, backgroundColor: '#FFFFFF', borderColor: '#ED3C44', borderWidth: 1, borderRadius: 20, padding: 10, marginTop: 20, marginLeft: 25 }}>
            <View>
                <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginTop: 7, marginLeft: 5 }}>Patroli Siang</Text>
                <Text style={{ fontSize: 12, textAlign: 'left', color: '#ED3C44', marginTop: 5, marginLeft: 5 }}>Terlambat</Text>
            </View>
            <Text style={{ fontSize: 14, textAlign: 'left', color: '#ED3C44', marginTop: 16, marginLeft: 165 }}>13:00</Text>
        </View>
        <Link style={{marginTop: 25, marginLeft: 25}} href="/detailtugas1">
            <View style={{ flexDirection: 'row', width: 335, height: 73, backgroundColor: '#FFFFFF', borderColor: '#2261BF', borderWidth: 1, borderRadius: 20, padding: 10, marginTop: 5}}>
                <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginTop: 16, marginLeft: 5 }}>Patroli Sore</Text>
                <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 16, marginLeft: 175 }}>14:00</Text>
            </View>
        </Link>
        <Link style={{marginTop: 15, marginLeft: 25}} href="/detailtugas2">
            <View style={{ flexDirection: 'row', width: 335, height: 73, backgroundColor: '#FFFFFF', borderColor: '#2261BF', borderWidth: 1, borderRadius: 20, padding: 10, marginTop: 5}}>
                <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginTop: 16, marginLeft: 5 }}>Kontrol Parkir</Text>
                <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 16, marginLeft: 162 }}>16:00</Text>
            </View>
        </Link>
        <Link style={{marginTop: 15, marginLeft: 25}} href="/detailtugas3">
            <View style={{ flexDirection: 'row', width: 335, height: 73, backgroundColor: '#FFFFFF', borderColor: '#2261BF', borderWidth: 1, borderRadius: 20, padding: 10, marginTop: 5}}>
                <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginTop: 16, marginLeft: 5 }}>Briefing Sore</Text>
                <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 16, marginLeft: 165 }}>17:00</Text>
            </View>
        </Link>
        <View style={{ width: 335, height: 473, backgroundColor: '#FFFFFF', borderRadius: 20, padding: 10, marginTop: 5}}></View>
        </ScrollView>
        <View style={{ position: 'absolute', shadowColor: "#000", shadowOffset: {width: 0, height: -2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, left: 0, right: 0, bottom: 190, flexDirection: 'row', backgroundColor: '#FFFFFF', height: 90, width: '100%', alignItems: 'center', justifyContent: 'space-around', zIndex: 1000}}>
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
