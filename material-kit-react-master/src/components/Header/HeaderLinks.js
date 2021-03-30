/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} style={{ paddingRight: "100px" }}>
        <CustomDropdown
          noLiPadding
          style={{ maxHeight: "300px" }}
          buttonText="The Candidates"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          //buttonIcon={Apps}
          dropdownList={[
                <Link to="components/TheCandidates/AlabamaCandidates.js" className={classes.dropdownLink}>
                  Alabama
            </Link>,
            <Link to="components/TheCandidates/AlaskaCandidates.js" className={classes.dropdownLink}>
                  Alaska
            </Link>,
            <Link to="components/TheCandidates/ArizonaCandidates.js" className={classes.dropdownLink}>
                  Arizona
            </Link>,
            <Link to="components/TheCandidates/ArkansasCandidates.js" className={classes.dropdownLink}>
                  Arkansas
            </Link>,
            <Link to="components/TheCandidates/CaliforniaCandidates.js" className={classes.dropdownLink}>
                  California
            </Link>,
            <Link to="components/TheCandidates/ColoradoCandidates.js" className={classes.dropdownLink}>
                  Colorado
            </Link>,
            <Link to="components/TheCandidates/ConnecticutCandidates.js" className={classes.dropdownLink}>
                  Connecticut
            </Link>,
            <Link to="components/TheCandidates/DelawareCandidates.js" className={classes.dropdownLink}>
                  Delaware
            </Link>,
            <Link to="components/TheCandidates/FlordiaCandidates.js" className={classes.dropdownLink}>
                  Florida
            </Link>,
            <Link to="components/TheCandidates/GeorgiaCandidates.js" className={classes.dropdownLink}>
                  Georgia
            </Link>,
            <Link to="components/TheCandidates/HawaiiCandidates.js" className={classes.dropdownLink}>
                  Hawaii
            </Link>,
            <Link to="components/TheCandidates/IdahoCandidates.js" className={classes.dropdownLink}>
                  Idaho
            </Link>,
            <Link to="components/TheCandidates/IllinoisCandidates.js" className={classes.dropdownLink}>
                  Illinois
            </Link>,
            <Link to="components/TheCandidates/IndianaCandidates.js" className={classes.dropdownLink}>
                  Indiana
            </Link>,
            <Link to="components/TheCandidates/IowaCandidates.js" className={classes.dropdownLink}>
                  Iowa
            </Link>,
            <Link to="components/TheCandidates/KansasCandidates.js" className={classes.dropdownLink}>
                  Kansas
            </Link>,
            <Link to="components/TheCandidates/KentuckyCandidates.js" className={classes.dropdownLink}>
                  Kentucky
            </Link>,
            <Link to="components/TheCandidates/LouisianaCandidates.js" className={classes.dropdownLink}>
                  Louisiana
            </Link>,
            <Link to="components/TheCandidates/MaineCandidates.js" className={classes.dropdownLink}>
                  Maine
            </Link>,
            <Link to="components/TheCandidates/MarylandCandidates.js" className={classes.dropdownLink}>
                  Maryland
            </Link>,
            <Link to="components/TheCandidates/MassachusettsCandidates.js" className={classes.dropdownLink}>
                  Massachusetts
            </Link>,
            <Link to="components/TheCandidates/MichiganCandidates.js" className={classes.dropdownLink}>
                  Michigan
            </Link>,
            <Link to="components/TheCandidates/MinnesotaCandidates.js" className={classes.dropdownLink}>
                  Minnesota
            </Link>,
            <Link to="components/TheCandidates/MississippiCandidates.js" className={classes.dropdownLink}>
                  Mississippi
            </Link>,
            <Link to="components/TheCandidates/MissouriCandidates.js" className={classes.dropdownLink}>
                  Missouri
            </Link>,
            <Link to="components/TheCandidates/MontanaCandidates.js" className={classes.dropdownLink}>
                  Montana
            </Link>,
            <Link to="components/TheCandidates/NebraskaCandidates.js" className={classes.dropdownLink}>
                  Nebraska
            </Link>,
            <Link to="components/TheCandidates/NevadaCandidates.js" className={classes.dropdownLink}>
                  Nevada
            </Link>,
            <Link to="components/TheCandidates/NewHampshireCandidates.js" className={classes.dropdownLink}>
                  New Hampshire
            </Link>,
            <Link to="components/TheCandidates/NewJerseyCandidates.js" className={classes.dropdownLink}>
                  New Jersey
            </Link>,
            <Link to="components/TheCandidates/NewMexicoCandidates.js" className={classes.dropdownLink}>
                  New Mexico
            </Link>,
            <Link to="components/TheCandidates/NewYorkCandidates.js" className={classes.dropdownLink}>
                  New York
            </Link>,
            <Link to="components/TheCandidates/NorthCarolinaCandidates.js" className={classes.dropdownLink}>
                  North Carolina
            </Link>,
            <Link to="components/TheCandidates/NorthDakotaCandidates.js" className={classes.dropdownLink}>
                  North Dakota
            </Link>,
            <Link to="components/TheCandidates/OhioCandidates.js" className={classes.dropdownLink}>
                  Ohio
            </Link>,
            <Link to="components/TheCandidates/OklahomaCandidates.js" className={classes.dropdownLink}>
                  Oklahoma
            </Link>,
            <Link to="components/TheCandidates/OregonCandidates.js" className={classes.dropdownLink}>
                  Oregon
            </Link>,
            <Link to="components/TheCandidates/PennsylvaniaCandidates.js" className={classes.dropdownLink}>
                  Pennsylvania
            </Link>,
            <Link to="components/TheCandidates/RhodeIslandCandidates.js" className={classes.dropdownLink}>
                  Rhode Island
            </Link>,
            <Link to="components/TheCandidates/SouthCarolinaCandidates.js" className={classes.dropdownLink}>
                  South Carolina
            </Link>,
            <Link to="components/TheCandidates/SouthDakotaCandidates.js" className={classes.dropdownLink}>
                  South Dakota
            </Link>,
            <Link to="components/TheCandidates/TennesseeCandidates.js" className={classes.dropdownLink}>
                  Tennessee
            </Link>,
            <Link to="components/TheCandidates/TexasCandidates.js" className={classes.dropdownLink}>
                  Texas
            </Link>,
            <Link to="components/TheCandidates/UtahCandidates.js" className={classes.dropdownLink}>
                  Utah
            </Link>,
            <Link to="components/TheCandidates/VermontCandidates.js" className={classes.dropdownLink}>
                  Vermont
            </Link>,
            <Link to="components/TheCandidates/VirginiaCandidates.js" className={classes.dropdownLink}>
                  Virginia
            </Link>,
            <Link to="components/TheCandidates/WashingtonCandidates.js" className={classes.dropdownLink}>
                  Washington
            </Link>,
            <Link to="components/TheCandidates/WestVirginiaCandidates.js" className={classes.dropdownLink}>
                  West Virginia
            </Link>,
            <Link to="components/TheCandidates/WisconsinCandidates.js" className={classes.dropdownLink}>
                  Wisconsin
            </Link>,
            <Link to="components/TheCandidates/WyomingCandidates.js" className={classes.dropdownLink}>
                  Wyoming
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem} style={{ paddingRight: "100px" }}>
        <Button
          title="Election Map"
          color="transparent"
          href="components/ElectionMap/ElectionMap.js"
        >Election Map</Button>
      </ListItem>
      <ListItem className={classes.listItem} className={classes.listItem} style={{ paddingRight: "100px" }}>
        <Button
          title="Create Account"
          color="transparent"
          href="/create-account"
        >Create Account</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          title="Login"
          color="transparent"
          href="/login-page"
        >Login</Button>
      </ListItem>




    </List>
  );
}
