interface InputFormFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFormField = (props: InputFormFieldProps) => {
  return (
    <div className="flex flex-col py-4">
      <label>{props.label}</label>
      <input
        onChange={props.onChange}
        type={props.type}
        className="p-2 bg-gray-200 rounded-lg focus:bg-gray-300 focus:ring-0 focus:border-0 focus:outline-0"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputFormField;
