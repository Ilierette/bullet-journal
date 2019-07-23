import * as React from 'react';
import { BodyMeasure } from '../components/body';
import { useObservable } from 'mobx-react-lite';
import { bodyMeasurementYear } from '../sample';

export const YearPage = () => {
  const state = useObservable({
    measure: bodyMeasurementYear
  })
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-12">
          <h1>Widok roczny</h1>
        </div>
        <div className="col-12">
          Data od - data do
        </div>
      </div>
      <div className="row">
        <div className="col-8 mb-2">
        </div>
        <div className="col-4 mb-2">
          <BodyMeasure measure={state.measure} />
        </div>
      </div>
    </div>
  )
}
