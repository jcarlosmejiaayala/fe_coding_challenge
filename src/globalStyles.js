import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

export default injectGlobal`
    ${styledNormalize}
    * {
        box-sizing: border-box;
    }
    html, body {
        height: 100%;
    }
    body {
        font-family:  Verdana, sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 0;
        > div {
            height: 100%;
        }
    }
`
