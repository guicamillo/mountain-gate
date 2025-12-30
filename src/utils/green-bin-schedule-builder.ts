import { getCanadianHolidays, getTuesdays, isCanadianHoliday } from "./date-builders";

function getGreenBinPickupDates(year: number): string[] {
  // Get all Tuesdays in the given year
  const tuesdays = getTuesdays(year);

  // Get all Canadian holidays in the given year
  const holidays = getCanadianHolidays(year);

  // Convert holidays to a Set for quick lookup
  const holidaySet = new Set(holidays.map(({ date, name }) => date.toLocaleDateString()));

  // Adjust pickup dates based on the holiday logic
  const pickupDates = tuesdays.map((tuesday) => {
    const tuesdayDate = new Date(`${tuesday}T00:00:00-08:00`);
    const mondayBefore = new Date(`${tuesday}T00:00:00-08:00`);
    mondayBefore.setDate(tuesdayDate.getDate() - 1); // Get the Monday before

    // Check if Monday before the Tuesday is a holiday
    if (holidaySet.has(mondayBefore.toLocaleDateString())) {
      // Push the pickup to Wednesday if Monday is a holiday
      const wednesdayDate = new Date(tuesdayDate);
      wednesdayDate.setDate(tuesdayDate.getDate() + 1);
      return wednesdayDate.toISOString().split("T")[0];
    }

    // Otherwise, keep it on Tuesday
    return tuesday;
  });

  return pickupDates;
}

function assignPickupDates(dates: string[], participants: string[]): Record<string, string> {
  const assignments: Record<string, string> = {};

  for (let i = 0; i < dates.length; i++) {
    const participant = participants[i % participants.length];
    assignments[dates[i]] = participant;
  }

  return assignments;
}

// export const year = new Date().getFullYear();
export const year = 2026; //overriding to generate it for next year.

export const tuesdays = getTuesdays(year);
export const canadianHolidays = getCanadianHolidays(year);

//will fix it later - the holiday offset logic isnt working properly
export const WrongGreenBinPickupDates = getGreenBinPickupDates(year);

export const GreenBinPickupDates = [
  "2026-01-06",
  "2026-01-13",
  "2026-01-20",
  "2026-01-27",

  "2026-02-03",
  "2026-02-10",
  "2026-02-18",
  "2026-02-24",

  "2026-03-03",
  "2026-03-10",
  "2026-03-17",
  "2026-03-24",
  "2026-03-31",

  "2026-04-08",
  "2026-04-14",
  "2026-04-21",
  "2026-04-28",

  "2026-05-05",
  "2026-05-12",
  "2026-05-20",
  "2026-05-26",

  "2026-06-02",
  "2026-06-09",
  "2026-06-16",
  "2026-06-23",
  "2026-06-30",

  "2026-07-07",
  "2026-07-14",
  "2026-07-21",
  "2026-07-28",

  "2026-08-05",
  "2026-08-11",
  "2026-08-18",
  "2026-08-25",

  "2026-09-01",
  "2026-09-09",
  "2026-09-15",
  "2026-09-22",
  "2026-09-29",

  "2026-10-06",
  "2026-10-14",
  "2026-10-20",
  "2026-10-27",

  "2026-11-03",
  "2026-11-10",
  "2026-11-17",
  "2026-11-24",

  "2026-12-01",
  "2026-12-08",
  "2026-12-15",
  "2026-12-22",
  "2026-12-29",
];

const Streets = ["Ridgemoor"] as const;

export const ParticipantsPerStreet: Record<(typeof Streets)[number], string[]> = {
  Ridgemoor: ["9120", "9130", "9140", "9150", "9155", "9145", "9135", "9125"],
};

export const SchedulePerStreet: Record<(typeof Streets)[number], Record<string, string>> = {
  Ridgemoor: assignPickupDates(GreenBinPickupDates, ParticipantsPerStreet.Ridgemoor),
};
