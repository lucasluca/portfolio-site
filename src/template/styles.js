import styled from 'styled-components'

const TemplateWrapper = styled.div`
    background-color: #f6f7ff;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    /* padding-top: 50px; */
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    flex-direction: row;
     *::-webkit-scrollbar {
      width: 0px;
  }

  *::-webkit-scrollbar-track {
      -webkit-box-shadow: none;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.1);
    outline: 1px solid rgba(0,0,0,1);
    border-radius: 60px;
}
`

const MenuSider = styled.div`
    width: 265px;
    box-sizing: border-box;
    margin-top: 50px;
    height: 620px;
    padding: 30px;
    background-color: #4a63e7;
    border-radius: 20px;
    margin-right: 30px;
    box-shadow: 0px 6px 15px 0px rgba(0,0,0,.2);

`

const Content = styled.div`
    width: 875px;
    height: 100vh;
    overflow: auto;
     *::-webkit-scrollbar {
      width: 8px;
  }

  *::-webkit-scrollbar-track {
      -webkit-box-shadow: none;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.1);
    outline: 1px solid rgba(0,0,0,1);
    border-radius: 60px;
}
`

export {
    TemplateWrapper,
    MenuSider,
    Content
}