import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import HeroIntroSlide from './HeroIntroSlide';
import ProjectSnippetSlide from './ProjectSnippetSlide';
import HeroCarouselDots from './HeroCarouselDots';

const AUTOPLAY_INTERVAL_MS = 5000;
const SWIPE_THRESHOLD_PX = 50;

const SLIDES = [
  { key: 'intro' },
  {
    key: 'project-1',
    title: 'Project 1',
    description: '프로젝트 1에 대한 짧은 소개가 들어갈 예정입니다.',
  },
  {
    key: 'project-2',
    title: 'Project 2',
    description: '프로젝트 2에 대한 짧은 소개가 들어갈 예정입니다.',
  },
];

/**
 * HeroSection 컴포넌트
 * Home 페이지 최상단 히어로 캐러셀. 소개 슬라이드와 프로젝트 스니펫 슬라이드를 스와이프,
 * 자동 넘김, 하단 페이지네이션으로 탐색할 수 있다.
 */
function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragStartX = useRef(null);

  const goToSlide = (nextIndex) => {
    setActiveIndex((nextIndex + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timerId);
  }, [activeIndex]);

  const handlePointerDown = (event) => {
    dragStartX.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (dragStartX.current === null) return;
    const deltaX = event.clientX - dragStartX.current;
    if (deltaX > SWIPE_THRESHOLD_PX) {
      goToSlide(activeIndex - 1);
    } else if (deltaX < -SWIPE_THRESHOLD_PX) {
      goToSlide(activeIndex + 1);
    }
    dragStartX.current = null;
  };

  return (
    <Box
      id="hero"
      component="section"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '60vh', md: '70vh' },
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #4CB98C 0%, #388F6C 100%)',
        touchAction: 'pan-y',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          minHeight: { xs: '60vh', md: '70vh' },
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {SLIDES.map((slide) => (
          <Box
            key={slide.key}
            sx={{
              flex: '0 0 100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {slide.key === 'intro' ? (
              <HeroIntroSlide />
            ) : (
              <ProjectSnippetSlide title={slide.title} description={slide.description} />
            )}
          </Box>
        ))}
      </Box>

      <HeroCarouselDots
        count={SLIDES.length}
        activeIndex={activeIndex}
        onSelect={goToSlide}
      />
    </Box>
  );
}

export default HeroSection;
