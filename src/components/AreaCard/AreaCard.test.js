import React from 'react';
import ReactDOM from 'react-dom';
import AreaCard from '.';
import ThemeProvider from '../ThemeProvider';
import res from './response.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <>
        {res.areas.map(area => {
          return <AreaCard key={area.area_id} {...area} />;
        })}
      </>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
