
import Navbar from "./Navbar";
import ReactDOM from "react-dom";
import Body from "./Body";

function App() {
    return (
        <div>
            <Navbar />
            <Body />
        </div>
    )
}

const app = App();
const layout = document.querySelector('.root');
ReactDOM.render(app, layout);