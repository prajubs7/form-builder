import { Grid, Paper} from "@mui/material";
import SalesForm from "./pages/salesOrder-form/SalesForm";


function App() {
  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 800,
    margin: "20px auto",
  };
  return (
    <>
      {/* <Login/> */}
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          {/* <RegisterForm/> */}
          <SalesForm/>
        </Paper>
      </Grid>
    </>
  );
}

export default App;
