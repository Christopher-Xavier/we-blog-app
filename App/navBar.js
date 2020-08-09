import React from 'react';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';

export default function Navigation() {
	return (
		<nav className='Nav'>
			<NavLink className={'Home'} activeClassName='is-active' exact to='./Home'>
				Home
			</NavLink>
			<NavLink className={'Login'} activeClassName='is-active' to='../Login'>
				Login
			</NavLink>
			<NavLink className={'Profile'} activeClassName='is-active' to='.../Profile'>
				Profile
			</NavLink>
			<NavLink className={'terms'} activeClassName='is-active' to='.../Terms'>
				Terms
            </NavLink>
            <NavLink className={'quotes'} activeClassName='is-active' to='..../Quotes'>
            Quotes
            </NavLink>
            </nav>
	);
}


