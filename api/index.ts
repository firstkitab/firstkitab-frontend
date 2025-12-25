import { OpenAPI } from '@/api';
import config from '@/config';

OpenAPI.BASE = config.serverUrl;
OpenAPI.WITH_CREDENTIALS = true;


export * from "@/api/generated";
