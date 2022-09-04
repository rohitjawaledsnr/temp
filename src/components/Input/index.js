import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray501: "border-2 border-gray_501 border-solid",
  OutlineIndigoA702: "outline outline-[1.5px] outline-indigo_A702",
};
const shapes = { RoundedBorder10: "rounded-radius10" };
const sizes = {
  sm: "lg:p-[20px] xl:p-[23px] p-[26px] 3xl:p-[31px]",
  md: "lg:pb-[18px] xl:pb-[21px] pb-[24px] 3xl:pb-[28px] lg:pt-[21px] xl:pt-[24px] pt-[28px] 3xl:pt-[33px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf(["OutlineGray501", "OutlineIndigoA702"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder10",
  variant: "OutlineGray501",
  size: "sm",
};

export { Input };
