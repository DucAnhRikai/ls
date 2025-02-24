interface IJoinStringOptions {
  joinBy?: string;
  prefix?: string;
  prefixJoin?: string;
}

const defaultOptionJoinString: IJoinStringOptions = {
  joinBy: '',
  prefix: '',
  prefixJoin: '',
};

export function joinStrings(strings: string[], options: IJoinStringOptions = {}): string {
  const combinedOptions: IJoinStringOptions = {
    ...defaultOptionJoinString,
    ...options,
  };

  return `${combinedOptions.prefix}${combinedOptions.prefixJoin}${strings.join(combinedOptions.joinBy)}`;
}
