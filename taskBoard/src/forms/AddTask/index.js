import React, { useEffect } from 'react'
import { View } from 'react-native'
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
import DatePicker from '@/fields/DatePicker'
import { GET_PROJECT_DATA_FOR_TASKS } from '@/queries'
import Menu from '@/fields/Menu'

import { StyledHeaderContainer, StyledHeaderText } from './component'

const AddTaskForm = ({
  name,
  content,
  deadline,
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

  console.log('projectData', projectData)

  const { boards, types: taskTypes, members } = projectData?.projects_by_pk || {}
  const users = members?.map(member => ({ id: member.id, name: member.user.display_name }))

  return (
    <Formik
      initialValues={{ name, content, deadline, board, type, user, priority, number, published }}
      validationSchema={profileSchema}
    >
      {({ values, touched, errors, handleChange, handleBlur, setFieldValue }) => {
        //@todo: name, content,  deadline,  user_id, board_id, type_id
        //@todo: order is last task.odrer + 1

        const handleDeadlineChange = date => {
          setFieldValue('deadline', date)
        }
        const handleBoardPress = board => {
          setFieldValue('board', board)
        }

        const handleTaskTypePress = taskType => {
          setFieldValue('type', taskType)
        }

        const handleUserPress = user => {
          setFieldValue('user', user)
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
            />

            <DatePicker title="Deadline" date={values.deadline} mode="date" handleDateChange={handleDeadlineChange} />

            <Menu items={boards} title="Board" selectedItem={values.board} handleItemPress={handleBoardPress} />

            <Menu
              items={taskTypes}
              title="Task type"
              selectedItem={values.type}
              handleItemPress={handleTaskTypePress}
            />

            <Menu items={users} title="User" selectedItem={values.user} handleItemPress={handleUserPress} />

            <Input
              label="Content"
              value={values.content}
              onChangeText={handleChange('content')}
              onBlur={handleBlur('content')}
              error={errors['content']}
              touched={touched['content']}
              placeholder="Input content"
              multiline
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
            />
            {/*@todo: make checkbox with published field*/}

            <FormButton
              onClick={() => {
                const { name, content, deadline, board, type, user, priority, number, published } = values
                onSubmitPress(name, content, deadline, board, type, user, priority, number, published)
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

AddTaskForm.defaultProps = {
  name: 'TEST TASK NAME',
  content: 'TEST TASK CONTENT',
  deadline: new Date('2020-01-17'),
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
