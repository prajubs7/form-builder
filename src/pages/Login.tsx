import { Grid, Paper } from "@mui/material";

function Login() {
  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 500,
    margin: "20px auto",
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}></Paper>
    </Grid>
  );
}

export default Login;
