import React, { Component } from 'react';
import MainWrapper from '../../components/main/wrapper/mainWrapper';
import SideNav from '../../components/sideNav/sideNav';
import MainContents from '../../components/mainContent/mainContent';
import Button from '../../components/form/button/button';
import Select from '../../components/form/select/select';

class Safe extends React.Component {
    render() { 
        const options = [
            {
                value:'personal',
                text:'Personal'
            },
            {
                value:'public',
                text:'Public'
            },
        ]
        return  <MainWrapper>
                    <SideNav>
                         <Button >Test</Button>
                        {/* <Select options={options} onClickChange={}/> */}
                    </SideNav>
                    <MainContents>

                    </MainContents>
                </MainWrapper>;
    }
}
 
export default Safe;