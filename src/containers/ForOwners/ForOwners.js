import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  ExternalLink,
} from '../../components';

import css from './ForOwners.css';
import image from './ownerImg.jpg';

const ForOwners = () => {
  return (
    <StaticPage
      className={css.root}
      title="For Owners"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HowTo',
        description: 'Renting walk-through',
        name: 'For Owners',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          <h1>Some content</h1>
          <img src={image} alt="My first ice cream." />
          <div>
            <NamedLink name="LandingPage">Go to home page</NamedLink> or
            <ExternalLink href="https://google.com">
              Go to Google
            </ExternalLink>
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default ForOwners;

