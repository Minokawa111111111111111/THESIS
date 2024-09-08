import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const navigation = useNavigation();
const handleLogin =()=>{
  navigation.navigate("LOGIN");
};
const handleSignUp =()=>{
  navigation.navigate("SIGNUP");
};
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo1.png")} style={styles.logo}/>
      <Image source={require("../assets/banner2.png")} style={styles.banner}/>
      <Text style={styles.title}>AYUSIN MO MAG RECYCLE GAGO</Text>
      <Text style={styles.Subtitle}>PAG IKAW NAG KALAT PUTOL TITE MO HAHAHAHAHAAHAHAHAHAHAHAHAHAHAHAHA</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.loginButtonWrapper, {backgroundColor:colors.primary}]}
        onPress={handleLogin}
        >
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButtonWrapper]} onPress={handleSignUp}>
            <Text style={styles.SignUpButtonText}>Sign-Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,
        alignItems:"center",
    },
    logo:{
        height:40,
        width:140,
        marginVertical: 30,
    },
    banner:{
        height:250,
        width: 231,
        marginVertical: 20,
    },
    title:{
        fontSize: 40,
        fontFamily:fonts.SemiBold,
        paddingHorizontal: 20,
        textAlign:"center",
        color:colors.primary,
        marginTop: 40,

    },
    Subtitle:{
        fontSize: 18,
        textAlign:"center",
        color:colors.secondary,
        fontFamily:fonts.Medium,
        paddingHorizontal:20,
        marginVertical:20,
    },
    buttonContainer:{
        flexDirection:"row",
        marginTop:20,
        borderWidth:2,
        borderColor:colors.primary,
        width:"90%",
        height:60,
        borderRadius: 100,
    },
    loginButtonWrapper:{
        justifyContent:"center",
        alignItems: "center",
        width: "50%",
        borderRadius: 98,
    },
    loginButtonText:{    
        color:colors.white,
        fontSize: 18,
        fontFamily:fonts.SemiBold,

    },
    SignUpButtonText:{
        fontSize: 18,
        fontFamily:fonts.SemiBold,
    },
});