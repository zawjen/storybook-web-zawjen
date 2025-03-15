export type TDatePickerCommonStyles = {
  backgroundColor?: string;
  border?: {
    color?: string;
    width?: string;
  };
  className?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
};

export type TDatePickerPopoverStyles = {
  container?: Omit<
    TDatePickerCommonStyles,
    "color" | "fontSize" | "fontWeight"
  >;
  selectInput?: TDatePickerCommonStyles;
  button?: {
    arrows?: TDatePickerCommonStyles;
    toggle?: TDatePickerCommonStyles;
    days?: TDatePickerCommonStyles;
    month?: TDatePickerCommonStyles;
  };
};

export interface IDatePicker {
  inputStyle?: {
    container?: Omit<
      TDatePickerCommonStyles,
      "className" | "color" | "fontSize" | "fontWeight"
    > & { icon?: { color: string } };
    className?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
  };
  datepickerStyle?: TDatePickerPopoverStyles;
  onSetSelectedDate?: (selectedDate: string) => void;
}
