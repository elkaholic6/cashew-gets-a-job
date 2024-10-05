export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

export const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
  
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
  
    const formattedDate = date.toLocaleString('en-US', options);
  
    return formattedDate;
  }