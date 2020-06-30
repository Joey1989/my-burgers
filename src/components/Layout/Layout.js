import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	}

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	}

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer};
		});
	}

	render () {
		return (
			<Aux>
			    <Toolbar
			        isAuth={this.props.authenticated}
			        drawerToggleClicked={this.sideDrawerToggleHandler}/>
			    <Sidedrawer
			        isAuth={this.props.authenticated}
			        open={this.state.showSideDrawer}
			        closed={this.sideDrawerClosedHandler}/>
			    <main className={classes.Content}>
			    	{this.props.children}
			    </main>
		    </Aux>
		)
	}
};

const mapStateToProps = state => {
    return {
    	authenticated: state.auth.token !== null,
    }
};

export default connect( mapStateToProps, null)(Layout);