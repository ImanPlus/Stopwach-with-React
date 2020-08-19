import React from "react";

export default function DisplayTime({time}) {
  const h = () => {
    if (time.h === 0) {
      return '';
    } else {
      return <span id="bt">{(time.h >= 10) ? time.h : "0" + time.h}</span>
    }
  }
  return (
    <div>
      {h()}&nbsp;:&nbsp;
      <span id="bt">{(time.m >= 10) ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
      <span id="bt">{(time.s >= 10) ? time.s : "0" + time.s}</span>&nbsp;:&nbsp;
      <span id="bt">{(time.ms >= 10) ? time.ms : "0" + time.ms}</span>
    </div>
  )
}