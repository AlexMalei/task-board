import { handleActions } from 'redux-actions'

import { FETCH_SET_PROJECT_ID_ACTION_TYPE } from '@/constants'

const initialState = {
  projectId: '',
}

const projectReducer = handleActions(
  {
    [FETCH_SET_PROJECT_ID_ACTION_TYPE]: (state, { payload: { projectId } }) => {
      return { ...state, projectId }
    },
  },
  initialState,
)

export default projectReducer
