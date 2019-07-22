import * as React from 'react';

export const WorkoutPage = () => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ul>
            <li>
              Siłowy
              <ul>
                <li>
                  ilość powtórzeń, serie, podnoszone ciężary
                </li>
                <li>
                  filmik z instruktażem jak wykonać dane ćwiczenie
                </li>
                <li>
                  podział trening - dzień (np tydzień A, tydzień B)
                </li>
              </ul>
            </li>
            <li>
              Joga
            </li>
            <li>
              Pole dance
            </li>
            <li>
              Rozciąganie
              <ul>
                <li>
                  zwiększanie zakresów
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
