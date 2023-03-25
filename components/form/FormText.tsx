import { InputText } from "primereact/inputtext";
interface Props {
  name: string;
  label: string;
  type: string;
  value: string;
  handler: (value: string) => void;
  placeholder?: string;
  icon?: string;
}
export default function FormText(props: Props) {
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
        />
      </div>
    </div>
  );
}
