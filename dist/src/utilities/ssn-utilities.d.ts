export declare const ssnFactors: number[];
export declare const ssnIndividualNumberMappings: {
    fromYear: number;
    toYear: number;
    indStart: number;
    indEnd: number;
}[];
export declare function getIndRangeFromYear(year: number): {
    indStart: number;
    indEnd: number;
} | null;
export declare function getBirthDateFromSsn(ssn: string): Date | null;
export declare function getSsnForDate(date: Date, getDNumber?: boolean): string | null;
export declare function isDNumber(ssn: string): boolean | null;
