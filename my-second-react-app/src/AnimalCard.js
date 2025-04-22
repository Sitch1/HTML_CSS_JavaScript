import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AnimalCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://media.os.fressnapf.com/cms/2021/05/gruener_leguan_1200x527.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Die Leguane bilden eine Familie der Schuppenkriechtiere. Sie kommen auf dem amerikanischen Doppelkontinent vom Süden der USA bis nach Paraguay, auf den Karibischen Inseln, den Galápagos-Inseln und den Fidschi-Inseln vor.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}