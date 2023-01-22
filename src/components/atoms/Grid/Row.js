import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GRID_CONFIG, MEDIA } from './config';

const StyledRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin: ${ `0 -${(GRID_CONFIG.gutters.mobile / 2)}px`};
  background:  ${props => (props.background ? `${props.background}` : 'none')};
  border:  ${props => (props.border ? `1px solid ${props.border}` : 'none')};
  position: relative;

  ${MEDIA.tablet`
    margin: ${`0 -${(GRID_CONFIG.gutters.tablet / 2)}px`};
  `}
  ${MEDIA.desktop`
    margin: ${`0 -${(GRID_CONFIG.gutters.desktop / 2)}px`};
  `}
 
  ${props => props.addCSS}
`;

const Row = (props) => {
  const {
    children,
  } = props;

  const childrenWithProps = (children)
    ? React.Children.map(children, (child) => {
      if (child && child.props) {
        return React.cloneElement(child);
      }
      return child;
    }) : null;
  return <StyledRow {...props}>{childrenWithProps}</StyledRow>;
};

Row.defaultProps = {
  background: '',
  border: '',
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  border: PropTypes.string,
};

export default Row;
