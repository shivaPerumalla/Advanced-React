import { connect } from 'react-redux';
import NewContainer from './components/NewContainer';
import {getNewContainer} from "./meta/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    getNewContainer,
});

const NewContainerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewContainer);

export default NewContainerContainer;
