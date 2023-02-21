import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Barang() {
  const [kodeBarang, setKodeBarang] = React.useState(null);
  const [namaBarang, setNamaBarang] = React.useState("");
  const [hargaJual, setHargaJual] = React.useState(null);
  const [hargaBeli, setHargaBeli] = React.useState(null);
  const [satuan, setSatuan] = React.useState("");
  const [kategori, setKategori] = React.useState("");
  const [barang, setBarang] = React.useState([]);
  const [clicked, setClicked] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const barang = {
      kodeBarang,
      namaBarang,
      hargaJual,
      hargaBeli,
      satuan,
      kategori,
    };
    console.log(barang);

    fetch("http://localhost:8080/barang", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(barang),
    });

    setClicked(true);
  };

  React.useEffect(() => {
    fetch("http://localhost:8080/barang")
      .then((res) => res.json())
      .then((result) => {
        setBarang(result);
      });
  },[]);

  return (
    <>
      <Box sx={{ display: "flex", ps: 3, pb: 3 }}>
        <form noValidate autoComplete="off">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h5" gutterBottom>
              Tambah Barang
            </Typography>
            <TextField
              type="number"
              id="outlined-basic"
              label="Kode Barang"
              variant="outlined"
              value={kodeBarang}
              onChange={(e) => setKodeBarang(e.target.value)}
            />
            <TextField
              type="text"
              id="outlined-basic"
              label="Nama Barang"
              variant="outlined"
              value={namaBarang}
              onChange={(e) => setNamaBarang(e.target.value)}
            />
            <TextField
              type="number"
              id="outlined-basic"
              label="Harga Jual"
              variant="outlined"
              value={hargaJual}
              onChange={(e) => setHargaJual(e.target.value)}
            />
            <TextField
              type="number"
              id="outlined-basic"
              label="Harga Beli"
              variant="outlined"
              value={hargaBeli}
              onChange={(e) => setHargaBeli(e.target.value)}
            />
            <TextField
              type="text"
              id="outlined-basic"
              label="Satuan"
              variant="outlined"
              value={satuan}
              onChange={(e) => setSatuan(e.target.value)}
            />
            <TextField
              type="text"
              id="outlined-basic"
              label="Kategori"
              variant="outlined"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
            />
            <Box sx={{ mt: 5 }}>
              <Button
                onClick={handleClick}
                sx={{ mt: 5 }}
                variant="contained"
                color="success"
                endIcon={<SendIcon />}
              >
                Submit Barang
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      <Box>
        <Typography variant="h5" gutterBottom>
          Tabel Barang
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Kode Barang</StyledTableCell>
                <StyledTableCell align="right">Nama Barang</StyledTableCell>
                <StyledTableCell align="right">
                  Harga Jual&nbsp;(Rp)
                </StyledTableCell>
                <StyledTableCell align="right">
                  Harga Beli&nbsp;(Rp)
                </StyledTableCell>
                <StyledTableCell align="right">Satuan</StyledTableCell>
                <StyledTableCell align="right">Kategori</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {barang.map((tr) => (
                <StyledTableRow key={JSON.stringify(tr?.kodeBarang)}>
                  <StyledTableCell component="th" scope="row">
                    {tr?.kodeBarang}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {tr?.namaBarang}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {tr?.hargaJual}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {tr?.hargaBeli}
                  </StyledTableCell>
                  <StyledTableCell align="right">{tr?.satuan}</StyledTableCell>
                  <StyledTableCell align="right">
                    {tr?.kategori}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Box sx={{ display: "flex" }} gap={2}>
                      <EditIcon />
                      <DeleteIcon />
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
