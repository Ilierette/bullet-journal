import * as React from 'react';
import { WorkOut } from '../components/workout';
import { useObservable } from 'mobx-react-lite';
import { workoutMonth, bodyMeasurement } from '../sample';
import { BodyMeasure } from '../components/body';

export const MonthPage = () => {
    const state = useObservable({
        workout: workoutMonth,
        measure: bodyMeasurement
    })
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-12">
                    <h1>Widok miesięczny</h1>
                </div>
                <div className="col-12">
                    Data od - data do
                </div>
            </div>
            <div className="row">
                <div className="col mb-2">
                    <WorkOut workout={state.workout} />
                </div>
                <div className="col-2 mb-2">
                    <BodyMeasure measure={state.measure} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul>
                        <li>wykresy cyklu - (integracja z daysy "brak api")</li>
                        <li>dodawanie wydarzeń - (integracja z google calendar)</li>
                        <li>posumowanie posiłków - (integracja z cronometer "brak api")</li>
                    </ul>
                    <hr />
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
