"use client";

import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import momentHijri from "moment-hijri";
import { Slider } from "@/components/ui/slider"; // ShadCN Slider
import { Button } from "../ui/button";
import { YearRangeProps } from "./types";

const YearRange: React.FC<YearRangeProps> = ({
  backgroundColor,
  border,
  buttonStyle,
  className,
  color,
  fontSize,
  fontWeight,
  onRangeSelect,
  sliderStyle,
}) => {
  const [calendarType, setCalendarType] = useState<"gregorian" | "hijri">(
    "hijri"
  );

  const startYearRef = useRef(
    (calendarType === "hijri"
      ? momentHijri().locale("ar").iYear()
      : moment().locale("en").year()) - 100
  );

  const endYearRef = useRef(
    (calendarType === "hijri"
      ? momentHijri().locale("ar").iYear()
      : moment().locale("en").year()) + 100
  );

  const [yearRange, setYearRange] = useState<[number, number]>([
    startYearRef.current,
    endYearRef.current,
  ]);

  // Update the displayed range based on calendar type
  useEffect(() => {
    startYearRef.current =
      (calendarType === "hijri"
        ? momentHijri().locale("ar").iYear()
        : moment().locale("en").year()) - 100;
    endYearRef.current =
      (calendarType === "hijri"
        ? momentHijri().locale("ar").iYear()
        : moment().locale("en").year()) + 100;

    setYearRange([startYearRef.current, endYearRef.current]);
  }, [calendarType]);

  const handleCalendarSwitch = () => {
    setCalendarType(calendarType === "gregorian" ? "hijri" : "gregorian");
  };

  const handleRangeChange = (range: number[]) => {
    setYearRange([range[0], range[1]]);
    if (onRangeSelect) {
      onRangeSelect(range[0], range[1]);
    }
  };

  return (
    <div
      className={className + " min-w-[280px]"}
      style={{
        backgroundColor: backgroundColor,
        borderColor: border?.color,
        borderWidth: border?.width,
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
    >
      <Button
        onClick={handleCalendarSwitch}
        className={
          buttonStyle?.className +
          " bg-blue-500 hover:bg-blue-500 text-white px-4 py-2 rounded"
        }
        style={{
          backgroundColor: buttonStyle?.backgroundColor,
          borderColor: buttonStyle?.border?.color,
          borderWidth: buttonStyle?.border?.width,
          color: buttonStyle?.color,
          fontSize: buttonStyle?.fontSize,
          fontWeight: buttonStyle?.fontWeight,
        }}
      >
        Switch to {calendarType === "gregorian" ? "Hijri" : "Gregorian"}{" "}
        Calendar
      </Button>

      <div
        className={sliderStyle?.container?.className + " mt-4"}
        style={{
          backgroundColor: sliderStyle?.container?.backgroundColor,
          borderColor: sliderStyle?.container?.border?.color,
          borderWidth: sliderStyle?.container?.border?.width,
          color: sliderStyle?.container?.color,
          fontSize: sliderStyle?.container?.fontSize,
          fontWeight: sliderStyle?.container?.fontWeight,
        }}
      >
        <p className="mb-2">
          {calendarType === "gregorian" ? "Gregorian" : "Hijri"} Year Range:
        </p>
        <Slider
          key={calendarType}
          min={startYearRef.current}
          max={endYearRef.current}
          value={yearRange}
          onValueChange={(value) => handleRangeChange(value)}
          className="w-full cursor-pointer"
          range={sliderStyle?.range}
          thumb={sliderStyle?.thumb}
        />
        <div
          key={yearRange[0] || yearRange[1]}
          className="flex justify-between"
        >
          <span>{yearRange[0]}</span>
          <span>{yearRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default YearRange;
