import React from 'react'
import Card from '@mui/material/Card'
import { Grid, Link } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube';

import fyp from './images/fyp_colage.png'
import ieee from './documents/ieee.pdf'
import rnm from './images/rnm.png'

export default function Project() {
    return (

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 2 }}
        >
            <Card sx={{ maxWidth: 345, minHeight: 460, my: 4, mx: 2, p: 1 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={fyp}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Face Mask Detection Using CNN
                        </Typography>
                        <Typography variant="body2">
                            The system can detect a face mask by implementing a CNN classification algorithm. <br />
                            This study focuses on two CNN models with different optimizers trained with <br />
                            an image dataset labeled in two separateclass labels.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link href={ieee} underline="none" target={"_blank"}>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </Link>
                    <Link href={'https://drive.google.com/file/d/141osFR3C834aFyq0hbv4JtP2FWAkKGa2/view?usp=sharing'} underline="none" target={"_blank"} sx={{ mx: 1 }}>
                        <YouTubeIcon sx={{ color: 'white', fontSize: 40, }} />
                    </Link>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345, minHeight: 460, mx: 2, p: 1 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={rnm}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Rick and Morty API
                        </Typography>
                        <Typography variant="body2">
                            The Rick and Morty API is a REST(ish) and GraphQL API based on <br />
                            the television show Rick and Morty. You will have access to about hundreds of <br />
                            characters, images, locations and episodes. The Rick and Morty API <br />
                            is filled with canonical information as seen on the TV show.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link href='/rickandmorty' underline="none">
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}
