import { Button, Divider } from '@mui/material';
import './style.scss';

interface PriceCardProps {
  photo: string;
  title: string;
  descritpion: string;
  price: number;
  url: string;
}

function PriceCard({ ...props }): PriceCardProps {
  const { photo, title, descritpion, price, url } = props;
  return (
    <div className="price-card">
      <img src={photo} alt={title} />
      <h3>{title}</h3>
      <p>{descritpion}</p>
      <Divider />
      <p>{price}€ / séance</p>
      <Divider />
      <Button variant="contained">DECOUVRIR LE PROGRAMME</Button>
    </div>
  );
}

export default PriceCard;
