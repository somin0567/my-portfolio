import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * Projects 페이지
 * 포트폴리오 작품들이 들어갈 페이지. 현재는 개발 예정 안내 문구만 표시한다.
 */
function Projects() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 4, md: 8 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="sm" sx={{ px: { xs: 2, md: 3 }, textAlign: 'center' }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: 'primary.dark', fontWeight: 700, mb: 2 }}
        >
          Projects
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default Projects;
