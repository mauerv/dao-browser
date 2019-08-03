 // Actions related to the DAO model.
import {
  doDaoFetch,
  doDaoListFetch
} from './daoActions'

// Actions related to the Status model.
import {
  doStatusListFetch,
  doCreateStatus,
  doDeleteStatus,
  doEditStatus
} from './statusActions'

// Export everything from a single index endpoint.
export {
  doDaoFetch,
  doDaoListFetch,
  doStatusListFetch,
  doCreateStatus,
  doDeleteStatus,
  doEditStatus
}
