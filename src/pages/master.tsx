import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
import IndexPage from '.';
import OtherPage from './othersite';
import { observer } from 'mobx-react-lite';
import Store from '../contexts/global'

const MasterPage = observer(() => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="navigation">
          <nav className="nav flex-column">
            <NavLink className="nav-link" exact to="/"> Dzień </NavLink>
            <NavLink className="nav-link" to="/otherpage"> Tydzień </NavLink>
            <NavLink className="nav-link" to="/otherpage"> Miesiąc </NavLink>
            <NavLink className="nav-link" to="/otherpage"> Rok </NavLink>
          </nav>
        </div>
        <div className="col">
          <Route path="/" exact component={IndexPage} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </div>

  )
})

export default MasterPage;
