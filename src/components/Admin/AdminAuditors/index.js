import { connect } from 'react-redux'

import { getAuditors } from '../../../selectors'
import {
  doFetchAuditorList,
  doCreateAuditor,
  doDeleteAuditor,
  doEditAuditor
} from '../../../actions'

import BaseAuditorManagement from './BaseAuditorManagement'

const mapStateToProps = state => ({
  auditorList: getAuditors(state)
})

export default connect(
  mapStateToProps,
  {
    onAuditorListFetch: doFetchAuditorList,
    onCreateAuditor: doCreateAuditor,
    onDeleteAuditor: doDeleteAuditor,
    onEditAuditor: doEditAuditor
  }
)(BaseAuditorManagement)
