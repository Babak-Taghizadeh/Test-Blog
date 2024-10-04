import { InputFieldProps } from "@/types/types";
const InputField: React.FC<InputFieldProps> = ({ type, name, register }) => {
  return (
    <div className="relative">
      <input
        className="w-[300px] bg-inherit text-base border-b-2 border-secondary p-3 pl-1 peer focus:outline-none"
        type={type}
        {...register(name)}
        placeholder=" "
      />
      <label
        className={`peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-sm text-sm pointer-events-none absolute -top-5 right-1 transition-all`}
        htmlFor={name}
      >
        {name == "userName" ? "نام کاربری" : "رمز عبور"}
      </label>
    </div>
  );
};

export default InputField;
