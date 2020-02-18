import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import {Link} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { MenuWrapper } from './dropstyle';
export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuWrapper>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Articles reçyclé - 0 déchets
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to ="/product/homme">Homme</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to ="/product/femme">Femme</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to ="/product/enfant">Enfant</Link></MenuItem>
      </Menu>
    </MenuWrapper>
  );
}
