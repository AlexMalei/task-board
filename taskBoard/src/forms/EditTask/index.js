import React from 'react'
import { StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { useQuery } from '@apollo/react-hooks'

import Input from '@/fields/Input'
import FormButton from '@/fields/FormButton'
import Form from '@/forms/Form'
import DateTimePicker from '@/fields/DateTimePicker'
import Menu from '@/fields/Menu'
import { profileSchema } from '@/validators'
import { GET_PROJECT_DATA_FOR_TASKS } from '@/queries'

import { StyledHeaderContainer, StyledHeaderText, MenuButton } from './component'

const EditTaskForm = ({
  projectId,
  task: { name, content, deadline, type, priority, number },
  onSubmitPress,
  onCancelPress,
}) => {
  const { data: projectData } = useQuery(GET_PROJECT_DATA_FOR_TASKS, {
    variables: { projectId },
  })

  const { types: taskTypes } = projectData?.projects_by_pk || {}

  return (
    <Formik
      initialValues={{
        name,
        content,
        deadline,
        type,
        priority: priority.toString(),
        number: number.toString(),
      }}
      validationSchema={profileSchema}
    >
      {({ values, touched, errors, handleChange, handleBlur, setFieldValue }) => {
        const handleFieldChange = (fieldName, value) => {
          setFieldValue(fieldName, value)
        }
        return (
          <Form>
            <StyledHeaderContainer>
              <StyledHeaderText>Edit Task</StyledHeaderText>
            </StyledHeaderContainer>

            <Input
              label="Name"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={errors['name']}
              touched={touched['name']}
              placeholder="Input name"
              containerStyle={styles.input}
            />

            <Input
              label="Content"
              value={values.content}
              onChangeText={handleChange('content')}
              onBlur={handleBlur('content')}
              error={errors['content']}
              touched={touched['content']}
              placeholder="Input content"
              multiline
              containerStyle={styles.input}
            />

            <DateTimePicker
              title="Deadline"
              date={values.deadline}
              mode="date"
              handleDateChange={date => handleFieldChange('deadline', date)}
            />

            <Menu
              items={taskTypes}
              menuStyle={styles.menu}
              menuButtonContainer={styles.menuButtonContainer}
              visibleFieldName="name"
              title="Task type"
              handleItemPress={taskType => handleFieldChange('type', taskType)}
            >
              <MenuButton>{values.type.name}</MenuButton>
            </Menu>

            <Input
              label="Priority"
              value={values.priority}
              onChangeText={handleChange('priority')}
              onBlur={handleBlur('priority')}
              error={errors['priority']}
              touched={touched['priority']}
              placeholder="Input priority"
              keyboardType="number-pad"
              containerStyle={styles.input}
            />

            <Input
              label="Number"
              value={values.number}
              onChangeText={handleChange('number')}
              onBlur={handleBlur('number')}
              error={errors['number']}
              touched={touched['number']}
              placeholder="Input number"
              keyboardType="number-pad"
              containerStyle={styles.input}
            />

            <FormButton
              onClick={() => {
                const { name, content, deadline, type, priority, number } = values
                onSubmitPress(name, content, deadline, type, priority, number)
              }}
            >
              Edit task
            </FormButton>
            <FormButton useBackground={false} onClick={onCancelPress}>
              Cancel
            </FormButton>
          </Form>
        )
      }}
    </Formik>
  )
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 20,
  },
  menu: {
    width: '80%',
  },
  menuButtonContainer: {
    width: '100%',
    paddingVertical: 20,
  },
})

EditTaskForm.defaultProps = {
  onUpdatePress: () => {},
  onCancelPress: () => {},
}

export default EditTaskForm
