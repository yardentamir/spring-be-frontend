import * as React from 'react';
import {Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Paper,Box, CssBaseline, Grid, Typography} from '@mui/material';
import {LockOutlined, Facebook, Google } from '@mui/icons-material';
import {facebookBGButton, googleBGButton} from "../../../constants/colors";
import { ThemeMode } from '../../../services/theme/enums/enums';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Yarden Tamir
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === ThemeMode.LIGHT ? t.palette.primary.light : t.palette.primary.dark,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container justifyContent="space-around">
                <Grid item>
                  <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  style={{backgroundColor: facebookBGButton}}
                  sx={{ mt: 1, mb: 2 }}
                >
              <Grid container spacing={1}>
                <Grid item><Facebook /></Grid>
                  <Grid item>Connect with Facebook</Grid>
                  </Grid>

                </Button>
              </Grid>
                <Grid item>
                  <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  style={{backgroundColor: googleBGButton}}
                  sx={{ mt: 1, mb: 2 }}
                >
              <Grid container spacing={1}>
                <Grid item><Google /></Grid>
                  <Grid item>Connect with Google</Grid>
                  </Grid>

                </Button>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}