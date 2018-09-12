import styled from 'styled-components';
import {spacing} from '../styles';

const Avatar = styled.img`
  border-radius: 3px;
  height: ${props => size(props)}em;
  margin-right: ${spacing.small};
  width: ${props => size(props)}em;
`;

const size = ({tiny, small, large}) => {
  if (tiny) {
    return 2;
  } else if (small) {
    return 3;
  } else if (large) {
    return 10;
    // eslint-disable-next-line
  } else {
    return 3;
  }
};

export default Avatar;
