import React from "react";

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

		// if (opened) {
		// 	title ='Hide Company';
		// } else {
		// 	title ='Show Company';
		// }

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