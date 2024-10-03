export const truncateText = (text: string, maxLength = 50) => {
  return text?.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export function getObjectPropertyValue(path: string, obj: Record<string, any>): any {
  const properties = path.split('.');
  return properties.reduce((previousValue, currentValue) => {
    if (previousValue && typeof previousValue === 'object') {
      return previousValue[currentValue];
    }
    return undefined;
  }, obj);
}
