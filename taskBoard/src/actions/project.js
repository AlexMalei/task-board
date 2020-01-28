import { createAction } from 'redux-actions'

import { FETCH_SET_PROJECT_ID_ACTION_TYPE } from '@/constants'

export const fetchSetProjectIdAction = createAction(FETCH_SET_PROJECT_ID_ACTION_TYPE, projectId => ({ projectId }))
