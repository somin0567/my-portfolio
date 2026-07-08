import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import SectionCard from '../ui/SectionCard';

/**
 * AboutMeSection 컴포넌트
 * Home 페이지의 About Me 소개 섹션. About Me 상세 페이지로 이동하는 버튼을 포함한다.
 */
function AboutMeSection() {
  return (
    <SectionCard
      id="about"
      title="About Me"
      description={'여기는 About Me 섹션입니다. 간단한 자기소개와 "더 알아보기" 버튼이 들어갈 예정입니다.'}
      bgColor="background.default"
    >
      <Button
        component={RouterLink}
        to="/about"
        variant="contained"
        color="primary"
        sx={{ mt: 3, fontWeight: 600, textTransform: 'none', px: 4 }}
      >
        더 알아보기
      </Button>
    </SectionCard>
  );
}

export default AboutMeSection;
