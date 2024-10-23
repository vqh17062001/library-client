import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import backgroundimg from '@/assets/images/imgbackground.png'
import { Link } from 'expo-router'
const Homepage = () => {
  return (

    <ImageBackground source={backgroundimg}
      resizeMode='cover'
      style={styles.image}

    >

      <View style={styles.container}>
        <Text style={styles.title} >Thư viện </Text>

        <Link href="/book" style={styles.link} asChild>
          <Pressable style={styles.button}>

            <Text style={styles.buttontext}> Sách </Text>

          </Pressable>

        </Link>

      </View>

    </ImageBackground >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Canh giữa theo chiều dọc
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 40,
    marginBottom: 120, // Điều chỉnh giá trị này để đưa chữ xuống dưới
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  link: {
    color: 'white',
    fontSize: 30,
    marginTop: 40, // Điều chỉnh giá trị này để đưa chữ xuống dưới
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    textDecorationLine: 'underline',
    padding: 4,
  },


  button: {

    height: 50,

    justifyContent: 'center',
    borderRadius: 20,

    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.75)',


  },


  buttontext: {
    color: 'white',
    fontSize: 16,

    fontWeight: 'bold', // Điều chỉnh giá trị này để đưa chữ xuống dưới
    textAlign: 'center',



    padding: 4,
  },


})
export default Homepage