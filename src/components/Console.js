import React, {useState} from 'react';
import styled from "styled-components";
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  color: ${props => props.color || props.theme.colors.primary};
  background-color: black;
  font-size: 20px;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
  @media ${props => props.theme.media.phone} {
    border: 1px solid red
  }
  @media ${props => props.theme.media.tablet} {
    border: 1px solid green;
  }
`

const Console = ({color, ...props}) => {
    const [lines, setLines] = useState(['C/users/Shcherbina>'])

    const onKeyPress = e => {
        if(e.charCode === 13) {
            setLines([...lines, 'C/users/Shcherbina>'])
        }
    }

    return (
        <Flex>
            <Flex direction='column' margin='0 10px'>
                {lines.map(line =>
                    <Line color={color}>{line}</Line>
                )}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} on color={color} {...props}/>
        </Flex>
    )
};

export default Console;