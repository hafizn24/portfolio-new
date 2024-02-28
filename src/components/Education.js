import { Box, Grid, Typography } from "@mui/material"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export default function Education() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                sx={{
                    // border: 1,

                    width: {
                        xs: 350,
                        sm: 800,
                        md: 800,
                    },
                    height: {
                        xs: 500,
                        sm: 400,
                        md: 400,
                    },
                }}
            >
                <Splide
                    options={{
                        rewind: true,
                    }}
                >
                    <SplideSlide>
                        <Box
                            sx={{ 
                                marginLeft:  {
                                    xs: 2,
                                    sm: 10,
                                    md: 10,
                                },
                            }}
                        >
                            <Typography variant='h5'>Education</Typography>
                            <Typography variant='h6'>Master of Computer Science</Typography>
                            <Typography variant='body1'>Universiti Teknologi MARA (UiTM), Shah Alam</Typography>
                            <Typography variant='body1'>2023/Present</Typography>
                            <br />
                            <Typography variant='h6'>Bachelor of Intelligent Systems Engineering</Typography>
                            <Typography variant='body1'>Universiti Teknologi MARA (UiTM), Shah Alam</Typography>
                            <Typography variant='body1'>2020/2023</Typography>
                            <Typography variant='body1'><b>CGPA: 3.51/4.00</b></Typography>
                            <br />
                            <Typography variant='h6'>Diploma in Computer Science</Typography>
                            <Typography variant='body1'>Universiti Teknologi MARA (UiTM), Shah Alam</Typography>
                            <Typography variant='body1'>2017/2019</Typography>
                        </Box>
                    </SplideSlide>
                    <SplideSlide>
                        <Box sx={{ 
                                marginLeft:  {
                                    xs: 2,
                                    sm: 10,
                                    md: 10,
                                },
                            }}>
                            <Typography variant='h5'>Certificate</Typography>
                            <Typography variant='h6'>PHP Essential Training</Typography>
                            <Typography variant='body1'>Linked In Learning</Typography>
                            <br />
                            <Typography variant='h6'>Explore React.js Development</Typography>
                            <Typography variant='body1'>Linked In Learning</Typography>
                            <br />
                            <Typography variant='h6'>Azure AI Fundamentals</Typography>
                            <Typography variant='body1'>Microsoft Certified</Typography>
                            <br />
                            <Typography variant='h6'>The Data Scientist's Toolbox</Typography>
                            <Typography variant='body1'>Coursera</Typography>
                        </Box>
                    </SplideSlide>
                    <SplideSlide>
                        <Box sx={{ 
                                marginLeft:  {
                                    xs: 2,
                                    sm: 10,
                                    md: 10,
                                },
                            }}>
                            <Typography variant='h5'>Programning Language</Typography>
                            <Typography variant='h6'>Basic</Typography>
                            <Typography variant='body1'>MySQL, C++</Typography>
                            <br />
                            <Typography variant='h6'>Intermediate</Typography>
                            <Typography variant='body1'>Java, Python, JavaScript, PHP, React.js</Typography>
                        </Box>
                    </SplideSlide>
                </Splide>
            </Box>
        </Grid>
    )
}

