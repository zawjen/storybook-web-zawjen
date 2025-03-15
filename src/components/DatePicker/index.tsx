"use client";

import React, { useState } from "react";
import moment from "moment";
import momentHijri from "moment-hijri";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"; // ShadCN Popover
import HijriDatePicker from "./HijriDatePicker";
import GregorianDatePicker from "./GregorianDatePicker";
import { CalendarDaysIcon } from "lucide-react";
import { Loader2 } from "lucide-react"; // Icon for the spinner
import { IDatePicker } from "./types";

const DatePicker: React.FC<IDatePicker> = ({
  inputStyle,
  onSetSelectedDate,
  datepickerStyle,
}) => {
  const [calendarType, setCalendarType] = useState<"gregorian" | "hijri">(
    "hijri"
  );
  const [selectedDate, setSelectedDate] = useState(
    calendarType === "gregorian" ? moment() : momentHijri().locale("ar")
  );
  const [loading, setLoading] = useState(false); // Loading state

  // Toggle between Gregorian and Hijri
  const toggleCalendar = () => {
    setLoading(true); // Trigger loading state
    setCalendarType((prev) => (prev === "gregorian" ? "hijri" : "gregorian"));

    setTimeout(() => setLoading(false), 500);
  };

  // Confirm date selection
  const handleGregorianDateSelection = (date: moment.Moment) => {
    setLoading(true); // Trigger loading state when selecting a date
    if (onSetSelectedDate) {
      onSetSelectedDate(date.toISOString());
    }
    setSelectedDate(moment(date.toISOString()));

    setTimeout(() => setLoading(false), 500);
  };
  const handleHijriDateSelection = (date: moment.Moment) => {
    setLoading(true); // Trigger loading state when selecting a date
    if (onSetSelectedDate) {
      onSetSelectedDate(date.toISOString());
    }
    setSelectedDate(momentHijri(date.toISOString()).locale("ar"));

    setTimeout(() => setLoading(false), 500);
  };

  const isGregorianDate = () => {
    return momentHijri(
      selectedDate.clone().format("YYYY/MM/DD"),
      "YYYY/MM/DD",
      true
    ).isValid();
  };

  return (
    <div className="relative">
      {/* Added a relative class for the container */}
      <div className="flex items-center gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <div
              className={" cursor-pointer flex border p-2 rounded"}
              style={{
                background: inputStyle?.container?.backgroundColor,
                borderColor: inputStyle?.container?.border?.color,
                borderWidth: inputStyle?.container?.border?.width,
                color: inputStyle?.color,
                fontSize: inputStyle?.fontSize,
                fontWeight: inputStyle?.fontWeight,
              }}
            >
              <input
                type="text"
                value={selectedDate.format(
                  isGregorianDate() ? "YYYY/MM/DD" : "iYYYY/iMM/iDD"
                )}
                readOnly
                className={inputStyle?.className + " max-w-[100px]"}
              />
              <CalendarDaysIcon
                className={" ml-2"}
                color={inputStyle?.container?.icon?.color}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent
            className="p-2"
            style={{
              background: datepickerStyle?.container?.backgroundColor,
              borderColor: datepickerStyle?.container?.border?.color,
              borderWidth: datepickerStyle?.container?.border?.width,
            }}
          >
            {calendarType === "gregorian" ? (
              <GregorianDatePicker
                setSelectedDate={handleGregorianDateSelection}
                selectedDate={selectedDate}
                toggleCalendar={toggleCalendar}
                selectedCalendar={calendarType}
                style={datepickerStyle}
              />
            ) : (
              <HijriDatePicker
                setSelectedDate={handleHijriDateSelection}
                selectedDate={selectedDate}
                toggleCalendar={toggleCalendar}
                selectedCalendar={calendarType}
                style={datepickerStyle}
              />
            )}
          </PopoverContent>
        </Popover>
      </div>
      {/* Loading state with a spinner */}
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-100 bg-opacity-70 rounded-lg">
          <Loader2 className="animate-spin h-8 w-8 text-gray-600" />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
