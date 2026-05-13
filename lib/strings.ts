/** Strip leading emoji / symbols until first letter or digit (menu tab labels). */
export function stripLeadingEmoji(label: string): string {
  const chars = Array.from(label);
  let i = 0;
  while (i < chars.length && !/[a-zA-Z0-9]/.test(chars[i]!)) {
    i += 1;
  }
  return chars.slice(i).join("").trim();
}
