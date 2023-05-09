import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import FlashMessage from './FlashMessage';
import Sidebar from './Sidebar';

export default function Body({ sidebar, children }) {
  return (
    <Container>
      <Stack direction="horizontal" className="Body">
        {sidebar && <Sidebar />}
        <Container className="Content">
          <FlashMessage />
          {children}
        </Container>
      </Stack>
    </Container>
  );
}
