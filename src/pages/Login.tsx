import { Grid, Paper } from "@mui/material";

export interface IFormData {
  name: string;
  phoneNumber:string;
  emailAddress: string;
  password: string;
  gender: string;
  birthDate: string;
  address: string;
  termsCondition: boolean;
}

function Login() {
  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 500,
    margin: "20px auto",
  };

  
  // const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData])

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        {/* <CustomForm
          formControls={registrationFormControl}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          button={"Submit"} */}
        {/* /> */}
      </Paper>
    </Grid>
  );
}

export default Login;
