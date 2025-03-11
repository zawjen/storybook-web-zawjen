import React, { useState } from "react";
import moment from "moment-hijri"; // Ensure this is used for Hijri calendar
import { Button } from "@/components/ui/button"; // Using ShadCN Button

interface HijriDatePickerProps {
  setSelectedDate: (a: moment.Moment) => void;
  selectedDate: moment.Moment;
  toggleCalendar: VoidFunction;
  selectedCalendar: "gregorian" | "hijri";
}

moment.updateLocale("en", { week: { dow: 6 } });
const HijriDatePicker: React.FC<HijriDatePickerProps> = ({
  setSelectedDate,
  selectedDate,
  toggleCalendar,
  selectedCalendar,
}) => {
  // Initialize the current date with Hijri format
  const [currentDate, setCurrentDate] = useState(moment().locale("en"));

  // Handle month navigation (subtract or add Hijri months)
  const handlePrevMonth = () =>
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  const handleNextMonth = () =>
    setCurrentDate(currentDate.clone().add(1, "month"));

  // Handle year change (set Hijri year from the dropdown)
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCurrentDate(currentDate.clone().iYear(parseInt(e.target.value)));

  const renderDays = () => {
    // Get the start and end of the current Hijri month
    moment.updateLocale("en", {
      week: {
        dow: 6,
      },
    });
    const startOfMonth = currentDate.clone().startOf("iMonth").startOf("week");
    const endOfMonth = currentDate.clone().endOf("iMonth").endOf("week"); 
    const days = [];
    let day = startOfMonth;

    while (day.isBefore(endOfMonth, "day") || day.isSame(endOfMonth, "day")) {
      const dayClone = moment(day); // Clone the current day

      const isSelected = dayClone.isSame(selectedDate, "day");
      const isToday = dayClone.isSame(moment(), "day");

      // Push the day button with correct styles
      days.push(
        <Button
          variant="ghost"
          key={dayClone.format("YYYY/MM/DD")} // Unique key for each day
          onClick={() => setSelectedDate(dayClone)} // Set selected date
          className={`w-full h-6 p-0 text-sm 
          ${
            isSelected
              ? "bg-green-500 text-white" // Style for selected date
              : isToday
              ? "bg-gray-300 text-black" // Style for today
              : "hover:bg-gray-200" // Hover effect
          }`}
          style={{
            fontSize: "clamp(12px, 1.8vw, 16px)", // Responsive font size
          }}
        >
          {dayClone.locale("en").format("iD")} {/* Display the Hijri day */}
        </Button>
      );

      // Move to the next day
      day = day.clone().add(1, "day");
    }

    return days;
  };

  const renderDayNames = () => {
    moment.updateLocale("ar", {
      week: {
        dow: 6,
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
        <span className="text-sm">
          {currentDate.locale("ar").format("iMMMM iYYYY")}
        </span>
        {/* Show Hijri month and year */}
        <Button variant="ghost" size="icon" onClick={handleNextMonth}>
          &gt;
        </Button>
      </div>

      {/* Year selector */}
      <div className="mb-1 flex justify-between">
        <div>
          <select
            id="year-select"
            value={currentDate.iYear()}
            onChange={handleYearChange}
            className="cursor-pointer border rounded py-[0.5rem] px-[0.5rem] text-xs max-h-[150px]"
            style={{ fontSize: "clamp(12px, 1.5vw, 14px)" }}
          >
            {Array.from({ length: 100 }, (_, i) => (
              <option key={i} value={moment().iYear() - 50 + i}>
                {moment().iYear() - 50 + i}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Button onClick={toggleCalendar}>
            {selectedCalendar === "hijri"
              ? "Switch to Gregorian"
              : "Switch to Hijri"}
          </Button>
        </div>
      </div>

      {renderDayNames()}

      {/* Days in the month */}
      <div className="grid grid-cols-7 gap-1">{renderDays()}</div>
    </div>
  );
};

export default HijriDatePicker;
