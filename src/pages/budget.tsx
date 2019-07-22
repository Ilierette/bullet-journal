import * as React from 'react';

export const BudgetPage = () => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ul>
            <li>
              żródła środków pieniężnych
            </li>
            <li>
              podział środków na konta
            <ul>
                <li>
                  stałe - koszta miesięczne, koszta okresowa, rozrywka
                </li>
                <li>
                  zakupy
                </li>
                <li>
                  awaryjny
                </li>
                <li>
                  skarpeta
                </li>
                <li>
                  oszczędności
                </li>
              </ul>
            </li>
            <li>
              planowanie wydatków
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
