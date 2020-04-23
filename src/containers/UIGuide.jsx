import React from 'react'
import styled from 'styled-components'
import Button from 'components/UI/Button'
import uiConfig from 'assets/styles/uiConfig'

const UIGuide = styled.div`
  width: 100%;
  padding: ${uiConfig.spaces.small};
  background: ${uiConfig.colors.primary.background};

  h1 {
    color: ${uiConfig.colors.primary.text};
    margin-bottom: ${uiConfig.spaces.small};
  }
`

export default () => {
  return (
    <UIGuide>
      <h1>Button</h1>
      <Button>Hello React!</Button>
    </UIGuide>
  )
}
