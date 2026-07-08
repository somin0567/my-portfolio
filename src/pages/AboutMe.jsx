import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * AboutMe 페이지
 * 상세 자기소개가 들어갈 페이지. 현재는 개발 예정 안내 문구만 표시한다.
 */
function AboutMe() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 4, md: 8 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="sm" sx={{ px: { xs: 2, md: 3 }, textAlign: 'center' }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: 'primary.dark', fontWeight: 700, mb: 2 }}
        >
          About Me
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          AboutMe 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutMe;
