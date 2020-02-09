import React from "react";

// This class is used to show and hide the sponsor descriptions when the logo has been clicked
class ToggleBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.toggleBox = this.toggleBox.bind(this);
	}
  
	toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}
  
	render() {
		var { title, children } = this.props;
		const { opened } = this.state;

		return (
			<div className="box">
				<div className="boxTitle" onClick={this.toggleBox}>
                    <img src={process.env.PUBLIC_URL + title} alt='' className='sponsorImg'></img>
				</div>
				{opened && (					
					<div class="boxContent">
						{children}
					</div>
				)}
			</div>
		);
	}
}

export default ToggleBox;