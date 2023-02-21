package com.tes.transaksi.controller;

import com.tes.transaksi.model.MasterBarang;
import com.tes.transaksi.service.MasterBarangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/barang")
@CrossOrigin
public class MasterBarangController {
    @Autowired
    private MasterBarangService masterBarangService;

    @PostMapping()
    public String add(@RequestBody MasterBarang masterBarang){
        masterBarangService.saveMasterBarang(masterBarang);
        return "Barang berhasil ditambahkan!";
    }

    @GetMapping()
    public List<MasterBarang> getAllBarang() {
        return masterBarangService.getAllBarang();
    }

    @GetMapping("/{id}")
    public MasterBarang getMasterBarangById(@PathVariable Long id) {
        return masterBarangService.getMasterBarangById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteMasterBarang(@PathVariable Long id) {
        masterBarangService.deleteMasterBarangById(id);
        return "Barang berhasil dihapus!";
    }
}
