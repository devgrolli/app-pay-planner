import SupermarketIcon from '@mui/icons-material/Store';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import TvIcon from '@mui/icons-material/Tv';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BuildIcon from '@mui/icons-material/Build';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';

interface Option {
  label: string;
  value: string;
  icon: JSX.Element;
}

const iconMap: Record<string, JSX.Element> = {
  home: <HomeIcon />,
  education: <SchoolIcon />,
  electronics: <TvIcon />,
  leisure: <LocalAirportIcon />,
  restaurant: <RestaurantMenuIcon />,
  health: <LocalHospitalIcon />,
  service: <BuildIcon />,
  supermarket: <SupermarketIcon />,
  transport: <DirectionsBusIcon />,
  clothing: <CheckroomIcon />,
  travel: <FlightTakeoffIcon />,
  financing: <MonetizationOnIcon />,
  others: <MoreHorizIcon />,
};

export const optionsCategory: Option[] = [
  { label: "Casa", value: "home", icon: iconMap.home },
  { label: "Educação", value: "education", icon: iconMap.education },
  { label: "Eletrônicos", value: "electronics", icon: iconMap.electronics },
  { label: "Lazer", value: "leisure", icon: iconMap.leisure },
  { label: "Restaurante", value: "restaurant", icon: iconMap.restaurant },
  { label: "Saúde", value: "health", icon: iconMap.health },
  { label: "Serviço", value: "service", icon: iconMap.service },
  { label: "Supermercado", value: "supermarket", icon: iconMap.supermarket },
  { label: "Transporte", value: "transport", icon: iconMap.transport },
  { label: "Vestuário", value: "clothing", icon: iconMap.clothing },
  { label: "Viagem", value: "travel", icon: iconMap.travel },
  { label: "Financiamento", value: "financing", icon: iconMap.financing },
  { label: "Outros", value: "others", icon: iconMap.others },
];