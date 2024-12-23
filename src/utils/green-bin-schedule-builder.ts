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
export const year = 2025; //overriding to generate it for next year.

export const tuesdays = getTuesdays(year);
export const canadianHolidays = getCanadianHolidays(year);

//will fix it later - the holiday offset logic isnt working properly
export const WrongGreenBinPickupDates = getGreenBinPickupDates(year);

export const GreenBinPickupDates = [
  "2025-01-07",
  "2025-01-14",
  "2025-01-21",
  "2025-01-28",
  "2025-02-04",
  "2025-02-11",
  "2025-02-19",
  "2025-02-25",
  "2025-03-04",
  "2025-03-11",
  "2025-03-18",
  "2025-03-25",
  "2025-04-01",
  "2025-04-08",
  "2025-04-15",
  "2025-04-23",
  "2025-04-29",
  "2025-05-06",
  "2025-05-13",
  "2025-05-21",
  "2025-05-27",
  "2025-06-03",
  "2025-06-10",
  "2025-06-17",
  "2025-06-24",
  "2025-07-02",
  "2025-07-08",
  "2025-07-15",
  "2025-07-22",
  "2025-07-29",
  "2025-08-06",
  "2025-08-12",
  "2025-08-19",
  "2025-08-26",
  "2025-09-03",
  "2025-09-09",
  "2025-09-16",
  "2025-09-23",
  "2025-10-01",
  "2025-10-07",
  "2025-10-15",
  "2025-10-21",
  "2025-10-28",
  "2025-11-04",
  "2025-11-12",
  "2025-11-18",
  "2025-11-25",
  "2025-12-02",
  "2025-12-09",
  "2025-12-16",
  "2025-12-23",
  "2025-12-30",
];

const Streets = ["Ridgemoor"] as const;

export const ParticipantsPerStreet: Record<(typeof Streets)[number], string[]> = {
  Ridgemoor: ["9120", "9130", "9140", "9150", "9155", "9145", "9135", "9125"],
};

export const SchedulePerStreet: Record<(typeof Streets)[number], Record<string, string>> = {
  Ridgemoor: assignPickupDates(GreenBinPickupDates, ParticipantsPerStreet.Ridgemoor),
};
