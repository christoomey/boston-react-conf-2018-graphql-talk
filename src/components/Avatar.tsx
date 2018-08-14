import styled from 'styled-components';
import {spacing} from '../styles';

const Avatar = styled.img`
  border-radius: 3px;
  height: ${(props: AvatarProps) =>
    emsForSize(props.size)}em;
  margin-right: ${spacing.small};
  width: ${props => emsForSize(props.size)}em;
`;

type Size = 'tiny' | 'small' | 'large';

interface AvatarProps {
  size: Size;
}

const emsForSize = (size: Size): number => {
  switch (size) {
    case 'tiny':
      return 2;
    case 'small':
      return 3;
    case 'large':
      return 10;
  }
};

export default Avatar;
