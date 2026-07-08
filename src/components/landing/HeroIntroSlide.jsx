import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * HeroIntroSlide 컴포넌트
 * Hero 캐러셀의 첫 번째 슬라이드. 메인 소개 문구를 표시한다.
 */
function HeroIntroSlide() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', px: { xs: 2, md: 3 } }}>
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
  );
}

export default HeroIntroSlide;
