import React from 'react'
import styled from 'styled-components'
import { FaBeer } from 'react-icons/io';

export default function IconPlusText({text = 'insert text', icon = 'heart'}) {
    return (
        <IconPlusTextWrapper>
            <StyledIcon>
                <ion-icon name={icon}></ion-icon>
            </StyledIcon>
            <StyledText>
                {text}
            </StyledText>
        </IconPlusTextWrapper>
    )
}

const IconPlusTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 36px;
    align-items: center;
    cursor: pointer;
    transition: margin 0.5s;
    &:hover {
        margin-left: 5px;
    }
`

const StyledIcon = styled.div`
    ion-icon {
        display: inline-block;
        margin-left: 0;
        padding: 0;
        transition: all .3s ease-in-out;
        font-size: 14px;
        -webkit-tap-highlight-color: transparent;
        font-weight: 400;
        color: white;
        margin-right: 15px;
    }
`

const StyledText = styled.span`
    font-family: "Poppins",sans-serif;
    display: inline-block;
    margin-left: 0;
    padding: 0;
    transition: all .3s ease-in-out;
    font-size: 14px;
    -webkit-tap-highlight-color: transparent;
    font-weight: 400;
    color: white;
`