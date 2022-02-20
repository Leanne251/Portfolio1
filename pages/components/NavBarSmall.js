import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { HamburgerIcon, PhoneIcon } from '@chakra-ui/icons';

function NavBarSmall() {
	return (
		<div>
			<Menu>
				<MenuButton aria-label="Options" icon={<HamburgerIcon />} />
				<MenuList>
					<MenuItem>New Tab</MenuItem>
					<MenuItem>New Window</MenuItem>
					<MenuItem>Open Closed Tab</MenuItem>
					<MenuItem>Open File...</MenuItem>
				</MenuList>
			</Menu>
		</div>
	);
}

export default NavBarSmall;
