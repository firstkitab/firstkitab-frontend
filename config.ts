class Config {
  serverUrl: string = process.env.NEXT_PUBLIC_SERVER_URL || '';
}
const config = new Config();

export default config;
