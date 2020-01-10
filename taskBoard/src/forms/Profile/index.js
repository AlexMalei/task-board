import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'

import Input from '@/fields/Input'
import FormButton from '@/fields/FormButton'
import Avatar from '@/fields/Avatar'
import Form from '@/forms/Form'
import { profileSchema } from '@/validators'

import Apps from '@/components/uploadImage'

const ProfileForm = ({ avatarUrl, name, role, about, onUpdatePress, onCancelPress }) => {
  return (
    <Formik initialValues={{ name, role, about }} validationSchema={profileSchema}>
      {({ values, touched, errors, handleChange, handleBlur }) => {
        return (
          <Form>
            <Avatar avatarUrl={avatarUrl} userName={name} size={theme.avatarSizes.large} />
            <Apps />
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

            <FormButton onClick={() => onUpdatePress(values.name, values.role, values.about)}>
              Update profile
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

ProfileForm.defaultProps = {
  avatarUrl: '',
  name: '',
  role: '',
  about: '',
  onUpdatePress: () => {},
  onCancelPress: () => {},
}

ProfileForm.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  about: PropTypes.string,
  avatarUrl: PropTypes.string,
}

export default ProfileForm
