import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import { Formik } from 'formik'

import FormTitle from '@/fields/FormTitle'
import Input from '@/fields/Input'
import FormButton from '@/fields/FormButton'
import Avatar from '@/fields/Avatar'
import Form from '@/forms/Form'
import { profileSchema } from '@/validators'
import { theme } from '@/theme'
import DateTimePicker from '@/fields/DateTimePicker'
import { GET_PROJECT_DATA_FOR_TASKS } from '@/queries'
import Menu from '@/fields/Menu'

import { StyledHeaderContainer, StyledHeaderText } from './component'

const AddTaskForm = ({
  selectedDate,
  name,
  content,
  board,
  type,
  user,
  priority,
  number,
  published,
  onSubmitPress,
  onCancelPress,
  projectId,
}) => {
  const { data: projectData } = useQuery(GET_PROJECT_DATA_FOR_TASKS, {
    variables: { projectId },
  })

  const { boards, types: taskTypes, members } = projectData?.projects_by_pk || {}
  const users = members?.map(member => ({ id: member.id, name: member.user.display_name }))

  return (
    <Formik
      initialValues={{
        name,
        content,
        deadline: selectedDate,
        board,
        type,
        user,
        priority,
        number,
        published,
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
              <StyledHeaderText>Add Task</StyledHeaderText>
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
              items={users}
              visibleFieldName="name"
              title="User"
              selectedItem={values.user}
              handleItemPress={user => handleFieldChange('user', user)}
            />

            <Menu
              items={boards}
              visibleFieldName="name"
              title="Board"
              selectedItem={values.board}
              handleItemPress={board => handleFieldChange('board', board)}
            />

            <Menu
              items={taskTypes}
              visibleFieldName="name"
              title="Task type"
              selectedItem={values.type}
              handleItemPress={taskType => handleFieldChange('type', taskType)}
            />

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
                const { name, content, deadline, board, type, user, priority, number } = values
                onSubmitPress(name, content, deadline, board, type, user, priority, number)
              }}
            >
              Add task
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
})

AddTaskForm.defaultProps = {
  name: 'TEST TASK NAME',
  content: 'TEST TASK CONTENT',
  board: {},
  type: {},
  user: {},
  priority: 0,
  number: 0,
  published: false,
  onUpdatePress: () => {},
  onCancelPress: () => {},
}

export default AddTaskForm
