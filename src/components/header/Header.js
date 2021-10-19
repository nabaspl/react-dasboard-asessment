import './style.css';
import Logo from '../../assets/images/logo.svg'
import NavBar from '../navBar/navBar';

export default function Header(props){
    const [menu1,menu2]  = props.menuLists;
    return <header>
        <div className="float-left">
        <img src={Logo} className="logo" alt="T-vault-logo" onClick={() => window.location.reload(false)}/>
            <NavBar key={0} menuItems={menu1}/>
        </div>
        <div className="float-right">
            <NavBar key={0} menuItems={menu2}/>
        </div>
    </header>
}