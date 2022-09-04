import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder46: "rounded-radius46",
  icbRoundedBorder8: "rounded-radius8",
  icbRoundedBorder5: "rounded-radius5",
  RoundedBorder8: "rounded-radius8",
  RoundedBorder16: "rounded-radius16",
};
const variants = {
  icbFillIndigoA200: "bg-indigo_A200",
  icbOutlineBlack9003f: "bg-cyan_A400 shadow-bs",
  icbOutlineGray7003f: "bg-yellow_A700 shadow-bs1",
  icbOutlineBlack9003f1_2: "bg-indigo_A400 shadow-bs2",
  icbOutlineGray9003f: "bg-teal_A400 shadow-bs3",
  OutlineBlack90033:
    "outline outline-[0.5px] outline-black_900_33 text-indigo_A700",
  FillIndigoA700: "bg-indigo_A700 text-white_A700",
  FillBlue50: "bg-blue_50 text-indigo_A700",
  OutlineBlack9004c:
    "outline outline-[1px] outline-black_900_4c text-black_900_4c",
  FillWhiteA700: "bg-white_A700 text-red_A200",
  OutlineBlack900331_2:
    "outline outline-[1px] outline-black_900_33 text-black_900_4c",
  FillIndigoA401: "bg-indigo_A401 text-white_A700",
};
const sizes = {
  smIcn: "lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px]",
  mdIcn: "lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  lgIcn: "lg:p-[14px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
  xlIcn: "lg:p-[17px] xl:p-[19px] p-[22px] 3xl:p-[26px]",
  "2xlIcn": "lg:p-[19px] xl:p-[22px] p-[25px] 3xl:p-[30px]",
  "3xlIcn": "lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px]",
  sm: "lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px]",
  md: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  lg: "lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px]",
  xl: "lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder46",
    "icbRoundedBorder8",
    "icbRoundedBorder5",
    "RoundedBorder8",
    "RoundedBorder16",
  ]),
  variant: PropTypes.oneOf([
    "icbFillIndigoA200",
    "icbOutlineBlack9003f",
    "icbOutlineGray7003f",
    "icbOutlineBlack9003f1_2",
    "icbOutlineGray9003f",
    "OutlineBlack90033",
    "FillIndigoA700",
    "FillBlue50",
    "OutlineBlack9004c",
    "FillWhiteA700",
    "OutlineBlack900331_2",
    "FillIndigoA401",
  ]),
  size: PropTypes.oneOf([
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
    "3xlIcn",
    "sm",
    "md",
    "lg",
    "xl",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder8",
  variant: "icbFillIndigoA200",
  size: "sm",
};

export { Button };
