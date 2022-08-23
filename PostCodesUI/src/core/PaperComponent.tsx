import { Box, Paper, Typography } from '@mui/material'

export default function PaperComponent(props: any) {
    return (
        <><Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: '48vh',
                    height: '20vh',
                    marginLeft: '2vh',
                    marginTop: '4vh',
                },
                background: 'white',
                borderRadius: '10px',
                marginTop: '1vh',
                width: '155vh',
                height: '55vh'
            }}>
            <Paper elevation={3} ><Typography sx={{ p: 5 }}><b>Postcode :</b> {props.details.postcode}</Typography></Paper>
            <Paper elevation={3} ><Typography sx={{ p: 5 }}><b>Country :</b>{props.details.country}</Typography></Paper>
            <Paper elevation={3} ><Typography sx={{ p: 5 }}><b>Region :</b> {props.details.region}</Typography></Paper>
            <Paper elevation={3} ><Typography sx={{ p: 5 }}><b>Admin District :</b> {props.details.adminDistrict}</Typography></Paper>
            <Paper elevation={3} ><Typography sx={{ p: 5 }}><b>Parliamentary Constituency : :</b> {props.details.parliamentaryConstituency}</Typography></Paper>
            <Paper elevation={3} ><Typography sx={{ p: 5 }}><b>Area :</b> {props.details.area}</Typography></Paper>
        </Box></>
    )
}
