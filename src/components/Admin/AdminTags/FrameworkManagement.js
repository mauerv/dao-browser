import { connect } from 'react-redux'

import { getFrameworks } from '../../../selectors'
import {
  doFetchFrameworkList,
  doCreateFramework,
  doDeleteFramework,
  doEditFramework
} from '../../../actions'

import BasicResource from './BasicResource'

const mapStateToProps = state => ({
  resourceList: getFrameworks(state)
})

export default connect(
  mapStateToProps,
  {
    onResourceListFetch: doFetchFrameworkList,
    onCreateResource: doCreateFramework,
    onDeleteResource: doDeleteFramework,
    onEditResource: doEditFramework
  }
)(BasicResource)
