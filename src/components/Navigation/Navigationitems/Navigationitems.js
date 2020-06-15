import React from 'react';
import classes from './Navigationitems.css';
import Navigationitem from './Navigationitem/Navigationitem';

const navigationItems = () => (
	<ul className={classes.NavigationItems}>
	    <Navigationitem link='/' exact>Burger Builder</Navigationitem>
	    <Navigationitem link='/orders'>Orders</Navigationitem>
	</ul>
);

export default navigationItems;