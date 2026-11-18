// นำเข้า วิว , ข้อความ จาก
import { StyleSheet, Text, View, Image } from 'react-native';

//ส่งออก เริ้มต้น  ฟังค์ชั่น ชื่อฟังค์ชั่น
export default function App() {
    return (
        // ใส่สไล์ตกตแ่ง
        <View style={myStyle.container}>
            {/* แสดงข้อความ */}

            {/* แสดงค่าจากไฟล์ */}
            <Image source={require('@/assets/images/Peerachai.jpg')}
                style={{
                    width: 200, // กว้าง
                    height: 200, // สูง
                    borderRadius: 200, // ความโค้งของมุม
                    borderWidth: 10, // ความกว้างขอบ
                    borderColor: "black" // สีของขอบ
                }}
            />
            <Text style={myStyle.title1}>Peerachai Duangjai</Text>

            <Text style={myStyle.title2}>ต๊ะบอยสเก๊าท์</Text>

            <View style={myStyle.box}>
                <Text style={myStyle.title3}>ห้อง Bit1/5 เลขที่12</Text>
                <Text style={myStyle.title3}>Email peerachai.Duangjai@e-tech.ac.th</Text>
                <Text style={myStyle.title3}>Phone 0826568756</Text>
            </View>

                    

            <Text style={myStyle.title4} >ภาพกิจกรรม</Text>
            <View style={{flexDirection: 'row'}}>

            <Image
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffuMoZBqBctxneK_STTZ57p7rE1yj--s4Mk6rPYIbyvxLGHnriuzl-uSD&s=10" }}
                style={{
                    width: 100, // กว้าง
                    height: 100, // สูง
                    borderRadius: 20, // ความโค้งของมุม
                    borderColor: "black", // สีของขอบ
                    margin:16
                }}
            />
            <Image
                source={{ uri: "https://www.cktravels.com/wp-content/uploads/2023/09/pattaya-65.jpg" }}
                style={{
                    width: 100, // กว้าง
                    height: 100, // สูง
                    borderRadius: 20, // ความโค้งของมุม
                    borderColor: "black", // สีของขอบ
                    margin:16
                }}
            />
            <Image
                source={{ uri: "https://cdn.getyourguide.com/image/format=avif%2Cfit=cover%2Cgravity=auto%2Cquality=60/dam/AdobeStock_1102065107-HEADER-MOBILE.jpg" }}
                style={{
                    width: 100, // กว้าง
                    height: 100, // สูง
                    borderRadius: 20, // ความโค้งของมุม
                    borderColor: "black", // สีของขอบ
                    margin:16
                }}
            />
</View>
            

        </View>
    )
}

const myStyle = StyleSheet.create({
    container: {
        // css บนเว็บ -> background-conlor
        backgroundColor: "purple", // สีพื้นหลัง
        flex: 1, // ขยาย 
        paddingTop: 80, // เพิ่มช่องว่างด้านบนในกล่อง
        alignItems: "center"
    },
    title1: {
        color: "black",// สี Text
        fontSize: 20,// ขนาด Text
        fontWeight: 500,// ความหนา
        textAlign: "center",// จัดแนวการวาง

    },
    title2:{
         color: "gray",// สี Text
        fontSize: 20,// ขนาด Text
        fontWeight: 100,// ความหนา
        textAlign: "center",// จัดแนวการวาง
    },
    box:{
        backgroundColor:"gray",
        padding:50,
        borderRadius:16,
        margin:16
    },
    title3:{
        color: "black",// สี Text
        fontSize: 20,// ขนาด Text
        fontWeight: 500,// ความหนา
        
    },
    title4:{
       marginRight:300,
    }
})