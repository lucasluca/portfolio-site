import React from 'react'
import { TemplateWrapper, MenuSider, Content} from './styles'

export default function Template({sider, content}) {
    return (
        <TemplateWrapper className={'wrapper-template'}>
            <MenuSider>
                {sider}
            </MenuSider>
            <Content>
                {content}
            </Content>
        </TemplateWrapper>
    )
}