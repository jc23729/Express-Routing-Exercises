/** ExpressError extends the normal JS error so we can easily
 *  add a status when we make an instance of it.
 *
 *  The error-handling middleware will return this.
 */

 clsass ExpressError extends Error {
     constructor(message, status){
         super();
         this.message = message;
         this.status = status;
         console.error(this.stack);
     }
 }