import { IDevConfigurations } from 'types/configTypes';

const setupDevConfigurations = ({ queryClient }: IDevConfigurations): void => {
  if (__DEV__) {
    import('react-query-native-devtools').then(({ addPlugin }) => {
      addPlugin({ queryClient });
    });
  }
};

export default setupDevConfigurations;
