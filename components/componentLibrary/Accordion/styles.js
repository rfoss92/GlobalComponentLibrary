import styled from 'styled-components';

const StyledAccordionItem = styled.div`
border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const StyledAccordionItemButton = styled.div`
padding: 32px;
font-size: 18px;
font-weight: 500;
cursor: pointer;
background: white;

&:hover {
    background: #f4f4f4;
}
`;

const StyledAccordionItemPanel = styled.div`
background: white;
padding: 20px 32px;
font-size: 16px;
`;

const AccordionArrow = styled.span`
display: inline-block;
position: absolute;
content: '';
height: 20px;
width: 20px;
right: calc(10% + 32px);
background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 14 8"><g data-name="Layer 2"><path d="M7 5.59L1.71.29A1 1 0 00.29 1.71l6 6a1 1 0 001.42 0l6-6A1 1 0 1012.29.29z" data-name="Layer 1"/></g></svg>');

${({ isOpen }) => isOpen && `
    transform: rotate(180deg);
`}

@media (max-width: 568px) {
    right: calc(5% + 32px);
}
`;

const AccordionLabel = styled.div`
display: inline-block;
padding-right: 32px;
`;

export { StyledAccordionItemButton, StyledAccordionItemPanel, StyledAccordionItem, AccordionArrow, AccordionLabel }