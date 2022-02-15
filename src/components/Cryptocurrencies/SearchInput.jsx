import { Box, TextField } from "@mui/material";

function SearchInput({ values }) {
   const { searchTerm, setSearchTerm } = values;

   return (
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
         <TextField
            placeholder="Search coin..."
            type="search"
            variant="outlined"
            sx={{ width: "250px" }}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
         />
      </Box>
   );
}

export default SearchInput;
