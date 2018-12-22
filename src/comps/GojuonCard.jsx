import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class GojuonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            sound: props.sound,
            logo: props.logo,
        }
    }
    
    render () {
        return (
            <div className="box">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>单词卡</strong>
                      <br/>
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </article>
            </div>
        )
    }
}
//
//GojuonCard.PropTypes = {
//    name: propTypes.string,
//    sound: propTypes.string,
//    logo: propTypes.string
//}
