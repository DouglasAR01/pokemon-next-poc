import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { FieldErrors } from "react-hook-form";
interface Props {
  name: string;
  label: string;
  type: string;
  value: string;
  handler: (value: string) => void;
  placeholder?: string;
  icon?: string;
  errors?: FieldErrors;
}
export default function FormText(props: Props) {
  const hasErrors = (): boolean => {
    return props.errors !== undefined && props.errors[props.name] !== undefined;
  };
  return (
    <div className="mb-2">
      <label htmlFor={props.name}>{props.label}</label>
      <div className="p-inputgroup flex-1">
        {props.icon && (
          <span className="p-inputgroup-addon">
            <i className={props.icon}></i>
          </span>
        )}
        <InputText
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.handler(e.target.value)}
          className={classNames({ "p-invalid": hasErrors() })}
        />
      </div>
      {hasErrors() && (
        <small className="p-error">
          {props.errors![props.name]!.message as string}
        </small>
      )}
    </div>
  );
}
