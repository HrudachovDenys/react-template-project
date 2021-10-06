const namespace = 'EXAMPLE';
export const TEST_ACTION = `${namespace}/TEST_ACTION`;

/**
 * Axios payload example.
 * 
 * payload: {
 *   request: {
 *      method: 'post',
 *      url: '/api/example',
 *      data: { _id }
 *   }
 * }
 */

/**
 * Example action.
 */
export const testAction = (data: string) => ({
  type: TEST_ACTION,
  payload: { data },
});