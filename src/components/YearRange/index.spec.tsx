import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import moment from "moment";
import momentHijri from "moment-hijri";
import YearRange from ".";

jest.mock("@radix-ui/react-slider", () => ({
  Root: ({
    onValueChange,
    ...props
  }: {
    onValueChange?: (value: number[]) => void;
  }) => {
    return <div {...props} />;
  },
  Track: (props: any) => <div {...props} />,
  Range: (props: any) => <div {...props} />,
  Thumb: (props: any) => <div {...props} />,
}));

describe("YearRange Component", () => {
  const mockOnRangeSelect = jest.fn();

  const defaultProps = {
    backgroundColor: "#fff",
    border: { color: "#ccc", width: "1px" },
    buttonStyle: {
      className: "",
      backgroundColor: "#007bff",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "bold",
    },
    sliderStyle: {
      container: {
        className: "",
        backgroundColor: "#f8f9fa",
      },
    },
    onRangeSelect: mockOnRangeSelect,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    render(<YearRange {...defaultProps} />);
  });

  test("renders and displays the initial Hijri year range", async () => {
    const startYear = momentHijri().locale("ar").iYear() - 100;
    const endYear = momentHijri().locale("ar").iYear() + 100;

    // Check that the correct Hijri year range is displayed
    expect(screen.getByText(startYear.toString())).toBeInTheDocument();
    expect(screen.getByText(endYear.toString())).toBeInTheDocument();
    expect(
      screen.getByText("Switch to Gregorian Calendar")
    ).toBeInTheDocument();
  });

  test("switches to Gregorian calendar and updates the year range", () => {
    // Click the switch button to switch to Gregorian calendar
    const switchButton = screen.getByText("Switch to Gregorian Calendar");
    fireEvent.click(switchButton);

    const startYear = moment().locale("en").year() - 100;
    const endYear = moment().locale("en").year() + 100;

    // Check that the Gregorian year range is displayed
    expect(screen.getByText(startYear.toString())).toBeInTheDocument();
    expect(screen.getByText(endYear.toString())).toBeInTheDocument();
    expect(screen.getByText("Switch to Hijri Calendar")).toBeInTheDocument();
  });
});
