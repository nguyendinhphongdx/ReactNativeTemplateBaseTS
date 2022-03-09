import React, {Component, useEffect, useState} from 'react';
import { Dimensions } from 'react-native';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Moment from 'moment';
import {extendMoment} from 'moment-range';
const moment = extendMoment(Moment);
export type DatesType = {
  range?: boolean;
  date?: moment.Moment | Date;
  startDate?: moment.Moment | Date;
  endDate?: moment.Moment | Date;
  focusedInput: 'startDate' | 'endDate';
  onDatesChange: (date: {
    date?: moment.Moment;
    startDate?: moment.Moment;
    endDate?: moment.Moment;
  }) => void;
  isDateBlocked: (date: moment.Moment) => boolean;
  onDisableClicked?: (date: moment.Moment) => void;
  focusedMonth?: moment.Moment;
  weekHeader?: Object;
  header?: {
    renderLeftLabel?: Function;
    renderCenterLabel?: (moment: moment.Moment) => void;
    renderRightLabel?: Function;
  };
  hideDifferentMonthDays?: boolean;
  styles?: ViewStyle;
};

type MonthType = {
  range: boolean;
  date?: moment.Moment;
  startDate?: moment.Moment;
  endDate?: moment.Moment;
  focusedInput: 'startDate' | 'endDate';
  currentDate: moment.Moment;
  focusedMonth: moment.Moment;
  onDatesChange: (date: {
    date?: moment.Moment;
    startDate?: moment.Moment;
    endDate?: moment.Moment;
  }) => void;
  isDateBlocked: (date: moment.Moment) => boolean;
  onDisableClicked: (date: moment.Moment) => void;
  weekHeader?: {
    dayFormat?: string;
  };
  hideDifferentMonthDays?: boolean;
  styles?: string;
};

type WeekType = {
  range: boolean;
  date: moment.Moment;
  startDate: moment.Moment;
  endDate: moment.Moment;
  focusedInput: 'startDate' | 'endDate';
  startOfWeek: moment.Moment;
  onDatesChange: (date: {
    date?: moment.Moment;
    startDate?: moment.Moment;
    endDate?: moment.Moment;
  }) => void;
  isDateBlocked: (date: moment.Moment) => boolean;
  onDisableClicked: (date: moment.Moment) => void;
  focusedMonth: moment.Moment;
  hideDifferentMonthDays?: boolean;
  styles?: string | any;
};



const dates = (
  startDate?: moment.Moment,
  endDate?: moment.Moment,
  focusedInput?: 'startDate' | 'endDate',
) => {
  if (focusedInput === 'startDate') {
    if (startDate && endDate) {
      return {startDate, endDate: null, focusedInput: 'endDate'};
    }
    return {startDate, endDate, focusedInput: 'endDate'};
  }

  if (focusedInput === 'endDate') {
    if (endDate && startDate && endDate.isBefore(startDate)) {
      return {startDate: endDate, endDate: null, focusedInput: 'endDate'};
    }
    return {startDate, endDate, focusedInput: 'startDate'};
  }

  return {startDate, endDate, focusedInput};
};

export const Week = (props: WeekType) => {
  const {
    range,
    date,
    startDate,
    endDate,
    focusedInput,
    startOfWeek,
    onDatesChange,
    isDateBlocked,
    onDisableClicked,
    hideDifferentMonthDays,
    focusedMonth,
    styles,
  } = props;

  const days = [];
  const endOfWeek = startOfWeek.clone().endOf('isoweek');
  const getDayRange = moment.range(startOfWeek, endOfWeek);
  const handleOnDatesChange = (start:any,end:any,isPeriodBlocked:boolean)=>{
    if(isPeriodBlocked){
      onDatesChange(dates(start, null, 'startDate'))
    }else{
      onDatesChange(dates(start, end, focusedInput))
    }
  }
  Array.from(getDayRange.by('days')).map((day: moment.Moment) => {
    const onPress = () => {
      if (isDateBlocked(day)) {
        onDisableClicked(day);
      } else if (range) {
        let isPeriodBlocked = false;
        const start = focusedInput === 'startDate' ? day : startDate;
        const end = focusedInput === 'endDate' ? day : endDate;
        if (start && end) {
          moment.range(start, end).by('days', (dayPeriod: moment.Moment) => {
            if (isDateBlocked(dayPeriod)) isPeriodBlocked = true;
          });
        }
        handleOnDatesChange(start,end, isPeriodBlocked);
      } else {
        onDatesChange({date: day});
      }
    };

    const isDateSelected = () => {
      if (range) {
        if (startDate && endDate) {
          return (
            day.isSameOrAfter(startDate, 'day') &&
            day.isSameOrBefore(endDate, 'day')
          );
        }
        return (
          (startDate && day.isSame(startDate, 'day')) ||
          (endDate && day.isSame(endDate, 'day'))
        );
      }
      return date && day.isSame(date, 'day');
    };
    const isCurrentDate = (dateToCheck: any) =>
      moment().isSame(dateToCheck, 'day');
    const isCurrentMount = (dateToCheck: any, month: any) =>
      moment(month).isSame(dateToCheck, 'month');

    const isStartDateSelected = (date: any) => {
      return date.isSame(startDate, 'day');
    };
    const isEndDateSelected = (date: any) => {
      return date.isSame(endDate, 'day');
    };
    const isStartDate = isStartDateSelected(day);
    const isEndDate = isEndDateSelected(day);
    const isBlocked = isDateBlocked(day);
    const isSelected = isDateSelected();
    const isCurrent = isCurrentDate(day);
    const isHideDate = hideDifferentMonthDays
      ? !isCurrentMount(day, focusedMonth)
      : false;

    const style = [
      styles && styles.day,
      isBlocked && styles && styles.dayBlocked,
      isCurrent && styles && styles.dayCurrent,
      isSelected && styles && styles.daySelected,
      isStartDate && styles && styles.dayStart,
      isEndDate && styles && styles.dayEnd,
    ];

    const styleText = [
      styles.dayText,
      isBlocked && styles.dayDisabledText,
      isCurrent && styles.dayCurrentText,
      isSelected && styles.daySelectedText,
    ];

    days.push(
      <TouchableOpacity
        key={day.date()}
        style={style}
        onPress={onPress}
        disabled={isHideDate || (isBlocked && !onDisableClicked)}>
        {!isHideDate ? <Text style={styleText}>{day.date()}</Text> : null}
      </TouchableOpacity>,
    );
    return null;
  });

  return <View style={styles.week}>{days}</View>;
};

Week.defaultProps = {
  hideDifferentMonthDays: false,
  styles: undefined,
};

export const Month = (props: MonthType) => {
  const {
    range,
    date,
    startDate,
    endDate,
    focusedInput,
    currentDate,
    focusedMonth,
    onDatesChange,
    isDateBlocked,
    onDisableClicked,
    hideDifferentMonthDays,
    styles,
  } = props;
  const dayFormat = props.weekHeader ? props.weekHeader.dayFormat : 'ddd';

  const dayNames: any = [];
  const weeks: any = [];
  const startOfMonth = focusedMonth.clone().startOf('month').startOf('isoweek');
  const endOfMonth = focusedMonth.clone().endOf('month');
  const weekRange = moment.range(
    currentDate.clone().startOf('isoweek'),
    currentDate.clone().endOf('isoweek'),
  );

  Array.from(weekRange.by('days')).map((day: moment.Moment) => {
    dayNames.push(
      <Text key={day.date()} style={styles ? styles.dayName : null}>
        {day.format(dayFormat)}
      </Text>,
    );
    return null;
  });

  const getMonthRange = moment.range(startOfMonth, endOfMonth);
  Array.from(getMonthRange.by('weeks')).map((week: moment.Moment) => {
    weeks.push(
      <Week
        key={week}
        range={range}
        date={date}
        startDate={startDate}
        endDate={endDate}
        focusedInput={focusedInput}
        currentDate={currentDate}
        focusedMonth={focusedMonth}
        startOfWeek={week}
        onDatesChange={onDatesChange}
        isDateBlocked={isDateBlocked}
        onDisableClicked={onDisableClicked}
        hideDifferentMonthDays={hideDifferentMonthDays}
        styles={styles}
      />,
    );
    return null;
  });

  return (
    <View style={styles ? styles.month : null}>
      <View style={styles ? styles.week : null}>{dayNames}</View>
      {weeks}
    </View>
  );
};

Month.defaultProps = {
  weekHeader: undefined,
  hideDifferentMonthDays: false,
  styles: undefined,
};

export default function Dates(props: DatesType) {
  const [state, setState] = useState({
    currentDate: moment(),
    focusedMonth: moment().startOf('month'),
  });
  useEffect(() => {
    setFocusedMonth();
  }, []);

  const setFocusedMonth = () => {
    const {focusedMonth} = props;
    if (focusedMonth) {
      setState({
        ...state,
        focusedMonth: moment(focusedMonth, 'MMMM D, YYYY h:mm a').startOf(
          'month',
        ),
      });
    }
  };
  const renderLeftLabel = props.header ? props.header.renderLeftLabel : null;
  const renderCenterLabel = props.header
    ? props.header.renderCenterLabel
    : null;
  const renderRightLabel = props.header ? props.header.renderRightLabel : null;

  const previousMonth = () => {
    setState({...state, focusedMonth: state.focusedMonth.add(-1, 'M')});
  };

  const nextMonth = () => {
    setState({...state, focusedMonth: state.focusedMonth.add(1, 'M')});
  };

  const styles = {...defaultStyles, ...(props.styles || {})};

  return (
    <View style={styles.calendar}>
      <View style={styles.heading}>
        <TouchableOpacity onPress={previousMonth}>
          {renderLeftLabel ? renderLeftLabel() : <Text>{'< Previous'}</Text>}
        </TouchableOpacity>
        {renderCenterLabel ? (
          renderCenterLabel(state.focusedMonth)
        ) : (
          <Text>{state.focusedMonth.format('MMMM')}</Text>
        )}
        <TouchableOpacity onPress={nextMonth}>
          {renderRightLabel ? renderRightLabel() : <Text>{'Next >'}</Text>}
        </TouchableOpacity>
      </View>
      <Month
        range={props.range || false}
        date={props.date}
        startDate={props.startDate}
        endDate={props.endDate}
        focusedInput={props.focusedInput}
        currentDate={state.currentDate}
        focusedMonth={state.focusedMonth}
        onDatesChange={props.onDatesChange}
        isDateBlocked={props.isDateBlocked}
        onDisableClicked={props.onDisableClicked}
        styles={styles}
        weekHeader={props.weekHeader}
        hideDifferentMonthDays={props.hideDifferentMonthDays}
      />
    </View>
  );
}
const defaultStyles = StyleSheet.create({
    calendar: {
      
      maxWidth:500
    },
    heading: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 5,
      paddingBottom: 10,
      paddingHorizontal: 20,
    },
    week: {
      flexDirection: 'row',
    },
    dayName: {
      flexGrow: 1,
      flexBasis: 1,
      textAlign: 'center',
    },
    day: {
      flexGrow: 1,
      flexBasis: 1,
      alignItems: 'center',
      backgroundColor: 'rgb(245, 245, 245)',
      margin: 1,
      padding: 10,
    },
    dayBlocked: {
      backgroundColor: 'rgb(255, 255, 255)',
    },
    daySelected: {
      backgroundColor: '#a2ace0',
    },
    dayStart: {
      backgroundColor: '#db4c42',
      borderBottomLeftRadius: 5,
      borderTopLeftRadius: 5,
    },
    dayEnd: {
      backgroundColor: '#db4c42',
      borderBottomRightRadius: 5,
      borderTopRightRadius: 5,
    },
    dayText: {
      color: 'rgb(0, 0, 0)',
      fontWeight: '600',
    },
    dayDisabledText: {
      color: 'gray',
      opacity: 0.5,
      fontWeight: '400',
    },
    daySelectedText: {
      color: 'rgb(252, 252, 252)',
    },
  });