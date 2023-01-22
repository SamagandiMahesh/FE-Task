import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GRID_CONFIG, MEDIA } from './config';

const StyledColumn = styled.div`
  display: ${props => (props.flex ? 'flex' : 'block')};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
  flex: 0 0 ${props => (props.smCols / GRID_CONFIG.totalSmCols) * 100}%;
  max-width: ${props => (props.smCols / GRID_CONFIG.totalSmCols) * 100}%;
  padding: ${props => ((props.bleed) ? '0' : `0 ${(GRID_CONFIG.gutters.mobile / 2)}px`)};
  margin: 0 0 0 ${props => (props.smOffset / GRID_CONFIG.totalSmCols) * 100}%;
  position: relative;
  background:  ${props => (props.background ? `${props.background}` : 'none')};
  border:  ${props => (props.border ? `1px solid ${props.border}` : 'none')};
  box-sizing: border-box;

  ${MEDIA.tablet`
    flex: 0 0 ${props => (props.mdCols / GRID_CONFIG.totalMdCols) * 100}%;
    max-width: ${props => (props.mdCols / GRID_CONFIG.totalMdCols) * 100}%;
    padding: ${props => ((props.bleed) ? '0' : `0 ${(GRID_CONFIG.gutters.tablet / 2)}px`)};
    margin: 0 0 0 ${props => (props.mdOffset / GRID_CONFIG.totalMdCols) * 100}%;
  `}

  ${MEDIA.desktop`
    flex: 0 0 ${props => (props.lgCols / GRID_CONFIG.totalLgCols) * 100}%;
    max-width: ${props => (props.lgCols / GRID_CONFIG.totalLgCols) * 100}%;
    padding: ${props => ((props.bleed) ? '0' : `0 ${(GRID_CONFIG.gutters.desktop / 2)}px`)};
    margin: 0 0 0 ${props => (props.lgOffset / GRID_CONFIG.totalLgCols) * 100}%;
  `}
 
  ${props => props.addCSS};
`;

const Column = (props) => {
  const { children } = props;

  return <StyledColumn {...props}>{children}</StyledColumn>;
};

Column.defaultProps = {
  lgCols: 12,
  mdCols: 8,
  smCols: 4,
  lgOffset: 0,
  mdOffset: 0,
  smOffset: 0,
  flexwrap: false,
  flex: false,
  bleed: false,
  children: null,
  background: '',
  border: '',
};

Column.propTypes = {
  smCols: PropTypes.number,
  mdCols: PropTypes.number,
  lgCols: PropTypes.number,
  lgOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  smOffset: PropTypes.number,
  flex: PropTypes.bool,
  flexwrap: PropTypes.bool,
  children: PropTypes.node,
  bleed: PropTypes.bool,
  background: PropTypes.string,
  border: PropTypes.string,
};

export default Column;
