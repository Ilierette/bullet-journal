import * as React from 'react';
import { Tracker } from '../components/tracker/tracker';

const IndexPage = () => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          Kontent
          <Tracker />
        </div>
      </div>
    </div>
  )
}

export default IndexPage;
