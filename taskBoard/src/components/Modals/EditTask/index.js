import React from 'react'
import { useMutation } from '@apollo/react-hooks'

import Modal from '@/components/Modal'
import EditTaskForm from '@/forms/EditTask'
import { UPDATE_TASK_DATA } from '@/mutations'

const EditTaskModal = ({ modalVisibility, onMutationStart, onMutationEnd, handleCloseModal, projectId, task }) => {
  const [updateTask] = useMutation(UPDATE_TASK_DATA, {
    variables: {},
    onCompleted: data => {
      onMutationEnd()
    },
  })

  const handleAddTaskPress = (name, content, deadline, type, priority, number) => {
    onMutationStart()

    updateTask({
      variables: {
        taskId: task.id,
        name,
        content,
        deadline,
        type_id: type.id,
        priority,
        number,
      },
    })
  }

  return (
    <Modal isVisible={modalVisibility} onClose={handleCloseModal}>
      <EditTaskForm
        onCancelPress={handleCloseModal}
        onSubmitPress={handleAddTaskPress}
        task={task}
        projectId={projectId}
      />
    </Modal>
  )
}

EditTaskModal.defaultProps = {
  onMutationStart: () => {},
  onMutationEnd: () => {},
}

export default EditTaskModal
