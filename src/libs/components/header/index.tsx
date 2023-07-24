import { Stack, Typography } from '@mui/material';
import { theme } from '../../theme';

export default function Header() {
  return (
    <Stack justifyContent={'center'} sx={{ backgroundColor: theme.colors.bg }}>
      <Typography variant={'h4'} textAlign={'center'} my={2}>
        CowAPI
      </Typography>
    </Stack>
  );
}
