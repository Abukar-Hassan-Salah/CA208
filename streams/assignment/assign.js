const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Soo Geli bartilmaameedka iibka bishii:', (monthlySalesTarget) => {
  rl.question('Soo Geli taariikhda bilawga (YYYY-MM-DD):', (startDateInput) => {
    rl.question('Soo Geli taariikhda dhamaadka (YYYY-MM-DD):', (endDateInput) => {
      const startDate = new Date(startDateInput);
      const endDate = new Date(endDateInput);

      if (endDate >= startDate) {
        const dateRange = `${startDate.toISOString().slice(0, 10)} - ${endDate.toISOString().slice(0, 10)}`;
        const endMonth = endDate.getMonth();
        const endYear = endDate.getFullYear();
        const daysInEndMonth = new Date(endYear, endMonth + 1, 0).getDate();

        if (endDate.getDate() <= daysInEndMonth) {
          let fridaysCount = 0;
          let currentDate = new Date(startDate);

          while (currentDate <= endDate) {
            if (currentDate.getDay() === 5) {
              fridaysCount++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
          }

          const yearsWorked = endDate.getFullYear() - startDate.getFullYear() + 1;
          const daysInRange = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
          const workingDaysInRange = daysInRange - fridaysCount;

          const workingDaysInWeek = 6;
          const dailySalesTarget = monthlySalesTarget / workingDaysInRange;
          const weeklySalesTarget = dailySalesTarget * workingDaysInWeek;

          let yearlySalesTarget;
          if (startDate.getFullYear() === endDate.getFullYear()) {
            yearlySalesTarget = monthlySalesTarget * 12;
          } else {
            const startYear = startDate.getFullYear();
            const endYear = endDate.getFullYear();
            const totalYearsInRange = endYear - startYear;
            yearlySalesTarget = monthlySalesTarget * 12 * (totalYearsInRange + 1);
          }

          console.log(`Tirada Jimcaha ee kala duwan(friday in range): ${fridaysCount}`);
          console.log(`Tirada maalmaha shaqada ee kala duwan: ${workingDaysInRange}`);
        console.log(`Inta sano ee la shaqeeyay: ${yearsWorked} Sano!`);
          console.log(`Bartilmaameedka Iibka Bisha: $${monthlySalesTarget}`);
          console.log(`Bartilmaameedka Iibka Maalinlaha ah: $${dailySalesTarget.toFixed(2)}`);
          console.log(`Bartilmaameedka Iibka Todobaadlaha: $${weeklySalesTarget.toFixed(2)}`);
          console.log(`Bartilmaameedka Iibka Sannadlaha ah: $${yearlySalesTarget.toFixed(2)}`);

          rl.close();
        } else {
          console.log(`Invalid number of days in the end month. The end month (${endMonth + 1}) has ${daysInEndMonth} days. Please enter valid dates.`);
          rl.close();
        }
      } else {
        console.log("Invalid date range. Please enter valid dates.");
        rl.close();
      }
    });
  });
});