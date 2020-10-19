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
        title="충전기 설치"
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
              color="textPrimary"
              variant="h3"
            >
              31기
            </Typography>
          </Grid>
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
        </Box>
      </CardContent>
    </Card>
  );
};

Energe1.propTypes = {
  className: PropTypes.string
};

export default Energe1;
