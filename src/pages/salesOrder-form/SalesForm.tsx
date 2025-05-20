
import { salesOrderInitialValues } from "./initialValues";
import { orderFormConfig } from "./config";
import FormText from "../../components/ui/FormText";
import FormBuilder from "../../common/FormBuilder";

function salesForm() {
  return (
    <><FormText text={"Sales Order form"} variant={"h3"} />
    {/* <CustomForm
      formControls={orderFormConfig}
      initialValues={salesOrderInitialValues}
      button={"Submit"} /> */}
      <FormBuilder formControls={orderFormConfig} initialValues={salesOrderInitialValues} button={"Submit"}/>
    </>


    
  );
}

export default salesForm;
