import * as React from 'react';

export const MonthPage = () => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1>Widok miesięczny</h1>
          <ul>
            <li>wykresy cyklu - (integracja z daysy)</li>
            <li>dodawanie wydarzeń - (integracja z google calendar)</li>
            <li>posumowanie posiłków - (integracja z cronometer)</li>
            <li>podsumownaie aktywności - (integracja z fitbit)</li>
          </ul>
          <hr/>
          <ul>
            <li>generowanie raportów chorobowych (migrena)</li>
            <li>generowanie raportów treningowych</li>
            <li>priorytety</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
