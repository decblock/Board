//자원 총 생산량
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
//import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
//import MoneyIcon from '@material-ui/icons/Money';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const Energe1 = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="에너지"
      />
       <Divider />
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              누적발전량(풍량/태양광)
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              54,825(Mwh)
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              총설비용량(풍량/태양광)
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              48,01(Mw)
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              충전기 설치
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              31기
            </Typography>
          </Grid>
          {/* <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon />
            </Avatar>
          </Grid> */}
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
          {/* <ArrowDownwardIcon className={classes.differenceIcon} /> */}
          {/* <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            12%
          </Typography> */}
          {/* <Typography
            color="textSecondary"
            variant="caption"
          >
            Since last month
          </Typography> */}
        </Box>
      </CardContent>
    </Card>
  );
};

Energe1.propTypes = {
  className: PropTypes.string
};

export default Energe1;
