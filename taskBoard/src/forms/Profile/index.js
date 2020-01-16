import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'

import Form from '@/forms/Form'
import { theme } from '@/theme'
import Input from '@/fields/Input'
import Avatar from '@/fields/Avatar'
import FormButton from '@/fields/FormButton'
import { profileSchema } from '@/validators'

const ProfileForm = ({ avatar, name, role, about, onUpdatePress, onCancelPress, onPickImage }) => {
  return (
    <Formik initialValues={{ name, role, about, avatar }} validationSchema={profileSchema}>
      {({ values, touched, errors, handleChange, handleBlur, setFieldValue }) => {
        const handleUploadAvatar = avatar => {
          setFieldValue('avatar', avatar)
        }
        return (
          <Form>
            <Avatar
              avatarUrl={values.avatar}
              userName={name}
              size={theme.avatarSizes.large}
              onPickImage={onPickImage}
              onHandleUploadAvatar={handleUploadAvatar}
              update={true}
            />
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

            <FormButton onClick={() => onUpdatePress(values.name, values.role, values.about, values.avatar)}>
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
  avatar: '',
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
