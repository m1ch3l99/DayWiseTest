import { IDevConfigurations } from './types';

const setupDevConfigurations = ({ queryClient }: IDevConfigurations): void => {
  if (__DEV__) {
    import('react-query-native-devtools').then(({ addPlugin }) => {
      addPlugin({ queryClient });
    });
  }
};

export default setupDevConfigurations;
