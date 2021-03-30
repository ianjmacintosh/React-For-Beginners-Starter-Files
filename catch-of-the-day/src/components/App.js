import React from "react";

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <Header />
                <Inventory></Inventory>
                <Order></Order>
            </div>
        )
    }
}

export default App;