const get_date_range = () => {
  const date = new Date();
  const last_week = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
  return [last_week.toISOString().substr(0, 10), date.toISOString().substr(0, 10)];
};
