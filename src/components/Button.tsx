interface ButtonProps {
  label: string;
  color?: string;
  textColor?: string;
  marginTop?: number;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`text-${props.textColor ? props.textColor : "white"} 
                bg-${props.color ? props.color : "indigo-600"}
                mt-${props.marginTop}
                py-2 rounded-lg hover:opacity-90 font-bold`}
    >
      {props.label}
    </button>
  );
};
export default Button;
