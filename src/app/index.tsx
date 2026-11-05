// นำเข้า วิว , ข้อความ จาก
import { StyleSheet, Text, View, Image } from 'react-native';

//ส่งออก เริ้มต้น  ฟังค์ชั่น ชื่อฟังค์ชั่น
export default function App(){
    return(
        // ใส่สไล์ตกตแ่ง
        <View style={myStyle.container}>
            {/* แสดงข้อความ */}
            <Text style={myStyle.title}>peerachai</Text>

            {/* แสดงค่าจากไฟล์ */}
            <Image source={require('@/assets/images/images.jpeg')}
                        style={{
                     width: 200, // กว้าง
                height: 200, // สูง
                borderRadius: 200, // ความโค้งของมุม
                borderWidth: 10, // ความกว้างขอบ
                borderColor:"black" // สีของขอบ
            }}
            />
<Image 
source={{uri:"https://assets.qz.com/media/andrea-huls-pareja-sc6ncMeG7AE-unsplash-1920x1280.jpg"}}
  style={{
                     width: 200, // กว้าง
                height: 200, // สูง
                borderRadius: 200, // ความโค้งของมุม
                borderWidth: 10, // ความกว้างขอบ
                borderColor:"black" // สีของขอบ
            }}
/>
// จัดแนวนอน
//* FN + E เปิดอิโมจิ
<View style={{flexDirection: "row"}}>
   <Text>Cat🐈</Text>
   <Text>Dog🐶</Text>
   <Text>Duck🦆</Text>
   <Text>Bird🐦</Text>
   <Text>Fish🐟</Text>
</View>

    </View>
    )
}

const myStyle = StyleSheet.create({
    container:{
        // css บนเว็บ -> background-conlor
        backgroundColor: "purple", // สีพื้นหลัง
        flex: 1, // ขยาย 
        paddingTop: 80, // เพิ่มช่องว่างด้านบนในกล่อง
        alignItems: "center" 
    },
    title:{
        color: "blue",// สี Text
        fontSize:30,// ขนาด Text
        fontWeight:700,// ความหนา
        textAlign: "center",// จัดแนวการวาง

    }
})