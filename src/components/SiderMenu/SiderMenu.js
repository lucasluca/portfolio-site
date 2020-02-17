import React from 'react'
import Picture from '../Picture/Picture'
import BigText from '../BigText/BigText'
import SubTitleText from '../SubTitleText/SubTitleText'
import IconPlusText from '../IconPlusText/IconPlusText'
import SocialButton from '../SocialButton/SocialButton'

export default function SiderMenu() {
    return (
        <div>
            <Picture />
            <BigText text={'Marcos Dev'} />
            <SubTitleText text={'Web developer'} />
            <IconPlusText />
            <SocialButton/>
        </div>
    )
}