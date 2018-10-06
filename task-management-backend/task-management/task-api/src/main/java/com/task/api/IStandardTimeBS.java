package com.task.api;

import java.util.Calendar;
import java.util.Date;


public interface IStandardTimeBS {
    Calendar getCalendar();
    Calendar decrementDateByOneDay(Calendar c);
    Integer differenceInDaysBetweenDates(Date previousDate, Date laterDate);
    Long getTimeIntervalInMiliseconds(String intervalInMinutes);
}
