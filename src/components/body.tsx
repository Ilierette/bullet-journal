import * as React from 'react';

export const BodyMeasure = ({ measure }) => {
  return (
    <div className="card h-100">
      <div className="card-header">
        Wymiary ciała
    </div>
      <div className="card-body">
        <table className="table table-sm table-bordered">
          <thead>
            <tr>
              <td></td>
              {measure.dates.map((date) => (
                <td>{date.date}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              measure.titles.map((title, id) => (
                <tr>
                  <td>{title.name}</td>
                  {measure.dates.map((date) => (
                    <td>{date.measure[id].value}</td>
                  ))}
                </tr>
              ))
            }

          </tbody>
        </table>

      </div>
    </div>
  )
}
