import React from 'react'
import { useMutation } from '@apollo/react-hooks'

import Modal from '@/components/Modal'
import AddParticipantForm from '@/forms/AddParticipant'
import { INSERT_PARTICIPANT } from '@/mutations'

const AddParticipantModal = ({
  modalVisibility,
  taskId,
  projectId,
  onMutationStart,
  onMutationEnd,
  handleCloseModal,
}) => {
  const [insertParticipant] = useMutation(INSERT_PARTICIPANT, {
    variables: {},
    onCompleted: data => {
      onMutationEnd()
    },
  })

  const handleAddTaskPress = ({ id: userId }) => {
    onMutationStart()

    insertParticipant(taskId, userId)
  }

  return (
    <Modal isVisible={modalVisibility} onClose={handleCloseModal}>
      <AddParticipantForm
        onCancelPress={handleCloseModal}
        onSubmitPress={handleAddTaskPress}
        projectId={projectId}
        taskId={taskId}
      />
    </Modal>
  )
}

AddParticipantModal.defaultProps = {
  boardId: null,
  selectedDate: new Date(),
  onMutationStart: () => {},
  onMutationEnd: () => {},
}

export default AddParticipantModal
