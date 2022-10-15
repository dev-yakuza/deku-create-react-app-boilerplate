import { AppBar, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: initial;
`

export const Header = () => {
  return (
    <AppBar position="static" elevation={0} style={{ backgroundColor: '#FFF' }}>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <StyledLink to="/">
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Blog App
          </Typography>
        </StyledLink>
      </Toolbar>
    </AppBar>
  )
}
