import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Container, Text, IconMsg } from "./styles";
import { CommonColors } from "@/core/colors";

export default function AlertToast(props: any) {
  const handleClose = () => {
    // handle close event here
  };

  return (
    <Container>
      <IconMsg>
        <FontAwesomeIcon
          icon={faCircleExclamation}
          style={{ color: CommonColors.white }}
        />
      </IconMsg>
      <strong>
        <Text>{props.msg}</Text>
      </strong>
      {/* <button
        onClick={handleClose}
        style={{ border: "none", background: "transparent" }}
      >
        <FontAwesomeIcon icon={faTimes} style={{ color: CommonColors.white }} />
      </button> */}
    </Container>
  );
}
