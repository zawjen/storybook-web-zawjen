import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import HijriDatePicker from "./index";
import moment from "moment-hijri";

// Mock props
const mockSetSelectedDate = jest.fn();
const mockToggleCalendar = jest.fn();

describe("HijriDatePicker", () => {
  const props = {
    setSelectedDate: mockSetSelectedDate,
    selectedDate: moment(),
    toggleCalendar: mockToggleCalendar,
    selectedCalendar: "hijri" as "hijri",
    style: undefined,
  };

  // Automatically cleanup after each test to prevent state leakage
  afterEach(cleanup);

  // Optionally use beforeEach to render fresh component state before each test
  beforeEach(() => {
    render(<HijriDatePicker {...props} />);
  });

  it("renders without crashing", () => {
    const calendar = screen.getByTestId("hijri-calendar");
    expect(calendar).toBeInTheDocument();
  });

  it("displays the correct month and year", () => {
    const currentMonthYear = moment().locale("ar").format("iMMMM iYYYY");
    expect(screen.getByText(currentMonthYear)).toBeInTheDocument();
  });

  it("navigates to the previous month when clicking the left arrow", () => {
    const prevMonthButton = screen.getByText("<");
    const currentMonthYear = moment().locale("ar").format("iMMMM iYYYY");

    fireEvent.click(prevMonthButton);

    const prevMonthYear = moment()
      .locale("ar")
      .subtract(1, "iMonth")
      .format("iMMMM iYYYY");
    expect(screen.getByText(prevMonthYear)).toBeInTheDocument();
    expect(screen.queryByText(currentMonthYear)).not.toBeInTheDocument();
  });

  it("navigates to the next month when clicking the right arrow", () => {
    const nextMonthButton = screen.getByText(">");
    const currentMonthYear = moment().locale("ar").format("iMMMM iYYYY");

    fireEvent.click(nextMonthButton);

    const nextMonthYear = moment()
      .locale("ar")
      .add(1, "month")
      .format("iMMMM iYYYY");
    expect(screen.getByText(nextMonthYear)).toBeInTheDocument();
    expect(screen.queryByText(currentMonthYear)).not.toBeInTheDocument();
  });

  it("calls setSelectedDate when a day is clicked", () => {
    const today = moment().locale("en").format("iD");

    fireEvent.click(screen.getByText(today));

    expect(mockSetSelectedDate).toHaveBeenCalled();
  });

  it("toggles the calendar type when the toggle button is clicked", () => {
    const toggleButton = screen.getByText("Switch to Gregorian");

    fireEvent.click(toggleButton);

    expect(mockToggleCalendar).toHaveBeenCalled();
  });
});
