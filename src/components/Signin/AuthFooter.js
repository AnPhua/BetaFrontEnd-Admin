import { Container, Link, Typography, Stack } from "@mui/material";

const AuthFooter = () => {
  return (
    <Container maxWidth="xl">
      <Stack
        direction={"row"} //row //column
        justifyContent={"space-between"} //space-between //center
        spacing={2}
        textAlign={"inherit"} //"inherit" //center
      >
        <Typography variant="subtitle2" color="black" component="span">
          &copy; Trang Dành Cho&nbsp;
          <Typography
            component={Link}
            variant="subtitle2"
            target="_blank"
            underline="hover"
          >
            Admin
          </Typography>
        </Typography>

        <Stack
          direction={"row"} //row column
          spacing={3} //3 1
          textAlign={"center"} //"inherit" center
        >
          <Typography
            variant="subtitle2"
            color="black"
            target="_blank"
            underline="hover"
          >
            Cinema
          </Typography>
          <Typography
            variant="subtitle2"
            color="black"
            target="_blank"
            underline="hover"
          >
            Cinema
          </Typography>
          <Typography
            variant="subtitle2"
            color="black"
            target="_blank"
            underline="hover"
          >
            Cinema
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AuthFooter;
