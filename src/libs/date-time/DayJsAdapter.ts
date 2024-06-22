import dayjs from 'dayjs';
import type DateTime from './DateTime';
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("Asia/Seoul");

export default class DayJsAdapter implements DateTime {
  format(date: Date, format: string = 'YYYY-MM-DD'): string {
    return dayjs(date).format(format);
  }
}
