export const linkWithAddedParam = ({
  newParams,
  existingParams,
  pathname,
}: {
  newParams: Record<string, string>;
  existingParams: URLSearchParams;
  pathname: string;
}) => {
  const params = new URLSearchParams(existingParams);
  Object.keys(newParams).forEach((key) => {
    params.set(key, newParams[key]);
  });
  return pathname + "?" + params.toString();
};
