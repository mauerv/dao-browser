import { connect } from 'react-redux'

import {
  doCreateDaoChild,
  doDeleteDaoChild,
  doEditDaoChild
} from '../../../actions'

import BaseManageChildResource from './BaseManageChildResource'

export default connect(
  null,
  {
    onCreateResource: doCreateDaoChild,
    onDeleteResource: doDeleteDaoChild,
    onEditResource: doEditDaoChild
  }
)(BaseManageChildResource)
