interface ButtonProps {
  label: string;
  className?: string;
  type: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={`${props.className} text-white bg-indigo-600 rounded-lg hover:opacity-90 font-bold w-full`}
    >
      {props.label}
    </button>
  );
};
export default Button;
