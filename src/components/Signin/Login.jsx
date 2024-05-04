import React, { useState } from "react";
import { loginUser } from "../services/controller/AuthController";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormGroup from "@mui/material/FormGroup";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  Typography,
  Box,
  Card,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const login = {
      username: username,
      password: password,
    };
    await loginUser(login, dispatch, navigate);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card
            sx={{
              maxWidth: { xs: 400, lg: 475 },
              margin: { xs: 2.5, md: 3 },
              "& > *": {
                flexGrow: 1,
                flexBasis: "50%",
              },
            }}
            content={false}
            border={false}
            boxShadow
          >
            <Box
              sx={{
                p: { xs: 3, sm: 4, md: 5, xl: 6 },
                borderRadius: "15px",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Grid item xs={12} sx={{ marginBottom: { xs: 2, sm: 4 } }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="baseline"
                  sx={{ mb: { xs: -0.5, sm: 0.5 } }}
                >
                  <ThemeProvider theme={theme}>
                    <Typography variant="h5">Login</Typography>
                  </ThemeProvider>
                </Stack>
              </Grid>

              <Formik
                initialValues={{
                  username: "",
                  password: "",
                  submit: null,
                }}
                validationSchema={Yup.object().shape({
                  username: Yup.string()
                    .max(255)
                    .required("Username is required"),
                  password: Yup.string()
                    .max(255)
                    .required("Password is required"),
                })}
                onSubmit={handleLogin}
              >
                {({ errors, handleSubmit, isSubmitting, touched }) => (
                  <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Stack spacing={1}>
                          <FormControl
                            sx={{ m: 1, width: "395px" }}
                            variant="standard"
                          >
                            <InputLabel htmlFor="standard-adornment-username">
                              UserName
                            </InputLabel>
                            <Input
                              id="standard-adornment-username"
                              type={"text"}
                              name="username"
                              value={username}
                              onChange={(e) => setUserName(e.target.value)}
                              error={Boolean(
                                touched.username && errors.username
                              )}
                            />
                            {errors.username && touched.username && (
                              <FormHelperText error>
                                {errors.username}
                              </FormHelperText>
                            )}
                          </FormControl>
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <Stack spacing={1}>
                          <FormControl
                            sx={{ m: 1, width: "395px" }}
                            variant="standard"
                          >
                            <InputLabel htmlFor="standard-adornment-password">
                              Password
                            </InputLabel>
                            <Input
                              id="standard-adornment-password"
                              type={showPassword ? "text" : "password"}
                              name="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                  >
                                    {showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              error={Boolean(
                                touched.password && errors.password
                              )}
                            />
                            {errors.password && touched.password && (
                              <FormHelperText error>
                                {errors.password}
                              </FormHelperText>
                            )}
                          </FormControl>
                        </Stack>
                      </Grid>

                      <Grid item xs={12} sx={{ mt: -1 }}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          spacing={2}
                        >
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={checked}
                                  onChange={(event) =>
                                    setChecked(event.target.checked)
                                  }
                                  name="checked"
                                  color="primary"
                                  size="small"
                                />
                              }
                              label="Keep me sign in"
                            />
                          </FormGroup>
                          <Box
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              justifyContent: "center",
                              typography: "body2",
                              "& > :not(style) ~ :not(style)": {
                                ml: 2,
                              },
                            }}
                          >
                            <Link href="#" underline="hover" color="black">
                              {"Forgot Password?"}
                            </Link>
                          </Box>
                        </Stack>
                      </Grid>
                      {errors.submit && (
                        <Grid item xs={12}>
                          <FormHelperText error>{errors.submit}</FormHelperText>
                        </Grid>
                      )}
                      <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <Stack
                          direction="row"
                          spacing={12}
                          sx={{ width: "100%" }}
                        >
                          <Button
                            variant="contained"
                            sx={{ width: "100%", backgroundColor: "#0958d9" }}
                            type="submit"
                            onClick={handleLogin}
                          >
                            Login
                          </Button>
                        </Stack>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Formik>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default Login;
