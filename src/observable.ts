// type Data = <D>(data: D) => void;

const Observable = {
  observers: [] as any,

  subscribe: (handler: (data: any) => void) => {
    if (!Observable.observers.includes(handler)) {
      Observable.observers.push(handler);
    }
  },

  unsubscribe: (handler: (data: any) => void) => {
    Observable.observers = Observable.observers.filter((subscriber: any) => subscriber !== handler);
  },

  notify: (data: any) => {
    Observable.observers.forEach((observer: any) => observer(data));
  },

  clear() {
    Observable.observers = [];
  },
};

export default Observable;
