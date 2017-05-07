/**
 * Created by mgab on 05/05/2017.
 */
import { connect } from 'react-redux'

import Header from '../components/common/Header'
import { logOut } from '../actions/authActions'
import { isAuthenticated } from '../reducers/authReducer'
import { isModalOpened, showModal, hideModal } from '../actions/modalActions'

export default connect((state) => ({
  isAuthenticated: isAuthenticated(state),
  showLoginModal: isModalOpened(state, 'auth')
}), (dispatch) => ({
  showLogin: () => dispatch(showModal('auth')),
  hideLogin: () => dispatch(hideModal('auth')),
  logout: () => dispatch(logOut())
}))(Header)