import React from 'react'
import MainCard from '../MainCard/MainCard'
import CommonCard from '../CommonCard/CommonCard'
import CardAboutMe from '../CardAboutMe/CardAboutMe'
import CardSkills from '../CardSkills/CardSkills'

export default function Content() {
    return (
        <div>
            <MainCard />
            <CardAboutMe />
            <CardSkills/>
        </div>
    )
}