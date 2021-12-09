import React, {useCallback} from 'react'
import styled from "styled-components"

interface PaginationProps{
    pageTotal: number
    currentPage: number
    setCurrentPage: (page:number) => void
}



const PaginationLimitButton = styled.button`
    box-sizing: content-box;
    display: inline-block;
    border-width: 0px;
    border-color: #34ace0;
    height: 30px;  
    border-radius: 1px;
    margin: 0rem 1rem;
    background: #34ace0;
    color: white;
    margin-left: 4px;
    margin-right: 4px;
    font-weight: 100;
    :hover{
        background: #227093;
        cursor: pointer;
    }
    :disabled {
        background: #dddddd;
        cursor: not-allowed    
    }
`

const MemoPaginationLimitButton = React.memo(PaginationLimitButton)

export default function Pagination({pageTotal, currentPage, setCurrentPage}:PaginationProps) {

    const memoGoBack = useCallback(
        () => {
            setCurrentPage(currentPage-1)
        },
        [currentPage, setCurrentPage],
    )
    return (
        <PaginationContainer>
            <PaginationLimitButton data-testid="btn-first" onClick={() => (setCurrentPage(1))} disabled={currentPage == 1}>First</PaginationLimitButton>
            <MemoPaginationLimitButton data-testid="btn-next" onClick={memoGoBack} disabled={currentPage == 1}>Previous</MemoPaginationLimitButton>
            <p>Page {currentPage} of {pageTotal}</p>
            <PaginationLimitButton data-testid="btn-prev" onClick={() => {
                setCurrentPage(currentPage + 1)
            }} disabled={currentPage == pageTotal}>Next</PaginationLimitButton>
            <PaginationLimitButton data-testid="btn-last" onClick={() => (setCurrentPage(pageTotal))}  disabled={currentPage == pageTotal}>Last</PaginationLimitButton>
        </PaginationContainer>
    )
}

const PaginationContainer= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`



