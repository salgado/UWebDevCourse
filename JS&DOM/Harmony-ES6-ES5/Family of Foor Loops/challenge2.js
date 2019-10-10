/**
 *  Write a for...of loop that:

     - loops through each day in the days array
     - capitalizes the first letter of the day
        and prints the day out to the console.
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (day of days) {
    console.log(day.charAt(0).toUpperCase() + day.slice(1));
}