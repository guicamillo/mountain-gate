import type { LinkDetails } from "@components/link-list.astro";

type Glob = {
  default: string;
};

const YMD_REGEXP = /(\d{4})\-(\d{2})\-(\d{2})/;

const isSMM = (s: string) => s.startsWith("/SMM");
const isAGM = (s: string) => s.startsWith("/AGM");

const isFinancialStatement = (s: string) =>
  s.startsWith("/FINANCIAL_STATEMENTS") || s.startsWith("/Financial-Statement-Year-End");

const isDepreciationReport = (s: string) => s.startsWith("/DEPRECIATION_REPORTS") || s.startsWith("/DR-");

function removePublicFolder(s: string) {
  return s.replace("/public", "").replace("/mountain-gate", "").replace("/_astro", "");
}

function removefileHash(s: string) {
  const [filename, hash, extension] = s.split(".");
  return [filename, extension].join(".");
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function toHumanReadableFormat(input: string) {
  const cleanedInput = removePublicFolder(input);
  const YYYY = cleanedInput.match(YMD_REGEXP)?.[1];
  const MM = cleanedInput.match(YMD_REGEXP)?.[2];
  const month = MONTHS[parseInt(MM!)];

  if (isSMM(cleanedInput)) {
    const special = cleanedInput.toLocaleLowerCase().includes("special") ? " <b>Special</b> " : "";
    return `${month} &mdash; ${special}Strata Meeting Minutes`;
  }

  if (isAGM(cleanedInput)) {
    return `${YYYY} AGM Meeting Minutes`;
  }

  if (isFinancialStatement(cleanedInput)) {
    return `${YYYY} Financial Statement &mdash; Year End`;
  }

  if (isDepreciationReport(cleanedInput)) {
    return `${YYYY} ${month} &mdash; Depreciation report`;
  }

  return cleanedInput;
}

export function groupStrataMeetingMinutesPerYear(entries: Glob[]) {
  const groupedContents: Record<string, string[]> = {};

  entries.forEach((e) => {
    const cleanedFileName = removefileHash(removePublicFolder(e.default));
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

export function convertGlobToLinkList(entries: Glob[], baseURL: string = ""): LinkDetails[] {
  return entries.reverse().map((e) => {
    return {
      href: baseURL + removefileHash(removePublicFolder(e.default)),
      text: toHumanReadableFormat(e.default),
    };
  });
}
