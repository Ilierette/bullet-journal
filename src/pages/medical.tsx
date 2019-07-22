import * as React from 'react';

export const MedicalPage = () => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ul>
            <li>
              rodzaje
              <ul>
                <li>jednorazowo</li>
                <li>co pół roku</li>
                <li>co rok</li>
                <li>więcej</li>
              </ul>
            </li>
            <li>
              powiadomienia
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
