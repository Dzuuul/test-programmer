package com.tes.transaksi.service;

import com.tes.transaksi.model.MasterBarang;

import java.util.List;

public interface MasterBarangService {
    public MasterBarang saveMasterBarang(MasterBarang masterBarang);
    public List<MasterBarang> getAllBarang();
    public MasterBarang getMasterBarangById(Long id);
    public void deleteMasterBarangById(Long id);
}
