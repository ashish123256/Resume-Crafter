
const dateTimeFormat = (date) => {
    const dateObj = new Date(date);
    const requiredFormat = dateObj.toLocaleString("default",{
        month:"long",
        year:"numeric",
    })
  return requiredFormat;
}

export default dateTimeFormat
