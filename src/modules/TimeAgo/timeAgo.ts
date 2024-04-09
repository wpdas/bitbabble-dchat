import { UseModuleProps } from "alem";
import en from "./en";

const timeAgo = {
  moduleSetup: `
  TimeAgo.addDefaultLocale({
    ${en}
  })
  `,
  formatTimestamp: (timestamp: number, onComplete: (data: string) => void) =>
    ({
      setupCode: timeAgo.moduleSetup,
      code: `new TimeAgo('en-US').format(new Date(${timestamp}))`,
      onComplete,
    } as UseModuleProps),
};

export default timeAgo;
