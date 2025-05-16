import CustomForm from "../../common/CustomForm"
import FormText from "../../components/ui/FormText"
import { serviceForm } from "./config"
import { servicesIntialValues } from "./initalValues"

function ServiceForm() {
  return (
    <div>
      <FormText text={"Service Form"} variant={"h3"}/>
      <CustomForm formControls={serviceForm} initialValues={servicesIntialValues} button={"Add Service"}/>
    </div>
  )
}

export default ServiceForm