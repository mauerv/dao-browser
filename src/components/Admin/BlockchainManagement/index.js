import { connect } from 'react-redux'

import { getBlockchains } from '../../../selectors'
import {
  doBlockchainListFetch,
  doCreateBlockchain,
  doDeleteBlockchain,
  doEditBlockchain
} from '../../../actions'

import BaseBlockchainManagement from './BaseBlockchainManagement'

const mapStateToProps = state => ({
  blockchains: getBlockchains(state)
})

export default connect(
  mapStateToProps,
  {
    onBlockchainListFetch: doBlockchainListFetch,
    onCreateBlockchain: doCreateBlockchain,
    onDeleteBlockchain: doDeleteBlockchain,
    onEditBlockchain: doEditBlockchain
  }
)(BaseBlockchainManagement)
