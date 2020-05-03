import React from 'react';

import Directory from '../../components/directory/directory.component';
import { HomepageContainer } from './homepage.styles';
import IconsB from '../../components/IconBottom/Icons'

const HomePage = () => (
  <HomepageContainer>
    <Directory />
    <IconsB/>
  </HomepageContainer>
);

export default HomePage;
