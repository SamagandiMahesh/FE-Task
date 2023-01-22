import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from "../components/molecules/Header/Header";
import Footer from "../components/molecules/Footer/Footer";
import Container from '../components/atoms/Grid/Container';
import styled from 'styled-components';

const BodySection = styled.section`
  min-height: calc(100vh - 140px)
`;

const Layout = () => {
    return (
    <Container as="article">
        <Header />
        <BodySection>
          <Outlet />
        </BodySection>
        <Footer />
    </Container>
  )
}

Layout.defaultProps = {
}
Layout.propTypes = {
}

export default Layout