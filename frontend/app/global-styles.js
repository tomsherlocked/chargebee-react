import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  min-height: 100%;
  min-width: 100%;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 0%, rgba(0,212,255,1) 100%);
  
}

body {
  font-family: 'Ubuntu', sans-serif;
}


#app {
  padding-left: 10rem;
  padding-right: 10rem;
  margin-top: 30px;
  margin-bottom:30px;
}
table {
  width:100%;

  .centered {
    text-align: center;
  }
}
tr {
  vertical-align: text-top;
  border-bottom: 1px solid black;
}
p,
label {
  font-family: Georgia, Times, 'Times New Roman', serif;
  line-height: 1.5em;
}
`;

export default GlobalStyle;
