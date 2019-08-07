import { connect } from 'react-redux'

import AdminDaos from './AdminDaos'

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
)(AdminDaos)
