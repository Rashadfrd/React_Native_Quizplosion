import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFormik } from "formik";
import { quizSchema } from "../../schemas";

function Form() {

  const onSubmit = (values, actions) => {
    console.log(values)
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

  return (
    <View style={styles.formSection}>
      <Image source={require('../../assets/quiz-5.png')} style={{width:150, height:150, position:'absolute', top:-20, left:-20}}/>
      <Image source={require('../../assets/quiz-6.png')} style={{width:150, height:150, position:'absolute', bottom:20, right:-40}}/>
      <Text style={styles.label}> Kateqoriyanı seçin</Text>
      <View style={errors.category && touched.category ? styles.errorInput : styles.formItem}>
        <Picker
          selectedValue={values.category}
          onValueChange={handleChange('category')}
          onBlur={handleBlur('category')}
          dropdownIconColor="#fff"
          placeholder="Kateqoriyanı seçin"
          style={styles.input}
        >
          <Picker.Item label="İdman" value="sport" />
          <Picker.Item label="God" value="special" />
        </Picker>
      </View>
      {errors.category && touched.category && <Text style={styles.error}>{errors.category}</Text>}
      <Text style={styles.label}> Sayı seçin</Text>
      <View style={errors.number && touched.number ? styles.errorInput : styles.formItem}>
        <Picker
          selectedValue={values.number}
          onValueChange={handleChange('number')}
          onBlur={handleBlur('number')}
          dropdownIconColor="#fff"
          placeholder="Kateqoriyanı seçin"
          style={styles.input}
        >
          <Picker.Item label="5" value="5" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="20" value="20" />
        </Picker>
      </View>
      {errors.number && touched.number && <Text style={styles.error}>{errors.number}</Text>}
      <Text style={styles.label}> Çətinlik dərəcəsini seçin</Text>
      <View style={errors.level && touched.level ? styles.errorInput : styles.formItem}>
        <Picker
          selectedValue={values.level}
          onValueChange={handleChange('level')}
          onBlur={handleBlur('level')}
          dropdownIconColor="#fff"
          placeholder="Kateqoriyanı seçin"
          style={styles.input}
        >
          <Picker.Item label="Asan" value="easy" />
          <Picker.Item label="Orta" value="medium" />
          <Picker.Item label="Çətin" value="hard" />
        </Picker>
      </View>
      {errors.level && touched.level && <Text style={styles.error}>{errors.level}</Text>}
      <TouchableOpacity onPress={handleSubmit} activeOpacity={.7} style={styles.submitBtn}>
        <Text style={styles.submitBtnText}>Başla</Text>
      </TouchableOpacity>
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
    position:'relative'
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
    backgroundColor:"#41e5ed",
    paddingVertical:15,
    borderRadius:20
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
  }
});

export default Form;
