import React from 'react';
import { Paper, Typography } from '@material-ui/core/';

const NotFound = () => (
    <Paper>
        <Typography
            align="center"
            children={'Incorrect URL'}
            gutterBottom={true}
            variant="display4"
        />
    </Paper>
);

export default NotFound;
