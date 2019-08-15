import { connect } from 'react-redux'

import { doSetAuthToken } from '../../actions'

import BaseApp from './BaseApp'

export default connect(
  null,
  {
    onSetAuthToken: doSetAuthToken
  }
)(BaseApp)
