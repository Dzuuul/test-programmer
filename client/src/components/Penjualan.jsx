import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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

export default function Penjualan() {
  const [tglfaktur, setTglFaktur] = React.useState(null);
  const [noFaktur, setNoFaktur] = React.useState(null);
  const [namaKonsumen, setNamaKonsumen] = React.useState(null);
  const [kodeBarang, setKodeBarang] = React.useState(null);
  const [jumlah, setJumlah] = React.useState(null);
  const [hargaSatuan, setHargaSatuan] = React.useState(null);
  const [hargaTotal, setHargaTotal] = React.useState(null);
  const [penjualan, setPenjualan] = React.useState([]);
  const [idDelete, setIdDelete] = React.useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    const penjualan = {
      tglfaktur,
      noFaktur,
      namaKonsumen,
      kodeBarang,
      jumlah,
      hargaSatuan,
      hargaTotal,
    };
    console.log(penjualan);

    fetch("http://localhost:8080/penjualan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(penjualan),
    });
  };

  const handleDelete = (id) => {
    setIdDelete(id);
  };

  // const deleteById = React.useMutation(async (id) => {
  //   try {
  //     fetch("http://localhost:8080/penjualan/" + id, {
  //       method: "DELETE",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(penjualan),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  const deleteById = (id) => {
    fetch("http://localhost:8080/penjualan/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(penjualan),
    });
  };

  React.useEffect(() => {
    deleteById(idDelete);
  }, []);

  React.useEffect(() => {
    fetch("http://localhost:8080/penjualan")
      .then((res) => res.json())
      .then((result) => {
        setPenjualan(result);
      });
  }, []);

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
              Tambah Penjualan
            </Typography>
            <TextField
              id="outlined-basic"
              label="Tgl Faktur"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={tglfaktur}
              onChange={(e) => setTglFaktur(e.target.value)}
            />
            <TextField
              type="number"
              id="outlined-basic"
              label="No Faktur"
              variant="outlined"
              value={noFaktur}
              onChange={(e) => setNoFaktur(e.target.value)}
            />
            <TextField
              type="text"
              id="outlined-basic"
              label="Nama Konsumen"
              variant="outlined"
              value={namaKonsumen}
              onChange={(e) => setNamaKonsumen(e.target.value)}
            />
            <TextField
              type="number"
              id="outlined-basic"
              label="Kode Barang"
              variant="outlined"
              value={kodeBarang}
              onChange={(e) => setKodeBarang(e.target.value)}
            />
            <TextField
              type="number"
              id="outlined-basic"
              label="Jumlah"
              variant="outlined"
              value={jumlah}
              onChange={(e) => setJumlah(e.target.value)}
            />
            <TextField
              type="number"
              id="outlined-basic"
              label="Harga Satuan"
              variant="outlined"
              value={hargaSatuan}
              onChange={(e) => setHargaSatuan(e.target.value)}
            />
            <TextField
              type="number"
              id="outlined-basic"
              label="Harga Total"
              variant="outlined"
              value={hargaTotal}
              onChange={(e) => setHargaTotal(e.target.value)}
            />
            <Box sx={{ mt: 5 }}>
              <Button
                onClick={handleClick}
                sx={{ mt: 5 }}
                variant="contained"
                color="success"
                endIcon={<SendIcon />}
              >
                Submit Penjualan
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      <Box>
        <Typography variant="h5" gutterBottom>
          Tabel Data Penjualan
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="center">Tgl Faktur</StyledTableCell>
                <StyledTableCell align="center">No Faktur</StyledTableCell>
                <StyledTableCell align="center">Nama Konsumen</StyledTableCell>
                <StyledTableCell align="center">Kode Barang</StyledTableCell>
                <StyledTableCell align="center">Jumlah</StyledTableCell>
                <StyledTableCell align="center">Harga Satuan</StyledTableCell>
                <StyledTableCell align="center">Harga Total</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {penjualan.map((row) => (
                <StyledTableRow key={penjualan.tglFaktur}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.tglFaktur}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.noFaktur}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.namaKonsumen}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.kodeBarang}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.jumlah}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.hargaSatuan}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.hargaTotal}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Box sx={{ display: "flex" }} gap={2}>
                      <EditIcon />
                      <Button
                        onClick={() => {
                          handleDelete(row.id);
                        }}
                      >
                        <DeleteIcon />
                      </Button>
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
