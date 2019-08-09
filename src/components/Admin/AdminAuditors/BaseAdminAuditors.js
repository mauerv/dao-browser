import { connect } from 'react-redux'

import { getAuditors } from '../../../selectors'
import {
  doFetchAuditorList,
  doCreateAuditor,
  doDeleteAuditor,
  doEditAuditor
} from '../../../actions'

import BaseResource from '../BaseResource'

const mapStateToProps = state => ({
  resourceList: getAuditors(state)
})

export default connect(
  mapStateToProps,
  {
    onFetchResourceList: doFetchAuditorList,
    onCreateResource: doCreateAuditor,
    onDeleteResource: doDeleteAuditor,
    onEditResource: doEditAuditor
  }
)(BaseResource)
