import React, { Component } from 'react';
import MainWrapper from '../../components/main/wrapper/mainWrapper';
import SideNav from '../../components/sideNav/sideNav';
import MainContents from '../../components/mainContent/mainContent';

class Vault extends React.Component {
    render() { 
        return  <MainWrapper>
                    <SideNav></SideNav>
                    <MainContents></MainContents>
                </MainWrapper>;
    }
}
 
export default Vault;