export const getSingleQuery = (routeQuery: string | (string | null)[]) => routeQuery && (typeof routeQuery === 'string' ? routeQuery : routeQuery[0])

export const openNewWindow = (url: string, download?: string) => {
  const anchor = document.createElement('a');
  anchor.target = '_blank';
  anchor.style.display = 'none';
  anchor.href = url;
  anchor.rel = 'opener';
  download && (anchor.download = `${download}.xlsx`);
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

export const openNewWidowWithBlob = (blob: any, fileName: string) => openNewWindow(window.URL.createObjectURL(blob), fileName);
