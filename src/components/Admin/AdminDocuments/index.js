import { connect } from 'react-redux'

import BaseAdminDocuments from './BaseAdminDocuments'

import {
  doCreateDaoChild,
  doDeleteDaoChild,
  doEditDaoChild
} from '../../../actions'

export default connect(
  null,
  {
    onCreateDaoChild: doCreateDaoChild,
    onDeleteDaoChild: doDeleteDaoChild,
    onEditDaoChild: doEditDaoChild
  }
)(BaseAdminDocuments)
