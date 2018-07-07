/** Operational Error
 * * Recoverable - expect and handle these
 * 		-- Typically an Error Object being passed around
 * 1. Network timeout
 * 2. Database is done
 * 3. Disk got full
 * 4. 3rd API returning errors
 * 5. Unexpected or user missing inputs (JSON.parse)
 */

/** Programming Error
 * * nonrecoverable - try to avoid these
 * 		-- Typically an Exception throw
 * 1. Silently ignoring/swallowing errors instead of handling them
 * 2. Classic JavaScript error
 * 		- TypeError: undefined is not a function
 * 		- TypeError: Cannot read property 'x' of undefined
 * 		- ReferenceError: x is not defined
 * 3. Invoking a callback twice
 * 4. Using the wrong error mechanism in the wrong place
 */
