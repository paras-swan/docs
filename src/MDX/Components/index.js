import Image from './Image/Image';
import Callout from './Callout/Callout';
import ArgumentList from './ArgumentList/ArgumentList';
import Code from './Code/Code';

export const components = {
  Image,
  Callout,
  ArgumentList,
  Code,
  strong: (props) => <strong {...props} style={{ fontWeight: 500 }} />,
};
