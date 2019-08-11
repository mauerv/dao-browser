import { connect } from 'react-redux'

import {
  doCreateDaoChild,
  doDeleteDaoChild,
  doEditDaoChild
} from '../../../actions'

import BaseChildResource from '../BaseChildResource'

export default connect(
  null,
  {
    onCreateResource: doCreateDaoChild,
    onDeleteResource: doDeleteDaoChild,
    onEditResource: doEditDaoChild
  }
)(BaseChildResource)
