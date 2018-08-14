import styled from 'styled-components';

interface FlexProps {
  spaceBetween?: boolean;
}

const Flex = styled.div`
  display: flex;
  ${(props: FlexProps) =>
    (props.spaceBetween && SPACE_BETWEEN) || ''};
`;

const SPACE_BETWEEN = 'justify-content: space-between';

export const Column = styled(Flex)`
  flex-direction: column;
`;

export const Row = Flex;
