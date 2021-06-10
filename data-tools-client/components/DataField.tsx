import React from "react";

import { Box, Typography } from "@material-ui/core";

interface Props {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const DataField = ({ title, content, icon }: Props) => {
  return (
    <div>
      <Box display="flex" flexDirection="row" className="header">
        {icon}
        <Typography className="title">{title}</Typography>
      </Box>
      <div className="content">{content}</div>
    </div>
  );
};

export default DataField;
