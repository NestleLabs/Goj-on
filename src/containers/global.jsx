import React, {Component, createContext} from 'react';
import Loading from './Loading.com';

const defaultState = {
    category: 3,
    language: 'ja',
    theme: 'default',
    loading: false,
};

export const GlobalContext = createContext(defaultState);

export default class Global extends Component {

    componentDidMount () {
        
    }

    state = defaultState

    loading () {
        return (this.state.loading ? (<Loading />) : null)
    }

    render () {
        return (
             <GlobalContext.Provider value={{...defaultState}}>
                 <div className={!this.state.loading ? 'is-loading' : ''}></div>
                 <this.props.component />
             </GlobalContext.Provider>
        )
    }
};
