// // import React from 'react';
// // import styled from 'styled-components';

// // const Input = ({ value, onChange, placeholder }) => {
// //   return (
// //     <StyledWrapper>
// //       <div className="group">
// //         <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
// //           <g>
// //             <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
// //           </g>
// //         </svg>
// //         <input
// //           placeholder={placeholder || "Search"}
// //           type="search"
// //           className="input"
// //           value={value}
// //           onChange={onChange}
// //         />
// //       </div>
// //     </StyledWrapper>
// //   );
// // };

// // const StyledWrapper = styled.div`
// //   .group {
// //     display: flex;
// //     line-height: 28px;
// //     align-items: center;
// //     position: relative;
// //     max-width: 1000px;
// //   }

// //   .input {
// //     width: 100%;
// //     height: 40px;
// //     line-height: 28px;
// //     padding: 0 1rem;
// //     padding-left: 2.5rem;
// //     border: 2px solid transparent;
// //     border-radius: 30px;
// //     outline: none;
// //     background-color: #f3f3f4;
// //     color: #0d0c22;
// //     transition: 0.3s ease;
// //   }

// //   .input::placeholder {
// //     color: #9e9ea7;
// //   }

// //   .input:focus,
// //   .input:hover {
// //     outline: none;
// //     border-color: rgba(154, 121, 255, 0.4);
// //     background-color: #fff;
// //     box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
// //   }

// //   .icon {
// //     position: absolute;
// //     left: 1rem;
// //     fill: #9e9ea7;
// //     width: 1rem;
// //     height: 1rem;
// //   }
// // `;

// // export default Input;


// import React from 'react';
// import styled from 'styled-components';

// const Input = ({ value, onChange, placeholder }) => {
//   return (
//     <StyledWrapper>
//       <input
//         placeholder={placeholder || "Type something here...."}
//         className="input"
//         name="text"
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .input {
//     color: white;
//     border: 2px solid #8707ff;
//     border-radius: 30px;
//     padding: 10px 25px;
//     background: transparent;
//     width: 850px;
//   }

//   .input:active {
//     box-shadow: 2px 2px 15px #8707ff inset;
//   }
// `;

// export default Input;

import React from 'react';
import styled from 'styled-components';

const Input = ({ value, onChange, placeholder }) => {
  return (
    <StyledWrapper>
      <span className="prefix-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
          <path fill="#9e9ea7" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
        </svg>
      </span>
      <input
        type="text"
        placeholder={placeholder || "Type something here..."}
        value={value}
        onChange={onChange}
        className="input"
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;

  .prefix-icon {
    position: absolute;
    left: 13px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .input {
    width: 850px; /* Adjust width as needed */
    padding: 10px 25px 10px 40px; /* Extra left padding for the icon */
    border: 2px solid #8707ff;
    border-radius: 30px;
    background: transparent;
    color: white;
  }

  .input:active {
    box-shadow: 2px 2px 15px #8707ff inset;
  }
`;

export default Input;