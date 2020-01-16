const formatDate = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds/3600);
  const minutes = Math.floor(timeInSeconds/60) - (hours * 60);
  const seconds = timeInSeconds % 60;
  if (timeInSeconds === 0 || (timeInSeconds > 0 && timeInSeconds < 60)) {
    return `${timeInSeconds}s`;
  }
  else if (timeInSeconds === NaN || timeInSeconds === undefined || timeInSeconds === null) {
    return `0s`;
  }
  else if (timeInSeconds > 59 && timeInSeconds < 3600 && seconds !== 0) {
    return `${minutes}m ${seconds}s`;
  }
  else if (timeInSeconds > 59 && timeInSeconds < 3600 && seconds === 0) {
    return `${minutes}m`;
  }
  else if (hours !== 0 && minutes !== 0 && seconds !== 0) {
    return `${hours}h ${minutes}m ${seconds}s`;
  }
  else {
    return `${hours ? hours+'h':''}${minutes ? ' '+minutes+'m':''}${seconds ? ' '+seconds+'s':''}`;
  }
}

module.exports = formatDate;