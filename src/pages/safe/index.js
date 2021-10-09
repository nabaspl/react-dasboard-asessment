import React, { useState } from 'react';
import MainWrapper from '../../components/main/wrapper/mainWrapper';
import SideNav from '../../components/sideNav/sideNav';
import MainContents from '../../components/mainContent/mainContent';
import SideNavTop from '../../components/sideNavTop/sideNavTop';
import SideNavBody from '../../components/sideNavBody/sideNavBody';
import './style.css';
import {SideNavTopContent,SideNavBodyContent} from './components/sideNavContents/sideNavContent'
import {MainContentHead,MainContentBody} from './components/mainContent/mainContent'

function Safe(){

    let safe={
        safeName:'sample/sample',
        safeDescription:'A Safe is a logical unit to store the secrets. All the safes are created within Vault. You can control access only at the safe level. As a vault administrator you can manage safes but cannot view the content of the safe.'
    }

        
        return  <MainWrapper>
                    <SideNav>
                        <SideNavTop>
                            <SideNavTopContent safesCount={0}/>
                        </SideNavTop>
                            
                        <SideNavBody>
                            <SideNavBodyContent/>
                        </SideNavBody>
        
                    </SideNav>
                    <MainContents>
                       <MainContentHead safe={safe}/>
                       <MainContentBody/>
                    </MainContents>
                    
                </MainWrapper>;
   
}



export default Safe;