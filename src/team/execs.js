import React, { Component } from 'react';
import '../style.css';
import './team.css';

class Execs extends Component {
  render() {
    return (
      <div class="exec_col">
        <div class="profile">
          <div>
            <div class="profile_crop">
              <img
                src={process.env.PUBLIC_URL + this.props.imgUrl}
                className={'profile_img ' + this.props.class}
                alt={this.props.alt}
              />
            </div>
            <div className="profile_details">
              <p className="profile_text_name">{this.props.name}</p>
              <p className="profile_text_position">{this.props.position}</p>
              <p className="profile_degree">{this.props.degree + ', ' + this.props.year + ' year'}</p>
              <div classname="icon_bar">
                <a
                  href={'https://www.linkedin.com/in/' + this.props.linkedin + '/'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + '/linkedin.png'}
                    alt="LinkedIn Icon"
                  />
                </a>
                <a
                  href={'https://www.facebook.com/' + this.props.fb}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + '/facebook.png'}
                    alt="Facebook Icon"
                  />
                </a>
                <a
                  href={'mailto:' + this.props.email + '@unswwit.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src={process.env.PUBLIC_URL + '/email.png'}
                    alt="Email Icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Execs;
