//All necessary imports for this javascript
import React, { Component } from 'react';
import '../style.css';
import './team.css';

class SubCom extends Component {
  render() {
    return (
      <div class="subcom_row">
        <div class="subcom_col">
          <div class="profile">
            <p className="subcom_profile_name">{this.props.name}</p>
          </div>
        </div>

        <div className="subcom_longer_col">
          <div class="profile">
            <p className="subcom_profile_degree">{this.props.degree + ', ' + this.props.year + ' year'}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default SubCom;
