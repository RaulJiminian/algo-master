// https://www.hackerrank.com/challenges/time-conversion/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(time) {
  let militaryTime = "";

  if (time.includes("P")) {
    let pmRemovedTime = time.replace("PM", "");
    let timeArr = pmRemovedTime.split(":");
    if (timeArr[0] === "12") {
      militaryTime = timeArr.join(":");
    } else {
      let updatedHour = parseInt(timeArr[0]) + 12;
      timeArr[0] = updatedHour.toString();
      militaryTime = timeArr.join(":");
    }
  } else {
    let amRemovedTime = time.replace("AM", "");
    let timeArr = amRemovedTime.split(":");

    if (timeArr[0] === "12") {
      timeArr[0] = "00";
      militaryTime = timeArr.join(":");
    } else {
      militaryTime = timeArr.join(":");
    }
  }

  return militaryTime;
}

timeConversion("12:05:45PM");
