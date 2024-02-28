import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

import {
    Paper, Box, Link,
    IconButton, Tooltip, Avatar,
    Grid, Typography
} from '@mui/material'

import hafiz from './images/hafiz.jpg'
import resume from './documents/CV_Muhammad Hafiz.pdf'



export default function Intro() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    // border: 1,
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        width: 620,
                        height: 240,
                        // mt: 12,
                        mt: {
                            xs: 4,
                            sm: 8,
                            md: 12,
                        },

                        mx: { xs: 1, },
                        borderRadius: 5,
                        // border: 1,
                    }}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            // border: 1,
                            height: "100%",
                            width: "100%",
                            p: 4,
                        }}
                    >
                        <Grid
                            sx={{
                                // border: 1 
                            }}
                        >
                            <Typography variant="h5">Muhammad Hafiz</Typography >
                            <Typography variant="h6">Software Engineer</Typography >
                            <Typography variant="subtitle1"><b>M</b> +60172980204</Typography >
                            <Typography variant="subtitle1"><Link href={"mailto:hafizn24@gmail.com"} color="inherit" underline="none" target={"_blank"} ><b>E</b> hafizn24@gmail.com </Link></Typography >
                            <br />
                            <Tooltip title="LinkedIn">
                                <Link href="https://www.linkedin.com/in/muhammad-hafiz-bin-mohd-nasarudin-7a73171ab/" underline="none" target={"_blank"} sx={{ mx: 1 }}>
                                    <IconButton>
                                        <LinkedInIcon
                                            sx={{ color: 'ivory' }} />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                            <Tooltip title="Resume">
                                <Link href={resume} underline="none" target={"_blank"} sx={{ mx: 1 }}>
                                    <IconButton>
                                        <TextSnippetIcon
                                            sx={{ color: 'ivory' }} />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        </Grid>
                        <Grid
                            sx={{
                                // border: 1
                            }}
                        >
                            <Avatar
                                src={hafiz}
                                alt='Profile Image'
                                sx={{
                                    width: {
                                        xs: 80,
                                        sm: 160,
                                        md: 160,
                                    },
                                    height: {
                                        xs: 80,
                                        sm: 160,
                                        md: 160,
                                    }
                                }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    mt: {
                        xs: 4,
                        sm: 4,
                        md: 8,
                    },
                    px: {
                        xs: 2,
                        sm: 13,
                    },
                }}
            >
                <Typography variant="body1">
                    Enthusiastic and dedicated junior software engineer with a solid foundation in full stack development.
                </Typography>
                <Typography variant="body1">
                    Equipped with theoretical knowledge and eager to apply skills in real-world projects under mentorship.
                </Typography>
            </Grid>
        </>
    )
}