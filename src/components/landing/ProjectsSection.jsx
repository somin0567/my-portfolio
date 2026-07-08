import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SectionCard from '../ui/SectionCard';

const PROJECT_PLACEHOLDERS = ['Project 1', 'Project 2', 'Project 3', 'Project 4'];

/**
 * ProjectsSection 컴포넌트
 * Home 페이지의 대표 프로젝트 미리보기 섹션. 썸네일 자리와 Projects 페이지 이동 버튼을 포함한다.
 */
function ProjectsSection() {
  return (
    <SectionCard
      id="projects"
      title="Projects"
      description="여기는 Projects 섹션입니다. 대표작 썸네일 3~4개와 '더 보기' 버튼이 들어갈 예정입니다."
      bgColor="background.default"
    >
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {PROJECT_PLACEHOLDERS.map((label) => (
          <Grid key={label} size={{ xs: 6, md: 3 }}>
            <Paper
              elevation={0}
              sx={{
                aspectRatio: '4 / 3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'secondary.main',
                border: '1px dashed',
                borderColor: 'primary.dark',
                borderRadius: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: 'text.primary', fontWeight: 600 }}
              >
                {label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Button
          component={RouterLink}
          to="/projects"
          variant="outlined"
          sx={{
            fontWeight: 600,
            textTransform: 'none',
            px: 4,
            color: 'primary.dark',
            borderColor: 'primary.dark',
            '&:hover': {
              borderColor: 'primary.dark',
              backgroundColor: 'primary.light',
            },
          }}
        >
          더 보기
        </Button>
      </Box>
    </SectionCard>
  );
}

export default ProjectsSection;
