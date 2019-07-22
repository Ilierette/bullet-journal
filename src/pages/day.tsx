import * as React from 'react';
import { useObservable, observer } from 'mobx-react-lite';

const supply = [
  {
    title: "B12",
    checked: false
  },
  {
    title: "D3+K2",
    checked: false
  },
  {
    title: "Magnez",
    checked: false
  },
  {
    title: "Omega 3",
    checked: false
  },
  {
    title: "Kolagen",
    checked: false
  },
  {
    title: "Glutation",
    checked: false
  }
]
const water = [
  {
    title: "0.5",
    checked: false,
    time: "8-12"
  },
  {
    title: "0.5",
    checked: false,
    time: "12-16"
  },
  {
    title: "0.5",
    checked: false,
    time: "16-20"
  },
  {
    title: "0.5",
    checked: false,
    time: "20-23"
  }
]

export const DayPage = observer(() => {
  const state = useObservable({
    supply: supply,
    water: water
  })
  return (
    <div className="container-fluid">
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
                  <table>
                    <tbody>
                      {
                        state.supply.map((supply) => (
                          <tr>
                            <td>
                              {supply.title}
                            </td>
                            <td>
                              <button className={supply.checked ? "btn btn-success mx-3" : "btn btn-secondary mx-3"} onClick={() => supply.checked = !supply.checked}></button>
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
                  <table>
                    <tbody>
                      {
                        state.water.map((water) => (
                          <tr>
                            <td>{water.title}</td>
                            <td>
                              <button className={water.checked ? "btn btn-success mx-3" : "btn btn-secondary mx-3"} onClick={() => water.checked = !water.checked}></button>
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
                  <ul>
                    <li>
                      rodzaj ćwiczenia, podnoszone ciężary, ilość powtórzeń
                    </li>
                    <li>
                      filmy z ćwiczeniami
                    </li>
                  </ul>
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
            <div className="col-12">
              <div className="card h-100">
                <div className="card-header">
                  Priorytety
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
