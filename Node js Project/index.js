// function printNumber(){
//     console.log(10 + 10)

// }
// printNumber()

function SalesTargets(monthlyTarget) {
    // Get current date
    const currentDate = new Date();
    // Get current day
    const currentDay = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
    
    // Get number of working days remaining in the current week
    const remainingDaysInWeek = 6 - currentDay;
    
    // Get number of working days in the current month
    const currentMonth = currentDate.getMonth(); // 0 (January) to 11 (December)
    const currentYear = currentDate.getFullYear();
    const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get last day of the current month
    
    // Calculate daily sales target
    const dailyTarget = monthlyTarget / totalDaysInMonth;
    
    // Calculate weekly sales target
    const weeklyTarget = dailyTarget * remainingDaysInWeek;
    
    // Calculate yearly sales target
    const remainingMonthsInYear = 12 - currentMonth;
    const yearlyTarget = monthlyTarget * remainingMonthsInYear;
    
    return {
      dailyTarget: dailyTarget.toFixed(2),
      weeklyTarget: weeklyTarget.toFixed(2),
      yearlyTarget: yearlyTarget.toFixed(2)
    };
  }
  
  // Example usage of this code
  const monthlySalesTarget = 435;
  console.log("........Monthly Target Is :",monthlySalesTarget)
  const salesTargets = SalesTargets(monthlySalesTarget);
  console.log("Daily sales target:", salesTargets.dailyTarget);
  console.log("Weekly sales target:", salesTargets.weeklyTarget);
  console.log("Yearly sales target:", salesTargets.yearlyTarget);