import React from "react";

import Widget from "../components/Widget";
import WidgetSection from "../components/WidgetSection";
import DataField from "../components/DataField";
import HomeIcon from "../components/icons/HomeIcon";

const Demo = () => {
  return (
    <div>
      <Widget title={"Profile Summary"}>
        <WidgetSection title="total"></WidgetSection>
        <DataField title="Total Practices" content="8" icon={<HomeIcon />} />
        <DataField title="Total Practices" content="8" icon={<HomeIcon />} />
      </Widget>
    </div>
  );
};

export default Demo;
