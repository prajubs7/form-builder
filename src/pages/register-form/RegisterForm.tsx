
import FormBuilder from "../../common/FormBuilder"
import FormText from "../../components/ui/FormText"
import { registerForm } from "./config"
import { registerIntialValues } from "./intialValues"


function RegisterForm() {
  return (
    <div>
        <FormText text={"Register Form"} variant={"h3"}/>
        {/* <CustomForm formControls={registerForm} initialValues={registerIntialValues} button={"Register"}/> */}
        <FormBuilder formControls={registerForm} initialValues={registerIntialValues} button={"Register"}/>
    </div>
  )
}

export default RegisterForm