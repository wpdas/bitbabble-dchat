import { UseModuleProps } from "alem";
import en from "./en";

// TODO: Fazer video tutorial disso
// Code builder for "formatTimestamp"
const formatTimestampCode = (timestamp: number) => {
  const code = `
    (() => {
      TimeAgo.addDefaultLocale({
        ${en}
      });

      return new TimeAgo('en-US').format(new Date(${timestamp}));
    })()
`;
  return code;
};

const timeAgo = {
  formatTimestamp: (timestamp: number, onComplete: (data: string) => void) =>
    ({
      code: formatTimestampCode(timestamp),
      onComplete,
    } as UseModuleProps),
};

export default timeAgo;
