import CustomForm from "../../common/CustomForm";
import { salesOrderInitialValues } from "./initialValues";
import { orderFormConfig } from "./config";
import FormText from "../../components/ui/FormText";

function salesForm() {
  return (
    <><FormText text={"Sales Order form"} variant={"h3"} />
    <CustomForm
      formControls={orderFormConfig}
      initialValues={salesOrderInitialValues}
      button={"Submit"} />
    </>
  );
}

export default salesForm;
