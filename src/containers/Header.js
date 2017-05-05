/**
 * Created by mgab on 05/05/2017.
 */
import { connect } from 'react-redux'

import Header from '../components/common/Header'
import { getIsAuthenticated, logOut } from '../actions/authActions'
import { getIsModalOpened, showModal, hideModal } from '../reducers/modalReducer'

export default connect((state) => ({
  isAuthenticated: getIsAuthenticated(state),
  showLoginModal: getIsModalOpened(state, 'login')
}), (dispatch) => ({
  showLogin: () => dispatch(showModal('login')),
  hideLogin: () => dispatch(hideModal('login')),
  logout: () => dispatch(logOut())
}))(Header)