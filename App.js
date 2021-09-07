import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TextInput, Alert, Pressable,Text } from 'react-native';

export default function ProfilePage({}) {
    useEffect(() => {
        readData();
    })
    const [fullName, setfullName] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [email, setemail] = useState('');
    const [birthday, setbirthday] = useState('');

    const STORAGE_KEY = '@save_fullName'
    const STORAGE_KEY1 = '@save_phoneNumber'
    const STORAGE_KEY2 = '@save_email'
    const STORAGE_KEY3 = '@save_birthday'

    const saveData = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, fullName)
        } catch (e) {
            Alert.alert('Failed to save the data to the storage')
        }
        try {
            await AsyncStorage.setItem(STORAGE_KEY1, phoneNumber)
        } catch (e) {
            Alert.alert('Failed to save the data to the storage')
        }
        try {
            await AsyncStorage.setItem(STORAGE_KEY2, email)
        } catch (e) {
            Alert.alert('Failed to save the data to the storage')
        }
        try {
            await AsyncStorage.setItem(STORAGE_KEY3, birthday)
        } catch (e) {
            Alert.alert('Failed to save the data to the storage')
        }
        Alert.alert('Your details have been saved successfully');
    }


    const readData = async () => {

        try {
            const username = await AsyncStorage.getItem(STORAGE_KEY)

            if (username !== null) {
                setfullName(username)
            }
        } catch (e) {
            Alert.alert('Failed to fetch the data from storage')
        }
        try {
            const userphoneNumber = await AsyncStorage.getItem(STORAGE_KEY1)

            if (userphoneNumber !== null) {
                setphoneNumber(userphoneNumber)
            }
        } catch (e) {
            Alert.alert('Failed to fetch the data from storage')
        }

        try {
            const useremail = await AsyncStorage.getItem(STORAGE_KEY2)

            if (useremail !== null) {
                setemail(useremail)
            }
        } catch (e) {
            Alert.alert('Failed to fetch the data from storage')
        }
        
        try {
            const userbirthday = await AsyncStorage.getItem(STORAGE_KEY3)

            if (userbirthday !== null) {
                setbirthday(userbirthday)
            }
        } catch (e) {
            Alert.alert('Failed to fetch the data from storage')
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    color='white'
                    borderColor='pink'
                    value={fullName}
                    onChangeText={(text) => setfullName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Phone No.'
                    keyboardType='number-pad'
                    color='white'
                    borderColor='pink'
                    value={phoneNumber}
                    onChangeText={(text) => setphoneNumber(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    keyboardType='email-address'
                    borderColor='pink'
                    color='white'
                    value={email}
                    onChangeText={(text) => setemail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Birthdate'
                    color='white'
                    borderColor='pink'
                    value={birthday}
                    onChangeText={(text) => setbirthday(text)}
                />
                
                <Pressable style={styles.button} onPress={() => saveData()}>
                    <Text style={styles.text}>SAVE YOUR DETAILS</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>WELCOME!</Text>
                </Pressable>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0E21',
        justifyContent: 'center'
    },
    inputContainer: {
        padding: 20,
        margin: 10
    },
    input: {
        height: 45,
        paddingLeft: 10,
        margin: 15,
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderRadius: 15
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop:15,
        marginBottom:15,
        borderRadius: 15,
        elevation: 10,
        backgroundColor: 'deepskyblue',
      },
      text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})