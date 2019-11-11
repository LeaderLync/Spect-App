import React from 'react';
import ReactDOM from 'react-dom';
import CompanyProfile from './CompanyProfile';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CompanyProfile />, div);
    ReactDOM.unmountComponentAtNode(div);
});
