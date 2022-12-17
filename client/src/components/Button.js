import Button from "react-bootstrap/Button";

function CustomeButton({ title, disabled, onClick }) {
  return (
    <>
      <style type="text/css">
        {`
            .btn-primary {
                background-color: white;
                color: black;
                border: 2px solid black;
                border-radius: 20px;
                font-size: larger;
                font-weight: bold;
                padding: 10px 4%;
                text-decoration: none
            }

            .btn-primary:hover, .btn-primary:focus {
                background-color: Blue;
                color: black;
                border: 2px solid black;
            }

            .btn-primary:disabled {
                background-color: #9E9E9E;
                color: #3e3e3e;
                border: 2px solid transparent;
            }
        `}
      </style>

      <div className="d-flex justify-content-center">
        <Button
          variant="primary"
          disabled={disabled}
          onClick={onClick}
          size="xl"
        >
          {title}
        </Button>
      </div>
    </>
  );
}

export default CustomeButton;
