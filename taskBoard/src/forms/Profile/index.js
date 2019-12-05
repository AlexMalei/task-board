import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import firebase from 'react-native-firebase'
import { Formik } from 'formik'

import Input from '@/fields/Input'
import Button from '@/fields/Button'
import Avatar from '@/fields/Avatar'
import Form from '@/forms/Form'
import { profileSchema } from '@/validators'

const ProfileForm = ({ avatarUrl, name, role, about, onUpdatePress, onCancelPress }) => {
  return (
    <Formik initialValues={{ name, role, about }} validationSchema={profileSchema}>
      {({ values, touched, errors, handleChange, handleBlur }) => {
        //@todo: make avatar in the center of form. (initial if url is null)
        return (
          <Form>
            <Avatar avatarUrl={avatarUrl} name={name} size="large" />

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
              label="Role"
              value={values.role}
              onChangeText={handleChange('role')}
              onBlur={handleBlur('role')}
              error={errors['role']}
              touched={touched['role']}
              placeholder="Input role"
            />

            <Input
              label="About"
              value={values.about}
              onChangeText={handleChange('about')}
              onBlur={handleBlur('about')}
              error={errors['about']}
              touched={touched['about']}
              placeholder="Input info about yourself"
            />

            <Button onClick={() => console.log('update profile')}>Update profile</Button>
            <Button onClick={() => console.log('cancel')}>Cancel</Button>
          </Form>
        )
      }}
    </Formik>
  )
}

ProfileForm.defaultProps = {
  avatarUrl: '',
  name: '',
  role: '',
  about: '',
}

ProfileForm.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  about: PropTypes.string,
  avatarUrl: PropTypes.string,
}

export default ProfileForm
