import * as React from 'react';

export const WorkOut = ({ workout }) => {
  return (
    <div className="card h-100">
      <div className="card-header">
        Treningowy (+ integracja fitbit)
      </div>
      <div className="card-body">
        {
          workout.map((workout) => (
            <table className="table table-sm table-bordered">
              <thead>
                <tr>
                  <td>
                    {workout.title}
                  </td>
                  {workout.dates.map((date) => (
                    <td>{date.date}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {
                  workout.exercises.map((ex) => (
                    <tr>
                      <td>{ex.title}</td>
                      {workout.dates.map((date, id) => (
                        <td>{date.exercises[id].weights} kg    {date.exercises[id].tries} / {date.exercises[id].series}</td>
                      ))}
                    </tr>
                  ))
                }
              </tbody>
            </table>
          ))
        }
      </div>
    </div>
  )
}
