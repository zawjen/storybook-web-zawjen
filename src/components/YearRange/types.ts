export type TRangeCommonStyles = {
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

export type TSliderProps = {
  thumb?: {
    backgroundColor?: string;
    border?: { width?: string; color?: string };
  };
  range?: {
    backgroundColor?: string;
  };
};

export interface YearRangeProps extends TRangeCommonStyles {
  sliderStyle?: TRangeCommonStyles &
    TSliderProps & {
      container?: TRangeCommonStyles;
    };
  buttonStyle?: TRangeCommonStyles;
  onRangeSelect?: (start: number, end: number) => void;
}
