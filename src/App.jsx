import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NewBill } from "./components/Newbill";
import HomePage from "./Home";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/new" element={<NewBill />} />
            </Routes>
        </Router>
    );
};

export default App;
