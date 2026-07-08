import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

/**
 * SectionCard 컴포넌트
 * Home 페이지의 각 섹션을 감싸는 공통 레이아웃. 배경색과 카드 스타일을 일관되게 적용한다.
 *
 * Props:
 * @param {string} id - 섹션 앵커용 id [Required]
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} description - 섹션 설명 텍스트 [Required]
 * @param {string} bgColor - 섹션 바깥 배경색 (theme 경로 문자열) [Optional, 기본값: 'background.default']
 * @param {node} children - 섹션 내부 추가 콘텐츠 [Optional]
 *
 * Example usage:
 * <SectionCard id="hero" title="Hero" description="..." />
 */
function SectionCard({ id, title, description, bgColor = 'background.default', children }) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        width: '100%',
        backgroundColor: bgColor,
        py: { xs: 6, md: 10 },
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
        <Card
          elevation={0}
          sx={{
            backgroundColor: 'background.paper',
            border: '1px solid',
            borderColor: 'primary.light',
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 }, textAlign: 'center' }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: 'primary.dark',
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.6,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
              }}
            >
              {description}
            </Typography>
            {children}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default SectionCard;
