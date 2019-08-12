import { connect } from 'react-redux'

import { getTags } from '../../../selectors'
import {
  doFetchTagList,
  doCreateTag,
  doDeleteTag,
  doEditTag
} from '../../../actions'

import BaseResource from '../BaseResource'

const mapStateToProps = state => ({
  resourceList: getTags(state)
})

export default connect(
  mapStateToProps,
  {
    onFetchResourceList: doFetchTagList,
    onCreateResource: doCreateTag,
    onDeleteResource: doDeleteTag,
    onEditResource: doEditTag
  }
)(BaseResource)
