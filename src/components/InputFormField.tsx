interface InputFormFieldProps {
  label: string;
  placeholder?: string;
}

const InputFormField = (props: InputFormFieldProps) => {
  return (
    <div className="flex flex-col py-2">
      <label>{props.label}</label>
      <input className="" placeholder={props.placeholder} />
    </div>
  );
};

export default InputFormField;
