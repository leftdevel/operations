function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    const years = Math.floor(interval);
    return years === 1 ? `${years} año` : `${years} años`;
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    const months = Math.floor(interval);
    return months === 1 ? `${months} mes` : `${months} meses`;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    const days = Math.floor(interval);
    return days === 1 ? `${days} día` : `${days} días`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    const hours = Math.floor(interval);
    return hours === 1 ? `${hours} hora` : `${hours} horas`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    const minutes = Math.floor(interval);
    return minutes === 1 ? `${minutes} minuto` : `${minutes} minutos`;
  }

  return "un momento";
}

export default timeSince;
