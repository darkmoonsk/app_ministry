export default class ValidateReport {
    static validateNumber(value) {
        const numberRegex = new RegExp(/^(0|[1-9]\d*)$/);
        return numberRegex.test(value);
    }

    static validateHours(value) {
        const hoursRegex = new RegExp(/^\d+:[0-5]\d$/);
        return hoursRegex.test(value);
    }
}