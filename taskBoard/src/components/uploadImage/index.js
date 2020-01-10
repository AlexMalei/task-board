import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import firebase from 'react-native-firebase'
import uuid from 'uuid/v4'

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

export default class Apps extends Component {
  state = {
    imgSource: '',
  }

  uploadToFirebase = blob => {
    return new Promise((resolve, reject) => {
      var storageRef = firebase.storage().ref()

      storageRef
        .child('uploads/photo.jpg')
        .put(blob, {
          contentType: 'image/jpeg',
        })
        .then(snapshot => {
          blob.close()
          resolve(snapshot)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  /**
   * Select image method
   */
  pickImage = () => {
    console.log('button pressed')

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        alert('You cancelled image picker 😟')
      } else if (response.error) {
        alert('And error occured: ', response.error)
      } else {
        const source = { uri: response.uri }
        console.log('response.uri', response.uri)
        this.uploadToFirebase(response.uri)

        this.setState({
          imgSource: source,
          imageUri: response.uri,
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={this.pickImage}>
          <View>
            <Text style={styles.btnTxt}>Pick image</Text>
          </View>
        </TouchableOpacity>

        {this.state.imgSource ? (
          <Image source={this.state.imgSource} style={styles.image} />
        ) : (
          <Text>Select an Image!</Text>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  btn: {
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.3)',
    backgroundColor: 'rgb(68, 99, 147)',
  },
  btnTxt: {
    color: '#fff',
  },
  image: {
    marginTop: 20,
    minWidth: 200,
    height: 200,
  },
})
