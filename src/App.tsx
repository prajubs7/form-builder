
import { Grid, Paper } from '@mui/material'
import CustomForm from './common/CustomForm'
import { registrationFormControl } from './config/form'


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
        <CustomForm button='Submit' formControls={registrationFormControl}  />
      </Paper>
    </Grid>
     
     
    </>
  )
}

export default App
