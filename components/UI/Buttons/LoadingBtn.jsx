import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import styled from "@emotion/styled";
import DoneIcon from "@mui/icons-material/Done";
function LoadingBtn({
  align,
  isLoading,
  onClick,
  isSuccess,
  className,
  label,
  children,
  newSubmission,
  id,
}) {
  let labelText = children ? children : "Submit";
  return (
    <LoadingButtonStyle
      sx={{
        borderRadius: "50px",
      }}
      className={className}
      id={id}
      onClick={onClick}
      align={align}
      size="large"
      variant="contained"
      disableElevation
      disabled={isSuccess}
      loading={isLoading}
    >
      {isSuccess && !newSubmission ? (
        <DoneIcon sx={{ color: "var(--dark-on-surface) !important" }} />
      ) : (
        labelText
      )}
    </LoadingButtonStyle>
  );
}

export default LoadingBtn;
const LoadingButtonStyle = styled(LoadingButton)`
  margin: ${(props) => (props.align === "right" ? "16px 0 0 auto" : "16px 0")};
background: linear-gradient(
  135deg,
  #C9A24D 0%,
  #B8892E 45%,
  #8F6518 100%
);
color: white;
font-size: 1rem; 
text-transform: uppercase;
  padding: 14px 32px;
  font-weight: 500;
  position: relative; 
  overflow: hidden;
  @media(max-width: 500px){ 
    display: block; 
    width: 100%; 
  }
  &::before{ 
   
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 45%;
  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0.25),
    rgba(255,255,255,0)
  );
  pointer-events: none;

  }
&:hover{ 
 
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(143, 101, 24, 0.35);

}
  .MuiLoadingButton-loadingIndicator {
    top: 15px;
  }
  span {
    color: #c5c0ff;
  }
  svg {
    path {
    }
  }
`;
