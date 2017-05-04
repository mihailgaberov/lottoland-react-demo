/**
 * Created by Mihail on 4/23/2017.
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import EnsureLoggedInContainer from './containers/EnsureLoggedInContainer'
import HomePage from '../components/HomePage'
// import LotteryPage from './components/LotteryPage'

const Nav = () => (
<Switch>
    <Route exact path='/' component={HomePage}/>
    {/*<Route component={EnsureLoggedInContainer}>
        <Route path='/lotteries' component={LotteryPage}/>
    </Route>*/}
</Switch>
)

export default Nav