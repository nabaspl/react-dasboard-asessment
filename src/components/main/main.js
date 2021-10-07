import './style.css';
export default function Main(props){
    return <main className="main-body">
        {props.children}
    </main>
}