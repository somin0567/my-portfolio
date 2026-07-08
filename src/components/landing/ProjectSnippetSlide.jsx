import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * ProjectSnippetSlide 컴포넌트
 * Hero 캐러셀에서 대표 프로젝트를 짧게 소개하는 슬라이드.
 *
 * Props:
 * @param {string} title - 프로젝트 제목 [Required]
 * @param {string} description - 프로젝트 짧은 설명 [Required]
 *
 * Example usage:
 * <ProjectSnippetSlide title="Project 1" description="..." />
 */
function ProjectSnippetSlide({ title, description }) {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', px: { xs: 2, md: 3 } }}>
      <Typography
        variant="overline"
        sx={{ color: '#FAF4E3', letterSpacing: 2, fontWeight: 600 }}
      >
        FEATURED PROJECT
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          color: '#FFFFFF',
          fontWeight: 700,
          mt: 1,
          mb: 2,
          fontSize: { xs: '1.7rem', md: '2.5rem' },
          lineHeight: 1.4,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#FAF4E3',
          fontSize: { xs: '0.95rem', md: '1.1rem' },
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
    </Container>
  );
}

export default ProjectSnippetSlide;
