const parseDeadline = (givenDate) => {
  return givenDate ? new Date(givenDate).toDateString() : "No Deadline";
};

export { parseDeadline };
