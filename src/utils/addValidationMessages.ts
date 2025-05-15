import { UseControllerProps, ValidationValue, ValidationValueMessage } from "react-hook-form";

const messages = {
    required: "This field is required",
    minLength: "This field must be at least {minLength} characters",
    maxLength: "This field must be at most {maxLength} characters",
    min: "This field must be at least {min}",
    max: "This field must be at most {max}"
};

export function addValidationMessages<T>(validations: T) : T {

    for (const key in validations) {

        const validation = validations[key];
        const message = messages[key as keyof typeof messages];

        if (!message) continue;
        if (typeof validation === "string") continue;
        if (typeof validation === "object" && ("value" in validation!)) continue;

        const validationMessage: ValidationValueMessage = {
            value: validation as ValidationValue,
            message: message.replace(/\{(\w+)\}/g, (_, key) => String(validation))
        };

        (validations[key] as ValidationValueMessage) = validationMessage;
    }

    return validations;
}

export function addValidationMessagesToControlProps<T extends { rules?: unknown }>(props: T) : T {

    if (props.rules) {
        props.rules = addValidationMessages(props.rules);
    }

    return props;
}
