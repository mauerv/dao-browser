import { connect } from 'react-redux'

import EditDaos from './EditDaos'

import { getDaos } from '../../../selectors'
import {
  doFetchDaoList,
  doDeleteDao
} from '../../../actions'

const mapStateToProps = state => ({
  daos: getDaos(state)
})

export default connect(
  mapStateToProps,
  {
    onDeleteDao: doDeleteDao,
    onFetchDaoList: doFetchDaoList 
  }
)(EditDaos)
