export const getFileType = (fileName: string) => {
  const extension = fileName.split('.').pop()?.toLowerCase();
  if (!extension) return 'unknown';

  switch (extension) {
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
      return 'image';
    case 'mp4':
    case 'mov':
    case 'avi':
      return 'video';
    case 'zip':
    case 'rar':
      return 'archive';
    case 'pdf':
      return 'pdf';
    case 'doc':
    case 'docx':
      return 'word';
    case 'xls':
    case 'xlsx':
      return 'excel';
    default:
      return 'unknown';
  }
};
