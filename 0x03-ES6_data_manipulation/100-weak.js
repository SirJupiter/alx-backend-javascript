/* eslint-disable */

export const weakMap = new WeakMap();

/**
 * Function to track and query API call counts for endpoints.
 * @param {Object} endpoint - The endpoint to query.
 */
export function queryAPI(endpoint) {
  // Get the current count of calls for the endpoint
  const count = weakMap.get(endpoint) || 0;

  // Increment the count
  weakMap.set(endpoint, count + 1);

  // Check if the count is >= 5 and throw an error if so
  if (count + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
