function greet(person: string, date: Date) {
  // Convert the date to UTC to ensure consistent output
  const utcDate = new Date(date.toUTCString());
  console.log(`Hello ${person}, today is ${utcDate.toDateString()} (UTC)`);
}

greet("John Doe", new Date());