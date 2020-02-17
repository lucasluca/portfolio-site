import styled from 'styled-components'

const TemplateWrapper = styled.div`
    background-color: #f6f7ff;
    height: 100vh;
    width: 100vw;
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    flex-direction: row;
`

const MenuSider = styled.div`
    width: 265px;
    box-sizing: border-box;
    height: 620px;
    padding: 30px;
    background-color: #4a63e7;
    border-radius: 20px;
    margin-right: 30px;
    box-shadow: 0px 6px 15px 0px rgba(0,0,0,.2);

`

const Content = styled.div`
    width: 875px;
    height: calc(100% + 50px);
`

export {
    TemplateWrapper,
    MenuSider,
    Content
}