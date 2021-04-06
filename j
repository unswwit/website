@ -37,12 +37,39 @@ class App extends Component {
      showDD: false,
      menuOpen: false,
      navBar: false,
      navClass: ""
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
    this.hideNavBar = this.hideNavBar.bind(this);
    this.changeNavBar = this.changeNavBar.bind(this);
  }

  // hide the navigation bar when a user is at the bottom of the page
  hideNavBar() {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    if (bottom) {
      this.changeNavBar(true);
    }    
  }

  // control the classNames of the navigation bar
  changeNavBar(hideNav = false) { 
    let baseClass = "navbar navbar-expand-md navbar-dark bg-custom fixed-top ";
    if (this.state.navBar) {
      baseClass += "activeNav";
    } 
    if (hideNav) {
      console.log("here")
      baseClass += " hiddenNav";
    }
    this.setState({
      navClass: baseClass
    });
  }

  // change the background of the navigation bar based on scroll height
  changeBackground() {
    if (window.scrollY >= 60) {
      this.setState({
@ -55,12 +82,14 @@ class App extends Component {
    }
  }

  // open and close menu
  handleMenuClick() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  // show and hide drop down on hover
  handleHover(e) {
    this.setState({
      showDD: !this.state.showDD,
@ -68,6 +97,7 @@ class App extends Component {
    e.preventDefault();
  }

  // close the menu if the screen is being resized