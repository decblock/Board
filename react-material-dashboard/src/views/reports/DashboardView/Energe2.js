//자원 총 소모량
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
//import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import PeopleIcon from '@material-ui/icons/PeopleOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.green[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.green[900]
  },
  differenceValue: {
    color: colors.green[900],
    marginRight: theme.spacing(1)
  }
}));

const Energe2 = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="에너지2"
      />
       <Divider />
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              CO2 저감량 : 
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              25,054(tCO2)
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              식수 효과 
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              4,005,587 그루
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              전기 추출량 
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              752(km)
            </Typography>
          </Grid>
          {/* <Grid item>
            <Avatar className={classes.avatar}>
              <PeopleIcon />
            </Avatar>
          </Grid> */}
        </Grid>
        {/* <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
          <ArrowUpwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            16%
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Since last month
          </Typography>
        </Box> */}
      </CardContent>
    </Card>
  );
};

Energe2.propTypes = {
  className: PropTypes.string
};

export default Energe2;
