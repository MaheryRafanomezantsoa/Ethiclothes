import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
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
        Produits Locaux
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className="item">Homme</MenuItem>
        <MenuItem onClick={handleClose} className="item">Femme</MenuItem>
        <MenuItem onClick={handleClose} className="item">Enfant</MenuItem>
      </Menu>
    </MenuWrapper>
  );
}

