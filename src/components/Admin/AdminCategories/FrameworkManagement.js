import { connect } from 'react-redux'

import { getFrameworks } from '../../../selectors'
import {
  doFetchFrameworkList,
  doCreateFramework,
  doDeleteFramework,
  doEditFramework
} from '../../../actions'

import BaseResource from '../BaseResource'

const mapStateToProps = state => ({
  resourceList: getFrameworks(state)
})

export default connect(
  mapStateToProps,
  {
    onFetchResourceList: doFetchFrameworkList,
    onCreateResource: doCreateFramework,
    onDeleteResource: doDeleteFramework,
    onEditResource: doEditFramework
  }
)(BaseResource)
