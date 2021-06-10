import React from "react";

import { Card, CardContent, CardHeader } from "@material-ui/core";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Widget = ({ title, children }: Props) => {
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent children={children} />
    </Card>
  );
};

export default Widget;
