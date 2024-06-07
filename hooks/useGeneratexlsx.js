import { useState } from 'react';
import useRetryUntilResolved from './useRetryUntilResolved';

function useGeneratexlsx() {
  const [isExcelReady, setIsExcelReady] = useState(false);
  let XLSX;
  useRetryUntilResolved(() => {
    if (typeof window === 'undefined') return;
    XLSX = window.XLSX;
    if (XLSX) {
      setIsExcelReady(true);
    }
  });

  const createExcelWorkbook = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    return new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
  };

  const getModifiedData = (
    data,
    keys,
    headers,
  ) => data.map((item) => {
    const modifiedItem = {};
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < keys.length; i++) {
      modifiedItem[headers[i]] = item[keys[i]];
    }
    return modifiedItem;
  });

  const downloadExcelWorkbook = (workbook, filename) => {
    const url = URL.createObjectURL(workbook);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}.xlsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToExcel = (
    data,
    keys,
    headers,
    filename,
  ) => {
    const modifiedData = getModifiedData(data, keys, headers);
    const workbook = createExcelWorkbook(modifiedData);
    downloadExcelWorkbook(workbook, filename);
  };
  return {
    exportToExcel,
    isExcelReady,
  };
}

export default useGeneratexlsx;
