import { Grid, Paper } from "@mui/material";
import SalesForm from "./pages/salesOrder-form/SalesForm";

function App() {
  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 500,
    margin: "20px auto",
  };
  return (
    <>
      {/* <Login/> */}

      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <SalesForm/>
        </Paper>
      </Grid>
      {/* <Grid>
        <Paper elevation={10} style={paperStyle}>
          <ServiceForm/>
        </Paper>
      </Grid> */}
    </>
  );
}

export default App;
