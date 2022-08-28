import React from "react";

interface PropsType {
  message?: string;
}

const ErrorBanner = ({ message = "에러입니다." }: PropsType) => {
  return (
    <div
      data-testid="error-banner"
      style={{ backgroundColor: "red", color: "white" }}
    >
      {message}
    </div>
  );
};

export default ErrorBanner;
