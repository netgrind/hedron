import React from 'react'
import PropTypes from 'prop-types'
import ParamBar from '../../containers/ParamBar'
import ParamInputSelect from '../../containers/ParamInputSelect'
import Node from '../Node'
import OpenButton from '../OpenButton'
import NodeInputInfo from '../../containers/NodeInputInfo'
import styled from 'styled-components'
import inputIcon from '../../assets/icons/input.icon.txt'
import macroIcon from '../../assets/icons/macro.icon.txt'
import IconComponent from '../Icon'
import theme from '../../utils/theme'

const Wrapper = styled.div`
  width: 100%;
`

const Inner = styled(Node)`
  width: 100%;
  color: ${theme.textColorLight1};
  fill: ${theme.textColorLight1};

  ${props => props.isOpen && `
    border-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-color: ${theme.lineColor2};
  `};
`

const BarCol = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.25rem;
`

const Top = styled.div`
  padding: 0.5rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
`

const Bottom = styled.div`
  align-items: center;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  border: 1px solid ${theme.lineColor2};
  position: absolute;
  left: 0.25rem;
  right: 0.25rem;
  height: 200px;
  margin-top: 0.5rem;
`

const Padder = styled.div`
  height: calc(200px + 0.5rem);

  &:after {
    display: block;
    position: relative;
    z-index: 2;
    content: "";
    border: 1px solid ${theme.lineColor2};
    border-top-style: dashed;
    border-bottom: 0;
    height: calc(0.5rem + 1px);
    background: ${theme.bgColorDark1};
  }
`

const Title = styled.div`
  color: ${theme.textColorLight1};
  text-transform: uppercase;
  height: 1rem;
  font-size: 0.6rem;
  z-index: 1;
  position: absolute;
  top: 0.1rem;
  left: 0.2rem;
  width: 1000px;
  pointer-events: none;
`

const Icon = styled(IconComponent)`
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.1rem;
`
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.6rem;
  cursor: pointer;

  > span {
    display: flex;
  }

  &:hover {
    color: ${theme.actionColor1};
    fill: ${theme.actionColor1};
  }
`

const IconInfo = styled.div`
  display: flex;

  > span {
    display: flex;
    margin-left: 0.3rem;
  }
`
const Param = ({
  title, nodeId, inputLinkIds, infoText, isOpen, onOpenClick, children
}) => (
  <Wrapper>
    <Inner isOpen={isOpen}>
      <Top>
        <Row>
          <BarCol>
            <Title>{title}</Title>
            <ParamBar nodeId={nodeId} />
          </BarCol>
          <Info onClick={onOpenClick}>
            <span><Icon glyph={inputIcon} />Audio Low</span>
            <IconInfo>
              <span><Icon glyph={inputIcon} />1</span>
              <span><Icon glyph={macroIcon} />0</span>
            </IconInfo>
          </Info>
        </Row>
      </Top>
    </Inner>
    {isOpen &&
      <div>
        <Bottom>
          {children}
        </Bottom>
        <Padder />
      </div>
    }
  </Wrapper>
)

Param.propTypes = {
  title: PropTypes.string.isRequired,
  nodeId: PropTypes.string.isRequired,
  infoText: PropTypes.string,
  inputLinkIds: PropTypes.arrayOf(
    PropTypes.string
  ),
  isOpen: PropTypes.bool,
  onOpenClick: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Param
