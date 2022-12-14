import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import News from "./news";
import Politics from "./politics";
import Fun from "./fun";
import Form from "./form";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabstyle">
      <Box className="boxstyle" sx={{ width: "100%" }}>
        <Box
          className="boxstyle1"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
          >
            <Tab label="Recent News" {...a11yProps(0)} />
            <Tab label="Funny Jokes" {...a11yProps(1)} />
            <Tab label="Motivational quotes" {...a11yProps(2)} />
            <Tab label="Form" {...a11yProps(3)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <News />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Fun />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Politics />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Form />
        </TabPanel>
      </Box>
    </div>
  );
}
