import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --color1: #F2F2F2;
    --color2: #B0B0B0;
    --color3: #383838;
    --color4: #222222;
    --color5: #151515;
  }

  :root {
    --color1: #151515;
    --color2: #515151;
    --color3: #D1D1D1;
    --color4: #EEEEEE;
    --color5: #FFFFFF;
  }
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: var(--color1);
    color: var(--color5);
  }

  p {
    margin: 0;
  }


`;

export default GlobalStyle;
