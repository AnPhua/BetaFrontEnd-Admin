
import { Grid, Stack, Typography } from '@mui/material';

import Login from '../Signin/Login';
import AuthWrapper from './AuthWrapper';

const LoginFinally = () => (
  <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Login</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Login />
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default LoginFinally;
