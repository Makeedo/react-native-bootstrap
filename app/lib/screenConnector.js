import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ActionCreators } from '../actions';

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(ActionCreators, dispatch)
    };
}

export default function connectScreen(mapStateToProps = ( () => {return {}} ), component){
    return connect(mapStateToProps, mapDispatchToProps)(component);
}
