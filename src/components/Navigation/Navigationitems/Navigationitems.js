import React from 'react';
import classes from './Navigationitems.css';
import Navigationitem from './Navigationitem/Navigationitem';

const navigationItems = ( props ) => (
	<ul className={classes.NavigationItems}>
	    <Navigationitem link='/' exact>Burger Builder</Navigationitem>
	    { props.isAuthenticated ?
	    	<Navigationitem link='/orders'>Orders</Navigationitem> :
	    	null}
	    { !props.isAuthenticated ?
	    	<Navigationitem link='/auth'>Sign in</Navigationitem> :
	    	<Navigationitem link='/logout'>Logout</Navigationitem>
	    }
	</ul>
);

export default navigationItems;