import React from 'react';
import Nav from 'components/shared/Nav';
import {square} from 'helpers/math';
import Logo from 'logo.png';
import Articles from './Articles';

const Root = () => (
  <div>
    <Nav page='page1' />

    <h2>Assets</h2>
    <p className='with-background with-border'>{`4 squared is ${square(4)}`}</p>
    <p className='with-border'><img src={Logo} alt='logo' /></p>

    <h2>Articles</h2>
    <Articles />
  </div>
);

export default Root;