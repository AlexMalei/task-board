import React from 'react'
import ImagePicker from 'react-native-image-picker'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

const UpdateProfileImage = ({ onUploadAvatar }) => {
  onChooseImagePress = async () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        alert('You cancelled image picker 😟')
      } else if (response.error) {
        alert('And error occured: ', response.error)
      } else {
        onUploadAvatar(response.uri)
      }
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={onChooseImagePress}>
        <View>
          <Text style={styles.btnTxt}>🤳 Pick image</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default UpdateProfileImage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
})
