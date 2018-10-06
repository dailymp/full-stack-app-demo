package com.task.bs;

import com.task.api.IStandardTimeBS;
import com.task.common.StandardConstants;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.concurrent.TimeUnit;
import javax.inject.Singleton;

@Singleton
public class StandardTimeBS implements IStandardTimeBS {

    /**
     * Gets the calendar.
     *
     * @return the calendar instance
     */
    @Override
    public Calendar getCalendar() {
        Calendar calendar = new GregorianCalendar().getInstance();
        return calendar;
    }

    /**
     * This method decrements by one day the date to the given calendar field, based on the calendar's rules.
     *
     * @param c a Calendar
     * @return c the calendar decremented by one day
     */
    @Override
    public Calendar decrementDateByOneDay(Calendar c) {
        c.add(Calendar.DATE, StandardConstants.DECREMENT_AMOUNT);
        return c;
    }

    /**
     * This method calculates the difference days between previousDate and the laterDate
     * @param previousDate initial date to compare
     * @param laterDate final date to compare
     * @return isGreater Boolean result
     */
    @Override
    public Integer differenceInDaysBetweenDates(Date previousDate, Date laterDate) {
        Integer differenceInDays = null;

        long difference = (laterDate.getTime() - previousDate.getTime());

        differenceInDays = (int) TimeUnit.DAYS.convert(difference, TimeUnit.MILLISECONDS);
        
        return differenceInDays;
    }
    
    /**
     * This method converts the interval in minutes received from the configuration collection to miliseconds
     * @param intervalInMinutes the interval received from DataBase
     * @return intervalDuration Long result
     */
    @Override
    public Long getTimeIntervalInMiliseconds (String intervalInMinutes) { 
        Long intervalDuration = new Integer(intervalInMinutes).longValue() * 60 * 1000;
        return intervalDuration;      
    }
}