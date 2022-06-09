import styledComponents from 'styled-components';


export const Content = styledComponents.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 width: 800px;
 height: 800px;
 margin: 0 auto;
 overflow: auto;
`;


export const Loading = styledComponents.div`
 width: 200px;
 margin: 20px auto;
 text-align: center;
`;
