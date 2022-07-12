import styled from 'styled-components/macro';
import tw from 'twin.macro';

const Label = styled.label<{ isLight?: boolean }>`
    ${tw`block text-xs uppercase text-neutral-50 mb-1 sm:mb-2`};
    ${(props) => props.isLight && tw`text-neutral-50`};
`;

export default Label;
