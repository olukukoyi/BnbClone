import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
// import { People } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

// Date Picker Componet
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker
        className="search__dateRange"
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <h2>
        Number of Guest <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number"></input>
      <Button>
        Search AirBnb <PeopleIcon />
      </Button>
    </div>
  );
}

export default Search;
