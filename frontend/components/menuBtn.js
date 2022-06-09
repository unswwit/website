import React from "react";

class MenuBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  componentDidUpdate(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({
        open: nextProps.open,
      });
    }
  }

  handleClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  // change colour of lines depending on user dark/light mode
  getBackground() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "white";
    } if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return "var(--grey)";
    } 
  }

  render() {
    const styles = {
      container: {
        height: "35px",
        width: "35px",
        alignItems: "center",
        cursor: "pointer",
      },
      line: {
        height: "2px",
        width: "20px",
        background: this.getBackground(),
        transition: "all 0.2s ease",
      },
      lineTop: {
        transform: this.state.open ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "5px",
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? "translateX(-16px)" : "none",
      },
      lineBottom: {
        transform: this.state.open ? "translateX(-1px) rotate(-45deg)" : "none",
        transformOrigin: "top left",
        marginTop: "5px",
      },
    };

    return (
      <div
        style={styles.container}
        onClick={this.props.onClick ? this.props.onClick : this.handleClick()}
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    );
  }
}

export default MenuBtn;
