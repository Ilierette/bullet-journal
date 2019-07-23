import * as React from 'react';
import { useObservable } from 'mobx-react-lite';
import { workout } from '../sample';
import { toJS } from 'mobx';
import { WorkOut } from '../components/workout';

export const WeekPage = () => {
  const state = useObservable({
    workout: workout
  })
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-12">
          <h1>Widok tygodniowy</h1>
        </div>
        <div className="col-12">
          Data od - data do
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-2">
          <WorkOut workout={state.workout} />
        </div>
        <div className="col">

          <ul>
            <li>wykresy cyklu - (integracja z daysy "brak api")</li>
            <li>
              tracker
              <ul>
                <li>depilacja laserowa</li>
                <li>aktywność fizyczna</li>
                <li>szczotkowanie ciała</li>
                <li>
                  pielęgnacja włosów
                  <ul>
                    <li>kontrola przyrostu</li>
                  </ul>
                </li>
                <li>pielęgnacja cery</li>
                <li>paznokcie</li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}
