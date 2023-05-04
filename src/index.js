
import Navbar from "./Navbar";
import ReactDOM from "react-dom";

function App() {
    return (
        <Navbar/>
    )
}

const app = App();
const layout = document.querySelector('.root');
ReactDOM.render(app, layout);