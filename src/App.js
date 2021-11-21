import React from 'react';
import styled from 'styled-components/macro';

import { Card } from 'lib/Card';

const ThinnerCard = styled(Card)`
  width: 400px;
`;

export const App = () => {
  return (
    <div>
      <ThinnerCard
        coverImage='https://www.fillmurray.com/500/300'
        thumbnailUrl='https://www.fillmurray.com/100/100'
        title='this is the title'
        secondaryText='this is the secondary text'
      >
        also children
      </ThinnerCard>

      <Card title='only a title' secondaryText='secondary text' />

      <Card>
        <h1>Hello from children</h1>
      </Card>
    </div>
  );
};
