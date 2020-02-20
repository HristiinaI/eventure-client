import * as React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import GridItem from '../components/Grid/GridItem';
import CustomInput from '../components/CustomInput/CustomInput';
import GridContainer from '../components/Grid/GridContainer';
import CardBody from '../components/Card/CardBody';
import Card from '../components/Card/Card';
import CardHeader from '../components/Card/CardHeader';




import { createStyles } from '@material-ui/core';


const styles = createStyles({
    cardCategoryWhite: {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    cardTitleWhite: {
      color: '#FFFFFF',
      marginTop: '0px',
      minHeight: 'auto',
      fontWeight: 300,
      fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
      marginBottom: '3px',
      textDecoration: 'none'
    }
  });

function Dashboard(props: any) {
    const { classes } = props;

    return (
        <div>
        <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
            <Card>
                <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                <p className={classes.cardCategoryWhite}>Complete your profile</p>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={5}>
                        <CustomInput
                            labelText="Event Name"
                            id="eventName"
                            formControlProps={{
                              fullWidth: true
                            }}
                        />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                        <CustomInput
                            labelText="Event location"
                            id="eventLocation"
                            formControlProps={{
                            fullWidth: true
                            }}
                        />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                        <CustomInput
                            labelText="Event location"
                            id="eventLocation"
                            formControlProps={{
                            fullWidth: true
                            }}
                        />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                        <CustomInput
                            labelText="Event Strat Date"
                            id="eventStartDate"
                            formControlProps={{
                            fullWidth: true
                            }}
                        />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                        <CustomInput
                            labelText="Event End Date"
                            id="eventEndDate"
                            formControlProps={{
                            fullWidth: true
                            }}
                        />
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                        {/* <InputLabel style={{ color: '#AAAAAA' }}>About me</InputLabel> */}
                        <CustomInput
                            labelText="Event Description"
                            id="description"
                            formControlProps={{
                            fullWidth: true
                            }}
                            inputProps={{
                            multiline: true,
                            rows: 5
                            }}
                        />
                        </GridItem>
                    </GridContainer>

                </CardBody>
            </Card>
            </GridItem>
        </GridContainer>
        </div>
    );
}

export default withStyles(styles)(Dashboard);
