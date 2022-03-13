import ReactDom from "react-dom";
import Navbar from "./components/Navbar";
import Corpo from "./components/Corpo";

function App(){
    return (
        <div>
            <Navbar />
            <Corpo />
        </div>
    )
}

const app = App();
const root = document.querySelector('.root');
ReactDom.render(app,root);