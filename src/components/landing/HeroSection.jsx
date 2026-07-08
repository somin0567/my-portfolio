import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * HeroSection 컴포넌트
 * Home 페이지 최상단 히어로 영역. primary 컬러를 강하게 드러내는 도입부.
 */
function HeroSection() {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        width: '100%',
        minHeight: { xs: '60vh', md: '70vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #4CB98C 0%, #388F6C 100%)',
        px: { xs: 2, md: 3 },
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="overline"
          sx={{ color: '#FAF4E3', letterSpacing: 2, fontWeight: 600 }}
        >
          PORTFOLIO
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            color: '#FFFFFF',
            fontWeight: 700,
            mt: 1,
            mb: 2,
            fontSize: { xs: '1.7rem', md: '2.5rem' },
            lineHeight: 1.4,
          }}
        >
          여기는 Hero 섹션입니다.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#FAF4E3',
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            lineHeight: 1.6,
          }}
        >
          메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default HeroSection;
