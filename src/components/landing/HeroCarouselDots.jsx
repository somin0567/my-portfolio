import Box from '@mui/material/Box';

/**
 * HeroCarouselDots 컴포넌트
 * Hero 캐러셀 하단 중앙에 표시되는 페이지네이션. 현재 인덱스는 세로로 긴 타원으로 표시한다.
 *
 * Props:
 * @param {number} count - 전체 슬라이드 개수 [Required]
 * @param {number} activeIndex - 현재 활성 슬라이드 인덱스 [Required]
 * @param {function} onSelect - 점 클릭 시 실행할 함수, 선택한 인덱스를 인자로 받음 [Required]
 *
 * Example usage:
 * <HeroCarouselDots count={3} activeIndex={0} onSelect={setIndex} />
 */
function HeroCarouselDots({ count, activeIndex, onSelect }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: { xs: 16, md: 24 },
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      {Array.from({ length: count }).map((_, dotIndex) => (
        <Box
          key={dotIndex}
          component="button"
          type="button"
          aria-label={`${dotIndex + 1}번째 슬라이드로 이동`}
          onClick={() => onSelect(dotIndex)}
          sx={{
            width: 8,
            height: activeIndex === dotIndex ? 22 : 8,
            borderRadius: 4,
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            backgroundColor:
              activeIndex === dotIndex ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
            transition: 'height 0.3s ease, background-color 0.3s ease',
          }}
        />
      ))}
    </Box>
  );
}

export default HeroCarouselDots;
