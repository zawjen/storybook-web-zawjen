import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import GregorianDatePicker from "./index";
import moment from "moment";

// Mock props
const mockSetSelectedDate = jest.fn();
const mockToggleCalendar = jest.fn();

describe("GregorianDatePicker", () => {
  const props = {
    setSelectedDate: mockSetSelectedDate,
    selectedDate: moment(),
    toggleCalendar: mockToggleCalendar,
    selectedCalendar: "gregorian" as "gregorian",
    style: undefined,
  };

  afterEach(cleanup);

  beforeEach(() => render(<GregorianDatePicker {...props} />));

  it("renders without crashing", () => {
    const calendar = screen.getByTestId("gregorian-calendar");
    expect(calendar).toBeInTheDocument();
  });

  it("displays the correct month and year", () => {
    const currentMonthYear = moment().format("MMMM YYYY");
    expect(screen.getByText(currentMonthYear)).toBeInTheDocument();
  });

  it("navigates to the previous month when clicking the left arrow", () => {
    const prevMonthButton = screen.getByText("<");
    const currentMonthYear = moment().format("MMMM YYYY");

    fireEvent.click(prevMonthButton);

    const prevMonthYear = moment().subtract(1, "month").format("MMMM YYYY");
    expect(screen.getByText(prevMonthYear)).toBeInTheDocument();
    expect(screen.queryByText(currentMonthYear)).not.toBeInTheDocument();
  });

  it("navigates to the next month when clicking the right arrow", () => {
    const nextMonthButton = screen.getByText(">");
    const currentMonthYear = moment().format("MMMM YYYY");

    fireEvent.click(nextMonthButton);

    const nextMonthYear = moment().add(1, "month").format("MMMM YYYY");
    expect(screen.getByText(nextMonthYear)).toBeInTheDocument();
    expect(screen.queryByText(currentMonthYear)).not.toBeInTheDocument();
  });

  it("calls setSelectedDate when a day is clicked", () => {
    const today = moment().format("D");

    fireEvent.click(screen.getByText(today));

    expect(mockSetSelectedDate).toHaveBeenCalled();
  });

  it("toggles the calendar type when the toggle button is clicked", () => {
    const toggleButton = screen.getByText("Switch to Hijri");

    fireEvent.click(toggleButton);

    expect(mockToggleCalendar).toHaveBeenCalled();
  });
});
