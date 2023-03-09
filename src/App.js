import React, { Fragment } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";

const App = () => {
    return (
        <Fragment>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ widt: "100%" }}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default App;