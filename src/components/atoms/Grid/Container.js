import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GRID_CONFIG, MEDIA } from './config';

const StyledContainer = styled.div`
  max-width: ${`${GRID_CONFIG.maxSize}px`};
  padding: ${`0 ${GRID_CONFIG.offsets.mobile}px`};
  margin: 0 auto;
  background:  ${props => (props.background ? `${props.background}` : 'none')};
  border:  ${props => (props.border ? `1px solid ${props.border}` : 'none')};

  ${MEDIA.tablet`
    padding:  ${`0 ${GRID_CONFIG.offsets.tablet}px`};
  `}
  ${MEDIA.desktop`
    padding: ${`0 ${GRID_CONFIG.offsets.desktop}px`};
  `}
 
  ${props => props.addCSS}
`;

const Container = (props) => {
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
  return <StyledContainer {...props}>{childrenWithProps}</StyledContainer>;
};

Container.defaultProps = {
  background: '',
  border: '',
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  border: PropTypes.string,
};

export default Container;
