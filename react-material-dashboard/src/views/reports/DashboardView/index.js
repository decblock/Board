import React, {useEffect} from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
//import Budget from './Budget';
import LatestOrders from './LatestOrders';
import LatestProducts from './LatestProducts';
import Sales from './Sales';
//import TasksProgress from './TasksProgress';
import TotalCustomers from './Energe2';
//import TotalProfit from './TotalProfit';
import TrafficByDevice from './TrafficByDevice';
import KakaoMap from './KakaoMap';
import Energe1 from './Energe1';
import Moblity from './Moblity';
import ElecCar from './ElecCar';
import ElecQuic from './ElecQuic';

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
          spacing={3}
        >
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <Energe1 />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          {/* <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TasksProgress />
          </Grid> */}
          {/* <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalProfit />
          </Grid> */}
          <Grid 
            lg={4}
            sm={12}
            xl={3}
            xs={12}
            container
            spacing={2}
          >
            
            <Grid
              item
              lg={12}
              sm={12}
              xl={12}
              xs={12}
            >
              <Moblity />
            </Grid>

            <Grid
              item
              lg={12}
              sm={12}
              xl={12}
              xs={12}
            >
              <ElecCar />
            </Grid>
          
            <Grid
              item
              lg={12}
              sm={12}
              xl={12}
              xs={12}
            >
              <ElecQuic />
            </Grid>

          </Grid>
          

          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <Sales /> */}
            <KakaoMap/>
          </Grid> 
          
          {/* <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid> */}
           {/* <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <KakaoMap/>
          </Grid>  */}
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
