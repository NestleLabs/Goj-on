import React, {Component} from 'react';
import {GlobalContext} from './global';
import GojuonCard from '../comps/GojuonCard';

export default class extends Component {
    static contextType = GlobalContext;
    render () {
        return (
             <React.Fragment>
                 <section className="section hero">
                     <article className="hero-body">
                       <h3 className="title has-text-centered">学习日语五十音</h3>
                     </article>
                 </section>
                 <section className="section">
                     <GojuonCard {...this.context}/>
                 </section>
             </React.Fragment>
        )
    }
}
