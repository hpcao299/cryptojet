import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import { useGetCryptosQuery } from "../../services/cryptoApi";

function SelectCategory({ setNewsCategory }) {
   const { data: cryptosList } = useGetCryptosQuery(100);

   return (
      <FormControl sx={{ m: 1, minWidth: 120 }}>
         <Select defaultValue="Cryptocurrency" onChange={e => setNewsCategory(e.target.value)}>
            <MenuItem value="Cryptocurrency">Cryptocurrency</MenuItem>
            {cryptosList?.data?.coins.map(coin => (
               <MenuItem key={coin.uuid} value={coin.name}>
                  {coin.name}
               </MenuItem>
            ))}
         </Select>
         <FormHelperText>Choose news category</FormHelperText>
      </FormControl>
   );
}

export default SelectCategory;
