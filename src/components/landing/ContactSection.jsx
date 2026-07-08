import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SectionCard from '../ui/SectionCard';

const SNS_ICONS = [
  { icon: EmailIcon, label: 'Email' },
  { icon: GitHubIcon, label: 'GitHub' },
  { icon: LinkedInIcon, label: 'LinkedIn' },
];

/**
 * ContactSection 컴포넌트
 * Home 페이지 최하단 연락처 섹션. SNS 링크 자리와 간단한 메시지 폼 미리보기를 포함한다.
 */
function ContactSection() {
  return (
    <SectionCard
      id="contact"
      title="Contact"
      description="여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다."
      bgColor="background.paper"
    >
      <Stack direction="row" spacing={1} sx={{ mt: 3, justifyContent: 'center' }}>
        {SNS_ICONS.map(({ icon: Icon, label }) => (
          <IconButton
            key={label}
            aria-label={label}
            sx={{
              color: 'primary.dark',
              backgroundColor: 'primary.light',
              '&:hover': { backgroundColor: 'primary.main' },
            }}
          >
            <Icon />
          </IconButton>
        ))}
      </Stack>

      <Box
        component="form"
        onSubmit={(event) => event.preventDefault()}
        sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mx: 'auto' }}
      >
        <TextField label="이름" size="small" disabled fullWidth />
        <TextField label="이메일" size="small" disabled fullWidth />
        <TextField label="메시지" size="small" disabled fullWidth multiline rows={3} />
        <Button variant="contained" color="primary" disabled sx={{ textTransform: 'none' }}>
          메시지 보내기 (추후 연동 예정)
        </Button>
      </Box>
    </SectionCard>
  );
}

export default ContactSection;
