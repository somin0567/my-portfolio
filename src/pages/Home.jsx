import Box from '@mui/material/Box';
import HeroSection from '../components/landing/HeroSection';
import AboutMeSection from '../components/landing/AboutMeSection';
import SkillTreeSection from '../components/landing/SkillTreeSection';
import ProjectsSection from '../components/landing/ProjectsSection';
import ContactSection from '../components/landing/ContactSection';

/**
 * Home 페이지
 * Hero, About Me, Skill Tree, Projects, Contact 5개 섹션을 순서대로 배치한다.
 */
function Home() {
  return (
    <Box sx={{ width: '100%' }}>
      <HeroSection />
      <AboutMeSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ContactSection />
    </Box>
  );
}

export default Home;
