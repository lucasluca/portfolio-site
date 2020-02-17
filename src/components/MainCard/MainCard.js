import React from 'react'
import BigText from '../BigText/BigText'
import { CardWrapper } from './styles'
import BigFilledButton from '../BigFilledButton/BigFilledButton'

export default function MainCard() {
    return (
        <CardWrapper>
            <div className={'card-content'}>
                <BigText text={'Im Marcos Augusto'} fontSize={'60px'} />
                <p className={'main-text'}>
                    He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.
                </p>
                <div className={'buttons'}>
                    <BigFilledButton />
                </div>
            </div>
            <div className={'overlay-image'} />

        </CardWrapper>
    )
}

