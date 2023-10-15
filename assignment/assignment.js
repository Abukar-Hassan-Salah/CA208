// Function to calculate the daily sales target
function calculateSalesTarget(startDate, endDate, totalTarget) {
    // Calculate the number of working days between the start and end dates
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalDays = Math.round(Math.abs((start - end) / oneDay)) + 1;
    const workingDays = getWorkingDays(start, end);
  
    // Calculate the daily sales target
    const dailyTarget = totalTarget / workingDays;
  
    // Return an array with the daily sales target for each working day
    const dailySales = Array.from({ length: totalDays }, (_, index) => {
      const currentDate = new Date(start.getTime() + index * oneDay);
      return isWorkingDay(currentDate) ? dailyTarget : 0;
    });
  
    return {
      dailySales,
      totalTargetInDateRange: dailyTarget * workingDays
    };
  }
  
  // Function to check if a given date is a working day (excluding Fridays)
  function isWorkingDay(date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek !== 0 && dayOfWeek !== 5;
  }
  
  // Function to calculate the number of working days between two dates
  function getWorkingDays(startDate, endDate) {
    let workingDays = 0;
    let currentDate = new Date(startDate);
  
    while (currentDate <= endDate) {
      if (isWorkingDay(currentDate)) {
        workingDays++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return workingDays;
  }
  
  // Example usage
  const startDate = '2023-01-01';
  const endDate = '2023-01-20';
  const totalTarget = 435;
  
  const result = calculateSalesTarget(startDate, endDate, totalTarget);
  console.log('DAILY SALES:', result.dailySales);
  console.log('Total Target in accordance with the date range:', result.totalTargetInDateRange);