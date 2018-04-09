import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0 auto;
  padding: 0.5rem 0;
  width: 10vw;
`;

const ShowMore = props => {
  return (
    <StyledButton>
      Show More
    </StyledButton>
    );
  }

export default ShowMore;

  // const ShowMore = connect(
//   ({ searchResults }) => (
//     searchResults === null ?
//       { page: 0, nbPages: 0 } :
//       { page: searchResults.page, nbPages: searchResults.nbPages }
//   )
// )(
//   ({ page, nbPages, helper }) =>
//     <div className="pager">
//       <button className="previous" onClick={e => helper.setPage(page - 1).search()} disabled={page === 0}>Previous</button>
//       <span className="current-page">
//         {page + 1}
//       </span>
//       <button className="next" onClick={e => helper.setPage(page + 1).search()} disabled={page + 1 >= nbPages}>Next</button>
//     </div>
// );
