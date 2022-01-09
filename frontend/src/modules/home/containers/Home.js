import React, { useEffect } from 'react';
import { Typography, Container, Grid, Box, Button, Chip } from '@mui/material';

import Join from './Join';
import QuizBlock from '../components/QuizBlock';

export default function Home() {
    useEffect(() => {
        document.body.style.background = '#f9f9f9';
    });

    return (
        <Container maxWidth="lg">
            <Join />
            <Box display="flex" justifyContent="space-between" m={2}>
                <Typography variant="h4" component="p">
                    Моя викторина
                </Typography>
                <Button>Узнать больше</Button>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <QuizBlock
                        name="Demo1"
                        questionNumber={5}
                        chips={['русский язык', 'математика', 'иностранные языки', 'физика']}
                    />
                </Grid>
                <Grid item xs={3}>
                    <QuizBlock
                        name="Demo1"
                        questionNumber={5}
                        chips={['русский язык', 'математика', 'иностранные языки', 'физика']}
                    />
                </Grid>
                <Grid item xs={3}>
                    <QuizBlock
                        name="Demo1"
                        questionNumber={5}
                        chips={['русский язык', 'математика', 'иностранные языки', 'физика']}
                    />
                </Grid>
                <Grid item xs={3}>
                    <QuizBlock
                        name="Demo1"
                        questionNumber={5}
                        chips={['русский язык', 'математика', 'иностранные языки', 'физика']}
                    />
                </Grid>
            </Grid>
            <Box display="flex" justifyContent="space-between" m={2}>
                <Typography variant="h4" component="p">
                    Русский
                </Typography>
                <Button>Узнать больше</Button>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <QuizBlock
                        name="Demo1"
                        questionNumber={5}
                        chips={['русский язык', 'математика', 'иностранные языки', 'физика']}
                    />
                </Grid>
                <Grid item xs={3}>
                    <QuizBlock
                        name="Demo1"
                        questionNumber={5}
                        chips={['русский язык', 'математика', 'иностранные языки', 'физика']}
                    />
                </Grid>
                <Grid item xs={3}>
                    <QuizBlock
                        name="Demo1"
                        questionNumber={5}
                        chips={['русский язык', 'математика', 'иностранные языки', 'физика']}
                    />
                </Grid>
                <Grid item xs={3}>
                    <QuizBlock
                        name="Demo1"
                        questionNumber={5}
                        chips={['русский язык', 'математика', 'иностранные языки', 'физика']}
                    />
                </Grid>
            </Grid>
            <Box display="flex" justifyContent="space-between" m={2}>
                <Typography variant="h4" component="p">
                    Математика
                </Typography>
                <Button>Узнать больше</Button>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <QuizBlock
                        name="Demo1"
                        questionNumber={5}
                        chips={['русский язык', 'математика', 'иностранные языки', 'физика']}
                    />
                </Grid>
                <Grid item xs={3}>
                    <QuizBlock
                        name="Demo1"
                        questionNumber={5}
                        chips={['русский язык', 'математика', 'иностранные языки', 'физика']}
                    />
                </Grid>
                <Grid item xs={3}>
                    <QuizBlock
                        name="Demo1"
                        questionNumber={5}
                        chips={['русский язык', 'математика', 'иностранные языки', 'физика']}
                    />
                </Grid>
                <Grid item xs={3}>
                    <QuizBlock
                        name="Demo1"
                        questionNumber={5}
                        chips={['русский язык', 'математика', 'иностранные языки', 'физика']}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
