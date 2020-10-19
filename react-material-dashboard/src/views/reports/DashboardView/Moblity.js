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

const Moblity = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="총 회원수"
        subheader = "143.317 명"
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
              누적 탑승 횟수
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              283.584 회
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              전기차 공유대수 
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              2,589 대
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Moblity.propTypes = {
  className: PropTypes.string
};

export default Moblity;