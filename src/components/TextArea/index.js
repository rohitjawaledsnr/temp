import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray501: "bg-transparent border-2 border-gray_501 border-solid",
};
const shapes = { RoundedBorder10: "rounded-radius10" };
const sizes = {
  sm: "lg:pb-[27px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pt-[24px] xl:pt-[28px] pt-[32px] 3xl:pt-[38px] lg:px-[24px] xl:px-[28px] px-[32px] 3xl:px-[38px]",
};
const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf(["OutlineGray501"]),
  size: PropTypes.oneOf(["sm"]),
};
TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "RoundedBorder10",
  variant: "OutlineGray501",
  size: "sm",
};
export { TextArea };
