export declare class LuhnUtilities {
    static getControlDigit(input: string): number;
    static getControlDigits(input: string, numberOfDigits: number): number[];
    static checkControlDigit(input: string): boolean;
    static checkControlDigits(input: string, numberOfDigits: number): boolean;
}
