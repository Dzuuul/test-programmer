package com.tes.transaksi.controller;

import com.tes.transaksi.model.Penjualan;
import com.tes.transaksi.service.PenjualanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/penjualan")
@CrossOrigin
public class PenjualanController {
    @Autowired
    private PenjualanService penjualanService;

    @PostMapping()
    public String add(@RequestBody Penjualan penjualan){
        penjualanService.savePenjualan(penjualan);
        return "Data penjualan berhasil ditambahkan!";
    }

    @GetMapping()
    public List<Penjualan> getAllPenjualan() {
        return penjualanService.getAllPenjualan();
    }

    @GetMapping("/{id}")
    public Penjualan getPenjualanById(@PathVariable Long id) {
        return penjualanService.getPenjualanById(id);
    }

    @DeleteMapping("/{id}")
    public String deletePenjualan(@PathVariable Long id) {
        penjualanService.deletePenjualanById(id);
        return "Data berhasil dihapus!";
    }

}
