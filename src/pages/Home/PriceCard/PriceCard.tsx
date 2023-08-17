import { Button, Divider } from '@mui/material';
import './style.scss';

interface PriceCardProps {
  photo: string;
  title: string;
  description: string;
  bonusDescription: string | null;
  price: number;
  url: string;
}

function PriceCard({
  photo,
  title,
  description,
  bonusDescription,
  price,
  url,
}: PriceCardProps) {
  return (
    <div className="price-card">
      <img src={photo} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {bonusDescription && (
        <p className="bonus-description">{bonusDescription}</p>
      )}
      <Divider sx={{ width: '60%', marginBottom: '1rem' }} />
      <p>
        {' '}
        <span style={{ fontWeight: '700' }}>{price}€</span> / séance
      </p>
      <Button
        variant="contained"
        href={url}
        sx={{ width: '90%', marginBottom: '1rem' }}
      >
        DECOUVRIR LE PROGRAMME
      </Button>
    </div>
  );
}

export default PriceCard;
