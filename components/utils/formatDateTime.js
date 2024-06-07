import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const formatDateTime = (timeString, format) => dayjs(timeString, format || 'DD-MMM-YYYY | HH:mm A').format(
  'DD/MM/YYYY HH:mm',
);

export default formatDateTime;
