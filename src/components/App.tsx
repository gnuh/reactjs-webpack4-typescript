import * as React from 'react'
import {Link} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1><br/>
                <div>
                    <Link to="/login">Login</Link>
                    </div>
            </div>
        );
    }
}

export default (App)