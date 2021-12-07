import React, { useState } from 'react';

import { Button, Container, Grid, Typography } from '@mui/material';

import { Question, VariantButton } from '../components';

export default function TrueFalse() {
    return (
        <>
            <Question question="Trong học kỳ gần nhất, Khánh đã bị 1 con điểm 3 và 1 môn nợ. Hỏi Khánh có nguy cơ bị đuổi học hay không?" />
            <Grid container spacing={1} flex={1}>
                <Grid item sm={12} md>
                    <VariantButton variant="contained" fullWidth backgroundColor="#2F6DAE">
                        ВЕРНО
                    </VariantButton>
                </Grid>
            </Grid>
        </>
    );
}
