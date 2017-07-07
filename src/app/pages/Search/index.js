import React from 'react';
import styled from 'styled-components';
import { InstantSearch, SearchBox } from 'react-instantsearch/dom';

import Title from 'app/components/text/Title';
import MaxWidth from 'app/components/flex/MaxWidth';
import Margin from 'app/components/spacing/Margin';
import Row from 'app/components/flex/Row';

import Navigation from 'app/containers/Navigation';
import { ALGOLIA_API_KEY, ALGOLIA_APPLICATION_ID } from 'app/utils/config';

import './Search.css';
import Results from './Results';
import Filters from './Filters';

const Content = styled.div`
  margin-top: 5%;
  text-align: left;
  color: white;
`;

const StyledTitle = styled(Title)`
  text-align: left;
  font-size: 2rem;
`;

export default class Search extends React.PureComponent {
  render() {
    document.location.title = 'Search - CodeSandbox';
    return (
      <MaxWidth>
        <Margin vertical={1} horizontal={1}>
          <Navigation title="Search" />
          <Content>
            <MaxWidth width={1024}>
              <InstantSearch
                appId={ALGOLIA_APPLICATION_ID}
                apiKey={ALGOLIA_API_KEY}
                indexName="prod_sandboxes"
              >
                <StyledTitle>Search for a sandbox</StyledTitle>
                <SearchBox />
                <Row alignItems="flex-start">
                  <Results />
                  <Filters />
                </Row>
              </InstantSearch>
            </MaxWidth>
          </Content>
        </Margin>
      </MaxWidth>
    );
  }
}