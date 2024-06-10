import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { Link } from 'expo-router';

export default function NotifHome() {
  return (
    <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="/homepage">
                <Text style={{ fontSize: 14, color: '#2261BF', marginRight: 120 }}>Kembali</Text>
            </Link>
            <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginLeft: 70, marginRight: 120 }}>Notifikasi</Text>
        </View>
        <ScrollView>
        <View style={{ width: 335, height: 87, backgroundColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 40, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                        <Image source={require('./foto/notif1.png')} style={{width: 20, height: 20}} />
                        <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5}}>Tugas Baru Ditambahkan</Text>
                    </View>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 5, marginLeft: 10 }}>Tugas keamanan baru telah ditambahkan. Silakan periksa detailnya di aplikasi.</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 8, textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>Kamis</Text>
                    <Text style={{ fontSize: 8, textAlign: 'left', marginTop: 3}}>6 Juni</Text>
                </View>
            </View>
        </View>
        <View style={{ width: 335, height: 87, backgroundColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 10, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                        <Image source={require('./foto/notif2.png')} style={{width: 20, height: 20}} />
                        <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5}}>Area Tidak Aman</Text>
                    </View>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 5, marginLeft: 10 }}>Terjadi aktivitas mencurigakan di Area</Text>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginLeft: 10 }}>utama. Mohon segera periksa.</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 8, textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>Kamis</Text>
                    <Text style={{ fontSize: 8, textAlign: 'left', marginTop: 3}}>6 Juni</Text>
                </View>
            </View>
        </View>
        <View style={{ width: 335, height: 87, borderWidth: 1, borderColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 10, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                        <Image source={require('./foto/notif3.png')} style={{width: 20, height: 20}} />
                        <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5}}>Alarm Kebakaran Aktif</Text>
                    </View>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 5, marginLeft: 10 }}>Mohon segera lakukan evakuasi dan</Text>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginLeft: 10 }}>periksa sumber alarm.</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 8, textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>Kamis</Text>
                    <Text style={{ fontSize: 8, textAlign: 'left', marginTop: 3}}>6 Juni</Text>
                </View>
            </View>
        </View>
        <View style={{ width: 335, height: 87, borderWidth: 1, borderColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 10, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                        <Image source={require('./foto/notif2.png')} style={{width: 20, height: 20}} />
                        <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5}}>Laporan Keamanan Belum Dikirim</Text>
                    </View>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 5, marginLeft: 10 }}>Laporan pergantian shift belum diserahkan.</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 8, textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>Kamis</Text>
                    <Text style={{ fontSize: 8, textAlign: 'left', marginTop: 3}}>6 Juni</Text>
                </View>
            </View>
        </View>
        <View style={{ width: 335, height: 87, borderWidth: 1, borderColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 10, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                        <Image source={require('./foto/notif4.png')} style={{width: 20, height: 20}} />
                        <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5}}>Pengaturan Diperbarui</Text>
                    </View>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 5, marginLeft: 10 }}>Mohon cek perubahan pada pengaturan.</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 8, textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>Kamis</Text>
                    <Text style={{ fontSize: 8, textAlign: 'left', marginTop: 3}}>6 Juni</Text>
                </View>
            </View>
        </View>
        <View style={{ width: 335, height: 87, borderWidth: 1, borderColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 10, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                        <Image source={require('./foto/notif1.png')} style={{width: 20, height: 20}} />
                        <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5}}>Jam Istirahat</Text>
                    </View>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 5, marginLeft: 10 }}>Silakan manfaatkan waktu istirahat.</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 8, textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>Kamis</Text>
                    <Text style={{ fontSize: 8, textAlign: 'left', marginTop: 3}}>6 Juni</Text>
                </View>
            </View>
        </View>
        <View style={{ width: 335, height: 87, borderWidth: 1, borderColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 10, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                        <Image source={require('./foto/notif1.png')} style={{width: 20, height: 20}} />
                        <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5}}>Kehadiran Tercatat</Text>
                    </View>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 5, marginLeft: 10 }}>Kehadiran Briefing Anda telah diverifikasi.</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 8, textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>Kamis</Text>
                    <Text style={{ fontSize: 8, textAlign: 'left', marginTop: 3}}>6 Juni</Text>
                </View>
            </View>
        </View>
        <View style={{ width: 335, height: 87, borderWidth: 1, borderColor: 'rgba(34, 97, 191, 0.1)', borderRadius: 20, padding: 10, marginTop: 10, marginLeft: 25 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                        <Image source={require('./foto/notif3.png')} style={{width: 20, height: 20}} />
                        <Text style={{ fontSize: 14, color: '#2261BF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5}}>Gerakab Mencurigakan</Text>
                    </View>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 5, marginLeft: 10 }}>Terdeteksi gerakan emncurigakan di pintu utama.</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 8, textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>Kamis</Text>
                    <Text style={{ fontSize: 8, textAlign: 'left', marginTop: 3}}>6 Juni</Text>
                </View>
            </View>
        </View>
        </ScrollView>
    </View>
  );
}
