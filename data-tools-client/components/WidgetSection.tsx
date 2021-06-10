import { Container, Typography, Divider } from "@material-ui/core";
import React from "react";

type Props = {
  title: string;
};

const WidgetSection = ({title} : Props) => {
  return (
    <Container>
      <Typography>{title}</Typography>
      <Divider />
    </Container>
  );
};

export default WidgetSection;
