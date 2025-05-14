import TextField, { TextFieldProps } from "@mui/material/TextField";
import { FieldValues, useController, UseControllerProps } from "react-hook-form";
import { addValidationMessagesToControlProps } from "utils/addValidationMessages";

type TextFieldControlProps<TFieldValues extends FieldValues> =
    { controller: UseControllerProps<TFieldValues> } &
    Omit<TextFieldProps, "name" | "onChange" | "onBlur" | "value" | "inputRef" | "error" | "disabled">;

function TextFieldControl<TFieldValues extends FieldValues>({ controller, ...props }: TextFieldControlProps<TFieldValues>) {

    const { field, fieldState } = useController(addValidationMessagesToControlProps(controller));

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        const value = e.currentTarget.value;

        if (props.type === "number") {

            const parsedValue = value === "" ? undefined : +value;
            field.onChange(parsedValue);

        } else if (props.type === "date") {

            const parsedValue = value === "" ? undefined : new Date(value);
            field.onChange(parsedValue);

        } else {
            field.onChange(value);
        }
    };

    const onBlur = () => {

        if (typeof field.value === "string") {
            field.onChange(field.value.trim());
            field.onBlur();
        }
    };

    let value: unknown = field.value ?? "";

    if (props.type === "date" && value && value instanceof Date) {
        value = value.toISOString().split("T")[0];
    }

    return (
        <TextField
            {...props}
            name={field.name}
            onChange={changeHandler}
            onBlur={onBlur}
            value={value}
            inputRef={field.ref}
            error={!!fieldState.error}
            disabled={field.disabled}
            helperText={fieldState.error?.message?.toString() || undefined}
        />
    );
}

export default TextFieldControl;
