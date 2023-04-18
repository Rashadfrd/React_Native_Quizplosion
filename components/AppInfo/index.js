import React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { tools } from "../../utils/constants";

function AppInfo() {

  const navigation = useNavigation()

  
  return (
    <View style={styles.appInfo}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Landing')}} activeOpacity={.4}>
          <AntDesign name="back" size={34} color="black" />
        </TouchableOpacity>
        <Text style={styles.navItem}>Quizplosiona xoş gəldin !</Text>
      </View>
      <View style={styles.hero}>
        <Image style={{width:170, height:170}} source={require('../../assets/quiz-3.png')}/>
      </View>
      <Text style={styles.about}>Haqqında</Text>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}  style={styles.tools}>
            {
                tools.map((tool)=>{
                    return(
                        <View key={tool.id} style={styles.tool}>
                            {tool.icon}
                            <View style={{alignItems:'center', justifyContent:'center'}}>
                                <Text>{tool.text}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>
            Salam, mən, bu çox lazımlı appin yaradıcısı Rəşad Fərhadzadə, sizi salamlayıram. 22 yaşında camaat uşaq saxlıyanda mən hələ də özümü inkişaf elətdirib, iş həyatına atılmağa çalışıram. Nə hikmətdisə cv-mə cavab verən yoxdu
        </Text>
        <Text style={styles.infoText}>
            Nəysə, irəli düyməsinə basdıqdan sonra siz istədiyiniz kateqoriyanı, sual sayını və çətinlik dərəcəsini seçib generate olunan quizdən yararlana bilərsiniz. İşdi əgər dediyim kimi seçimlərinizi edəcək bir pəncərə açılmadısa, deməli hələ onun kodunu yazmamışam :D
        </Text>
      </View>

      <TouchableOpacity onPress={()=>{navigation.navigate('Quiz')}} activeOpacity={.4} style={styles.button}>
        <Text style={styles.buttonText}>İrəli</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    appInfo:{
        flex:1,
        backgroundColor:'#fff',
        paddingVertical: 35,
        paddingTop:20,
        paddingHorizontal: 15,
        gap:20
    },
    nav:{
      flexDirection:'row',
       alignItems:'center',
       gap:30,
    },
    navItem:{
      fontSize:20
    },
    hero:{
        backgroundColor: "#1c1a5e",
        width:'100%',
        height:210,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:20
    },
    about:{
        paddingLeft:10,
        fontSize:30,
        fontWeight:600,
        color:'#1c1a5e'
    },
    tool:{
        gap:5,
        borderWidth:1,
        borderColor:'#a1a1a1',
        marginHorizontal:10,
        paddingVertical:15,
        paddingHorizontal:15,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        width:'100%',
        backgroundColor:'#1c1a5e',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#1c1a5e',
        borderRadius:10,
        padding:5
    },
    buttonText:{
        fontSize: 23,
        color:'#fff'
    },
    infoText:{
        color:'#1c1a5e',
        paddingLeft:5,
        textAlign:'justify'
    }
});

export default AppInfo;
