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
        title="전동킥보드 전체"
        subheader = "269대"
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
              가용 
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              87 대
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              비가용
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              154 대
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              충전중 
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              25 대
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
