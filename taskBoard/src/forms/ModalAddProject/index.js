import React from 'react'
import Modal from 'react-native-modal'
import { StyleSheet, View, Text } from 'react-native'
import { Formik } from 'formik'
import { useMutation } from '@apollo/react-hooks'

import Form from '@/forms/Form'
import Input from '@/fields/Input'
import Button from '@/fields/Button'
import { ADD_PROJECT } from '@/mutations'
import { theme } from '@/theme'

const ModalAddProject = ({ isModalVisible, setIsVisible, name, id }) => {
  const [addProject] = useMutation(ADD_PROJECT)

  const toggleModal = (setIsVisible, isModalVisible) => {
    setIsVisible(!isModalVisible)
  }

  const handleAddProject = (user_id, background_color, name, task_prefix) => {
    toggleModal(setIsVisible, isModalVisible)
    addProject({
      variables: { user_id: user_id, background_color: background_color, name: name, task_prefix: task_prefix },
    }).then(
      ({
        data: {
          insert_projects: { returning },
        },
      }) => {
        returning[0].id
      },
    )
  }

  return (
    <Modal
      isVisible={isModalVisible}
      useNativeDriver={true}
      animationInTiming={800}
      animationOutTiming={800}
      backdropOpacity={0.8}
      backdropColor={theme.colors.red}
    >
      <View style={styles.appContainer}>
        <Formik initialValues={{ name }}>
          {({ values, handleChange }) => {
            return (
              <Form>
                <Input
                  label="Name"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  placeholder="Project name"
                  containerStyle={styles.input}
                />
                <Button
                  style={styles.buttonPosition}
                  onPress={() => handleAddProject(id, theme.colors.dawnPink, values.name, '0')}
                >
                  Create
                </Button>
                <Button
                  useBackground={false}
                  title="Hide modal"
                  onPress={() => toggleModal(setIsVisible, isModalVisible)}
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
  buttonPosition: {
    marginVertical: 5,
  },
  input: {
    marginVertical: 20,
  },
})

ModalAddProject.defaultProps = {
  name: '',
}

export default ModalAddProject
