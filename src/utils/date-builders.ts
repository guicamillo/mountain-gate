export function getCanadianHolidays(year: number) {
  const holidays: { name: string; date: Date }[] = [];

  // New Year's Day (Federal & BC)
  holidays.push({ name: "New Year's Day", date: new Date(year, 0, 1) });

  // Family Day (BC) - 2nd Monday of February
  const familyDay = new Date(year, 1, 1); // Start with February 1st
  familyDay.setDate(1 + ((1 - familyDay.getDay() + 7) % 7) + 7); // Adjust to 2nd Monday
  holidays.push({ name: "Family Day", date: familyDay });

  // Good Friday (Federal & BC) - Calculated based on Easter
  const goodFriday = getGoodFriday(year);
  holidays.push({ name: "Good Friday", date: goodFriday });

  // Victoria Day (Federal & BC) - Last Monday before May 25
  const victoriaDay = getLastMondayBefore(year, 4, 25); // May is month 4
  holidays.push({ name: "Victoria Day", date: victoriaDay });

  // Canada Day (Federal & BC)
  const canadaDay = new Date(year, 6, 1); // July 1
  holidays.push({ name: "Canada Day", date: canadaDay });

  // British Columbia Day (BC) - 1st Monday of August
  const bcDay = new Date(year, 7, 1); // Start with August 1st
  bcDay.setDate(1 + ((1 - bcDay.getDay() + 7) % 7)); // Adjust to 1st Monday
  holidays.push({ name: "British Columbia Day", date: bcDay });

  // Labour Day (Federal & BC) - 1st Monday of September
  const labourDay = new Date(year, 8, 1); // Start with September 1st
  labourDay.setDate(1 + ((1 - labourDay.getDay() + 7) % 7)); // Adjust to 1st Monday
  holidays.push({ name: "Labour Day", date: labourDay });

  // National Day for Truth and Reconciliation (Federal)
  holidays.push({ name: "National Day for Truth and Reconciliation", date: new Date(year, 8, 30) }); // September 30

  // Thanksgiving (Federal) - 2nd Monday of October
  const thanksgiving = new Date(year, 9, 1); // Start with October 1st
  thanksgiving.setDate(1 + ((1 - thanksgiving.getDay() + 7) % 7) + 7); // Adjust to 2nd Monday
  holidays.push({ name: "Thanksgiving", date: thanksgiving });

  // Remembrance Day (Federal & BC)
  holidays.push({ name: "Remembrance Day", date: new Date(year, 10, 11) }); // November 11

  // Christmas Day (Federal & BC)
  holidays.push({ name: "Christmas Day", date: new Date(year, 11, 25) });

  // Boxing Day (Federal & BC)
  holidays.push({ name: "Boxing Day", date: new Date(year, 11, 26) });

  return holidays;
}

// Helper function to calculate Good Friday
function getGoodFriday(year: number): Date {
  const easter = getEasterDate(year);
  easter.setDate(easter.getDate() - 2); // Subtract 2 days
  return easter;
}

// Helper function to calculate Easter Sunday (using the "Computus" algorithm)
function getEasterDate(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31) - 1; // 0-based month
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month, day);
}

// Helper function to find the last Monday before a given day in a month
function getLastMondayBefore(year: number, month: number, day: number): Date {
  const date = new Date(year, month, day);
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7)); // Adjust to last Monday
  return date;
}

export function getTuesdays(year: number): string[] {
  const tuesdays: string[] = [];

  // Loop through all months (0 = January, 11 = December)
  for (let month = 0; month < 12; month++) {
    // Loop through all days of the month
    for (let day = 1; day <= 31; day++) {
      // Create a date object
      const date = new Date(year, month, day);

      // Ensure the date is valid for the given month
      if (date.getMonth() !== month) break;

      if (date.getDay() === 2) {
        tuesdays.push(date.toISOString().split("T")[0]); // Add the date in YYYY-MM-DD format
      }
    }
  }

  return tuesdays;
}

export function isCanadianHoliday(d: Date) {
  const year = d.getFullYear();
  const holidays = getCanadianHolidays(year).map(({ date }) => date);
  return holidays.includes(d);
}

export function formatCompactDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = new Intl.DateTimeFormat("en-CA", { month: "short" }).format(date);

  return `${day}-${month}`;
}

export function formatWeekdayShort(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", { weekday: "short" }).format(date);
}
