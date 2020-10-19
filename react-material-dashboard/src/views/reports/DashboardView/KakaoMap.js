import React, {  useEffect } from "react";
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Divider,
 // useTheme,
  makeStyles
  //colors
} from '@material-ui/core';



const { kakao } = window;

const useStyles = makeStyles(() => ({
  root: {}
}));


const KakaoMap = ({ className, ...rest }) => {
  const classes = useStyles();

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
  
    const map = new kakao.maps.Map(container, options);
  
  }, [])

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
      
    >
        {/* <CardHeader
          action={(
            <Button
              endIcon={<ArrowDropDownIcon />}
              size="small"
              variant="text"
            >
              Last 7 days
            </Button>
          )}
          title="Latest Sales"
        /> */}
       <Divider />
      <CardContent>
        <Box
          height={400}
          position="relative"
        >
          <div className="App">
            <div id="map" style={{ 
              width: '780px', 
              height: '420px' }} />
          </div>
          <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=dda5918df3e1cbb12a67d74af04d9393"></script>
        </Box>
      </CardContent>
      <Divider /> 
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        {/* <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview
        </Button> */}
      </Box>
    </Card>
  );
};



kakao.propTypes = {
  className: PropTypes.string
};

export default KakaoMap;
