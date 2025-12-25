export {};

declare global {
  const process: {
    env: Record<string, string | undefined>;
    server: boolean;
    client: boolean;
  };
}
