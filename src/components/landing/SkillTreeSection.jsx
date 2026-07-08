import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SectionCard from '../ui/SectionCard';

const SKILL_PREVIEW = [
  { name: 'React', value: 80 },
  { name: 'JavaScript', value: 75 },
  { name: 'UI/UX', value: 65 },
];

/**
 * SkillTreeSection 컴포넌트
 * Home 페이지의 기술 스택 시각화 섹션. 프로그레스바로 향후 콘텐츠를 미리 보여준다.
 */
function SkillTreeSection() {
  return (
    <SectionCard
      id="skills"
      title="Skill Tree"
      description="여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화 할 예정입니다."
      bgColor="background.paper"
    >
      <Box sx={{ mt: 1 }}>
        <Chip
          label="예시 미리보기"
          size="small"
          sx={{
            mb: 2,
            backgroundColor: 'accent.main',
            color: 'accent.contrastText',
            fontWeight: 600,
          }}
        />
        <Stack spacing={2} sx={{ textAlign: 'left' }}>
          {SKILL_PREVIEW.map((skill) => (
            <Box key={skill.name}>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', mb: 0.5, fontWeight: 600 }}
              >
                {skill.name}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={skill.value}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: 'primary.light',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              />
            </Box>
          ))}
        </Stack>
      </Box>
    </SectionCard>
  );
}

export default SkillTreeSection;
