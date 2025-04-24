import { useTheme } from "next-themes";

export function useAppTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  console.log(resolvedTheme, "RREHRE");

  return {
    theme: resolvedTheme,
    setTheme,
  };
}
