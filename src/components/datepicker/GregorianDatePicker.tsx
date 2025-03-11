import React, { useState } from "react";
import moment from "moment";
import { Button } from "@/components/ui/button"; // Using shadcn Button

interface IGregorianDatePickerProps {
  setSelectedDate: (a: moment.Moment) => void;
  selectedDate: moment.Moment;
  toggleCalendar: VoidFunction;
  selectedCalendar: "gregorian" | "hijri";
}

const GregorianDatePicker: React.FC<IGregorianDatePickerProps> = ({
  setSelectedDate,
  selectedDate,
  toggleCalendar,
  selectedCalendar,
}) => {
  const [currentDate, setCurrentDate] = useState(moment().locale("en"));

  // Handle month navigation
  const handlePrevMonth = () =>
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  const handleNextMonth = () =>
    setCurrentDate(currentDate.clone().add(1, "month"));

  // Handle year selection
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCurrentDate(currentDate.clone().year(parseInt(e.target.value)));

  // Render days of the current month
  const renderDays = () => {
    const startOfMonth = currentDate.clone().startOf("month").startOf("week");
    const endOfMonth = currentDate.clone().endOf("month").endOf("week");
    const days = [];
    let day = startOfMonth;

    while (day.isBefore(endOfMonth, "day") || day.isSame(endOfMonth, "day")) {
      const dayClone = day.clone();

      const isSelected = dayClone.isSame(selectedDate, "day");
      const isToday = dayClone.isSame(moment(), "day");

      days.push(
        <Button
          variant="ghost"
          key={day.format("YYYY/MM/DD")}
          onClick={() => {
            setSelectedDate(dayClone);
          }}
          className={`w-full h-6 p-0 text-sm
          ${
            isSelected
              ? "bg-green-500 text-white" // Selected date
              : isToday
              ? "bg-gray-300 text-black" // Today
              : "hover:bg-gray-200" // Hover effect
          }`}
          style={{
            fontSize: `clamp(12px, 1.8vw, 16px)`, // Clamp for font-size
          }}
        >
          {dayClone.format("D")}
        </Button>
      );
      day = day.clone().add(1, "day");
    }

    return days;
  };

  const renderDayNames = () => {
    moment.updateLocale("en", {
      week: {
        dow: 7,
      },
    });
    const dayNames = moment.weekdaysMin(true); // Get localized day names, starting from Saturday
    return (
      <div className="grid grid-cols-7 gap-1 mb-1">
        {dayNames.map((dayName) => (
          <div key={dayName} className="text-sm font-semibold text-center">
            {dayName}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="p-1"
      style={{ width: "clamp(210px, 250px, 280px)", height: "auto" }} // Clamp for width
    >
      <div className="flex justify-between items-center mb-1">
        {/* Month navigation */}
        <Button variant="ghost" size="icon" onClick={handlePrevMonth}>
          &lt;
        </Button>
        <span className="text-sm">{currentDate.format("MMMM YYYY")}</span>
        <Button variant="ghost" size="icon" onClick={handleNextMonth}>
          &gt;
        </Button>
      </div>

      {/* Year selector */}
      <div className="mb-1 flex justify-between">
        <div>
          <select
            id="year-select"
            value={currentDate.year()}
            onChange={handleYearChange}
            className="cursor-pointer border rounded py-[0.5rem] px-[0.5rem] text-xs max-h-[150px]"
            style={{ fontSize: "clamp(12px, 1.5vw, 14px)" }}
          >
            {Array.from({ length: 100 }, (_, i) => (
              <option key={i} value={moment().year() - 50 + i}>
                {moment().year() - 50 + i}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Button onClick={toggleCalendar}>
            {selectedCalendar === "gregorian"
              ? "Switch to Hijri"
              : "Switch to Gregorian"}
          </Button>
        </div>
      </div>

      {renderDayNames()}

      {/* Days in the month */}
      <div className="grid grid-cols-7 gap-1">{renderDays()}</div>
    </div>
  );
};

export default GregorianDatePicker;
