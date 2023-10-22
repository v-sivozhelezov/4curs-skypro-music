import styled from 'styled-components'

export const CenterBlockHeading = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`
export const CenterBlockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`
export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${(props) =>
    props.isOpen === true ? '#8a29f1;' : '#ffffff;'}
  border-radius: 60px;
  padding: 6px 20px;
  margin-right: 10px;
  display: flex;
  color: ${(props) => (props.isOpen === true ? '#8a29f1;' : '#ffffff;')}
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 10px;
  }

 
  &:hover { ${(props) =>
    props.isOpen === true
      ? 'border-color: #8a29f1; color: #8a29f1;'
      : 'border-color: #d9b6ff; color: #d9b6ff;'}
   cursor: pointer;
  }
`
export const FilterBlock = styled.div`
`

export const FilterList = styled.ul`
  margin-top: 10px;
  position: absolute;
  background-color: #313131;
  height: 200px;
  width: 300px;
  padding: 10px;
  border-radius: 15px;
  overflow-y: scroll;
  padding-left: 15px;
  cursor: pointer;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgb(145, 144, 143);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 20px;
    border: 3px solid rgb(145, 144, 143);
  }
`
export const FilterListItem = styled.li`  font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 40px;
color: #fff;
text-decoration: none;

&:hover {
  color: #8a29f1;
  text-decoration-line: underline;
}`

export const FilterLink = styled.link`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #8a29f1;
    text-decoration-line: underline;
  }
`
