import type { LinkDetails } from "@components/link-list.astro";

type Glob = {
  default: string;
};

const YMD_REGEXP = /(\d{4})\-(\d{2})\-(\d{2})/;

const isSMM = (s: string) => s.startsWith("/SMM");
const isAGM = (s: string) => s.startsWith("/AGM");
const isFinancialStatement = (s: string) =>
  s.startsWith("/FINANCIAL_STATEMENTS") || s.startsWith("/Financial-Statement-Year-End");

function removePublicFolder(s: string) {
  return s.replace("/public", "").replace("/mountain-gate", "").replace("/_astro", "");
}

const MONTHS = (() => {
  const format = new Intl.DateTimeFormat("en-US", { month: "long" }).format;
  return [0, ...Array(12).keys()].map((m) => format(new Date(Date.UTC(2021, (m + 1) % 12))));
})();

export function toHumanReadableFormat(input: string) {
  const cleanedInput = removePublicFolder(input);
  const year = cleanedInput.match(YMD_REGEXP)?.[1];
  const month = cleanedInput.match(YMD_REGEXP)?.[2];

  if (isSMM(cleanedInput)) {
    const special = cleanedInput.toLocaleLowerCase().includes("special") ? " <b>Special</b> " : "";
    return `${MONTHS[parseInt(month!)]} &mdash; ${special}Strata Meeting Minutes`;
  }

  if (isAGM(cleanedInput)) {
    return `${year} AGM Meeting Minutes`;
  }

  if (isFinancialStatement(cleanedInput)) {
    return `${year} Financial Statement &mdash; Year End`;
  }

  return cleanedInput;
}

export function groupStrataMeetingMinutesPerYear(entries: Glob[]) {
  const groupedContents: Record<string, string[]> = {};

  entries.forEach((e) => {
    const cleanedFileName = removePublicFolder(e.default);
    const parsedYear = cleanedFileName.match(YMD_REGEXP)?.[1];
    if (!parsedYear) throw new Error("Could not extract date from: " + cleanedFileName);

    if (!Array.isArray(groupedContents[parsedYear])) {
      groupedContents[parsedYear] = [];
    }

    groupedContents[parsedYear].push(cleanedFileName);
    groupedContents[parsedYear].sort();
  });

  return groupedContents;
}

export function convertGlobToLinkList(entries: Glob[]): LinkDetails[] {
  return entries.reverse().map((e) => {
    return {
      href: removePublicFolder(e.default),
      text: toHumanReadableFormat(e.default),
    };
  });
}
