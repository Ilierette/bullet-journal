import * as React from 'react';
import { useObservable, observer } from 'mobx-react-lite';
import { supply, water, workout } from '../sample';

export const DayPage = observer(() => {
  const state = useObservable({
    supply: supply,
    water: water,
    workout: workout
  })
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-12">
          <h1>Widok dzienny “typu bullet journal”</h1>
        </div>
        <div className="col-12">
          Data
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              Cykl
            </div>
            <div className="card-body">
              dzień      temperatura
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-2">
          <div className="row h-100">
            <div className="col-12 mb-2">
              <div className="card h-100">
                <div className="card-header">
                  Suplementy
                </div>
                <div className="card-body">
                  <table className="table table-sm table-bordered">
                    <tbody>
                      {
                        state.supply.map((supply) => (
                          <tr>
                            <td>
                              {supply.title}
                            </td>
                            <td>
                              <button className={supply.checked ? "btn btn-success  " : "btn btn-outline-dark  "} onClick={() => supply.checked = !supply.checked}></button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card h-100">
                <div className="card-header">
                  Woda
                </div>
                <div className="card-body">
                  <table className="table table-sm table-bordered">
                    <tbody>
                      {
                        state.water.map((water) => (
                          <tr>
                            <td>{water.title}</td>
                            <td>
                              <button className={water.checked ? "btn btn-success  " : "btn btn-outline-dark  "} onClick={() => water.checked = !water.checked}></button>
                            </td>
                            <td>
                              <span>
                                {water.time}
                              </span>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row h-100">
            <div className="col-12 mb-2">
              <div className="card h-100">
                <div className="card-header">
                  Posiłki
                </div>
                <div className="card-body">
                  - rodzaj diety (if, 5 posiłków itd.)
                </div>
              </div>
            </div>
            <div className="col-12 mb-2">
              <div className="card h-100">
                <div className="card-header">
                  Dzień treningowy
                </div>
                <div className="card-body">
                  <table className="table table-sm table-bordered">
                    <thead>
                      <tr>
                        <td>
                          {state.workout[0].title}
                        </td>
                        <td>
                          Ciężar
                        </td>
                        <td>
                          Serie / powtórzenia
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        state.workout[0].dates[0].exercises.map((exercise, id) => (
                          <tr>
                            <td>
                              {state.workout[0].exercises[id].title}
                            </td>
                            <td className="text-center">
                              {exercise.weights}
                            </td>
                            <td className="text-center">
                              {exercise.series} / {exercise.tries}
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                  <div className="mt-2">
                    filmy z ćwiczeniami
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card h-100">
                <div className="card-header">
                  Samopoczucie
                </div>
                <div className="card-body">
                  czy migrena? (godzina rozpoczęcia, zakończenia, jakie leki, strona, dodatkowe uwagi)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row h-100">
            <div className="col-12 mb-2">
              <div className="card h-100">
                <div className="card-header">
                  Notatki
                </div>
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className="col-12 mb-2">
              <div className="card h-100">
                <div className="card-header">
                  Priorytety
                </div>
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card h-100">
                <div className="card-header">
                  To do
                </div>
                <div className="card-body">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
