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
export const GreenBinPickupDates = getGreenBinPickupDates(year);

const Streets = ["Ridgemoor"] as const;

export const ParticipantsPerStreet: Record<(typeof Streets)[number], string[]> = {
  Ridgemoor: ["9120", "9130", "9140", "9150", "9155", "9145", "9135", "9125"],
};

export const SchedulePerStreet: Record<(typeof Streets)[number], Record<string, string>> = {
  Ridgemoor: assignPickupDates(GreenBinPickupDates, ParticipantsPerStreet.Ridgemoor),
};
