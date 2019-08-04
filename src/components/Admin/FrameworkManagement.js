import { connect } from 'react-redux'

import { getFrameworks } from '../../selectors'
import {
  doFrameworkListFetch,
  doCreateFramework,
  doDeleteFramework,
  doEditFramework
} from '../../actions'

import BasicResource from './BasicResource'

const mapStateToProps = state => ({
  resourceList: getFrameworks(state)
})

export default connect(
  mapStateToProps,
  {
    onResourceListFetch: doFrameworkListFetch,
    onCreateResource: doCreateFramework,
    onDeleteResource: doDeleteFramework,
    onEditResource: doEditFramework
  }
)(BasicResource)
