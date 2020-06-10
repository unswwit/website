// For this demo, we are using the UMD build of react-router-dom
const {
HashRouter,
Switch,
Route,
Link,
NavLink
} = window.ReactRouterDOM

const Home = () => (
<div>
    <h1>Welcome!</h1>
    <div>
        Home...
    </div>
</div>
)

const Loan = () => (
<div>
    Loan...
</div>
)

const Revenue = () => (
<div>
    Revenue...
</div>
)

const Main = () => (
<main className="p-4">
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/loan' component={Loan}/>
    <Route path='/revenue' component={Revenue}/>
    </Switch>
</main>
)

class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
        showDD: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleHover(e) {
        this.setState({
            showDD: !this.state.showDD
        })
        e.preventDefault()
    }
    
    render() {
    return (
        <HashRouter hashType="noslash">
            <header className="menubar">
                <nav className="navbar navbar-light bg-light navbar-expand-sm">
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav w-100">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" >
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown" display="static" onMouseEnter={this.handleHover}>
                                    <a href="#!" className="nav-link dropdown-toggle">
                                        <span className="menuTitle">Loan</span>
                                    </a>
                                    <div className={this.state.showDD?'dropdown-menu show':'dropdown-menu'}>
                                        <NavLink className="dropdown-item" to="/loan">                                
                                            <span>Manage Loan</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item ml-auto">
                            <NavLink className="nav-link" to="/revenue" >
                                <span className="menuTitle">Revenue</span>
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Main />
            </header>
        </HashRouter>)
    }
}

ReactDOM.render((
    <App />
), document.getElementById('root'))

{//<li class="nav-item"><NavLink to="/blog">RESOURCES</NavLink></li>
}
<li class="nav-item dropdown">
<NavLink class="nav-link dropdown-toggle" to="/blog" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
RESOURCES
</NavLink>
<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <NavLink class="dropdown-item" to="/blog">BLOG</NavLink>
    <NavLink class="dropdown-item" to="/blog">PUBLICATIONS</NavLink>
    <NavLink class="dropdown-item" to="/blog">MARKETING ARCHIVES</NavLink>
</div>
</li>
