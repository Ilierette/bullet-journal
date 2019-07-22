import * as React from 'react';

export const WeekPage = () => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1>Widok tygodniowy</h1>
          <ul>
            <li>wykresy cyklu - (integracja z daysy)</li>
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
