export const validate = (data) => {
    console.log(data, "data");
    let errors = {};
    let fromdate = "";
    if (data !== "") {
        data.map((item) => {
            if (
                item.value !== "" ||
                item.value !== undefined ||
                item.value !== null
            ) {
                switch (item.name) {
                    case "classType":
                        if (
                            item.value === 0
                            // item.value == "" ||
                            // (typeof item.value !== "undefined" &&
                            //     item.value.includes("Select classType"))
                        ) {
                            errors.class = "Account class type is Required";
                        }
                        break;
                    case "subClassType":
                        if (
                            item.value === 0
                            // item.value == "" ||
                            // (typeof item.value !== "undefined" &&
                            //     item.value.includes("Select subClassType"))
                        ) {
                            errors.subClass = "Account Sub-Class type is Required";
                        }
                        break;
 
                    case "glAcName":
                        if (!item.value) {
                            errors.glAcName = "GL Account Name is required";
                        }
                        else if (item.value.length <3 || item.value.length > 150) {
                            errors.glAcName =
                                "GL Account Name must be between 3 and 150 characters only";
                        } else if (!item.value.match( /[a-zA-Z]+ [a-zA-Z]+/)) {
                            errors.glAcName =
                                "alphabets  is  allowed and  only single space allowed";
                        }
                        break;
                    case "glAcNumber":
                        if (!item.value) {
                            errors.glAcNumber = "GL Account Number is required";
                        }
                        else if (item.value.length >16) {
                            errors.glAcNumber =
                                "GL Account Number must be 16 Numerics only";
                        } else if (!item.value.match(/^[0-9]+$/gm)) {
                            errors.glAcNumber =
                                "only numerics are allowed";
                        }
                        break;
 
                    case "description":
                        if (!item.value) {
                            errors.description = "Description is required";
                        } else if (item.value.length < 10 || item.value.length > 140) {
                            errors.description =
                                "Description must be between 10 and 140 characters";
                        }
                        break;
                    case "fromDate":
                        if (item.value) {
                            fromdate = item.value;
                        }
                        if (!item.value) {
                            errors.fromDate = "From Date is required";
                        }
                        break;
 
                    case "toDate":
                        if (item.value) {
                            if (new Date(item.value) < new Date()) errors.toDate = "To Date Time cannot be less than current date time"
                            else {
                                toDate = item.value;
                            }
 
                        }
                        if (!item.value) {
                            errors.toDate = "To Date is required";
                        }
                        if (!(fromdate == "")) {
                            if (item.value < item.value) {
                                errors.toDate = "Please Select A Valid Date";
                            }
                        }
 
                        break;
 
 
                    default:
 
                }
 
            }
 
        });
        return errors;
    } else {
        return errors;
    }
};