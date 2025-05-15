import FormControl, { FormControlProps } from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectProps } from "@mui/material/Select";
import React, { useId } from "react";
import { FieldValues, useController, UseControllerProps } from "react-hook-form";

type SelectControlProps<TFieldValues extends FieldValues> =
    {
        controller: UseControllerProps<TFieldValues>,
        label: React.ReactNode,
        options: { label: React.ReactNode, value: string }[],
        selectProps?: Omit<SelectProps, "name" | "onChange" | "onBlur" | "value" | "inputRef" | "error" | "disabled">
    } &
    Omit<FormControlProps, "error" | "disabled">;

function SelectControl<TFieldValues extends FieldValues>({ controller, label, options, selectProps,  ...props }: SelectControlProps<TFieldValues>) {

    const { field, fieldState: { invalid, error } } = useController(controller);

    const labelId = useId();

    const helpText = invalid && error?.message || undefined;

    return (
        <FormControl {...props} error={invalid} disabled={field.disabled}>
            {!!label && (
                <InputLabel id={labelId}>{label}</InputLabel>
            )}
            <Select
                {...selectProps}
                labelId={label ? labelId : undefined}
                name={field.name}
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value || ""}
                inputRef={field.ref}
                error={invalid}
                disabled={field.disabled}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            {helpText && (
                <FormHelperText>{helpText}</FormHelperText>
            )}
        </FormControl>
    );
}

export default SelectControl;
