import React from 'react'
import CommonCard from '../CommonCard/CommonCard'
import CardTitle from '../CardTitle/CardTitle'
import styled from 'styled-components'
import ProgressBar from '../ProgressBar/ProgressBar'


const image = require('../../assets/image.jpg')

export default function CardAboutMe() {
    return (
        <CommonCard onA>
            <div className={'title'} style={{marginBottom: 70}}>
                <CardTitle title={'Sobre mim'} />
            </div>
            <CardContent>
                <img className={'user-image'} src={image} />
                <div className={'text-content'}>
                    <h2>
                        Ola,
                    </h2>
                    <p>
                        I am Bako Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at wordpress.
                    </p>
                    <p>
                        I am Bako Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at wordpress.
                    </p>
                </div>

            </CardContent>
        </CommonCard>
    )
}

const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    .user-image {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        margin-right: 50px;
    }
    .text-content {
        flex: 1;
        h2 {
            color: #000;
            font-family: "Poppins",Sans-serif;
            font-size: 24px;
            font-weight: 700;
        }

        p {
            color: #777;
            font-family: "Open Sans",Sans-serif;
            font-size: 14px;
        }
    }
`