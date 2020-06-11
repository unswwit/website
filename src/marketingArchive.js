//All necessary imports for this javascript
import React, { Component } from "react";
import "./style.css";
import "./marketingArchive.css";

class MarketingArchive extends Component {
  render() {
    return (
        <div>

            {/*Start of Header*/}
            <div class="marketingCoverPhoto">
                <div class="title">
                    <h1>Marketing Archive</h1>
                </div>
            </div>
            {/*End of Header*/}

            {/*Start of text*/}
            <div class="introParagraph">
              <p class="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie eu tellus sed facilisis. Aliquam eget interdum ipsum. Vivamus rutrum sapien velit, eget finibus enim pellentesque at. Ut sed felis nisi. Maecenas.</p>
            </div>

            {/*2020 section*/}
            <div class="yearSection">
              <p class="year">2020</p>
            </div>
        </div>
    );
  }
}
export default MarketingArchive;
