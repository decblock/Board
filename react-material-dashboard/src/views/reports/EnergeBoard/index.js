import React, {useEffect} from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Energe1 from '../DashboardView/Energe1';
import Pg from '../EnergeBoard/Pgeneration';
import TF from '../EnergeBoard/TotalFcap';
import Charge from '../EnergeBoard/Chargerinstall';
import CO from '../EnergeBoard/C02reduce';
import Tree from '../EnergeBoard/TreeEffect';
import Elect from '../EnergeBoard/Electrone';
import LatestPro from '../DashboardView/LatestProducts'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  useEffect(()=>{ 
    axios.get('/api/hello')
    .then(response => console.log(response.data))
  },[])

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >
            <Pg />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >
            <TF />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >
            <CO />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >
            <Tree />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >
            <LatestPro />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
