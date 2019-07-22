import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { DayPage } from './day';
import { WeekPage } from './week';
import { MonthPage } from './month';
import { YearPage } from './year';
import { BudgetPage } from './budget';
import { WorkoutPage } from './workout';
import { DreamPage } from './dream';
import { ProgressPage } from './progress';
import { WorkPage } from './work';
import { MedicalPage } from './medical';

const MasterPage = observer(() => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="navigation">
          <nav className="nav flex-column">
            <NavLink className="nav-link" exact to="/"> Dzień </NavLink>
            <NavLink className="nav-link" to="/week"> Tydzień </NavLink>
            <NavLink className="nav-link" to="/month"> Miesiąc </NavLink>
            <NavLink className="nav-link" to="/year"> Rok </NavLink>
          </nav>
          <hr />
          <nav className="nav flex-column">
            <NavLink className="nav-link" to="/budget"> Budżet domowy</NavLink>
            <NavLink className="nav-link" to="/workout"> Trening </NavLink>
            <NavLink className="nav-link" to="/work"> Praca zawodowa</NavLink>
            <NavLink className="nav-link" to="/progress"> Rozwój osobisty</NavLink>
            <NavLink className="nav-link" to="/dreaming"> Sen </NavLink>
            <NavLink className="nav-link" to="/medical"> Badania lekarskie </NavLink>
          </nav>
        </div>
        <div className="col">
          <Route path="/" exact component={DayPage} />
          <Route path="/week" component={WeekPage} />
          <Route path="/month" component={MonthPage} />
          <Route path="/year" component={YearPage} />
          <Route path="/budget" component={BudgetPage} />
          <Route path="/workout" component={WorkoutPage} />
          <Route path="/dreaming" component={DreamPage} />
          <Route path="/progress" component={ProgressPage} />
          <Route path="/work" component={WorkPage} />
          <Route path="/medical" component={MedicalPage} />
        </div>
      </div>
    </div>

  )
})

export default MasterPage;
