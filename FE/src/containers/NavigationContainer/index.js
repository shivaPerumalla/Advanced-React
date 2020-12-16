import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import {logout} from '../AuthContainer/meta/actions';
import { getUser } from '../AuthContainer/meta/selectors';
const mapStateToProps = state => ({
    routes: [{ key: 'home', path: 'home', text: 'Home' }, { key: 'vacations', path: 'vacations', text: 'Vacations' }],
    user : getUser(state)
});

const mapDispatchToProps = ({
    logout
})

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);

export default NavigationContainer;
