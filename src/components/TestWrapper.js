import React from 'react';
import { Box, Item } from 'react-html-email';

const TestWrapper = props => (
  <Box width="100%" height="100%" bgcolor={props.bgcolor}>
    <Item align={props.align} valign={props.valign}>
      <Box
        width={props.width}
        align="center"
        cellPadding={props.cellPadding}
        cellSpacing={props.cellSpacing}
        style={props.style}
      >
        {props.children}
      </Box>
    </Item>
  </Box>
);

export default TestWrapper;
