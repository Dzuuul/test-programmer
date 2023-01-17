import { Box } from "@mui/system";
import AppBar from "./components/AppBar";
import Barang from "./components/Barang";
import Penjualan from "./components/Penjualan";


function App() {
  return (
    <Box>
      <AppBar />
      <Box sx={{ mx: "5rem" }}>
        <Box sx={{ display: "flex", px: 3, pb: 5 }}>
          <Barang />
        </Box>
        <Box sx={{ display: "flex", px: 3 }}>
          <Penjualan />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
