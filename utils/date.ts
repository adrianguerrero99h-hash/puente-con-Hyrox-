export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const getMonday = (d: Date): Date => {
    const date = new Date(d);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
};

export const isSummerRestPeriod = (date: Date): boolean => {
    // Rest period: July 1, 2026 to August 31, 2026 inclusive.
    const year = date.getFullYear();
    if (year !== 2026) {
        return false;
    }
    const startDate = new Date('2026-06-30T00:00:00Z');
    const endDate = new Date('2026-08-31T00:00:00Z'); // Exclusive, so it includes all of Aug 31.
    return date >= startDate && date < endDate;
};
