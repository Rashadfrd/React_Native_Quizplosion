import React from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from '@expo/vector-icons';
import { useFormik } from "formik";
import { quizSchema } from "../../schemas";
import { useAppContext } from "../../context/appcontext";
import { useNavigation } from "@react-navigation/native";
import { SwipeButton } from 'react-native-expo-swipe-button';

//Delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function Form() {

   const {fetchQuestionsByForm} = useAppContext()
   const navigation = useNavigation()

  const onSubmit = async (values, actions) => {
    fetchQuestionsByForm(values),
    await delay(2000)
    navigation.replace('Quiz')
  }

  const {handleSubmit, values, errors, touched, isSubmitting, handleChange, handleBlur} = useFormik({
    initialValues:{
        category: '',
        number: '',
        level: ''
    },
    validationSchema: quizSchema,
    onSubmit
})


  if(isSubmitting){
    return(
      <View style={styles.formSection}>
        <ActivityIndicator size="large" color='#fff' />
        <Text style={styles.loadingText}>Gözdüyün görək sualdan zaddan var</Text>
      </View>
    )
  }

  return (
    <View style={styles.formSection}>
      <Text style={styles.appTitle}>
        <Image 
          source={require("../../assets/quiz-3.png")}
          style={{width:45,height:55}}  
        />
        uizPlosion
      </Text>
      <Image source={require('../../assets/quiz-5.png')} style={{width:150, height:150, position:'absolute', top:-20, left:-20}}/>
      <Image source={require('../../assets/quiz-6.png')} style={{width:150, height:150, position:'absolute', bottom:20, right:-40}}/>
      {/* <Text style={styles.label}> Kateqoriyanı seçin</Text> */}
      <View style={errors.category && touched.category ? styles.errorInput : styles.formItem}>
        <Picker
          selectedValue={values.category}
          onValueChange={handleChange('category')}
          onBlur={handleBlur('category')}
          dropdownIconColor="#fff"
          placeholder="Kateqoriyanı seçin"
          style={styles.input}
        >
          <Picker.Item label="Sual kateqoriyasını seçin" value="" />
          <Picker.Item label="İdman" value="idman" />
          <Picker.Item label="God (asanı seç error verməsin :D)" value="special" />
        </Picker>
      </View>
      {errors.category && touched.category && <Text style={styles.error}>{errors.category}</Text>}
      {/* <Text style={styles.label}> Sayı seçin</Text> */}
      <View style={errors.number && touched.number ? styles.errorInput : styles.formItem}>
        <Picker
          selectedValue={values.number}
          onValueChange={handleChange('number')}
          onBlur={handleBlur('number')}
          dropdownIconColor="#fff"
          placeholder="Kateqoriyanı seçin"
          style={styles.input}
        >
          <Picker.Item label="Sual sayını seçin" value="" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="20" value="20" />
        </Picker>
      </View>
      {errors.number && touched.number && <Text style={styles.error}>{errors.number}</Text>}
      {/* <Text style={styles.label}> Çətinlik dərəcəsini seçin</Text> */}
      <View style={errors.level && touched.level ? styles.errorInput : styles.formItem}>
        <Picker
          selectedValue={values.level}
          onValueChange={handleChange('level')}
          onBlur={handleBlur('level')}
          dropdownIconColor="#fff"
          placeholder="Kateqoriyanı seçin"
          style={styles.input}
        >
          <Picker.Item label="Çətinlik dərəcəsini seçin" value="" />
          <Picker.Item label="Asan" value="easy" />
          <Picker.Item enabled={values.category == 'special' ? false : true} label="Orta" value="medium" />
          <Picker.Item enabled={values.category == 'special' ? false : true} label="Çətin" value="hard" />
        </Picker>
      </View>
      {errors.level && touched.level && <Text style={styles.error}>{errors.level}</Text>}
      <View style={styles.submitBtn}>
        
      <SwipeButton
        Icon={
          <MaterialIcons name="keyboard-arrow-right" size={50} color="black" />
        }
        onComplete={handleSubmit}
        height={60}
        circleSize={60}
        circleBackgroundColor="#41e5ed"
        title="Sağa sürüşdür →"
        borderRadius={180}
        titleStyle={{color:'white', fontSize:19}}
        containerStyle={{ backgroundColor: 'transparent'}}
        underlayStyle={{backgroundColor:'#41e5ed'}}
        underlayTitleStyle={{ color: 'black', fontSize:19 }}
        underlayTitle="Başla !"
        completeThresholdPercentage={95}
        goBackToStart
      />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  formSection: {
    flex: 1,
    backgroundColor: "#1c1a5e",
    paddingVertical: 35,
    paddingHorizontal: 24,
    justifyContent: "center",
    position:'relative',
    paddingTop:140
  },
  appTitle: {
    fontSize: 55,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
    marginTop:40,
    position:'absolute',
    top:130,
    left:40
  },
  formItem: {
    marginVertical: 10,
    backgroundColor: "#1c1a5e",
    borderRadius: 20,
    borderWidth:1,
    borderColor:'#c7c7c7'
  },
  input: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
  },
  label:{
    fontSize:16,
    color:'#fff'
  },
  submitBtn:{
    width:'100%',
    position:'absolute',
    left:25,
    bottom:35,
  },
  submitBtnText:{
    textAlign:'center',
    fontSize:19
  },
  error:{
    color:'red',
    marginLeft:5,
    marginVertical:5,
    marginBottom:10,
    fontSize:15
  },
  errorInput:{
    marginVertical: 10,
    backgroundColor: "#1c1a5e",
    borderRadius: 20,
    borderWidth:1,
    borderColor:'red'
  },
  loadingText:{
    marginTop:10,
    color:'#fff',
    textAlign:'center',
    fontSize:15
  }
});

export default Form;
