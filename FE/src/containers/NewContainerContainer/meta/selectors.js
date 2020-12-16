import { initialState } from './reducer';
/**
 * Get NewContainer
 * @param state
 * @returns {Object}
 */
export const get = state => state.NewContainer || initialState;
