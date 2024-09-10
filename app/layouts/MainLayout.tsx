import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import HomePage from '../components/HomePage';

function MainLayout() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/landing" component={HomePage} />
                {/* ... other routes ... */}
            </Switch>
        </Router>
    );
}

export default MainLayout;