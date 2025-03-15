import YearRange from "@/components/YearRange";
import React from "react";
import { Meta } from "@storybook/react";

interface IYearRangeStorybookProps {
  sliderStyle_thumb_backgroundColor?: string;
  sliderStyle_thumb_border_width?: string;
  sliderStyle_thumb_border_color?: string;

  sliderStyle_range_backgroundColor?: string;

  sliderStyle_container_backgroundColor?: string;
  sliderStyle_container_border_color?: string;
  sliderStyle_container_border_width?: string;
  sliderStyle_container_className?: string;
  sliderStyle_container_color?: string;
  sliderStyle_container_fontSize?: string;
  sliderStyle_container_fontWeight?: string;

  buttonStyle_backgroundColor?: string;
  buttonStyle_border_color?: string;
  buttonStyle_border_width?: string;
  buttonStyle_className?: string;
  buttonStyle_color?: string;
  buttonStyle_fontSize?: string;
  buttonStyle_fontWeight?: string;
}

export default {
  title: "Components/YearRange",
  component: YearRange,
  tags: ["autodocs"],
  args: {
    sliderStyle_thumb_backgroundColor: "#f3f4f6",
    sliderStyle_thumb_border_color: "#d1d5db",
    sliderStyle_thumb_border_width: "1px",
  },
  argTypes: {
    // Flattened controls for YearRangeProps
    sliderStyle_thumb_backgroundColor: {
      control: "color",
      description: "Background color for the thumb.",
    },
    sliderStyle_thumb_border_width: {
      control: "text",
      description: 'Border width for the thumb (e.g., "1px").',
    },
    sliderStyle_thumb_border_color: {
      control: "color",
      description: "Border color for the thumb.",
    },

    sliderStyle_range_backgroundColor: {
      control: "color",
      description: "Background color for the range.",
    },

    sliderStyle_container_backgroundColor: {
      control: "color",
      description: "Background color for the container.",
    },
    sliderStyle_container_border_color: {
      control: "color",
      description: "Border color for the container.",
    },
    sliderStyle_container_border_width: {
      control: "text",
      description: 'Border width for the container (e.g., "1px").',
    },
    sliderStyle_container_className: {
      control: "text",
      description: "Custom class name for the container.",
    },
    sliderStyle_container_color: {
      control: "color",
      description: "Text color for the container.",
    },
    sliderStyle_container_fontSize: {
      control: "text",
      description: 'Font size for the container (e.g., "14px").',
    },
    sliderStyle_container_fontWeight: {
      control: "text",
      description: 'Font weight for the container (e.g., "bold").',
    },

    buttonStyle_backgroundColor: {
      control: "color",
      description: "Background color for the button.",
    },
    buttonStyle_border_color: {
      control: "color",
      description: "Border color for the button.",
    },
    buttonStyle_border_width: {
      control: "text",
      description: 'Border width for the button (e.g., "1px").',
    },
    buttonStyle_className: {
      control: "text",
      description: "Custom class name for the button.",
    },
    buttonStyle_color: {
      control: "color",
      description: "Text color for the button.",
    },
    buttonStyle_fontSize: {
      control: "text",
      description: 'Font size for the button (e.g., "14px").',
    },
    buttonStyle_fontWeight: {
      control: "text",
      description: 'Font weight for the button (e.g., "bold").',
    },
  },
} as Meta<IYearRangeStorybookProps>;

export const Default = {
  render: ({
    sliderStyle_thumb_backgroundColor,
    sliderStyle_thumb_border_color,
    sliderStyle_thumb_border_width,
    sliderStyle_range_backgroundColor,
    sliderStyle_container_backgroundColor,
    sliderStyle_container_border_color,
    sliderStyle_container_border_width,
    sliderStyle_container_className,
    sliderStyle_container_color,
    sliderStyle_container_fontSize,
    sliderStyle_container_fontWeight,
    buttonStyle_backgroundColor,
    buttonStyle_border_color,
    buttonStyle_border_width,
    buttonStyle_className,
    buttonStyle_color,
    buttonStyle_fontSize,
    buttonStyle_fontWeight,
  }: IYearRangeStorybookProps) => {
    return (
      <YearRange
        sliderStyle={{
          thumb: {
            backgroundColor: sliderStyle_thumb_backgroundColor,
            border: {
              color: sliderStyle_thumb_border_color,
              width: sliderStyle_thumb_border_width,
            },
          },
          range: {
            backgroundColor: sliderStyle_range_backgroundColor,
          },
          container: {
            backgroundColor: sliderStyle_container_backgroundColor,
            border: {
              color: sliderStyle_container_border_color,
              width: sliderStyle_container_border_width,
            },
            className: sliderStyle_container_className,
            color: sliderStyle_container_color,
            fontSize: sliderStyle_container_fontSize,
            fontWeight: sliderStyle_container_fontWeight,
          },
        }}
        buttonStyle={{
          backgroundColor: buttonStyle_backgroundColor,
          border: {
            color: buttonStyle_border_color,
            width: buttonStyle_border_width,
          },
          className: buttonStyle_className,
          color: buttonStyle_color,
          fontSize: buttonStyle_fontSize,
          fontWeight: buttonStyle_fontWeight,
        }}
      />
    );
  },
};
