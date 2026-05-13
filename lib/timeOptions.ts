const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

export function buildTimeOptions(): string[] {
  const opts: string[] = [];
  for (let hour = 11; hour <= 21; hour++) {
    for (const minute of [0, 30]) {
      if (hour === 21 && minute === 30) break;
      const h12 = hour % 12 || 12;
      const ampm = hour >= 12 ? "PM" : "AM";
      opts.push(`${h12}:${pad(minute)} ${ampm}`);
    }
  }
  return opts;
}
