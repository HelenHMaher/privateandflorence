import styled from "styled-components";

const StyledInputFeild = styled.form`
  z-index: 9;
  margin: auto;
  display: block;

  .input-feild {
  }

  .fill-in-blank {
    margin: 10px;
    width: 250px;
    height: 2rem;
    font-family: Cambria, Cochin, Georgia, "Times New Roman", Times, serif;
    font-size: 1rem;
    border: 1px solid white;
    box-shadow: 0 0 5px;
    border-radius: 10px;
    text-align: center;
    :focus {
      outline: none;
      border: 1px solid black;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }

  .submit-title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    p {
      font-family: "Snell Roundhand", cursive;
      font-size: 2rem;
      margin-right: 5px;
    }
  }

  .submit-container {
    display: inline-block;
    margin-left: 10px;
  }
  .submit-container:hover {
    box-shadow: 0 0 2px;
    border: 2px solid black;
    border-radius: 30px;
  }

  .submit-container :active {
    transition-duration: 0.3sec;
    transition: ease-in;
    border: 1px solid black;
    transform: scale(0.9);
  }

  .submit-button {
    height: 3rem;
    width: 3rem;

    border-radius: 30px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  #roseimage {
    height: 2rem;
    position: absolute;
    opacity: 0.5;
  }

  #send-email {
    z-index: 8;
    opacity: 0;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
`;

export default StyledInputFeild;
