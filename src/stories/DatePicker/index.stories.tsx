import DatePicker from "@/components/DatePicker";
import React from "react";
import { Meta } from "@storybook/react";

interface IDatePickerStorybookProps {
  inputStyle_container_backgroundColor?: string;
  inputStyle_container_border_color?: string;
  inputStyle_container_border_width?: string;
  inputStyle_container_icon_color: string;
  inputStyle_className?: string;
  inputStyle_color?: string;
  inputStyle_fontSize?: string;
  inputStyle_fontWeight?: string;

  datepickerStyle_container_backgroundColor?: string;
  datepickerStyle_container_border_color?: string;
  datepickerStyle_container_border_width?: string;
  datepickerStyle_container_className?: string;

  datepickerStyle_selectInput_backgroundColor?: string;
  datepickerStyle_selectInput_border_color?: string;
  datepickerStyle_selectInput_border_width?: string;
  datepickerStyle_selectInput_color?: string;
  datepickerStyle_selectInput_fontSize?: string;
  datepickerStyle_selectInput_fontWeight?: string;
  datepickerStyle_selectInput_className?: string;

  datepickerStyle_button_arrows_backgroundColor?: string;
  datepickerStyle_button_arrows_border_color?: string;
  datepickerStyle_button_arrows_border_width?: string;
  datepickerStyle_button_arrows_color?: string;
  datepickerStyle_button_arrows_fontSize?: string;
  datepickerStyle_button_arrows_fontWeight?: string;
  datepickerStyle_button_arrows_className?: string;

  datepickerStyle_button_toggle_backgroundColor?: string;
  datepickerStyle_button_toggle_border_color?: string;
  datepickerStyle_button_toggle_border_width?: string;
  datepickerStyle_button_toggle_color?: string;
  datepickerStyle_button_toggle_fontSize?: string;
  datepickerStyle_button_toggle_fontWeight?: string;
  datepickerStyle_button_toggle_className?: string;

  datepickerStyle_button_days_backgroundColor?: string;
  datepickerStyle_button_days_border_color?: string;
  datepickerStyle_button_days_border_width?: string;
  datepickerStyle_button_days_color?: string;
  datepickerStyle_button_days_fontSize?: string;
  datepickerStyle_button_days_fontWeight?: string;
  datepickerStyle_button_days_className?: string;

  datepickerStyle_button_month_backgroundColor?: string;
  datepickerStyle_button_month_border_color?: string;
  datepickerStyle_button_month_border_width?: string;
  datepickerStyle_button_month_color?: string;
  datepickerStyle_button_month_fontSize?: string;
  datepickerStyle_button_month_fontWeight?: string;
  datepickerStyle_button_month_className?: string;
}

export default {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  args: {
    inputStyle_container_backgroundColor: "#f3f4f6",
    inputStyle_container_border_color: "#d1d5db",
    inputStyle_container_border_width: "1px",
  },
  argTypes: {
    // Flattened controls for IDatePicker
    inputStyle_container_backgroundColor: {
      control: "color",
      description: "Background color for the input container.",
    },
    inputStyle_container_border_color: {
      control: "color",
      description: "Border color for the input container.",
    },
    inputStyle_container_border_width: {
      control: "text",
      description: 'Border width for the input container (e.g., "1px").',
    },
    inputStyle_container_icon_color: {
      control: "color",
      description: "Color for the input container icon.",
    },
    inputStyle_className: {
      control: "text",
      description: "Custom class name for the input container.",
    },
    inputStyle_color: {
      control: "color",
      description: "Text color for the input.",
    },
    inputStyle_fontSize: {
      control: "text",
      description: 'Font size for the input text (e.g., "14px").',
    },
    inputStyle_fontWeight: {
      control: "text",
      description: 'Font weight for the input text (e.g., "bold").',
    },

    // Flattened controls for TDatePickerPopoverStyles
    datepickerStyle_container_backgroundColor: {
      control: "color",
      description: "Background color for the datepicker container.",
    },
    datepickerStyle_container_border_color: {
      control: "color",
      description: "Border color for the datepicker container.",
    },
    datepickerStyle_container_border_width: {
      control: "text",
      description: 'Border width for the datepicker container (e.g., "1px").',
    },
    datepickerStyle_container_className: {
      control: "text",
      description: "Custom class name for the datepicker container.",
    },

    datepickerStyle_selectInput_backgroundColor: {
      control: "color",
      description:
        "Background color for the select input inside the datepicker.",
    },
    datepickerStyle_selectInput_border_color: {
      control: "color",
      description: "Border color for the select input.",
    },
    datepickerStyle_selectInput_border_width: {
      control: "text",
      description: "Border width for the select input.",
    },
    datepickerStyle_selectInput_color: {
      control: "color",
      description: "Text color for the select input.",
    },
    datepickerStyle_selectInput_fontSize: {
      control: "text",
      description: 'Font size for the select input (e.g., "12px").',
    },
    datepickerStyle_selectInput_fontWeight: {
      control: "text",
      description: 'Font weight for the select input (e.g., "bold").',
    },
    datepickerStyle_selectInput_className: {
      control: "text",
      description: "Custom class name for the select input.",
    },

    // Flattened button styles
    datepickerStyle_button_arrows_backgroundColor: {
      control: "color",
      description: "Background color for the arrows in the datepicker buttons.",
    },
    datepickerStyle_button_arrows_border_color: {
      control: "color",
      description: "Border color for the arrows.",
    },
    datepickerStyle_button_arrows_border_width: {
      control: "text",
      description: "Border width for the arrows.",
    },
    datepickerStyle_button_arrows_color: {
      control: "color",
      description: "Text color for the arrows.",
    },
    datepickerStyle_button_arrows_fontSize: {
      control: "text",
      description: 'Font size for the arrows (e.g., "12px").',
    },
    datepickerStyle_button_arrows_fontWeight: {
      control: "text",
      description: 'Font weight for the arrows (e.g., "bold").',
    },
    datepickerStyle_button_arrows_className: {
      control: "text",
      description: "Custom class name for the arrows.",
    },

    datepickerStyle_button_toggle_backgroundColor: {
      control: "color",
      description: "Background color for the toggle in the datepicker buttons.",
    },
    datepickerStyle_button_toggle_border_color: {
      control: "color",
      description: "Border color for the toggle.",
    },
    datepickerStyle_button_toggle_border_width: {
      control: "text",
      description: "Border width for the toggle.",
    },
    datepickerStyle_button_toggle_color: {
      control: "color",
      description: "Text color for the toggle.",
    },
    datepickerStyle_button_toggle_fontSize: {
      control: "text",
      description: 'Font size for the toggle (e.g., "12px").',
    },
    datepickerStyle_button_toggle_fontWeight: {
      control: "text",
      description: 'Font weight for the toggle (e.g., "bold").',
    },
    datepickerStyle_button_toggle_className: {
      control: "text",
      description: "Custom class name for the toggle.",
    },

    datepickerStyle_button_days_backgroundColor: {
      control: "color",
      description: "Background color for the days in the datepicker buttons.",
    },
    datepickerStyle_button_days_border_color: {
      control: "color",
      description: "Border color for the days.",
    },
    datepickerStyle_button_days_border_width: {
      control: "text",
      description: "Border width for the days.",
    },
    datepickerStyle_button_days_color: {
      control: "color",
      description: "Text color for the days.",
    },
    datepickerStyle_button_days_fontSize: {
      control: "text",
      description: 'Font size for the days (e.g., "12px").',
    },
    datepickerStyle_button_days_fontWeight: {
      control: "text",
      description: 'Font weight for the days (e.g., "bold").',
    },
    datepickerStyle_button_days_className: {
      control: "text",
      description: "Custom class name for the days.",
    },

    datepickerStyle_button_month_backgroundColor: {
      control: "color",
      description: "Background color for the month in the datepicker buttons.",
    },
    datepickerStyle_button_month_border_color: {
      control: "color",
      description: "Border color for the month.",
    },
    datepickerStyle_button_month_border_width: {
      control: "text",
      description: "Border width for the month.",
    },
    datepickerStyle_button_month_color: {
      control: "color",
      description: "Text color for the month.",
    },
    datepickerStyle_button_month_fontSize: {
      control: "text",
      description: 'Font size for the month (e.g., "12px").',
    },
    datepickerStyle_button_month_fontWeight: {
      control: "text",
      description: 'Font weight for the month (e.g., "bold").',
    },
    datepickerStyle_button_month_className: {
      control: "text",
      description: "Custom class name for the month.",
    },
  },
} as Meta<IDatePickerStorybookProps>;

export const Default = {
  render: ({
    datepickerStyle_button_arrows_backgroundColor,
    datepickerStyle_button_arrows_border_color,
    datepickerStyle_button_arrows_border_width,
    datepickerStyle_button_arrows_color,
    datepickerStyle_button_arrows_className,
    datepickerStyle_button_arrows_fontSize,
    datepickerStyle_button_arrows_fontWeight,

    datepickerStyle_button_days_backgroundColor,
    datepickerStyle_button_days_border_color,
    datepickerStyle_button_days_border_width,
    datepickerStyle_button_days_className,
    datepickerStyle_button_days_color,
    datepickerStyle_button_days_fontSize,
    datepickerStyle_button_days_fontWeight,

    datepickerStyle_button_month_backgroundColor,
    datepickerStyle_button_month_border_color,
    datepickerStyle_button_month_border_width,
    datepickerStyle_button_month_className,
    datepickerStyle_button_month_color,
    datepickerStyle_button_month_fontSize,
    datepickerStyle_button_month_fontWeight,

    datepickerStyle_button_toggle_backgroundColor,
    datepickerStyle_button_toggle_border_color,
    datepickerStyle_button_toggle_border_width,
    datepickerStyle_button_toggle_className,
    datepickerStyle_button_toggle_color,
    datepickerStyle_button_toggle_fontSize,
    datepickerStyle_button_toggle_fontWeight,

    datepickerStyle_container_backgroundColor,
    datepickerStyle_container_border_color,
    datepickerStyle_container_border_width,
    datepickerStyle_container_className,

    datepickerStyle_selectInput_backgroundColor,
    datepickerStyle_selectInput_border_color,
    datepickerStyle_selectInput_border_width,
    datepickerStyle_selectInput_className,
    datepickerStyle_selectInput_color,
    datepickerStyle_selectInput_fontSize,
    datepickerStyle_selectInput_fontWeight,

    inputStyle_className,
    inputStyle_color,
    inputStyle_container_backgroundColor,
    inputStyle_container_border_color,
    inputStyle_container_border_width,
    inputStyle_container_icon_color,
    inputStyle_fontSize,
    inputStyle_fontWeight,
  }: IDatePickerStorybookProps) => {
    return (
      <DatePicker
        datepickerStyle={{
          button: {
            arrows: {
              backgroundColor: datepickerStyle_button_arrows_backgroundColor,
              border: {
                color: datepickerStyle_button_arrows_border_color,
                width: datepickerStyle_button_arrows_border_width,
              },
              className: datepickerStyle_button_arrows_className,
              color: datepickerStyle_button_arrows_color,
              fontSize: datepickerStyle_button_arrows_fontSize,
              fontWeight: datepickerStyle_button_arrows_fontWeight,
            },

            days: {
              backgroundColor: datepickerStyle_button_days_backgroundColor,
              border: {
                color: datepickerStyle_button_days_border_color,
                width: datepickerStyle_button_days_border_width,
              },
              className: datepickerStyle_button_days_className,
              color: datepickerStyle_button_days_color,
              fontSize: datepickerStyle_button_days_fontSize,
              fontWeight: datepickerStyle_button_days_fontWeight,
            },

            month: {
              backgroundColor: datepickerStyle_button_month_backgroundColor,
              border: {
                color: datepickerStyle_button_month_border_color,
                width: datepickerStyle_button_month_border_width,
              },
              className: datepickerStyle_button_month_className,
              color: datepickerStyle_button_month_color,
              fontSize: datepickerStyle_button_month_fontSize,
              fontWeight: datepickerStyle_button_month_fontWeight,
            },

            toggle: {
              backgroundColor: datepickerStyle_button_toggle_backgroundColor,
              border: {
                color: datepickerStyle_button_toggle_border_color,
                width: datepickerStyle_button_toggle_border_width,
              },
              className: datepickerStyle_button_toggle_className,
              color: datepickerStyle_button_toggle_color,
              fontSize: datepickerStyle_button_toggle_fontSize,
              fontWeight: datepickerStyle_button_toggle_fontWeight,
            },
          },
          container: {
            backgroundColor: datepickerStyle_container_backgroundColor,
            border: {
              color: datepickerStyle_container_border_color,
              width: datepickerStyle_container_border_width,
            },
            className: datepickerStyle_container_className,
          },
          selectInput: {
            backgroundColor: datepickerStyle_selectInput_backgroundColor,
            border: {
              color: datepickerStyle_selectInput_border_color,
              width: datepickerStyle_selectInput_border_width,
            },
            className: datepickerStyle_selectInput_className,
            color: datepickerStyle_selectInput_color,
            fontSize: datepickerStyle_selectInput_fontSize,
            fontWeight: datepickerStyle_selectInput_fontWeight,
          },
        }}
        
        inputStyle={{
          className: inputStyle_className,
          color: inputStyle_color,
          container: {
            backgroundColor: inputStyle_container_backgroundColor,
            border: {
              color: inputStyle_container_border_color,
              width: inputStyle_container_border_width,
            },
            icon: { color: inputStyle_container_icon_color },
          },
          fontSize: inputStyle_fontSize,
          fontWeight: inputStyle_fontWeight,
        }}
      />
    );
  },
};

// export const LargeDatePicker = {
//   args: {
//     input: {
//       container: {
//         className: "cursor-pointer flex border border-red-00 p-4 rounded-lg",
//       },
//       className: "max-w-[100px]",
//       icon: {
//         className: "ml-2 text-blue-600",
//       },
//     },
//   },
//   render: (args: IDatePicker) => <DatePicker {...args} />,
// };

// export const SmallDatePicker = {
//   args: {
//     input: {
//       container: {
//         className: "bg-gray-200 p-2 rounded-sm",
//       },
//       className: "border p-1 rounded-sm",
//       icon: {
//         className: "text-gray-400",
//       },
//     },
//   },
//   render: (args: IDatePicker) => <DatePicker {...args} />,
// };
