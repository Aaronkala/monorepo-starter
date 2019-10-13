export const getCookie = (name: string) => {
  const cookieString = "; " + document.cookie;
  const parts = cookieString.split("; " + name + "=");

  if (parts && parts.length == 2) {
    const namedPart = parts.pop();
    if (namedPart) {
      return namedPart.split(";").shift();
    }
  }
};
