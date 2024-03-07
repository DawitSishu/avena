import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Select, MenuItem, Container, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";

const index = () => {
  const [language, setlan] = useState(0);
  return (
    <div>
      <Container>
        <Grid container justifyContent="center" mt={1}>
          <Grid container justifyContent="space-around">
            <Grid item>
              {" "}
              <Typography variant="h3" textAlign="center">
                COOP
              </Typography>
            </Grid>
            <Grid item>
              <Select
                name="lang"
                value={language}
                onChange={(e) => {
                  setlan(e.target.value);
                }}
              >
                <MenuItem value={0}>English</MenuItem>
                <MenuItem value={1}>አማርኛ</MenuItem>
                <MenuItem value={2}>Oromiffa</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Grid>
        <Typography fontWeight="bold" variant="h4" textAlign="center">
          {language == 0
            ? `Coopbank at a Glance`
            : language == 1
            ? `Coopbank በጨረፍታ`
            : "Coopbank Ilaalcha Tokkotti"}
        </Typography>
        <Typography textAlign="center">
          {language == 0
            ? `The history of cooperative banks has been traced back to the financial
          exclusion faced by many communities in the 19th century. With the
          industrial revolution, the emerging financial services sector was
          primarily focused on wealthy individuals and large enterprises in
          urban areas. The rural population, particularly farmers, small
          businesses, and the communities they supported, were excluded from
          financial services. Thus, cooperative banks were originally set up to
          correct this market failure and to overcome the associated problems of
          asymmetric information in favor of borrowers.`
            : language == 1
            ? `የትብብር ባንኮች ታሪክ በፋይናንሺያል ተመዝግቧል
            በ19ኛው ክፍለ ዘመን በብዙ ማህበረሰቦች የተጋፈጡ መገለሎች። ጋር
            የኢንዱስትሪ አብዮት, ብቅ የፋይናንስ አገልግሎት ዘርፍ ነበር
            በዋናነት በሀብታም ግለሰቦች እና በትላልቅ ኢንተርፕራይዞች ላይ ያተኮረ ነው
            የከተማ አካባቢዎች. የገጠሩ ህዝብ በተለይም ገበሬዎች ትንሽ ናቸው።
            የንግድ ድርጅቶች እና የሚደግፏቸው ማህበረሰቦች ከነሱ ተገለሉ።
            የገንዘብ አገልግሎቶች. በመሆኑም የህብረት ሥራ ባንኮች መጀመሪያ የተቋቋሙት እ.ኤ.አ
            ይህንን የገበያ ውድቀት ማረም እና ተያያዥ ችግሮችን ለማሸነፍ
            ያልተመጣጠነ መረጃ ለተበዳሪዎች ሞገስ.`
            : `Seenaan baankota waldaa hojii gamtaa faayinaansii irraa eegalee hordofameera
            ala ta’uu hawaasa hedduu jaarraa 19ffaa keessa mudate. Waliin
            warraaqsa industirii, dameen tajaajila faayinaansii guddachaa ture
            adda durummaan namoota dhuunfaa dureeyyii fi dhaabbilee gurguddoo irratti kan xiyyeeffate bara
            naannoo magaalaa. Ummanni baadiyyaa keessattuu qonnaan bultoonni xiqqaadha
            dhaabbileen daldalaa, fi hawaasa isaan deeggaran keessaa baafamaniiru
            tajaajila faayinaansii. Haala kanaan baankonni waldaa hojii gamtaa jalqaba irratti kan hundeeffaman
            kufaatii gabaa kana sirreessuu fi rakkoolee kanaan walqabatan irra aanuuf
            odeeffannoo asiimeetrikii liqeeffattoota fayyadu.`}
        </Typography>
      </Container>
      <Grid container justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary" startIcon={<PhoneIcon />}>
            {language == 0 ? "Call" : language == 1 ? "ይደውሉ" : "Waamuu"}
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ChatIcon />}
            sx={{
              ml: 6,
            }}
          >
            {language == 0 ? "Chat" : language == 1 ? "መልእክት" : "Ergaa"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default index;
