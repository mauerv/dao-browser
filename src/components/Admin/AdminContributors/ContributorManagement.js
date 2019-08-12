import { connect } from 'react-redux'

import { getContributors } from '../../../selectors'
import {
  doFetchContributorList,
  doCreateContributor,
  doDeleteContributor,
  doEditContributor
} from '../../../actions'

import BaseResource from '../BaseResource'

const mapStateToProps = state => ({
  resourceList: getContributors(state)
})

export default connect(
  mapStateToProps,
  {
    onFetchResourceList: doFetchContributorList,
    onCreateResource: doCreateContributor,
    onDeleteResource: doDeleteContributor,
    onEditResource: doEditContributor
  }
)(BaseResource)
