# lodate

Date utility functions for common date operations

```bash
npm install lodate
```
## Usage Example

Using the default object

```javascript
import date from "lodate"

const monthName = date.getMonthName(new Date())

console.log(monthName)

const dayOfYear = date.dayOfYear(new Date())

console.log(dayOfYear)
```
You can select a specific function

```javascript
import { getWeekday, getTimezone } from "lodate";

const weekday = getWeekday(new Date());

console.log(weekday);

const timezone = getTimezone();

console.log(timezone);
```

