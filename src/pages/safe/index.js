import React, { Component } from 'react';
import MainWrapper from '../../components/main/wrapper/mainWrapper';
import SideNav from '../../components/sideNav/sideNav';
import MainContents from '../../components/mainContent/mainContent';
import Modal from '../../components/modal/modal';
import SafeForm from './components/form/safeForm';
import SideNavTop from '../../components/sideNavTop/sideNavTop';
import SideNavBody from '../../components/sideNavBody/sideNavBody';
import './style.css';
import {SideNavTopContent,SideNavBodyContent} from './components/sideNavContents/sideNavContent'


class Safe extends React.Component {
    
    render() { 
        let items=[{safeName:"test",safeOwner:"tester",safeType:'personal',safeDescription:'test'},{safeName:"test",safeOwner:"tester",safeType:'personal',safeDescription:'test'}];
        return  <MainWrapper>
                    <SideNav>
                        <SideNavTop>
                            <SideNavTopContent safesCount={0}/>
                        </SideNavTop>
                            
                        <SideNavBody>
                            <SideNavBodyContent itemLists={items}/>
                        </SideNavBody>
        
                    </SideNav>
                    <MainContents>

                    </MainContents>
                    <Modal>
                        <SafeForm/>
                    </Modal>
                </MainWrapper>;
    }
    

    
}


export default Safe;