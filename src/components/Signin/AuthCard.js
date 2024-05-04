import PropTypes from "prop-types";

import { Box, Card } from "@mui/material";
import Login from "./Login";
const AuthCard = () => (
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
    <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
      <Login />
    </Box>
  </Card>
);

AuthCard.propTypes = {
  children: PropTypes.node,
};

export default AuthCard;
