const TEST_RESULTS_KEY = 'hyrox_test_results';

// Type for all test results stored in localStorage
export interface AllTestResults {
    [testId: string]: any;
}

/**
 * Retrieves all test results from localStorage.
 * @returns {AllTestResults} The parsed test results object, or an empty object if none found.
 */
export const getTestResults = (): AllTestResults => {
    try {
        const data = localStorage.getItem(TEST_RESULTS_KEY);
        return data ? JSON.parse(data) : {};
    } catch (error) {
        console.error("Failed to parse test results from localStorage", error);
        return {};
    }
};

/**
 * Saves the entire test results object to localStorage.
 * @param {AllTestResults} results - The complete test results object to save.
 */
export const saveTestResults = (results: AllTestResults): void => {
    try {
        localStorage.setItem(TEST_RESULTS_KEY, JSON.stringify(results));
    } catch (error) {
        console.error("Failed to save test results to localStorage", error);
    }
};


/**
 * Retrieves results for a single test from localStorage.
 * @param {string} testId - The identifier for the test.
 * @returns {any} The data for the specified test, or null if not found.
 */
export const getSingleTestResult = (testId: string): any | null => {
    const allResults = getTestResults();
    return allResults[testId] || null;
};

/**
 * Saves results for a single test to localStorage.
 * @param {string} testId - The identifier for the test.
 * @param {any} data - The new data for the test.
 */
export const saveSingleTestResult = (testId: string, data: any): void => {
    const allResults = getTestResults();
    allResults[testId] = data;
    saveTestResults(allResults);
};