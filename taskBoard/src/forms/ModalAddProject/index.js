import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Modal from 'react-native-modal'
import { Formik } from 'formik'

import Form from '@/forms/Form'
import Input from '@/fields/Input'
import Button from '@/fields/Button'

const toggleModal = (setIsVisible, isModalVisible) => {
  setIsVisible(!isModalVisible)
}

const ModalAddProject = ({ isModalVisible, setIsVisible }) => {
  return (
    <Modal isVisible={isModalVisible} animationInTiming={500} backdropOpacity={0.8} backdropColor={'white'}>
      <View style={styles.appContainer}>
        <Formik>
          {() => {
            return (
              <Form>
                <Input label="Name" placeholder="Project name" />
                <Button style={styles.buttonPosition}>Create</Button>
                <Button
                  useBackground={false}
                  title="Hide modal"
                  onClick={() => toggleModal(setIsVisible, isModalVisible)}
                >
                  Cancel
                </Button>
              </Form>
            )
          }}
        </Formik>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    justifyContent: 'center',
    height: 250,
  },
  buttonPosition: {},
})

export default ModalAddProject
