import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

/**
 * Navbar 컴포넌트
 * 상단 고정 내비게이션 바. Home / About Me / Projects 탭을 제공한다.
 */
function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'primary.light',
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          maxWidth: 'lg',
          mx: 'auto',
          justifyContent: 'space-between',
          px: { xs: 2, md: 3 },
        }}
      >
        <Typography
          variant="h6"
          component="span"
          sx={{ color: 'primary.dark', fontWeight: 700 }}
        >
          My Portfolio
        </Typography>

        <Box sx={{ display: 'flex', gap: { xs: 1, md: 3 } }}>
          {NAV_ITEMS.map((item) => (
            <Box
              key={item.to}
              component={NavLink}
              to={item.to}
              end={item.to === '/'}
              sx={{
                textDecoration: 'none',
                fontSize: { xs: '0.85rem', md: '1rem' },
                fontWeight: 600,
                color: 'text.secondary',
                px: { xs: 1, md: 1.5 },
                py: 0.5,
                borderRadius: 1,
                '&.active': {
                  color: 'primary.dark',
                  backgroundColor: 'primary.light',
                },
                '&:hover': {
                  color: 'primary.dark',
                },
              }}
            >
              {item.label}
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
