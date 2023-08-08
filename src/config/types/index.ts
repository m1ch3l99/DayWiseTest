import { QueryClient } from 'react-query';

export type Languages = 'en' | 'ar';

export type APP_LANGUAGES = {
  AR: Languages;
  EN: Languages;
};

export interface IDevConfigurations {
  queryClient: QueryClient;
}
