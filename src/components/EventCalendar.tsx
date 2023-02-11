import { Badge, Calendar } from "antd";
import { Moment } from "moment";
import React, { FC, PropsWithChildren } from "react";
import { IEvent } from "../models/IEvent";
import { formatDate } from "../utils/date";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (
  props: PropsWithChildren<EventCalendarProps>
) => {
  function dateCellRender(value: any) {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === formatedDate
    );
    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>{ev.description}</div>
        ))}
      </div>
    );
  }
  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
